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
        description: "mariovelandia.co@gmail.com",
        url:"mailto:mariovelandia.co@gmail.com"
    },
    {
        icon: LogoMaps,
        title: "Ubicación",
        description: "Medellín - Colombia",
        url:"mailto:mariovelandia.co@gmail.com"
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