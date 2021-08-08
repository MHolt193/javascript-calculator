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
  equalsHandler = () => {
    if (this.state.operator === "-") {
      let total = parseInt(this.state.num1) - parseInt(this.state.num2);
      this.setState({
        total: total,
        display: total.toString(),
      });
    }else if (this.state.operator === "+") {
        let total = parseInt(this.state.num1) + parseInt(this.state.num2);
        this.setState({
          total: total,
          display: total.toString(),
        });
    }else if (this.state.operator === "x") {
        let total = parseInt(this.state.num1) * parseInt(this.state.num2);
        this.setState({
          total: total,
          display: total.toString(),
        });
    }else if (this.state.operator === "÷") {
        let total = parseInt(this.state.num1) / parseInt(this.state.num2);
        this.setState({
          total: total,
          display: total.toString(),
        });
  };
}
  clickEqualsHandler = () => {
    this.equalsHandler();
    this.setState({
        num1: this.state.display
    })
  }
  clearHandler = () => {
    this.setState({
      display: "0",
      operator: "",
      num1: "0",
      num2: "0",
      total: 0,
    });
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
        />
      </Container>
    );
  }
}
export default Calculator;
