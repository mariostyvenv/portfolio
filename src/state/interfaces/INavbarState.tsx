import { EPages } from "../enums/EPages";

export interface INavbarState{
    page:string,
    change: (page: EPages) => void
}