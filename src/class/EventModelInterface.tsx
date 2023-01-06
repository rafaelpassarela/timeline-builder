import EventModelStorageInterface from "./EventModelStorageInterface";

interface EventModelInterface extends EventModelStorageInterface {
    editable: boolean;
    total: number;
}

export default EventModelInterface;