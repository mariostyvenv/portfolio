import CustomInput from "../components/CustomInput";
import ForwardToInboxOutlinedIcon from '@mui/icons-material/ForwardToInboxOutlined';

export default function Contact() {
    return (
        <div className="p-6 md:p-12 w-full bg-[#1E1E1E] mt-10 md:mt-16 rounded-[20px]">
            <div className="flex items-center">
                <p className="text-4xl text-white font-semibold pr-3">Contacto</p>
                <div className="bg-gradient-to-r from-[#FA5252] to-[#DD2476] h-1 w-24 rounded"></div>
            </div>
            <div className="flex mt-10">
                <div className="w-2/5 pr-5">
                    <div className="bg-[#222425] w-full h-20 rounded-xl">

                    </div>
                </div>
                <div className="w-3/5">
                    <div className="border border-slate-400 rounded-xl p-10">
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