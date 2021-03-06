import React, { Component } from "react";

class CarCard extends Component {
  render() {
    return (
        <div className="card-section card text-white bg-primary mb-3" >
          <div className="card-header">Header</div>
          <div className="card-body">
            <h4 className="card-title">Primary card title</h4>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
        </div>
    );
  }
}

export default CarCard;
