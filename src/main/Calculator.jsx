import React, { Component } from "react";
import "./Calculator.css";

export default class Calculator extends Component {

  setOperation(operation) {
    if (this.state.current === 0) {
      this.setState({ operation, current: 1, clearDisplay: true });
    } else {
        const equals = operation === '='
        const currentOperation = this.state.operation

        const values = [...this.state.values]
        try{
            values[0] = eval(`${values[0]} ${currentOperation} ${values[1]}`)

        } catch(e){
            values[0] = this.state.values[0]
        }
        values[1] = 0

        this.setState({
            displayValue: values[0],
            operation: equals ? null : operation,
            current: equals ? 0 : 1,
            clearDisplay: !equals,
            values
        })
    }
  }

  render() {
    // Garantem que o this vai estar correto
    // const addDigit = n => this.addDigit(n)
    // const setOperation = op => this.setOperation(op)
    return (
      <div className="calculator">

      </div>
    );
  }
}
