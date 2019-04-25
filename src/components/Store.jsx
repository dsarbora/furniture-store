import React from "react";
import FurnitureList from "./FurnitureList";
import ColorFilter from "./ColorFilter";
import PropTypes from "prop-types";

function Store(props) {
  
  return (
    <div>
      <style jsx>{`
        div {
          text-align: center;
        }
      `}</style>
      
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
