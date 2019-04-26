import React, { Component } from "react";
import FurnitureList from "./FurnitureList";
import TypeFilter from "./TypeFilter";
import ColorFilter from "./ColorFilter";
import PropTypes from "prop-types";

class Store extends Component {
  debugger;
  constructor(props) {
    super(props);
    this.state = {
      offeredTypes: ["sofa", "chair", "rug", "table"]
    };
    this.setType = this.setType.bind(this);
  }
  setType(type) {
    this.setState({
      chosenType: type
    });
    setTimeout(() => {
      console.log(this.state.chosenType);
    }, 0);
  }
  render() {
    return (
      <div>
        <style jsx>{`
          div {
            text-align: center;
          }
        `}</style>
        <div className="typeFilter">
          <TypeFilter setType={this.setType} types={this.state.offeredTypes} />
        </div>
        <FurnitureList
          selectedColor={this.state.chosenColor}
          selectedType={this.state.chosenType}
        />
      </div>
    );
  }
}
// Store.propTypes = {
//   selectedColor: PropTypes.string,
//   selectedType: PropTypes.string
// };

export default Store;
