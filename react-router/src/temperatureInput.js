import React, { Component } from "react";

class TemperatureInput extends Component {
  scaleNames = {
    c: "Celsius",
    f: "Fahrenheit"
  };

  handleChange = e => {
    this.props.onTemperatureChange(e.target.value);
  };

  render() {
    const temperature = this.props.temperature;
    const scale = this.props.scale;
    return (
      <fieldset>
        <legend>Enter temperature in {this.scaleNames[scale]}:</legend>
        <input value={temperature} onChange={e => this.handleChange(e)} />
      </fieldset>
    );
  }
}

export default TemperatureInput;
