import EventModelStorageInterface from "./EventModelStorageInterface";

interface EventModelInterface extends EventModelStorageInterface {
    editable: boolean;
}

export default EventModelInterface;