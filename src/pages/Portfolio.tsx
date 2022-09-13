import LogoGithub from "../assets/github.png"
import LogoKanban from "../assets/p-kanban.png"

export default function Portfolio() {

    interface ICardPortFolio {
        area: string,
        title: string,
        icon: string,
        url: string
    }

    const cardsPortfolio: ICardPortFolio[] = [
        {
            area: "Frontend",
            title: "Kanban Vanilla",
            icon: LogoKanban,
            url: "https://github.com/mariostyvenv/kanban-vanilla"
        }
    ]

    return (
        <div className="p-6 md:p-12 w-full bg-[#1E1E1E] mt-10 md:mt-16 rounded-[20px]">
            <div className="flex items-center">
                <p className="text-4xl text-white font-semibold pr-3">Portafolio</p>
                <div className="bg-gradient-to-r from-[#FA5252] to-[#DD2476] h-1 w-24 rounded"></div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 pt-10">
                {cardsPortfolio.map((item, index) => (
                    <a key={index} href={item.url} target="_blank" rel="noreferrer">
                        <div className="border border-slate-400 rounded-xl p-4">
                            <img className="w-full h-40 rounded-xl" src={item.icon} />
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