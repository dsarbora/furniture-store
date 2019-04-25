import React from "react";
import FurnitureList from "./FurnitureList";
import TypeFilter from "./TypeFilter";
import ColorFilter from "./ColorFilter";
import PropTypes from "prop-types";

function Store(props) {
  let offeredTypes = ["sofa", "chair", "rug", "table"];
  function setType(type) {
    console.log("hi " + type);
  }
  return (
    <div>
      <style jsx>{`
        div {
          text-align: center;
        }
      `}</style>
      <div className="typeFilter">
        <TypeFilter setType={setType} types={offeredTypes} />
      </div>
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
