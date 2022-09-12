import FotoMain from "../assets/fotomain.png"
import LogoGH from "../assets/github.png"
import LogoLk from "../assets/linkedin.png"
import { Link } from "react-router-dom"

import ForwardToInboxOutlinedIcon from '@mui/icons-material/ForwardToInboxOutlined';

export default function Home() {
    return (
        <div className="flex flex-col md:flex-row pt-10 md:pt-32 justify-between">
            <div className="w-auto md:w-2/5">
                <div className="">
                    <p className="text-white text-5xl md:text-6xl font-bold">
                        ¡Hola! soy,<br />
                        <p className="text-transparent text-5xl md:text-6xl bg-clip-text bg-gradient-to-r from-[#FA5252] to-[#DD2476]">Mario Velandia</p>
                    </p>
                    <p className="text-white text-2xl font-bold pt-4">
                        Desarrollador FullStack con experiencia en
                        Desarrollo Web, Mobile y Backend orientado a
                        Microservicios.
                    </p>
                </div>
                <div className="flex justify-between pt-10">
                    <Link to="/contact" className="flex bg-gradient-to-r from-[#FA5252] to-[#DD2476] py-2 px-4 rounded">
                        <ForwardToInboxOutlinedIcon className="text-white" />
                        <p className="text-white font-extrabold pl-2">Contáctame</p>
                    </Link>
                    <div className="flex flex-row">
                        <a href="https://google.com" target="_blank" rel="noreferrer" className="flex mr-4 bg-gradient-to-r from-[#FA5252] to-[#DD2476] py-1 px-2 rounded items-center">
                            <img src={LogoGH} className="h-6 invert" />
                        </a>
                        <a href="https://google.com" target="_blank" rel="noreferrer" className="flex bg-gradient-to-r from-[#FA5252] to-[#DD2476] py-1 px-2 rounded items-center">
                            <img src={LogoLk} className="h-6 invert" />
                        </a>
                    </div>
                </div>
            </div>
            <img src={FotoMain} className="aspect-auto md:h-96 mx-auto md:mx-0 pt-10 md:pt-0" />
        </div>
    );
}