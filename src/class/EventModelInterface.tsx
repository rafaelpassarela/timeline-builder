import IEventModelStorageInterface from "./EventModelStorageInterface";

export type EventHandlerUpDown = (currentIdx: number, newIndex: number) => void;

interface IEventModelInterface extends IEventModelStorageInterface {
    editable: boolean;
    total: number;
    callbacUpDown: EventHandlerUpDown;
}

export default IEventModelInterface;