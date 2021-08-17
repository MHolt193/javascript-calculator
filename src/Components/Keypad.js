import { ButtonGroup } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import "./Keypad.css";

const Keypad = (props) => {
  return (
    <Container className="key-pad">
      <Row>
        <Col>
          <ButtonGroup className="button-group">
            <Button variant="primary" id="clear" onClick={props.clearHandler}>
              C
            </Button>
            <Button
              variant="primary"
              id="add"
              onClick={props.operatorClickHandler}
            >
              +
            </Button>
            <Button
              variant="primary"
              id="subtract"
              onClick={props.subtractClickHandler}
            >
              -
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
          </ButtonGroup>
        </Col>
      </Row>

      <Row>
        <Col>
          <ButtonGroup className="button-group">
            <Button
              variant="primary"
              id="seven"
              onClick={props.numClickHandler}
            >
              7
            </Button>
            <Button
              variant="primary"
              id="eight"
              onClick={props.numClickHandler}
            >
              8
            </Button>
            <Button variant="primary" id="nine" onClick={props.numClickHandler}>
              9
            </Button>
          </ButtonGroup>
        </Col>
      </Row>

      <Row>
        <Col>
          <ButtonGroup className="button-group">
            <Button variant="primary" id="four" onClick={props.numClickHandler}>
              4
            </Button>
            <Button variant="primary" id="five" onClick={props.numClickHandler}>
              5
            </Button>
            <Button variant="primary" id="six" onClick={props.numClickHandler}>
              6
            </Button>
          </ButtonGroup>
        </Col>
      </Row>

      <Row>
        <Col>
          <ButtonGroup className="button-group">
            <Button variant="primary" id="one" onClick={props.numClickHandler}>
              1
            </Button>
            <Button variant="primary" id="two" onClick={props.numClickHandler}>
              2
            </Button>
            <Button
              variant="primary"
              id="three"
              onClick={props.numClickHandler}
            >
              3
            </Button>
          </ButtonGroup>
        </Col>
      </Row>
      
      <Row>
        <Col>
          <ButtonGroup className="button-group">
            <Button
              variant="primary"
              id="decimal"
              onClick={props.decimalHandler}
            >
              .
            </Button>
            <Button variant="primary" id="zero" onClick={props.numClickHandler}>
              0
            </Button>
            <Button
              variant="primary"
              id="equals"
              onClick={props.clickEqualsHandler}
            >
              =
            </Button>
          </ButtonGroup>
        </Col>
      </Row>
    </Container>
  );
};
export default Keypad;
