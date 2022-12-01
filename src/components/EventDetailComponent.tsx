import React, { Component } from 'react';

interface EventDetailProps {
  date: string;
  title: string;
  subtitle?: string;
  img?: string;
}

class EventDetail extends Component<EventDetailProps> {
  render() {
    const { date, title, subtitle, img } = this.props;
    var imgTag = (img === undefined) ? null : <img className='EventIcon' src={img}/>;
    return (
        <div className='EventComp'>
            Data {date}
            <br/>
            Tit {title}
            <br/>
            Sub {subtitle}
            {imgTag}
        </div>
    );
  }
}

export default EventDetail;