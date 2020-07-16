import React from "react";
// eslint-disable-next-line
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import PageWrapper from "./components/pageWrapper";
import Home from "./components/Pages/Home";
import About from "./components/Pages/About";
import Contact from "./components/Pages/Contact";
import Services from "../src/components/Common/Services";

function App() {
  return (
    <Router>
      <PageWrapper>
        <Route exact={true} path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/services" component={Services} />
        <Route path="/contact" component={Contact} />
      </PageWrapper>
    </Router>
  );
}

export default App;
