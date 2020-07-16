import React, { Component } from "react";

class SingleTimeline extends Component {
  state = {};
  render() {
    return (
      <li>
        <div className="timeline-image">
          <img
            className="rounded-circle img-fluid"
            src={`assets/img/about/${this.props.num}.jpg`}
            alt=""
          />
        </div>
        <div className="timeline-panel">
          <div className="timeline-heading">
            <h4>{this.props.duration}</h4>
            <h4 className="subheading">{this.props.subHeading}</h4>
          </div>
          <div className="timeline-body">
            <p className="text-muted">{this.props.details}</p>
          </div>
        </div>
      </li>
    );
  }
}

export default SingleTimeline;
