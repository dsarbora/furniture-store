import React from "react";
import PropTypes from "prop-types";

function TypeFilter(props) {
  function typeButtonClicked(type) {
    props.setType(type);
  }
  function typeToUpper(type) {
    let Type = type.split("");
    Type[0] = Type[0].toUpperCase();
    return Type.join("");
  }

  return (
    <div>
      {props.types.map((type, index) => (
        <button key={index} onClick={() => typeButtonClicked(type)}>
          {typeToUpper(type)}
        </button>
      ))}
    </div>
  );
}

TypeFilter.propTypes = {
  types: PropTypes.array,
  setType: PropTypes.func
};
export default TypeFilter;
