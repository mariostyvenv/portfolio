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
        description: "Creation of service-oriented systems, microservices, monolithic, concurrent, and event-driven architectures.",
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
        description: "Creation of adaptive, progressive, and real-time web applications.",
        icon: FrontendLogo,
        items: [
            { icon: ReactLogo, name: "ReactJS" },
            { icon: VueLogo, name: "VueJS" }
        ]
    },
    {
        title: "Mobile",
        description: "Development of adaptive, cross-platform mobile applications with offline capabilities.",
        icon: MobileLogo,
        items: [
            { icon: FlutterLogo, name: "Flutter" },
            { icon: DartLogo, name: "Dart" }
        ]
    },
    {
        title: "Databases",
        description: "Administration of relational and non-relational databases, as well as real-time databases.",
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
        description: "Creation and administration of containers to maintain the orchestration of services in production.",
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
        description: "Creation of custom and scalable infrastructure for deploying developed applications.",
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
        date: "2022 - Present",
        title: "Automation Analyst N3",
        icon: EnlaceLogo,
        url: "https://www.suaporte.com.co/sso/#/",
        items: [
            <li className="text-white leading-6 pt-1">Backend Developer for internal projects.</li>,
            <li className="text-white leading-6 pt-1">Frontend Developer for internal projects.</li>,
            <li className="text-white leading-6 pt-1">Advising on infrastructure and software architecture.</li>,
        ]
    },
    {
        date: "2022",
        title: "Senior Software Developer",
        icon: PersonalLogo,
        url: "https://personalsoft.com/",
        items: [
            <li className="text-white leading-6 pt-1">Backend Developer at <a target="_blank" href="https://mercadolibre.com/" className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#0071E1] to-[#002C88]">Mercadolibre</a>, using technologies such as Java and Groovy.</li>,
            <li className="text-white leading-6 pt-1">Backend Developer at <a target="_blank" href="https://leal.co/" className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#0071E1] to-[#002C88]">Leal.co</a>, using technologies such as NestJS, Redis, and Kubernetes.</li>
        ]
    },
    {
        date: "2021",
        title: "Software Development Engineer",
        icon: ServiLogo,
        url: "https://servinformacion.com/",
        items: [
            <li className="text-white leading-6 pt-1">Frontend Developer in ReactJS.</li>,
            <li className="text-white leading-6 pt-1">Creation of Widgets for the ARCGIS platform.</li>
        ]
    },
    {
        date: "2021",
        title: "Research And Innovation Analyst",
        icon: VisionLogo,
        url: "https://www.visionsoftware.com.co/",
        items: [
            <li className="text-white leading-6 pt-1">Project Analyst for <a target="_blank" href="https://www.grupoaval.com/" className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#0071E1] to-[#002C88]">Grupo Aval.</a></li>,
            <li className="text-white leading-6 pt-1">Creation of functional prototypes with VueJS and NodeJS.</li>,
            <li className="text-white leading-6 pt-1">Creation of cloud projects with Azure and Kubernetes.</li>
        ]
    },
    {
        date: "2019 - 2021",
        title: "Software Development Leader",
        icon: AveLogo,
        url: "https://aveonline.co/",
        items: [
            <li className="text-white leading-6 pt-1">Creation of the new software architecture of the company.</li>,
            <li className="text-white leading-6 pt-1">API-fication of the services offered by the company.</li>,
            <li className="text-white leading-6 pt-1">Optimization of the existing backend.</li>
        ]
    },
    {
        date: "2019",
        title: "Software Developer",
        icon: ActivityLogo,
        url: "https://activity.technology/",
        items: [
            <li className="text-white leading-6 pt-1">Develop SOAP and REST systems.</li>,
            <li className="text-white leading-6 pt-1">Maintenance of existing web applications in the company.</li>,
            <li className="text-white leading-6 pt-1">Develop Android mobile applications.</li>
        ]
    },
];

const cardsStudies: ICardStudies[] = [
    {
        date: "2019",
        title: "Software Development Technician.",
        icon: CesdeLogo,
        url: "#"
    },
    {
        date: "2022",
        title: "Diploma in Frontend Development with ReactJS.",
        icon: CampusLogo,
        url: "#"
    },
    {
        date: "2021",
        title: "Advanced Go Course: Concurrency and Design Patterns.",
        icon: PlatziLogo,
        url: "#"
    },
    {
        date: "2021",
        title: "Intermediate Go Course: Object-Oriented Programming and Concurrency.",
        icon: PlatziLogo,
        url: "#"
    },
    {
        date: "2021",
        title: "Basic Go Programming Course.",
        icon: PlatziLogo,
        url: "#"
    },
    {
        date: "2021",
        title: "Diploma in Software Quality Assurance.",
        icon: CampusLogo,
        url: "#"
    },
];

export { cards, cardsExperience, cardsStudies }