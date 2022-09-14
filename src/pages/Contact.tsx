import CustomInput from "../components/CustomInput";
import ForwardToInboxOutlinedIcon from '@mui/icons-material/ForwardToInboxOutlined';
import LaunchOutlinedIcon from '@mui/icons-material/LaunchOutlined';
import { cardsContact } from "../data/ContactData";
import TitleBar from "../components/TitleBar";
export default function Contact() {
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
                            <p className="font-bold text-transparent text-3xl bg-clip-text bg-gradient-to-r from-[#FA5252] to-[#DD2476]">propuestas y proyectos.</p>
                        </p>
                        <CustomInput label="Nombre *" />
                        <CustomInput label="Email *" />
                        <CustomInput label="Celular *" />
                        <CustomInput label="Mensaje *" />
                        <button className="flex bg-gradient-to-r from-[#FA5252] to-[#DD2476] py-2 px-4 rounded mb-2 mr-0 md:mr-5 justify-center">
                            <ForwardToInboxOutlinedIcon className="text-white pr-1" />
                            <p className="text-white font-bold">Enviar</p>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}