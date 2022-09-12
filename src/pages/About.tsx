import ConfigLogo from "../assets/configuracion.png"
import FrontendLogo from "../assets/backend.png"
import MobileLogo from "../assets/phone.png"
import BaseDatosLogo from "../assets/base-de-datos.png"
import InfinitoLogo from "../assets/infinito.png"
import CloudLogo from "../assets/cloud.png"
import RustLogo from "../assets/rustinvert.png"
import GOLogo from "../assets/golang.png"
import JavaLogo from "../assets/java.png"
import TSLogo from "../assets/typescript.png"
import ReactLogo from "../assets/reactjs.png"
import VueLogo from "../assets/vuejs.png"
import FlutterLogo from "../assets/flutter-logo.png"
import DartLogo from "../assets/dart.png"
import MySQLogo from "../assets/mysql.png"
import PostgresLogo from "../assets/postgres.png"
import FirestoreLogo from "../assets/firestore.png"
import MongoDBLogo from "../assets/mongodb.png"
import DockerLogo from "../assets/dcoker.png"
import KubernetesLogo from "../assets/kubernetes.png"
import JenkinsLogo from "../assets/jenkinss.png"
import TerraLogo from "../assets/terraa.png"
import AWSLogo from "../assets/awss.png"
import GCloudLogo from "../assets/gcloud.png"
import AzureLogo from "../assets/Axurre.png"
import DGLogo from "../assets/digital.png"
import PersonalLogo from "../assets/personal.png"
import ServiLogo from "../assets/servinfoo.png"
import VisionLogo from "../assets/visions.png"
import AveLogo from "../assets/avecolor.png"
import ActivityLogo from "../assets/logoactivity.png"
import CesdeLogo from "../assets/cesde.png"
import PlatziLogo from "../assets/platzi.png"

interface IDetailItem {
    icon: string,
    name: string
}

interface ICardAbout {
    title: string,
    description: string,
    icon: string,
    items: IDetailItem[]
}

interface ICardExperience {
    date: string,
    title: string,
    icon: string,
    url: string,
    items: JSX.Element[]
}

interface ICardStudies {
    date: string,
    title: string,
    icon: string,
    url: string
}

export default function About() {

    const cards: ICardAbout[] = [
        {
            title: "Backend",
            description: "Creación de sistemas orientados a servicios, microservicios, monolíticos, concurrentes y eventos.",
            icon: ConfigLogo,
            items: [
                { icon: RustLogo, name: "Rust" },
                { icon: GOLogo, name: "Golang" },
                { icon: JavaLogo, name: "Java" },
                { icon: TSLogo, name: "Typescript" }
            ]
        },
        {
            title: "Frontend",
            description: "Creación de aplicaciones web adaptativas, progresivas y en tiempo real.",
            icon: FrontendLogo,
            items: [
                { icon: ReactLogo, name: "ReactJS" },
                { icon: VueLogo, name: "VueJS" }
            ]
        },
        {
            title: "Mobile",
            description: "Desarrollo de aplicaciones móviles multiplataforma adaptativas, con capacidad de operar offline.",
            icon: MobileLogo,
            items: [
                { icon: FlutterLogo, name: "Flutter" },
                { icon: DartLogo, name: "Dart" }
            ]
        },
        {
            title: "Bases de datos",
            description: "Admistración de bases de datos relacionales y no relacionales y orientada a eventos.",
            icon: BaseDatosLogo,
            items: [
                { icon: MySQLogo, name: "MySQL" },
                { icon: PostgresLogo, name: "PostgreSQL" },
                { icon: FirestoreLogo, name: "Firestore" },
                { icon: MongoDBLogo, name: "MongoDB" }
            ]
        },
        {
            title: "DevOps",
            description: "Creación y administración de contenedores a fin de mantener la orquestación de los servicios en producción.",
            icon: InfinitoLogo,
            items: [
                { icon: DockerLogo, name: "Docker" },
                { icon: KubernetesLogo, name: "Kubernetes" },
                { icon: JenkinsLogo, name: "Jenkins" },
                { icon: TerraLogo, name: "Terraform" }
            ]
        },
        {
            title: "Clouds",
            description: "Creación de infraestrura a la medida y escalable para el despliegue de aplicaciones desarrolladas.",
            icon: CloudLogo,
            items: [
                { icon: AWSLogo, name: "AWS" },
                { icon: GCloudLogo, name: "GCP" },
                { icon: AzureLogo, name: "Azure" },
                { icon: DGLogo, name: "DigitalOcean" }
            ]
        },

    ]

    const cardsExperience: ICardExperience[] = [
        {
            date: "2022 - Actualmente",
            title: "Senior Software Developer",
            icon: PersonalLogo,
            url: "https://personalsoft.com/",
            items: [
                <li className="text-white leading-6 pt-1">Backend Developer en <a href="" className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#FA5252] to-[#DD2476]">Mercadolibre</a>, utilizando tecnologías con Java y Groovy.</li>,
                <li className="text-white leading-6 pt-1">Backend Developer en <a href="" className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#FA5252] to-[#DD2476]">Leal.co</a>, utilizando tecnologías con NestJS, Redis, Kubernetes.</li>
            ]
        },
        {
            date: "2021",
            title: "Ingeniero de desarrollo",
            icon: ServiLogo,
            url: "https://servinformacion.com/",
            items: [
                <li className="text-white leading-6 pt-1">Frontend Developer en ReactJS.</li>,
                <li className="text-white leading-6 pt-1">Creación de Widgets para la plataforma ARCGIS.</li>
            ]
        },
        {
            date: "2021",
            title: "Research And Innovation Analyst",
            icon: VisionLogo,
            url: "https://www.visionsoftware.com.co/",
            items: [
                <li className="text-white leading-6 pt-1">Analista de proyectos para el <a href="" className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#FA5252] to-[#DD2476]">Grupo Aval.</a></li>,
                <li className="text-white leading-6 pt-1">Creación de prototipos funcionales con VueJS y NodeJS.</li>,
                <li className="text-white leading-6 pt-1">Creación de proyectos en la Nube con Azure y Kubernetes.</li>
            ]
        },
        {
            date: "2019 - 2021",
            title: "Lider de desarrollo de software",
            icon: AveLogo,
            url: "https://aveonline.co/",
            items: [
                <li className="text-white leading-6 pt-1">Creación de la nueva arquitectura de software de la compañía.</li>,
                <li className="text-white leading-6 pt-1">Apificación de los servicios ofrecidos de la compañía.</li>,
                <li className="text-white leading-6 pt-1">Optimización del backend existente.</li>
            ]
        },
        {
            date: "2019",
            title: "Desarrollador de Software",
            icon: ActivityLogo,
            url: "https://activity.technology/",
            items: [
                <li className="text-white leading-6 pt-1">Desarrollar sistemas SOAP Y REST.</li>,
                <li className="text-white leading-6 pt-1">Mantenimiento de aplicaciones web existentes en la compañía.</li>,
                <li className="text-white leading-6 pt-1">Desarrollar aplicaciones móviles Android.</li>
            ]
        },
    ]

    const cardsStudies: ICardStudies[] = [
        {
            date: "2019",
            title: "Técnico Desarrollador de Software.",
            icon: CesdeLogo,
            url: "https://www.cesde.edu.co/"
        },
        {
            date: "2021",
            title: "Curso de Go Avanzado: Concurrencia y Patrones de Diseño.",
            icon: PlatziLogo,
            url: "https://platzi.com/p/mariostyvenv/curso/2388-golang-avanzado/diploma/detalle/"
        },
        {
            date: "2021",
            title: "Curso de Go Intermedio: Programación Orientada a Objetos y Concurrencia.",
            icon: PlatziLogo,
            url: "https://platzi.com/p/mariostyvenv/curso/2357-golang-intermedio/diploma/detalle/"
        },
        {
            date: "2021",
            title: "Curso Básico de Programación en Go.",
            icon: PlatziLogo,
            url: "https://platzi.com/p/mariostyvenv/curso/2232-programacion-golang/diploma/detalle/"
        },
        {
            date: "2021",
            title: "Curso de Administración de Servidores Linux.",
            icon: PlatziLogo,
            url: "https://platzi.com/p/mariostyvenv/curso/1667-linux/diploma/detalle/"
        },
    ]

    const renderCards = cards.map((value) => {
        return (
            <div className="flex border border-slate-400 rounded-xl p-4">
                <div>
                    <img src={value.icon} className="w-10" />
                </div>
                <div className="pl-2 w-full flex flex-col justify-between">
                    <div>
                        <p className="font-semibold text-white text-3xl">{value.title}</p>
                        <p className="text-white leading-6 pt-5">{value.description}</p>
                    </div>

                    <div className="grid grid-cols-2 pt-2">
                        {value.items.map(item => {
                            return (
                                <div className="flex items-center pt-2 truncate pr-1">
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

    const renderCardsExperience = cardsExperience.map(value => {
        return (
            <div className="border border-slate-400 rounded-xl p-4">
                <div className="flex justify-between">
                    <p className="text-slate-400">{value.date}</p>
                    <a href={value.url} target="_blank" rel="noreferrer">
                        <img src={value.icon} className="w-20" />
                    </a>
                </div>
                <p className="text-white font-bold">{value.title}</p>
                <ul className="list-disc pl-4 pt-3">
                    {value.items.map(item => item)}
                </ul>
            </div>
        )
    })

    const renderCardsStudies = cardsStudies.map(value => {
        return (
            <div className="border border-slate-400 rounded-xl p-4">
                <div className="flex justify-between">
                    <p className="text-slate-400">{value.date}</p>
                    <a href={value.url} target="_blank" rel="noreferrer">
                        <img src={value.icon} className="w-20" />
                    </a>
                </div>
                <p className="text-white font-bold">{value.title}</p>
            </div>
        )
    })

    return (
        <div className="p-6 md:p-12 w-full bg-[#1E1E1E] mt-10 md:mt-16 rounded-[20px]">
            <div className="flex items-center">
                <p className="text-4xl text-white font-semibold pr-3">Habilidades</p>
                <div className="bg-gradient-to-r from-[#FA5252] to-[#DD2476] h-1 w-24 rounded"></div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 pt-10">
                {renderCards}
            </div>
            <div className="flex items-center mt-10">
                <p className="text-4xl text-white font-semibold pr-3">Experiencia</p>
                <div className="bg-gradient-to-r from-[#FA5252] to-[#DD2476] h-1 w-24 rounded"></div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 pt-10">
                {renderCardsExperience}
            </div>
            <div className="flex items-center mt-10">
                <p className="text-4xl text-white font-semibold pr-3">Estudios</p>
                <div className="bg-gradient-to-r from-[#FA5252] to-[#DD2476] h-1 w-24 rounded"></div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 pt-10">
                {renderCardsStudies}
            </div>
        </div>
    );
}