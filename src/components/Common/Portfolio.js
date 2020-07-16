import React, { Component } from "react";
import PortfolioSingle from "./PorfolioSingle";

const portfolios = [
  { num: "02", heading: "Explore", subHeading: "grahic Design" },
  { num: "03", heading: "Explore", subHeading: "grahic Design" },
  { num: "04", heading: "Explore", subHeading: "grahic Design" },
  { num: "05", heading: "Explore", subHeading: "grahic Design" },
  { num: "06", heading: "Explore", subHeading: "grahic Design" },
  { num: "01", heading: "Explore", subHeading: "grahic Design" },
];
class Portfolio extends Component {
  state = {};
  render() {
    return (
      <section className="page-section bg-light" id="portfolio">
        <div className="container">
          <div className="text-center">
            <h2 className="section-heading text-uppercase">Portfolio</h2>
            <h3 className="section-subheading text-muted">
              Lorem ipsum dolor sit amet consectetur.
            </h3>
          </div>
          <div className="row">
            {portfolios.map((portfolio, i) => {
              return <PortfolioSingle {...portfolio} key={i} />;
            })}
          </div>
        </div>
      </section>
    );
  }
}

export default Portfolio;
