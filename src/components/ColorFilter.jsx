import React from "react";

function ColorFilter(props) {
  function setColor(color) {}
  return (
    <div className="flexBox">
      <style jsx>{`
        .grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
        }

        .flexBox {
          display: grid;
          grid-template-columns: repeat(9, 1fr);
          text-align: center;
        }
        .button {
          padding: 30px;
          margin: 10px;
          text-align: center;
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
        .button3 {
          background-color: red;
          color: white;
        }
        .button4 {
          background-color: yellow;
        }
        .button5 {
          background-color: brown;
          color: white;
        }
        .button6 {
          background-color: purple;
          color: white;
        }
        .button7 {
          background-color: olive;
          color: white;
        }
        .button8 {
          background-color: green;
          color: white;
        }
      `}</style>
      {props.colors.map((color, index) => (
        <div key={index}>
          <div
            onClick={() => props.selectColor(color)}
            className={"button" + index + " button"}
          >
            {color}
          </div>
        </div>
      ))}
    </div>
  );
}

export default ColorFilter;
