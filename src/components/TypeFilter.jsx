import React from "react";
import PropTypes from "prop-types";

function TypeFilter(props) {
  function TypeButtonClicked(type) {
    props.setType(type);
  }
  //   function getType(type) {
  //     let Type = "";
  //     for (let i = 0; (i = type.length); i++) {
  //       Type += type[i];
  //       if ((i = 0)) {
  //         Type = Type.toUpperCase();
  //       }
  //     }
  //     return Type;
  // let Type = type.split('');
  // Type[0]=Type[0].toUpperCase();
  // return Type.join();
  //}

  return (
    <div>
      {props.types.map((type, index) => (
        <button key={index} onClick={() => TypeButtonClicked(type)}>
          {type}
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
