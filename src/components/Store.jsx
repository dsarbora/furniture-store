import React from "react";
import FurnitureList from "./FurnitureList";
function Store(props) {
  var colors = [
    "tan",
    "black",
    "white",
    "red",
    "yellow",
    "brown",
    "purple",
    "olive",
    "green"
  ];

  return (
    <div>
      <style jsx>{`
        .flexBox {
          display: flex;
        }
        button {
          margin: 15px;
          padding: 15px;
        }
        .button0 {
            background-color: tan;
        }
        .button1 {
            background-color: black;
            color: white;
        }
        .button2 {
            background-color: white;
            color: black;
        }
        .button3{
            background-color: red;
            color: white;
        }
        .button4{
            background-color: yellow;
        }
        .button5{
            background-color: brown;
            color: white;
        }
        .button6{
            background-color: purple;
            color: white;
        }
        .button7{
            background-color: olive;
            color: white;
        }
        .button8{
            background-color: green;
            color: white;
        }
        "tan",
    "black",
    "white",
    "red",
    "yellow",
    "brown",
    "purple",
    "olive",
    "green"
      `}</style>
      <div className="flexBox">
        {colors.map((color, index) => (
          <div key={index}>
            <button className={"button" + index}>{color}</button>
          </div>
        ))}
      </div>

      <h1>Store react</h1>
      <FurnitureList
        selectedColor={props.selectedColor}
        selectedType={props.selectedType}
      />
    </div>
  );
}

Store.propTypes = {
  selectedColor: PropTypes.string,
  selectedType: PropTypes.string
};

export default Store;
