import IEventModelStorageInterface from "./EventModelStorageInterface";

export type EventHandlerUpDown = (currentIdx: number, newIndex: number) => void;
export type EventHandlerDelete = (index: number) => void;

interface IEventModelInterface extends IEventModelStorageInterface {
    editable: boolean;
    total: number;
    callbackUpDown: EventHandlerUpDown;
    callbackDelete: EventHandlerDelete;
}

export default IEventModelInterface;