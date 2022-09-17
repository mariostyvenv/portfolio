import TitleBar from "../components/TitleBar"
import { cards, cardsExperience, cardsStudies } from "../data/AboutData"
import LaunchOutlinedIcon from '@mui/icons-material/LaunchOutlined';
export default function About() {
    const renderCards = cards.map((value, index) => {
        return (
            <div key={index} className="flex border border-slate-400 rounded-xl p-4">
                <div>
                    <img src={value.icon} className="w-10" />
                </div>
                <div className="pl-2 w-full flex flex-col justify-between">
                    <div>
                        <p className="font-semibold text-white text-3xl">{value.title}</p>
                        <p className="text-white leading-6 pt-5">{value.description}</p>
                    </div>

                    <div className="grid grid-cols-2 pt-2">
                        {value.items.map((item, index) => {
                            return (
                                <div key={index} className="flex items-center pt-2 truncate pr-1">
                                    <img src={item.icon} className="w-10 pr-2" />
                                    <p className="text-white text-sm truncate">{item.name}</p>
                                </div>
                            )
                        })}
                    </div>

                </div>
            </div>
        )
    })

    const renderCardsExperience = cardsExperience.map((value, index) => {
        return (
            <div key={index} className="border border-slate-400 rounded-xl p-4">
                <div className="flex justify-between pb-4">
                    <p className="text-slate-400">{value.date}</p>
                    <a href={value.url} target="_blank" rel="noreferrer" className="flex text-slate-400 items-center space-x-1">
                        <img src={value.icon} className="w-20" />
                        <LaunchOutlinedIcon fontSize="small" />
                    </a>
                </div>
                <p className="text-white font-bold">{value.title}</p>
                <ul className="list-disc pl-4 pt-3">
                    {value.items.map((item, key) => (<div key={key}>{item}</div>))}
                </ul>
            </div>
        )
    })

    const renderCardsStudies = cardsStudies.map((value, index) => {
        return (
            <div key={index} className="border border-slate-400 rounded-xl p-4">
                <div className="flex justify-between">
                    <p className="text-slate-400">{value.date}</p>
                    <a href={value.url} target="_blank" rel="noreferrer" className="flex text-slate-400 items-center space-x-1">
                        <img src={value.icon} className="w-20" />
                        <LaunchOutlinedIcon fontSize="small" />
                    </a>
                </div>
                <p className="text-white font-bold">{value.title}</p>
            </div>
        )
    })

    return (
        <div className="p-6 md:p-12 w-full bg-[#1E1E1E] mt-10 md:mt-16 rounded-[20px]">
            <TitleBar title="Habilidades" />
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 pt-10">
                {renderCards}
            </div>
            <TitleBar title="Experiencia" className="mt-10"/>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 pt-10">
                {renderCardsExperience}
            </div>
            <TitleBar title="Estudios" className="mt-10"/>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 pt-10">
                {renderCardsStudies}
            </div>
        </div>
    );
}