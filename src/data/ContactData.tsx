import LogoMessage from "../assets/message.webp"
import Linkedin from "../assets/linkedinn.webp"
import LogoMaps from "../assets/maps.webp"
import { IButtonForm, ICardContact } from "../interfaces/IContact"
import CheckOutlinedIcon from '@mui/icons-material/CheckOutlined';
import WarningAmberOutlinedIcon from '@mui/icons-material/WarningAmberOutlined';
import ForwardToInboxOutlinedIcon from '@mui/icons-material/ForwardToInboxOutlined';
import CachedIcon from '@mui/icons-material/Cached';

const cardsContact: ICardContact[] = [
    {
        icon: Linkedin,
        title: "Linkedin",
        description: "mariovelandiaco",
        url:"https://www.linkedin.com/in/mariovelandiaco/"
    },
    {
        icon: LogoMessage,
        title: "Email",
        description: "mariovelandia.co@gmail.com",
        url:"mailto:mariovelandia.co@gmail.com"
    },
    {
        icon: LogoMaps,
        title: "Location",
        description: "Medellín - Colombia",
        url:"mailto:mariovelandia.co@gmail.com"
    },
]

const btnFormsRender: IButtonForm[] = [
    {
        icon: <ForwardToInboxOutlinedIcon className="text-white mr-1" />,
        text: 'Send',
        prevent: false
    },
    {
        icon: <CachedIcon className="text-white mr-1 animate-spin" />,
        text: 'Loading...',
        prevent: true
    },
    {
        icon: <CheckOutlinedIcon className="text-white mr-1" />,
        text: 'Sent',
        prevent: true
    },
    {
        icon: <WarningAmberOutlinedIcon className="text-white mr-1" />,
        text: 'Error',
        prevent: true
    },
    {
        icon: <WarningAmberOutlinedIcon className="text-white mr-1" />,
        text: 'Invalid Recaptcha',
        prevent: true
    },
]

export { cardsContact, btnFormsRender }