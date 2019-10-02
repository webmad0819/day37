import React, { Component } from "react";

export default class StockMarketPainter extends Component {
  //the component's constructor gets executed first, second getDerivedStateFromProps and third render()
  //from that moment on, getDerivedStateFromProps will be called everytime the props change
  constructor(props) {
    super();
    this.state = {
      name: props.name,
      stockMarketValue: props.stockMarketValue,
      color: undefined
    };
  }

  // this static method will be triggered every time the props send by the parent (App in this case)
  // change.
  static getDerivedStateFromProps(nextProps, prevState) {
    // this indicates the new props sent by App
    console.log(nextProps);
    // this indicates the previous state of this component
    console.log(prevState);

    // this returns the new state, here you have an opportunity to compute
    // differences between the new props and the previous state,
    // hence you can do for exmaple a color change depending on the previous and new value
    return {
      name: nextProps.name,
      stockMarketValue: nextProps.stockMarketValue,
      color:
        prevState.stockMarketValue > nextProps.stockMarketValue
          ? "red"
          : "green"
    };
  }

  render() {
    return (
      // in order to specify style, you can use the classical 'style' of DOM
      // you have to pass and object containing the properties in camelCase + the property value
      <div style={{ fontSize: 20, color: this.state.color }}>
        {this.state.name} value is {this.state.stockMarketValue} $
      </div>
    );
  }
}
