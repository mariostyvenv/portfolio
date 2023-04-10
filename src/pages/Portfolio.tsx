import LogoGithub from "../assets/github.png"
import TitleBar from "../components/TitleBar";
import { cardsPortfolio } from "../data/PortfolioData";
import ReactGA from "react-ga4";

export default function Portfolio() {
    ReactGA.event({category: "mariovelandia.co",action: "Portfolio",label: "Portfolio" });
    return (
        <div className="p-6 md:p-12 w-full bg-[#1E1E1E] mt-10 md:mt-16 rounded-[20px]">
            <TitleBar title="Portafolio"/>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 pt-10">
                {cardsPortfolio.map((item, index) => (
                    <a key={index} href={item.url} target="_blank" rel="noreferrer">
                        <div className="border border-slate-400 rounded-xl p-4">
                            <img className="aspect-video w-full rounded-xl" src={item.icon} />
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-slate-400 text-xs pt-2">{item.area}</p>
                                    <p className="text-white text-lg font-semibold">{item.title}</p>
                                </div>
                                <img className="w-8 invert" src={LogoGithub} />
                            </div>
                        </div>
                    </a>
                ))}
            </div>
        </div>
    );
}