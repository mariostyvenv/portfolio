interface ICardContact {
    icon: string,
    title: string,
    description: string,
    url:string
}

interface IButtonForm {
    prevent: boolean,
    icon: JSX.Element,
    text: string
}

export type { ICardContact, IButtonForm }