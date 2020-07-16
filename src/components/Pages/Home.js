import React, { Component } from "react";
import Header from "../Common/Header";
import Services from "../Common/Services";
import Portfolio from "../Common/Portfolio";
import Team from "../Common/Team";
import Timeline from "../Common/Timeline";
import Contact from "../Pages/Contact";

class Home extends Component {
  state = {};
  render() {
    return (
      <div>
        <Header
          title="Welcome to Our Studio"
          subtitle="IT'S NICE TO MEET YOU"
          buttonText="TELL ME MORE"
          showButton={true}
        />
        <Services />
        <Portfolio />
        <Timeline />
        <Team />
        <Contact />
      </div>
    );
  }
}

export default Home;
