import LogoKanban from "../assets/p-kanban.webp"
import LogoPortafolio from "../assets/portfolio.webp"
import LogoTodo from "../assets/todo.webp"
import { ICardPortFolio } from "../interfaces/IPortfolio"

const cardsPortfolio: ICardPortFolio[] = [
    {
        area: "Frontend",
        title: "Kanban Vanilla",
        icon: LogoKanban,
        url: "https://github.com/mariovelandiaco/kanban-vanilla"
    },
    {
        area: "Frontend",
        title: "To-Do List",
        icon: LogoTodo,
        url: "https://github.com/mariovelandiaco/react-todo"
    },
    {
        area: "Frontend",
        title: "Portfolio",
        icon: LogoPortafolio,
        url: "https://github.com/mariovelandiaco/portfolio"
    },
]

export { cardsPortfolio }