import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import EventModelInterface from "../class/EventModelInterface";
import TimelineStorageInterface from "../class/TimelineStorageInterface";
import TitleInterface from "../class/TitleComponentInterface";
import Event from "./EventComponent";
import Title from "./title/TitleComponent";

interface EventPanelProps {
    titleConfig: TitleInterface
}

const lorem = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum like abc abc.";

const itens = Array<EventModelInterface>(
    {align: "auto", date: "21/01/2022", title: "Teste", subtitle: "Sub Teste"},
    {align: "auto", date: "20/01/2022", title: "Novo",  subtitle: lorem, img: "https://i.pinimg.com/474x/1a/00/cb/1a00cb023f90b759483168335c4246d6.jpg"},
    {align: "auto", date: "14/01/2022", title: "Teste Numero 2", subtitle: "Sub Teste 2"},
    {align: "auto", date: "11/01/2022", title: "Teste Numero 3", subtitle: "Sub Teste 3"},
    {align: "auto", date: "09/01/2022", title: "Novo",  subtitle: lorem, img: "https://cdn-icons-png.flaticon.com/512/1355/1355083.png"},
    {align: "auto", date: "05/01/2022", title: "Ultima entrada", subtitle: "Sub Teste ultima"}
);

class EventPanel extends Component<EventPanelProps, TimelineStorageInterface> {

    constructor(props: EventPanelProps) {
        super(props);
        this.state = {
          title: this.props.titleConfig.title,
          subtitle: this.props.titleConfig.subtitle!
        };
        this.titleChangeHandler = this.titleChangeHandler.bind(this);
    }

    titleChangeHandler(value: string, type: "h1" | "h5") {
        switch (type) {
            case "h1":
                this.setState({title: value});
                break;

            case "h5":
                this.setState({subtitle: value});
                break;

            default:
                break;
        }
    }

    render() {
        let lastAlign = "right" as "left" | "right" | "auto";

        return (
            <div>
                <pre>{JSON.stringify(this.state, null, 2) }</pre>
                <Title
                    title={this.props.titleConfig.title}
                    subtitle={this.props.titleConfig.subtitle}
                    editable={this.props.titleConfig.editable}
                    callback={this.titleChangeHandler}
                />
                <Container className='base-line' fluid>
                    {
                        itens.map((val: EventModelInterface, idx: number): any => {
                            lastAlign = (lastAlign === "left") ? "right" : "left";
                            return <Event key={idx} align={lastAlign} date={val.date} title={val.title} subtitle={val.subtitle} img={val.img} />
                        })
                    }
                </Container>
            </div>
        );
    }

}

export default EventPanel;