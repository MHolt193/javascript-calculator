import React from "react";
import Display from "./Display";
import Keypad from "./Keypad";
import Container from "react-bootstrap/Container";

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display: "0",
      num1: "0",
      operator: "",
      num2: "0",
      total: 0,
    };
    this.clearHandler = this.clearHandler.bind(this);
    this.numClickHandler = this.numClickHandler.bind(this);
    this.operatorClickHandler = this.operatorClickHandler.bind(this);
    this.equalsHandler = this.equalsHandler.bind(this);
    this.clickEqualsHandler = this.clickEqualsHandler.bind(this);
    this.decimalHandler = this.decimalHandler.bind(this);
    // this.subtractClickHandler = this.subtractClickHandler.bind(this);
  }

  /* keypressHandler = () =>{

    }*/
  numClickHandler = (event) => {
    if (this.state.display === "0") {
      this.setState({
        display: event.target.innerText,
        num1: event.target.innerText,
      });
    } else if (this.state.display !== "0" && this.state.operator === "") {
      this.setState({
        display: this.state.display + event.target.innerText,
        num1: this.state.num1 + event.target.innerText,
      });
    } else if (this.state.operator !== "" && this.state.num2 === "0") {
      this.setState({
        display: this.state.display + event.target.innerText,
        num2: event.target.innerText,
      });
    } else if (this.state.num2 !== "0") {
      this.setState({
        display: this.state.display + event.target.innerText,
        num2: this.state.num2 + event.target.innerText,
      });
    }
  };
  operatorClickHandler = (event) => {
    if (this.state.operator === "") {
      this.setState({
        display: this.state.display + event.target.innerText,
        operator: event.target.innerText,
      });
    } else if (this.state.operator !== "") {
      this.equalsHandler();
      this.setState({
        display: this.state.display + event.target.innerText,
        operator: event.target.innerText,
      });
    }
  };
  /*subtractClickHandler = (event) => {
    if (this.state.operator === "") {
      this.setState({
        display: this.state.display + event.target.innerText,
        operator: event.target.innerText,
      });
    } else if (this.state.operator !== "" && event.target.innerText === "-") {
      this.setState((prevState) => ({
        display: this.state.display + event.target.innerText,
        num2: event.target.innerText + prevState.num2,
      }));
    }
    //using this along with operator brings me to 14/16 tests passed.
  }; */

  equalsHandler = () => {
    if (this.state.operator === "-") {
      let total = parseFloat(this.state.num1) - parseFloat(this.state.num2);
      this.setState({
        total: total,
        display: total.toString(),
        num1: total.toString(),
        num2: "0",
        operator: "",
      });
    } else if (this.state.operator === "+") {
      let total = parseFloat(this.state.num1) + parseFloat(this.state.num2);
      this.setState({
        total: total,
        display: total.toString(),
        num1: total.toString(),
        num2: "0",
        operator: "",
      });
    } else if (this.state.operator === "x") {
      let total = parseFloat(this.state.num1) * parseFloat(this.state.num2);
      this.setState({
        total: total,
        display: total.toString(),
        num1: total.toString(),
        num2: "0",
        operator: "",
      });
    } else if (this.state.operator === "÷") {
      let total = parseFloat(this.state.num1) / parseFloat(this.state.num2);
      this.setState({
        total: total,
        display: total.toString(),
        num1: total.toString(),
        num2: "0",
        operator: "",
      });
    }
  };
  clickEqualsHandler = () => {
    this.equalsHandler();
  };
  clearHandler = () => {
    this.setState({
      display: "0",
      operator: "",
      num1: "0",
      num2: "0",
      total: 0,
    });
  };
  decimalHandler = (event) => {
    if (this.state.display === "0" && this.state.num1.includes(".") === false) {
      this.setState({
        display: this.state.display + event.target.innerText,
        num1: this.state.display + event.target.innerText,
      });
    } else if (
      this.state.display !== "0" &&
      this.state.operator === "" &&
      this.state.num1.includes(".") === false
    ) {
      this.setState({
        display: this.state.display + event.target.innerText,
        num1: this.state.num1 + event.target.innerText,
      });
    } else if (
      this.state.operator !== "" &&
      this.state.num2 === "0" &&
      this.state.num2.includes(".") === false
    ) {
      this.setState({
        display: this.state.display + event.target.innerText,
        num2: this.state.num2 + event.target.innerText,
      });
    } else if (
      this.state.num2 !== "0" &&
      this.state.num2.includes(".") === false
    ) {
      this.setState({
        display: this.state.display + event.target.innerText,
        num2: this.state.num2 + event.target.innerText,
      });
    }
  };
  render() {
    return (
      <Container>
        <Display value={this.state.display} />
        <Keypad
          clearHandler={this.clearHandler}
          numClickHandler={this.numClickHandler}
          operatorClickHandler={this.operatorClickHandler}
          clickEqualsHandler={this.clickEqualsHandler}
          decimalHandler={this.decimalHandler}
        />
      </Container>
    );
  }
}
export default Calculator;
