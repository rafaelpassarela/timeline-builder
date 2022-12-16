import React, { Component } from 'react';
import TitleInterface from '../../class/TitleComponentInterface';
import TitleElement from './TitleElement';

class Title extends Component<TitleInterface> {

    render() {
        const { title, subtitle, editable } = this.props;

        return (
            <div>
                <div className="title">
                    <TitleElement elemType="h1" editable={editable} text={title} />
                    <TitleElement elemType="h5" editable={editable} text={subtitle!} />
                </div>
            </div>
        );
    }
}

export default Title;