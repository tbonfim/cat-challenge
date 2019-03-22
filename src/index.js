import React from "react";
import ReactDOM from "react-dom";

import Carousel from "./components/carousel";

import "./styles.css";

class App extends React.Component {
  render() {
    return <Carousel />;
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
