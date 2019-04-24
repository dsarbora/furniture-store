import React from "react";
import Color from "./Color";
import PropTypes from "prop-types";

function FurniturePiece(props) {
  return (
    <div className="frame">
      <style jsx>{`
        .frame {
          height: 400px;
          width: 300px;
          border: 1px solid black;
          margin: 50px;
          background-color: #dce;
          color: black;
        }
        .frame:hover {
          transform: scale(1.05);
          box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.2);
        }
        .head {
          text-align: center;
        }
        .container {
          display: flex;
        }
        Color:hover {
          transform: scale(1.05);
        }
        .image {
          max-height: 175px;
          max-width: 300px;
        }
      `}</style>
      <div className="head">
        <div className="container">
          {props.colors.map((color, index) => (
            <Color name={color} key={index} />
          ))}
        </div>
        <p>
          <strong>{props.name}</strong>
        </p>
        <p>{props.type}</p>
        <p>{props.deliverable}</p>
        <p>{props.description}</p>
        <img className="image" src={props.imageUrl} />
      </div>
    </div>
  );
}

FurniturePiece.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  imageUrl: PropTypes.string,
  description: PropTypes.string,
  colors: PropTypes.array,
  type: PropTypes.string,
  deliverable: PropTypes.bool,
  cost: PropTypes.number,
  stock: PropTypes.number
};

export default FurniturePiece;
