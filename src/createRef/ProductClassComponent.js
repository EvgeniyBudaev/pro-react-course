import React, { Component } from "react";

export class ProductClassComponent extends Component {
  constructor(props) {
    super(props);
    this.titleRef = React.createRef(); // { current: null, count: "countRef"}
  }

  handleBuy = () => {
    console.log(this.titleRef);
  };

  render() {
    return (
      <div>
        <h3 ref={this.titleRef}>Notebook</h3>
        <div>Price</div>
        <button onClick={this.handleBuy}>Buy</button>
      </div>
    );
  }
}
