import LogoMain from "../assets/logomain.webp"
import HouseOutlinedIcon from '@mui/icons-material/HouseOutlined';
import FaceOutlinedIcon from '@mui/icons-material/FaceOutlined';
import BusinessCenterOutlinedIcon from '@mui/icons-material/BusinessCenterOutlined';
import ForwardToInboxOutlinedIcon from '@mui/icons-material/ForwardToInboxOutlined';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import { EPages } from "../enums/EPages";
import { useNavigate, useLocation, Link } from "react-router-dom";
import { useState } from "react";

interface IListNav {
    name: string,
    icon: JSX.Element,
    route: EPages
}

const listNav: IListNav[] = [
    { name: "Home", icon: <HouseOutlinedIcon className="text-white pr-1" />, route: EPages.HOME },
    { name: "About", icon: <FaceOutlinedIcon className="text-white pr-1" />, route: EPages.ABOUT },
    { name: "Projects", icon: <BusinessCenterOutlinedIcon className="text-white pr-1" />, route: EPages.PORTFOLIO },
    { name: "Contact", icon: <ForwardToInboxOutlinedIcon className="text-white pr-1" />, route: EPages.CONTACT }
]


export default function Navbar() {

    const location = useLocation()
    const navigate = useNavigate()
    const [state, setState] = useState<boolean>(false)

    const handleChangeRoute = (page: EPages) => {
        navigate(page)
        setState(false)
    }

    const handleStyleButtom = (listNav: IListNav[], index: number, route: EPages) => {
        if (location.pathname === route) {
            return `flex bg-gradient-to-r from-[#0071E1] to-[#002C88] py-2 px-4 rounded mb-2 w-full justify-center`
        }
        return `flex bg-[#1E1E1E] py-2 px-4 rounded mb-2 w-full justify-center`
    }

    const buttonsNav = listNav.map((value, index) => {
        return (
            <button onClick={() => handleChangeRoute(value.route)} key={index} className={handleStyleButtom(listNav, index, value.route)}>
                {value.icon}
                <p className="text-white font-bold">{value.name}</p>
            </button>
        )
    })

    return (
        <nav className="flex items-center justify-between flex-col md:flex-row">
            <div className="flex justify-between w-full">
                <Link to={EPages.HOME}>
                    <img src={LogoMain} className="h-12" />
                </Link>
                <button className="bg-[#1E1E1E] rounded-full p-3 flex md:hidden" onClick={() => setState(!state)}>
                    {state ? <CloseOutlinedIcon className="text-white" fontSize="medium" /> : <MenuOutlinedIcon className="text-white" fontSize="medium" />}
                </button>
            </div>
            <div className={`md:flex flex-col md:flex-row mt-3 w-full md:w-auto space-x-0 md:space-x-4 ${state ? '' : 'hidden'}`}>
                {buttonsNav}
            </div>
        </nav>
    )
}