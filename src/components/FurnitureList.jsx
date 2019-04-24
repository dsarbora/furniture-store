import React, { Component } from "react";
import FurniturePiece from "./FurniturePiece";
import Color from "./Color";
import PropTypes from "prop-types";
const urlApi = `https://it771mq5n2.execute-api.us-west-2.amazonaws.com/production/furniture`;

class FurnitureList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      requestFailed: false
    };
  }

  componentDidMount() {
    fetch(urlApi)
      .then(response => {
        if (!response.ok) {
          throw Error("Network request failed");
        }
        return response;
      })
      .then(d => d.json())
      .then(
        d => {
          this.setState({
            data: d
          });
        },
        () => {
          this.setState({
            requestFailed: true
          });
        }
      );
  }

  selectedFurniture() {
    let data = this.state.data.body.data;
    let selectedFurniture = [];
    data.forEach(furniture => {
      if (
        (!props.selectedColor && !props.selectedType) ||
        furniture.colors.includes(selectedColor) ||
        furniture.type == selectedType
      ) {
        selectedFurniture.push(furniture);
      }
    });
    return selectedFurniture;
  }

  render() {
    if (this.state.requestFailed) return <p>Failed!</p>;
    if (!this.state.data) return <p>Loading...</p>;
    //var data = this.state.data.body.data;
    //also changed "data" on line 62 to selectedFurniture function
    return (
      <div>
        <style jsx>{`
          div {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
          }
        `}</style>
        {selectedFurniture().map((item, itemIndex) => (
          <FurniturePiece
            name={item.name}
            type={item.type}
            deliverable={item.deliverable}
            description={item.description}
            key={itemIndex}
            colors={item.colors}
            imageUrl={item.imageUrl}
          />
        ))}
      </div>
    );
  }
}

FurnitureList.propTypes = {
  selectedColor: PropTypes.string,
  selectedType: PropTypes.string
};
export default FurnitureList;
