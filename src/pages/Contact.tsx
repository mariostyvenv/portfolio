import CustomInput from "../components/CustomInput";
import LaunchOutlinedIcon from '@mui/icons-material/LaunchOutlined';
import ReCAPTCHA from "react-google-recaptcha";

import { btnFormsRender, cardsContact } from "../data/ContactData";
import TitleBar from "../components/TitleBar";
import { FormEvent, useRef, useState } from "react";
import axios from "axios";
import { IButtonForm } from "../interfaces/IContact";
import { EBtnForm } from "../enums/EContacts";
import React from "react";
export default function Contact() {

    const getBtnForm = (value: EBtnForm): IButtonForm => btnFormsRender[value];
    const recaptchaRef = React.useRef<ReCAPTCHA>(null);
    
    const [btnState, setBtnState] = useState<IButtonForm>(getBtnForm(EBtnForm.INIT));
    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (btnState.prevent) return;

        const name = (e.currentTarget.elements.namedItem('name') as HTMLInputElement);
        const email = (e.currentTarget.elements.namedItem('email') as HTMLInputElement);
        const phone = (e.currentTarget.elements.namedItem('phone') as HTMLInputElement);
        const message = (e.currentTarget.elements.namedItem('message') as HTMLInputElement);
        const valueRecaptcha = recaptchaRef.current?.getValue()

        if(valueRecaptcha === '' || valueRecaptcha === null){
            setBtnState(getBtnForm(EBtnForm.RECAPTCHA))
            setTimeout(() => setBtnState(getBtnForm(EBtnForm.INIT)), 1000)
            return;
        }

        try {
            setBtnState(getBtnForm(EBtnForm.LOADING))
            await axios.post(`/api/submit`, {
                name: name.value,
                email: email.value,
                phone: phone.value,
                message: message.value,
                recaptcha: valueRecaptcha
            });
            recaptchaRef.current?.reset()
            name.value = ''
            email.value = ''
            phone.value = ''
            message.value = ''
            setBtnState(getBtnForm(EBtnForm.SEND))
            setTimeout(() => setBtnState(getBtnForm(EBtnForm.INIT)), 1000)
        } catch (error) {
            setBtnState(getBtnForm(EBtnForm.ERROR))
            setTimeout(() => setBtnState(getBtnForm(EBtnForm.INIT)), 1000)
        }
    }

    return (
        <div className="p-6 md:p-12 w-full bg-[#1E1E1E] mt-10 md:mt-16 rounded-[20px]">
            <TitleBar title="Contacto" />
            <div className="flex mt-10 flex-col space-y-4 lg:flex-row lg:space-x-4 lg:space-y-0">
                <div className="w-full lg:w-2/5">
                    <div className="flex flex-col space-y-4">
                        {cardsContact.map((item, index) => (
                            <div key={index} className="bg-[#222425] w-full rounded-xl p-4">

                                <div className="flex items-center">
                                    <a href={item.url} target="_blank" rel="noopener noreferrer">
                                        <img src={item.icon} className="w-10" />
                                    </a>
                                    <div className="pl-4">
                                        <a href={item.url} target="_blank" rel="noopener noreferrer">
                                            <div className="flex items-center">
                                                <p className="text-white font-bold text-lg pr-1">{item.title}</p>
                                                <LaunchOutlinedIcon className="text-slate-400" fontSize="small" />
                                            </div>
                                        </a>
                                        <p className="text-slate-400">{item.description}</p>
                                    </div>
                                </div>


                            </div>
                        ))}
                    </div>
                </div>
                <div className="w-full lg:w-3/5">
                    <div className="border border-slate-400 rounded-xl p-4 md:p-10">
                        <p className="text-slate-400 text-3xl mb-10">
                            Estoy abierto a escuchar sus<br />
                            <span className="font-bold text-transparent text-3xl bg-clip-text bg-gradient-to-r from-[#FA5252] to-[#DD2476]">propuestas y proyectos.</span>
                        </p>
                        <form onSubmit={handleSubmit}>
                            <CustomInput name="name" label="Nombre *" />
                            <CustomInput name="email" label="Email *" type="email" />
                            <CustomInput name="phone" label="Celular *" />
                            <CustomInput name="message" label="Mensaje *" />
                            <div className="origin-top-left scale-[0.8] md:scale-100">
                                <ReCAPTCHA
                                    sitekey="6LfcAwkiAAAAAHjiBnb4JwIJQi-kxUIlihran6Kz"
                                    ref={recaptchaRef}
                                    theme="dark"
                                />,
                            </div>
                            <button type="submit" className="flex bg-gradient-to-r from-[#FA5252] to-[#DD2476] py-2 px-4 rounded mb-2 mr-0 md:mr-5 justify-center">
                                {btnState.icon}
                                <p className="text-white font-bold">{btnState.text}</p>
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}