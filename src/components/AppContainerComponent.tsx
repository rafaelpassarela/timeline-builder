import React, { Component } from "react";
import TitleInterface from "../class/TitleComponentInterface";
import EventPanel from "./EventPanelComponent";
import MainMenu from "./MainMenuComponent";

interface AppContainerProp {
}

interface AppContainerState {
    editable: boolean,
    titleConfig: TitleInterface
}

class AppContainer extends Component<AppContainerProp, AppContainerState> {

    constructor(props: AppContainerProp) {
        super(props);
        this.state = {
            editable: false,
            titleConfig: {
                title: "My New Timeline",
                subtitle: "This is my little timeline",
                editable: false
            }
        };
    }

    render() {
        return (
            <div>
                <MainMenu />
                <EventPanel titleConfig={ this.state.titleConfig }/>
            </div>
        );
    }

}

export default AppContainer;