import "./Display.css"
const Display = (props) => {
  return (
    <div className="display" id="display">
      <p>{props.value}</p>
    </div>
  );
};
export default Display;
