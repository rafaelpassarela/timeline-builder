import EventModelInterface from "./EventModelInterface";

class EventModel implements EventModelInterface {
    align: "left" | "right" = 'left';
    date: string = '';
    title: string = '';
    subtitle?: string | undefined;
    img?: string | undefined;

    getTitle() {
        return this.title + this.subtitle;
    }
}

export default EventModel;