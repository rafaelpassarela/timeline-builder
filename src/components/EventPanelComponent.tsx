import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import IEventModelStorageInterface, { IEventModelStorageScreenInterface } from "../class/EventModelStorageInterface";
import ITimelineStorageInterface from "../class/TimelineStorageInterface";
import { Align } from "../class/Align";
import { TitleFormat } from "../class/TitleFormat";
import Event from "./EventComponent";
import Title from "./title/TitleComponent";
import ConfigComponent from "./ConfigComponent";

interface IEventPanelProps {
    editable: boolean,
    timeline: ITimelineStorageInterface
}

class EventPanel extends Component<IEventPanelProps, ITimelineStorageInterface> {

    constructor(props: IEventPanelProps) {
        super(props);
        this.state = {
            config: this.props.timeline.config,
            header: {
                ...this.props.timeline.header
            },
            events: this.props.timeline.events
        };

        this.orderArray = this.orderArray.bind(this);
        this.titleChangeHandler = this.titleChangeHandler.bind(this);
        this.eventHandlerUpDown = this.eventHandlerUpDown.bind(this);
        this.eventHandlerDelete = this.eventHandlerDelete.bind(this);
        this.eventHandlerInsert = this.eventHandlerInsert.bind(this);
        this.configChangeHandler = this.configChangeHandler.bind(this);
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

    configChangeHandler(name: string, value: string) {
        this.setState({
            config: {
                ...this.state.config,
                [name]: value
            }
        });
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
                <ConfigComponent enabled={this.props.editable} config={this.state.config} callback={this.configChangeHandler}/>
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