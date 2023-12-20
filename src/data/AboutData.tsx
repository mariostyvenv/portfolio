import ConfigLogo from "../assets/configuracion.png"
import FrontendLogo from "../assets/backend.png"
import MobileLogo from "../assets/phone.png"
import BaseDatosLogo from "../assets/base-de-datos.png"
import InfinitoLogo from "../assets/infinito.png"
import CloudLogo from "../assets/cloud.png"
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
import EnlaceLogo from "../assets/enlace.png"
import CampusLogo from "../assets/logocampus.png"
import Python from "../assets/python.png"
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
        url: "https://drive.google.com/file/d/1unvwdxP60-t6_88y9UliAFAcdqudZxS6/view?usp=share_link"
    },
    {
        date: "2022",
        title: "Diplomado en desarrollo Frontend en ReactJS.",
        icon: CampusLogo,
        url: "https://drive.google.com/file/d/18tOb6F77GuhUQHfKMwSMbJ16aKfQgTyQ/view?usp=share_link"
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

export { cards, cardsExperience, cardsStudies }