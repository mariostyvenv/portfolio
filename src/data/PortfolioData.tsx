import LogoKanban from "../assets/p-kanban.png"
import LogoPortafolio from "../assets/portfolio.png"
import LogoTodo from "../assets/todo.png"
import { ICardPortFolio } from "../interfaces/IPortfolio"

const cardsPortfolio: ICardPortFolio[] = [
    {
        area: "Frontend",
        title: "Kanban Vanilla",
        icon: LogoKanban,
        url: "https://github.com/mariostyvenv/kanban-vanilla"
    },
    {
        area: "Frontend",
        title: "Portafolio",
        icon: LogoPortafolio,
        url: "https://github.com/mariostyvenv/portfolio"
    },
    {
        area: "Frontend",
        title: "To-Do List",
        icon: LogoTodo,
        url: "https://github.com/mariostyvenv/react-todo"
    },
]

export { cardsPortfolio }