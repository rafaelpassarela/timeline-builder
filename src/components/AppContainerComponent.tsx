import React, { Component } from "react";
import EventPanel from "./EventPanelComponent";
import MainMenu from "./MainMenuComponent";

class AppContainer extends Component {

    render() {
        return (
            <div>
                <MainMenu />
                <EventPanel editable={true} />
            </div>
        );
    }

}

export default AppContainer;