import React, { Component } from 'react';

interface EventDetailProps {
  date: string;
  title: string;
  subtitle?: string;
  img?: string;
  imgClass?: string;
}

class EventDetail extends Component<EventDetailProps> {

  getImgClassName(imgClass: string | undefined) {
    return 'eventIcon ' + (imgClass == undefined ? '' : imgClass);
  }

  render() {
    const { date, title, subtitle, img, imgClass } = this.props;
    var imgTag = (img === undefined) ? null : <img className={this.getImgClassName(imgClass)} src={img} alt="Event Logo"/>;
    var textClass = (img === undefined) ? '' : 'eventText';
    return (
        <div className='eventComp'>
            {imgTag}
            <div className={textClass}>
                Data {date}
                <br/>
                Tit {title}
                <br/>
                Sub {subtitle}
            </div>
        </div>
    );
  }
}

export default EventDetail;