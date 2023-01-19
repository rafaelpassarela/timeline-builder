import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import IEventModelStorageInterface, { IEventModelStorageScreenInterface } from "../class/EventModelStorageInterface";
import ITimelineStorageInterface from "../class/TimelineStorageInterface";
import { Align } from "../class/Align";
import { TitleFormat } from "../class/TitleFormat";
import Event from "./EventComponent";
import Title from "./title/TitleComponent";

interface IEventPanelProps {
    editable: boolean
}

const lorem = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum like abc abc.";

const itens = Array<IEventModelStorageInterface>(
    {index: 0, align: "auto", date: "21/01/2022", title: "0 Teste", subtitle: lorem},
    {index: 1, align: "auto", date: "20/01/2022", title: "1 Novo",  subtitle: lorem, img: "https://i.pinimg.com/474x/1a/00/cb/1a00cb023f90b759483168335c4246d6.jpg"},
    {index: 2, align: "auto", date: "14/01/2022", title: "2 Teste Numero 2", subtitle: "Sub Teste 2"},
    {index: 3, align: "auto", date: "11/01/2022", title: "3 Teste Numero 3", subtitle: "Sub Teste 3"},
    {index: 4, align: "auto", date: "09/01/2022", title: "4 Novo Lorem Ipsum is simply dummy text",  subtitle: lorem, img: "https://cdn-icons-png.flaticon.com/512/1355/1355083.png"},
    {index: 5, align: "auto", date: "05/01/2022", title: "5 Ultima entrada", subtitle: "Sub Teste ultima"}
);

class EventPanel extends Component<IEventPanelProps, ITimelineStorageInterface> {

    constructor(props: IEventPanelProps) {
        super(props);
        this.state = {
            header: {
                title: "My New Timeline",
                subtitle: "This is my little timeline"
            },
            events: itens
        };

        this.orderArray = this.orderArray.bind(this);
        this.titleChangeHandler = this.titleChangeHandler.bind(this);
        this.eventHandlerUpDown = this.eventHandlerUpDown.bind(this);
        this.eventHandlerDelete = this.eventHandlerDelete.bind(this);
        this.eventHandlerInsert = this.eventHandlerInsert.bind(this);
    }

    titleChangeHandler(value: string, type: TitleFormat) {
        switch (type) {
            case "h1":
                this.setState({header: {...this.state.header, title: value}});
                break;

            case "h5":
                this.setState({header: {...this.state.header, subtitle: value}});
                break;

            default:
                break;
        }
    }

    updateEventsArray(arr: Array<IEventModelStorageInterface>) {
        // set new index to existing itens
        this.orderArray(arr);
        // update events state
        this.setState({
            events: arr
        });
    }

    orderArray(arr: Array<IEventModelStorageInterface>) {
        let idx = 0;
        arr.forEach(element => {
            element.index = idx;
            idx++;
        });
    }

    eventHandlerUpDown(currentIdx: number, newIndex: number) {
        let list    = this.state.events;
        let element = list[currentIdx];
        // change element position
        list.splice(currentIdx, 1);
        list.splice(newIndex, 0, element);

        this.updateEventsArray(list);
    }

    eventHandlerDelete(index: number) {
        let list = this.state.events;
        if (list.length > 1) {
            list.splice(index, 1);
            this.updateEventsArray(list);
        }
    }

    eventHandlerInsert(object: IEventModelStorageScreenInterface) {
        let list = this.state.events;
        // remove old element
        if (!object.isNew) {
            list.splice(object.index, 1);
        }
        // insert new one, converting from IEventModelStorageScreenInterface to IEventModelStorageInterface
        const newEvent: IEventModelStorageInterface = {
            index: (object.isNew ? object.index + 1 : object.index),
            align: "auto",
            date: object.date,
            title: object.title,
            subtitle: object.subtitle,
            img: object.img
        }

        list.splice(newEvent.index, 0, newEvent);

        this.updateEventsArray(list);
    }

    render() {
        let lastAlign = "right" as Align;
        let total = this.state.events.length - 1;

        return (
            <div>
                <Title
                    title={this.state.header.title}
                    subtitle={this.state.header.subtitle}
                    editable={this.props.editable}
                    callback={this.titleChangeHandler}
                />
                <Container className='base-line' fluid>
                    {
                        this.state.events.map((val: IEventModelStorageInterface, idx: number): any => {
                            lastAlign = (lastAlign === "left") ? "right" : "left";
                            return <Event
                                key={idx}
                                index={idx}
                                align={lastAlign}
                                date={val.date}
                                title={val.title}
                                subtitle={val.subtitle}
                                img={val.img}
                                editable={this.props.editable}
                                total={total}
                                callbackUpDown={this.eventHandlerUpDown}
                                callbackDelete={this.eventHandlerDelete}
                                callbackInsert={this.eventHandlerInsert}
                            />
                        })
                    }
                </Container>
            </div>
        );
    }

}

export default EventPanel;