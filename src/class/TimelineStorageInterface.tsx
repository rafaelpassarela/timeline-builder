import EventModelStorageInterface from "./EventModelStorageInterface";

interface TimeLineTitleStorage {
	title: string;
	subtitle: string;
}

interface TimelineStorageInterface {
	header: TimeLineTitleStorage;
	events: Array<EventModelStorageInterface>;
}

export default TimelineStorageInterface;