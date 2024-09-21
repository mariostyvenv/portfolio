import ConfigLogo from "../assets/configuracion.webp"
import FrontendLogo from "../assets/backend.webp"
import MobileLogo from "../assets/phone.webp"
import BaseDatosLogo from "../assets/base-de-datos.webp"
import InfinitoLogo from "../assets/infinito.webp"
import CloudLogo from "../assets/cloud.webp"
import GOLogo from "../assets/golang.webp"
import JavaLogo from "../assets/java.webp"
import TSLogo from "../assets/typescript.webp"
import ReactLogo from "../assets/reactjs.webp"
import VueLogo from "../assets/vuejs.webp"
import FlutterLogo from "../assets/flutter-logo.webp"
import DartLogo from "../assets/dart.webp"
import MySQLogo from "../assets/mysql.webp"
import PostgresLogo from "../assets/postgres.webp"
import FirestoreLogo from "../assets/firestore.webp"
import MongoDBLogo from "../assets/mongodb.webp"
import DockerLogo from "../assets/dcoker.webp"
import KubernetesLogo from "../assets/kubernetes.webp"
import JenkinsLogo from "../assets/jenkinss.webp"
import ArgoLogo from "../assets/argo.webp"
import AWSLogo from "../assets/awss.webp"
import GCloudLogo from "../assets/gcloud.webp"
import AzureLogo from "../assets/Axurre.webp"
import DGLogo from "../assets/digital.webp"
import PersonalLogo from "../assets/personal.webp"
import ServiLogo from "../assets/servinfoo.webp"
import VisionLogo from "../assets/visions.webp"
import AveLogo from "../assets/avecolor.webp"
import ActivityLogo from "../assets/logoactivity.webp"
import CesdeLogo from "../assets/cesde.webp"
import PlatziLogo from "../assets/platzi.webp"
import EnlaceLogo from "../assets/enlace.webp"
import CampusLogo from "../assets/logocampus.webp"
import Python from "../assets/python.webp"
import { ICardAbout, ICardExperience, ICardStudies } from "../interfaces/IAbout"

const cards: ICardAbout[] = [
    {
        title: "Backend",
        description: "Creación de sistemas orientados a servicios, microservicios, monolíticos, concurrentes y eventos.",
        icon: ConfigLogo,
        items: [
            { icon: Python, name: "Python" },
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
            { icon: ArgoLogo, name: "Argo CD" }
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
        title: "Analista de Automatización N3",
        icon: EnlaceLogo,
        url: "https://www.suaporte.com.co/sso/#/",
        items: [
            <li className="text-white leading-6 pt-1">Backend developer para proyectos internos.</li>,
            <li className="text-white leading-6 pt-1">Frontend developer para proyectos internos.</li>,
            <li className="text-white leading-6 pt-1">Asesoramiento de arquitectura de infraestrura y software.</li>,
        ]
    },
    {
        date: "2022",
        title: "Senior Software Developer",
        icon: PersonalLogo,
        url: "https://personalsoft.com/",
        items: [
            <li className="text-white leading-6 pt-1">Backend Developer en <a target="_blank" href="https://mercadolibre.com/" className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#FA5252] to-[#DD2476]">Mercadolibre</a>, utilizando tecnologías con Java y Groovy.</li>,
            <li className="text-white leading-6 pt-1">Backend Developer en <a target="_blank" href="https://leal.co/" className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#FA5252] to-[#DD2476]">Leal.co</a>, utilizando tecnologías con NestJS, Redis, Kubernetes.</li>
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
            <li className="text-white leading-6 pt-1">Analista de proyectos para el <a target="_blank" href="https://www.grupoaval.com/" className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#FA5252] to-[#DD2476]">Grupo Aval.</a></li>,
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
        url: "#"
    },
    {
        date: "2022",
        title: "Diplomado en desarrollo Frontend en ReactJS.",
        icon: CampusLogo,
        url: "#"
    },
    {
        date: "2021",
        title: "Curso de Go Avanzado: Concurrencia y Patrones de Diseño.",
        icon: PlatziLogo,
        url: "#"
    },
    {
        date: "2021",
        title: "Curso de Go Intermedio: Programación Orientada a Objetos y Concurrencia.",
        icon: PlatziLogo,
        url: "#"
    },
    {
        date: "2021",
        title: "Curso Básico de Programación en Go.",
        icon: PlatziLogo,
        url: "#"
    },
    {
        date: "2021",
        title: "Curso de Administración de Servidores Linux.",
        icon: PlatziLogo,
        url: "#"
    },
]

export { cards, cardsExperience, cardsStudies }