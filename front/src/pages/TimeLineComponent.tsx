import React, { Component } from "react";
import IEventModelStorageInterface from "../class/EventModelStorageInterface";
import ITimelineStorageInterface, { ITimeLineConfigStorage } from "../class/TimelineStorageInterface";
import EventPanel from "../components/EventPanelComponent";
// import MainMenu from "./MainMenuComponent";

const lorem = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum like abc abc.";

const itens = Array<IEventModelStorageInterface>(
    {index: 0, align: "auto", date: "21/01/2022", title: "0 Teste", subtitle: lorem},
    {index: 1, align: "auto", date: "20/01/2022", title: "1 Novo",  subtitle: lorem, img: "https://i.pinimg.com/474x/1a/00/cb/1a00cb023f90b759483168335c4246d6.jpg"},
    {index: 2, align: "auto", date: "14/01/2022", title: "2 Teste Numero 2", subtitle: "Sub Teste 2"},
    {index: 3, align: "auto", date: "11/01/2022", title: "3 Teste Numero 3", subtitle: "Sub Teste 3"},
    {index: 4, align: "auto", date: "09/01/2022", title: "4 Novo Lorem Ipsum is simply dummy text",  subtitle: lorem, img: "https://cdn-icons-png.flaticon.com/512/1355/1355083.png"},
    {index: 5, align: "auto", date: "05/01/2022", title: "5 Ultima entrada", subtitle: "Sub Teste ultima"}
);

const defaultConfig: ITimeLineConfigStorage = {
    background: '#62656a',
    font: '#f5f5f5',
    line: '#ffffff',
    imageBorder: '#f5f5f5',
    imageBackground: '#f0f8ff',
    title: '#ffffff',
    subtitle: '#ffffff',
    card: '#252526'
}

class TimeLine extends Component {

    private isEditable: boolean = false;

    getTimeline(): ITimelineStorageInterface {
        const data: ITimelineStorageInterface = {
            config: defaultConfig,
            header: {
                title: 'My New Timeline',
                subtitle: 'This is my new Timeline'
            },
            events: itens
        };

        // based on url data and user login (To-Do)
        this.isEditable = true;

        return data;
    }

    render() {
        const timelineData = this.getTimeline();
        return (
            <div>
                {/* <MainMenu /> */}
                <EventPanel editable={this.isEditable} timeline={timelineData}/>
            </div>
        );
    }

}

export default TimeLine;