import React from "react";
import FurnitureList from "./FurnitureList";
import PropTypes from "prop-types";

function Store(props) {
  return (
    <div>
      <style jsx>{`
        div {
          text-align: center;
        }
      `}</style>
      <h4 className="instructions">
        Double click the colors to search furniture.
      </h4>
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
