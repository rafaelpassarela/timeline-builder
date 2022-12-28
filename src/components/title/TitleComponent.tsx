import React, { Component } from "react";
import TitleInterface from "../../class/TitleComponentInterface";
import { TitleFormat } from "../../class/TitleFormat";
import TitleElement from "./TitleElement";

class Title extends Component<TitleInterface> {

    constructor(props: TitleInterface) {
        super(props);

        this.callbackHandler = this.callbackHandler.bind(this);
    }

    callbackHandler(value: string, type: TitleFormat) {
        this.props.callback!(value, type);
    }

    render() {
        const { title, subtitle, editable } = this.props;

        return (
            <div>
                <div className="title">
                    <TitleElement elemType="h1" editable={editable} text={title} callback={this.callbackHandler} />
                    <TitleElement elemType="h5" editable={editable} text={subtitle!} callback={this.callbackHandler}/>
                </div>
            </div>
        );
    }
}

export default Title;