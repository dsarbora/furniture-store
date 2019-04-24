import React from "react";
import PropTypes from "prop-types";

function Color(props) {
  if (props) {
    return (
      <div>
        <style jsx>{`
          div {
            height: 40px;
            width: 40px;
            background-color: ${props.name};
          }
        `}</style>
      </div>
    );
  }
}

Color.propTypes = {
  name: PropTypes.string
};

export default Color;
