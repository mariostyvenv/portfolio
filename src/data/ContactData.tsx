import LogoMessage from "../assets/message.png"
import LogoMaps from "../assets/maps.png"
import LogoWhatsapp from "../assets/whatsapp.png"
import { IButtonForm, ICardContact } from "../interfaces/IContact"
import CheckOutlinedIcon from '@mui/icons-material/CheckOutlined';
import WarningAmberOutlinedIcon from '@mui/icons-material/WarningAmberOutlined';
import ForwardToInboxOutlinedIcon from '@mui/icons-material/ForwardToInboxOutlined';
import CachedIcon from '@mui/icons-material/Cached';

const cardsContact: ICardContact[] = [
    {
        icon: LogoMessage,
        title: "Email",
        description: "mariostyvenv@gmail.com",
        url:"mailto:mariostyvenv@gmail.com"
    },
    {
        icon: LogoWhatsapp,
        title: "Celular",
        description: "(57) 3059237357",
        url:"https://wa.me/573059237357"
    },
    {
        icon: LogoMaps,
        title: "Ubicación",
        description: "Medellín - Colombia",
        url:"mailto:mariostyvenv@gmail.com"
    },
]

const btnFormsRender: IButtonForm[] = [
    {
        icon: <ForwardToInboxOutlinedIcon className="text-white mr-1" />,
        text: 'Enviar',
        prevent: false
    },
    {
        icon: <CachedIcon className="text-white mr-1 animate-spin" />,
        text: 'Cargando...',
        prevent: true
    },
    {
        icon: <CheckOutlinedIcon className="text-white mr-1" />,
        text: 'Enviado',
        prevent: true
    },
    {
        icon: <WarningAmberOutlinedIcon className="text-white mr-1" />,
        text: 'Error',
        prevent: true
    },
    {
        icon: <WarningAmberOutlinedIcon className="text-white mr-1" />,
        text: 'Recaptcha Inválido',
        prevent: true
    },
]

export { cardsContact, btnFormsRender }