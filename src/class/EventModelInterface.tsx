import IEventModelStorageInterface, { IEventModelStorageScreenInterface } from "./EventModelStorageInterface";

export type EventHandlerUpDown = (currentIdx: number, newIndex: number) => void;
export type EventHandlerDelete = (index: number) => void;
export type EventHandlerInsert = (object: IEventModelStorageScreenInterface) => void;

interface IEventModelInterface extends IEventModelStorageInterface {
    editable: boolean;
    total: number;
    callbackUpDown: EventHandlerUpDown;
    callbackDelete: EventHandlerDelete;
    callbackInsert: EventHandlerInsert;
}

export default IEventModelInterface;