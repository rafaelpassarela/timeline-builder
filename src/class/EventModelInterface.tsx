import EventModelStorageInterface from "./EventModelStorageInterface";

export type EventHandlerUpDown = (currentIdx: number, newIndex: number) => void;

interface EventModelInterface extends EventModelStorageInterface {
    editable: boolean;
    total: number;
    callbacUpDown: EventHandlerUpDown;
}

export default EventModelInterface;