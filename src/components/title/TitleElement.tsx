import React, { Component } from "react";

interface TitleElementState {
    isEditing: boolean;
    text: string;
    editingText: string;
}

interface TitleElementProp {
    text: string,
    editable?: boolean,
    elemType: "h1" | "h5";
}

class TitleElement extends Component<TitleElementProp, TitleElementState> {

    constructor(props: TitleElementProp) {
        super(props);
        this.state = {
          isEditing: false,
          text: props.text,
          editingText: props.text
        };
        this.textClickHandler = this.textClickHandler.bind(this);
        this.textBlurHandler = this.textBlurHandler.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    textClickHandler(e: React.MouseEvent<HTMLHeadingElement>) {
        e.preventDefault();
        if (this.props.editable) {
            this.setState({
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

    textBlurHandler(e: any) {
        if (this.props.editable) {
            this.setState({
                isEditing: false,
                text: this.state.editingText
            });
        }
    }

    getTitleComponent(isEditing : boolean, isEditable: boolean | undefined, text: string, type: string) {
        if (isEditing) {
            return (
                <input
                    className={type + " title-input"}
                    autoFocus
                    defaultValue={text}
                    onChange={this.handleChange}
                    onBlur={this.textBlurHandler}/>
            );
        }

        const textClassName = isEditable ? 'title-edit' : '';
        // title component (H1)
        if (type === "h1") {
            return (
                <h1 className={textClassName} onClick={this.textClickHandler}>
                    {text}
                </h1>
            );
         }

        // sub-title component (H5)
        return (
            <h5 className={textClassName} onClick={this.textClickHandler}>
                {text}
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