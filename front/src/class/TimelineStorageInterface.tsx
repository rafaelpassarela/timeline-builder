import IEventModelStorageInterface from "./EventModelStorageInterface";

interface ITimeLineTitleStorage {
	title: string;
	subtitle: string;
}

export type ConfigHandlerChange = (name: string, value: string) => void;

export interface ITimeLineConfigStorage {
    background: string;
    font: string;
    line: string;
    imageBorder: string;
    imageBackground: string;
    title: string;
    subtitle: string;
    card: string;
}

interface ITimelineStorageInterface {
    config: ITimeLineConfigStorage;
	header: ITimeLineTitleStorage;
	events: Array<IEventModelStorageInterface>;
}

export default ITimelineStorageInterface;