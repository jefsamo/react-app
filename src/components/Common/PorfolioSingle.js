import React, { Component } from "react";

class PortfolioSingle extends Component {
  state = {};
  render() {
    return (
      <div className="col-lg-4 col-sm-6 mb-4">
        <a
          className="portfolio-link"
          data-toggle="modal"
          href="#portfolioModal1"
        >
          <img
            className="img-fluid"
            src={`assets/img/portfolio/${this.props.num}-thumbnail.jpg`}
            alt=""
          />
        </a>
        <div className="portfolio-caption">
          <div className="portfolio-caption-heading">{this.props.heading}</div>
          <div className="portfolio-caption-subheading text-muted">
            {this.props.subHeading}
          </div>
        </div>
      </div>
    );
  }
}

export default PortfolioSingle;
