import React, { Component } from "react";
import "./Calculator.css";

const initialState = {
  displayValue: "0",
  clearDisplay: false,
  operation: null,
  values: [0, 0],
  current: 0,
};

export default class Calculator extends Component {
  state = { ...initialState };

  constructor(props) {
    super(props);

    // Garantem que o this vai estar correto
    this.clearMemory = this.clearMemory.bind(this);
    this.setOperation = this.setOperation.bind(this);
    this.addDigit = this.addDigit.bind(this);
  }

  clearMemory() {
    console.log("limpar");
    this.setState({ ...initialState });
  }

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

  addDigit(n) {
    // Evita ter 2 pontos na calculadora
    if (n === "." && this.state.displayValue.includes('.')) {
      return;
    }

    // Evitar zeros a esquerda
    const clearDisplay = this.state.displayValue === '0'
       || this.state.clearDisplay;
    const currentValue = clearDisplay ? "" : this.state.displayValue;
    const displayValue = currentValue + n;
    this.setState({ displayValue, clearDisplay: false });

    if (n !== ".") {
      const i = this.state.current;
      const newValue = parseFloat(displayValue);
      const values = [...this.state.values];
      values[i] = newValue;
      this.setState({ values });
      console.log(values);
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
