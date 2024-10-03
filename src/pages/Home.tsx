import FotoMain from "../assets/fotomain.webp"
import LogoGH from "../assets/github.webp"
import LogoLk from "../assets/linkedin.webp"
import { Link } from "react-router-dom"
import ReactGA from "react-ga4";

import ForwardToInboxOutlinedIcon from '@mui/icons-material/ForwardToInboxOutlined';

export default function Home() {

    ReactGA.event({category: "mariovelandia.co",action: "Home",label: "Home" });
    return (
        <div className="flex flex-col md:flex-row pt-10 md:pt-32 justify-between">
            <div className="w-auto md:w-2/5">
                <div className="">
                    <p className="text-white text-5xl md:text-6xl font-bold">
                        Hello! I am<br />
                        <span className="text-transparent text-5xl md:text-6xl bg-clip-text bg-gradient-to-r from-[#0071E1] to-[#002C88]">Mario Velandia</span>
                    </p>
                    <p className="text-white text-xl md:text-2xl font-bold pt-4">
                    FullStack Developer with experience in Web, Mobile, and Backend Development focused on Microservices.
                    </p>
                </div>
                <div className="flex justify-between pt-10">
                    <Link to="/contact" className="flex bg-gradient-to-r from-[#0071E1] to-[#002C88] py-2 px-4 rounded">
                        <ForwardToInboxOutlinedIcon className="text-white" />
                        <p className="text-white font-extrabold pl-2">Contact me</p>
                    </Link>
                    <div className="flex flex-row">
                        <a href="https://github.com/mariovelandiaco" target="_blank" rel="noreferrer" className="flex mr-4 bg-gradient-to-r from-[#0071E1] to-[#002C88] py-1 px-2 rounded items-center">
                            <img src={LogoGH} className="h-6 invert" />
                        </a>
                        <a href="https://www.linkedin.com/in/mariovelandiaco" target="_blank" rel="noreferrer" className="flex bg-gradient-to-r from-[#0071E1] to-[#002C88] py-1 px-2 rounded items-center">
                            <img src={LogoLk} className="h-6 invert" />
                        </a>
                    </div>
                </div>
            </div>
            <img src={FotoMain} className="aspect-auto md:h-96 mx-auto md:mx-0 pt-10 md:pt-0" />
        </div>
    );
}