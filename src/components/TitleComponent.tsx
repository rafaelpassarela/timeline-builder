import React, { Component } from 'react';

interface TitleProps {
  title: string;
  subtitle?: string;
}

class Title extends Component<TitleProps> {
  render() {
    const { title, subtitle } = this.props;

    return (
        <div className="center">
            <div className="title">
                <h1>{title}</h1>
                <h5>{subtitle}</h5>
            </div>
        </div>
    );
  }
}

export default Title;