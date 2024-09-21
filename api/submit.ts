import { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';
import nodemailer from 'nodemailer';

interface ISubmit {
    name: string,
    email: string,
    phone: string,
    message: string,
    recaptcha: string
}

interface IResponseCaptcha {
    success: boolean,
    challenge_ts: string,
    hostname: string
}

async function validateCaptcha(recaptchaKey: string, code: string): Promise<boolean> {
    try {
        const res = await axios.post(`https://www.google.com/recaptcha/api/siteverify?secret=${recaptchaKey}&response=${code}`);
        const validate = res.data as IResponseCaptcha;
        return validate.success;
    } catch (error) {
        console.log(error);
        return false;
    }
}

async function sendEmail(submit: ISubmit) {
    const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: 465,
        secure: true,
        auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASS
        }
    });

    const mailOptions = {
        from: `"${submit.name}" <${submit.email}>`,
        to: process.env.CONTACT_EMAIL,
        subject: `Nuevo mensaje de contacto de ${submit.name}`,
        text: `Nombre: ${submit.name}\nEmail: ${submit.email}\nCelular: ${submit.phone}\nMensaje: ${submit.message}`
    };

    await transporter.sendMail(mailOptions);
}

export default async function handler(request: NextApiRequest, response: NextApiResponse) {
    const regex = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    const submit = { ...request.body } as ISubmit;
    if (submit.name != undefined && submit.email != undefined && submit.phone != undefined && submit.message != undefined) {

        if (submit.name.length <= 0) return response.status(400).json({ message: "The name field is required" });
        if (submit.email.length <= 0) return response.status(400).json({ message: "The email field is required" });
        if (submit.phone.length <= 0) return response.status(400).json({ message: "The phone field is required" });
        if (submit.message.length <= 0) return response.status(400).json({ message: "The message field is required" });
        if (submit.recaptcha.length <= 0) return response.status(400).json({ message: "The recaptcha field is required" });
        if (!regex.test(submit.email)) return response.status(400).json({ message: "The email format is incorrect" });
        
        const resCaptcha: boolean = await validateCaptcha(process.env.RECAPTCHA_KEY!, submit.recaptcha);
        if (!resCaptcha) return response.status(400).json({ message: "Invalid Captcha" });

        try {
            await sendEmail(submit);
            return response.status(200).json({ message: "Success" });
        } catch (error) {
            console.log(error);
            return response.status(400).json({ message: "An error occurred while saving the message or sending the email" });
        }
    }

    return response.status(400).json({ message: "All fields are required" });
}
