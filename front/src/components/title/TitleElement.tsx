import React, { Component } from "react";
import { TitleFormat } from "../../class/TitleFormat";

interface ITitleElementState {
    isEditing: boolean;
    text: string;
    editingText: string;
}

interface ITitleElementProp {
    text: string,
    editable?: boolean,
    elemType: TitleFormat,
    callback: (value: string, type: TitleFormat) => void;
}

class TitleElement extends Component<ITitleElementProp, ITitleElementState> {

    constructor(props: ITitleElementProp) {
        super(props);
        this.state = {
          isEditing: false,
          text: props.text,
          editingText: props.text
        };
        this.textClickHandler = this.textClickHandler.bind(this);
        this.textBlurHandler = this.textBlurHandler.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleKeyDown = this.handleKeyDown.bind(this);
    }

    textClickHandler(e: React.MouseEvent<HTMLHeadingElement>) {
        e.preventDefault();
        if (this.props.editable) {
            this.setState({
                editingText: this.state.text,
                isEditing: true
            });
        }
    }

    handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        e.preventDefault();
        if (this.props.editable) {
            this.setState({
                editingText: e.target.value
            });
        }
    }

    handleKeyDown(e: any) {
        switch (e.keyCode) {
            case 13: // enter
                e.target.blur();
                break;

            case 27: // esc
                this.setState({
                    isEditing: false
                });
                break;

            default:
                break;
        }
    }

    textBlurHandler(e: any) {
        if (this.props.editable && this.state.isEditing) {
            this.setState({
                isEditing: false,
                text: this.state.editingText.trim()
            }, () => this.props.callback(this.state.text, this.props.elemType));
        }
    }

    getTitleComponent(isEditing : boolean, isEditable: boolean | undefined, text: string, type: string) {
        if (isEditing) {
            const editConfig = (type === "h1" ? "title-config" : "subtitle-config");
            return (
                <input
                    className={type + " title-input " + editConfig}
                    autoFocus
                    defaultValue={text}
                    onChange={this.handleChange}
                    onBlur={this.textBlurHandler}
                    onKeyDown={this.handleKeyDown}/>
            );
        }

        const textClassName = isEditable ? 'title-edit' : '';
        // title component (H1)
        if (type === "h1") {
            return (
                <h1 className={"title-config " + textClassName} onClick={this.textClickHandler}>
                    {text}&nbsp;
                </h1>
            );
         }

        // sub-title component (H5)
        return (
            <h5 className={"subtitle-config " + textClassName} onClick={this.textClickHandler}>
                {text}&nbsp;
            </h5>
        );
    }

    render() {
        const {elemType, editable} = this.props;
        const text = this.state.text;
        const textComponent = this.getTitleComponent(this.state.isEditing, editable, text, elemType);
        return (
            <div>{textComponent}</div>
        );
    }

}

export default TitleElement;