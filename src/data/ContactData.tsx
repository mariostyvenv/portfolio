import LogoMessage from "../assets/message.png"
import LogoMaps from "../assets/maps.png"
import LogoWhatsapp from "../assets/whatsapp.png"
import { ICardContact } from "../interfaces/IContact"

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

export { cardsContact }