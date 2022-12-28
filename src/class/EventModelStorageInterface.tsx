import { Align } from "./Align";

interface EventModelStorageInterface {
    align: Align;
    index?: number;
    date: string;
    title: string;
    subtitle?: string;
    img?: string;

}

export default EventModelStorageInterface;