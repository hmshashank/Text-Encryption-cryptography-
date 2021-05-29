// import logo from './logo.svg';
import "./App.css";
import React from "react";

class about extends React.Component {
  getData() {
    localStorage.setItem("myData", true);
  }
  setData() {
    let data = localStorage.getItem("myData");
    console.log(data);
  }
  render() {
    return (
      <div className="about">
        <h1>Enter your text here.!</h1>
        <input type="text"></input>
        <button onClick={() => this.setData()}>Encrypt</button>
        <button onClick={() => this.getData()}>Decrypt</button>
      </div>
    );
  }
}
export default about;
