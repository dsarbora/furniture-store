import React from "react";

function Homepage() {
  return (
    <div>
      <div className="head">
        <style global jsx>
          {`
            .head {
              text-align: center;
              font-size: 30px;
            }
            .row {
              height: 300px;
              display: grid;
              grid-template-columns: 1fr 1fr 1fr;
            }
            .panel {
              background-color: #fed;
              border: 1px solid black;
              padding-top: 25px;
              margin: 15px;
              height: 100px;
              text-align: center;
            }
          `}
        </style>
        <h1>Welcome to Wacky Pete's Furniture store!</h1>
        <hr />
      </div>
      <div className="row">
        <div className="col">
          <div className="panel">
            <p>Here at Wacky Pete's we're all about customer satisfaction</p>
          </div>
        </div>
        <div className="col">
          <div className="panel">
            <p>No matter the cost</p>
          </div>
        </div>
        <div className="col">
          <div className="panel">
            <p>We'll make it work</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
