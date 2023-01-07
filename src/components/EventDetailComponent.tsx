import React, { Component } from 'react';

interface IEventDetailProps {
  date: string;
  title: string;
  subtitle?: string;
  img?: string;
  imgClass?: string;
}

class EventDetail extends Component<IEventDetailProps> {

  getImgClassName(imgClass: string | undefined) {
    return 'eventIcon ' + (imgClass === undefined ? '' : imgClass);
  }

  render() {
    const { date, title, subtitle, img, imgClass } = this.props;
    var imgTag = (img === undefined) ? null : <img className={this.getImgClassName(imgClass)} src={img} alt="Event Logo"/>;
    var spacer = (imgClass === 'eventIcon-right' ) ?
        <div className="spacer-right"></div> :
        <div className="spacer-left"></div>;

    return (
        <div className="eventComp">
            {imgTag}
            <div>
                <small>{date}</small><br/>
                <h2>{title}</h2>
                <div className="eventText">
                    {subtitle}{spacer}
                </div>

            </div>
        </div>
    );
  }
}

export default EventDetail;
