import LogoMessage from "../assets/message.webp"
import LogoMaps from "../assets/maps.webp"
import LogoWhatsapp from "../assets/whatsapp.webp"
import { IButtonForm, ICardContact } from "../interfaces/IContact"
import CheckOutlinedIcon from '@mui/icons-material/CheckOutlined';
import WarningAmberOutlinedIcon from '@mui/icons-material/WarningAmberOutlined';
import ForwardToInboxOutlinedIcon from '@mui/icons-material/ForwardToInboxOutlined';
import CachedIcon from '@mui/icons-material/Cached';

const cardsContact: ICardContact[] = [
    {
        icon: LogoMessage,
        title: "Email",
        description: "contact@mariovelandia.co",
        url:"mailto:contact@mariovelandia.co"
    },
    {
        icon: LogoMaps,
        title: "Ubicación",
        description: "Medellín - Colombia",
        url:"mailto:contact@mariovelandia.co"
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