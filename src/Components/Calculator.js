import React from "react";
import Display from "./Display";
import Keypad from "./Keypad";
import Container from "react-bootstrap/Container";
import Footer from "./Footer";

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display: "0",
      num1: "0",
      operator: "",
      num2: "0",
    };
    this.clearHandler = this.clearHandler.bind(this);
    this.numClickHandler = this.numClickHandler.bind(this);
    this.operatorClickHandler = this.operatorClickHandler.bind(this);
    this.equalsHandler = this.equalsHandler.bind(this);
    this.decimalHandler = this.decimalHandler.bind(this);
    this.subtractClickHandler = this.subtractClickHandler.bind(this);
  }

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
    } else if (
      this.state.operator !== "" &&
      this.state.operator !== "-" &&
      this.state.display.charAt(this.state.display.length - 1) === "-" &&
      this.state.num2 === "0"
    ) {
      this.setState({
        display: this.state.display + event.target.innerText,
        num2: "-" + event.target.innerText,
      });
    }else if (
      this.state.operator !== "" &&
      this.state.operator === "-" &&
      this.state.display.charAt(this.state.display.length - 2) === "-" &&
      this.state.num2 === "0"
    ) {
      this.setState({
        display: this.state.display + event.target.innerText,
        num2: "-" + event.target.innerText,
      });
    }
     else if (this.state.operator !== "" && this.state.num2 === "0") {
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
    } else if (this.state.operator !== "" && this.state.num2 === "0") {
      this.setState({
        display: this.state.display + event.target.innerText,
        operator: event.target.innerText,
      });
    } else if (this.state.operator !== "" && this.state.num2 !== "0") {
      this.equalsHandler();
      this.setState({
        display: this.state.display + event.target.innerText,
        operator: event.target.innerText,
      });
    }
  };
  subtractClickHandler = (event) => {
    let isNum = /[0-9]/;
    this.setState(
      {
        display: this.state.display + event.target.innerText,
      },
      () => {
        if (this.state.operator === "") {
          this.setState({
            display: this.state.display,
            operator: event.target.innerText,
          });
        } else if (
          this.state.operator !== "" &&
          isNum.test(
            this.state.display.charAt(this.state.display.length - 2)
          ) === true
        ) {
          this.equalsHandler();
          this.setState({
            display: this.state.display,
            operator: event.target.innerText,
          });
        } else if (isNum.test(this.state.display.length - 2) === false) {
          this.setState({
            display: this.state.display,
            operator: this.state.operator,
          });
        }
      }
    );
  };

  equalsHandler = () => {
    if (this.state.operator === "-") {
      let total = parseFloat(this.state.num1) - parseFloat(this.state.num2);
      this.setState({
        display: total.toString(),
        num1: total.toString(),
        num2: "0",
        operator: "",
      });
    } else if (this.state.operator === "+") {
      let total = parseFloat(this.state.num1) + parseFloat(this.state.num2);
      this.setState({
        display: total.toString(),
        num1: total.toString(),
        num2: "0",
        operator: "",
      });
    } else if (this.state.operator === "x") {
      let total = parseFloat(this.state.num1) * parseFloat(this.state.num2);
      this.setState({
        display: total.toString(),
        num1: total.toString(),
        num2: "0",
        operator: "",
      });
    } else if (this.state.operator === "÷") {
      let total = parseFloat(this.state.num1) / parseFloat(this.state.num2);
      this.setState({
        display: total.toString(),
        num1: total.toString(),
        num2: "0",
        operator: "",
      });
    }
  };
  clearHandler = () => {
    this.setState({
      display: "0",
      operator: "",
      num1: "0",
      num2: "0",
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
          clickEqualsHandler={this.equalsHandler}
          decimalHandler={this.decimalHandler}
          subtractClickHandler={this.subtractClickHandler}
        />
        <Footer />
      </Container>
    );
  }
}
export default Calculator;
