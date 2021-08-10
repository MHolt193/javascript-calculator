import Button from "react-bootstrap/Button";

const Keypad = (props) => {
  return (
    <div>
      <Button variant="primary" id="zero" onClick={props.numClickHandler}>
        0
      </Button>
      <Button variant="primary" id="decimal" onClick={props.decimalHandler}>
        .
      </Button>
      <Button variant="primary" id="equals" onClick={props.clickEqualsHandler}>
        =
      </Button>
      <Button variant="primary" id="one" onClick={props.numClickHandler}>
        1
      </Button>
      <Button variant="primary" id="two" onClick={props.numClickHandler}>
        2
      </Button>
      <Button variant="primary" id="three" onClick={props.numClickHandler}>
        3
      </Button>
      <Button variant="primary" id="four" onClick={props.numClickHandler}>
        4
      </Button>
      <Button variant="primary" id="five" onClick={props.numClickHandler}>
        5
      </Button>
      <Button variant="primary" id="six" onClick={props.numClickHandler}>
        6
      </Button>
      <Button variant="primary" id="seven" onClick={props.numClickHandler}>
        7
      </Button>
      <Button variant="primary" id="eight" onClick={props.numClickHandler}>
        8
      </Button>
      <Button variant="primary" id="nine" onClick={props.numClickHandler}>
        9
      </Button>
      <Button
        variant="primary"
        id="subtract"
        onClick={props.operatorClickHandler}
      >
        -
      </Button>
      <Button variant="primary" id="add" onClick={props.operatorClickHandler}>
        +
      </Button>
      <Button
        variant="primary"
        id="multiply"
        onClick={props.operatorClickHandler}
      >
        x
      </Button>
      <Button
        variant="primary"
        id="divide"
        onClick={props.operatorClickHandler}
      >
        &#247;
      </Button>
      <Button variant="primary" id="clear" onClick={props.clearHandler}>
        C
      </Button>
    </div>
  );
};
export default Keypad;
