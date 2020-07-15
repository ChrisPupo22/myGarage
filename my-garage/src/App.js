import React, { Component } from "react";
import CarCard from "./components/carCard";
import CarForm from "./components/addCarForm";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="jumbotron">
          <h1 className="card-title">Welcome to myGarage</h1>
          <br/><br/>
          {/* <CarCard /> */}
          <CarForm />
        </div>
      </div>
    );
  }
}

export default App;
