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

export type { IDetailItem, ICardAbout, ICardExperience, ICardStudies }