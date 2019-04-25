import React, { Component } from "react";
import FurniturePiece from "./FurniturePiece";
import Color from "./Color";
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
  }

  selectColor(color) {
    this.setState({
      selectedColor: color
    });
    this.selectedFurniture();
  }

  // componentDidMount() {
  //   fetch(urlApi)
  //     .then(response => {
  //       if (!response.ok) {
  //         throw Error("Network request failed");
  //       }
  //       return response;
  //     })
  //     .then(d => d.json())
  //     .then(
  //       d => {
  //         this.setState({
  //           data: d,
  //           selectedFurnitureFinal: d.body.data
  //         });
  //       },
  //       () => {
  //         this.setState({
  //           requestFailed: true
  //         });
  //       }
  //     );
  // }

  selectedFurniture() {
    let data = this.state.data.body.data;
    var selectedFurniture = [];

    data.forEach(furniture => {
      if (
        (!this.state.selectedColor && !this.state.selectedType) ||
        furniture.colors.includes(this.state.selectedColor) ||
        furniture.type == this.state.selectedType
      ) {
        console.log(this);
        selectedFurniture.push(furniture);
      }
    });

    setTimeout(() => {
      this.setState({
        selectedFurnitureFinal: selectedFurniture
      });
    }, 20);
  }

  render() {
    // if (this.state.requestFailed) return <p>Failed!</p>;
    // if (!this.state.data) return <p>Loading...</p>;
    //var data = this.state.data.body.data;
    //also changed "data" on line 62 to selectedFurniture function
    return (
      <div>
        <div className="flexBox">
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
        </div>
        <style jsx>{`
          .grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
          }
    
        .flexBox {
          display: grid;
          grid-template-columns: repeat(9, 1fr);
          text-align: center;
        }
        .button {
          padding: 30px;
          margin: 10px;
          text-align: center;
        }
        .button0 {
            background-color: tan;
        }
        .button1 {
            background-color: black;
            color: white;
        }
        .button2 {
            background-color: white;
            color: black;
        }
        .button3{
            background-color: red;
            color: white;
        }
        .button4{
            background-color: yellow;
        }
        .button5{
            background-color: brown;
            color: white;
        }
        .button6{
            background-color: purple;
            color: white;
        }
        .button7{
            background-color: olive;
            color: white;
        }
        .button8{
            background-color: green;
            color: white;
        }
        "tan",
    "black",
    "white",
    "red",
    "yellow",
    "brown",
    "purple",
    "olive",
    "green"
        `}</style>
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
