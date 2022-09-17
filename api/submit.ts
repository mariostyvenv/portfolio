import { NextApiRequest, NextApiResponse } from 'next';
import axios from "axios"

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

async function saveContact(data: ISubmit) {
    await axios.post(`https://api.trello.com/1/cards/`, {
        name: data.name,
        desc: `Email: ${data.email}\n Celular: ${data.phone}\n Mensaje: ${data.message}`
    }, {
        params: {
            idList: process.env.LIST,
            key: process.env.KEY,
            token: process.env.TOKEN
        }
    });
}

async function validateCaptcha(recaptchaKey: string, code: string): Promise<boolean> {
    try {
        const res = await axios.post(`https://www.google.com/recaptcha/api/siteverify?secret=${recaptchaKey}&response=${code}`)
        const validate = res.data as IResponseCaptcha;
        return validate.success;
    } catch (error) {
        console.log(error);
        return false;
    }

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
        
        
        const resCaptcha:boolean = await validateCaptcha(process.env.RECAPTCHA_KEY!, submit.recaptcha)
        if(!resCaptcha) return response.status(400).json({ message: "Invalid Captcha" });

        try {
            await saveContact(submit);
            return response.status(200).json({ message: "Success" });
        } catch (error) {
            return response.status(400).json({ message: "An error occurred while saving the message" });
        }
    }

    return response.status(400).json({ message: "All fields are required" });
}