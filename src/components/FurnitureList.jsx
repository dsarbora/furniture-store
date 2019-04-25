import React, { Component } from "react";
import FurniturePiece from "./FurniturePiece";
import ColorFilter from "./ColorFilter";
import PropTypes from "prop-types";

const urlApi = `https://it771mq5n2.execute-api.us-west-2.amazonaws.com/production/furniture`;

class FurnitureList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedColor: "",
      selectedType: "",
      colors: [
        "tan",
        "black",
        "white",
        "red",
        "yellow",
        "brown",
        "purple",
        "olive",
        "green"
      ],
      
      requestFailed: false,
      selectedFurnitureFinal: []
    };
    this.selectColor = this.selectColor.bind(this);
  }

  selectColor(color) {
    this.setState({
      selectedColor: color
    });
    this.selectedFurniture();
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
            data: d,
            selectedFurnitureFinal: d.body.data
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
    var selectedFurniture = [];

    setTimeout(() => {
      data.forEach(furniture => {
        if (
          (!this.state.selectedColor && !this.state.selectedType) ||
          furniture.colors.includes(this.state.selectedColor) ||
          furniture.type == this.state.selectedType
        ) {
          selectedFurniture.push(furniture);
        }
      });

      this.setState({
        selectedFurnitureFinal: selectedFurniture
      });
      console.log(this.state.selectedFurnitureFinal);
    }, 1);
  }

  render() {
    if (this.state.requestFailed) return <p>Failed!</p>;
    if (!this.state.data) return <p>Loading...</p>;
    //var data = this.state.data.body.data;
    //also changed "data" on line 62 to selectedFurniture function
    return (
      <div>
        {/* <div className="flexBox">
          {this.state.colors.map((color, index) => (
            <div key={index}>
              <div
                onClick={() => this.selectColor(color)}
                className={"button" + index + " button"}
              >
                {color}
              </div>
            </div>
          ))}
        </div> */}
        <div>
          <h4 className="instructions">
            Double click the colors to search furniture.
          </h4>
          <ColorFilter
            colors={this.state.colors}
            selectColor={this.selectColor}
          />
        </div>
        <div className="grid">
          {this.state.selectedFurnitureFinal.map((item, itemIndex) => (
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
      </div>
    );
  }
}

FurnitureList.propTypes = {
  selectedColor: PropTypes.string,
  selectedType: PropTypes.string
};
export default FurnitureList;
