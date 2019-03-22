import React, { Component } from "react";
import Arrow from "./arrow";
import Image from "./image";
import Description from "./description";

class Carousel extends Component {
  constructor() {
    super();
    const initialState = {
      currentPosition: 0,
      pictures: [
        "http://r.ddmcdn.com/w_830/s_f/o_1/cx_0/cy_66/cw_288/ch_162/APL/uploads/2014/10/cat_5-1.jpg",
        "http://ichef.bbci.co.uk/images/ic/720x405/p0517py6.jpg",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Cat_poster_1.jpg/2560px-Cat_poster_1.jpg",
        "http://cdn0.wideopenpets.com/wp-content/uploads/2016/07/90317320_image1.jpg",
        "http://viewpoint-research.co.uk/wp-content/uploads/2017/04/450864271.jpg"
      ]
    };
    this.state = initialState;

    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(e) {
    let newIndex = this.state.currentPosition;
    const totalImages = this.state.pictures.length;

    if (e.currentTarget.classList.contains("left")) {
      newIndex = (newIndex - 1 + totalImages) % totalImages;
    } else {
      newIndex = (newIndex + 1) % totalImages;
    }
    this.setState({ currentPosition: newIndex });
  }
  render() {
    return (
      <div className="carousel">
        <Image src={this.state.pictures[this.state.currentPosition]} />
        <Arrow direction="left" handleClick={this.handleClick} />
        <Arrow direction="right" handleClick={this.handleClick} />
        <Description
          index={this.state.currentPosition + 1}
          total={this.state.pictures.length}
        />
      </div>
    );
  }
}

export default Carousel;
