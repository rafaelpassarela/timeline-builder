import { Align } from "./Align";

interface IEventModelStorageInterface {
    align: Align;
    index: number;
    date: string;
    title: string;
    subtitle?: string;
    img?: string;
}

export interface IEventModelStorageScreenInterface extends IEventModelStorageInterface {
    isNew: boolean
}

export default IEventModelStorageInterface;