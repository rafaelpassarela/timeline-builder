import IEventModelStorageInterface from "./EventModelStorageInterface";

interface ITimeLineTitleStorage {
	title: string;
	subtitle: string;
}

interface ITimelineStorageInterface {
	header: ITimeLineTitleStorage;
	events: Array<IEventModelStorageInterface>;
}

export default ITimelineStorageInterface;