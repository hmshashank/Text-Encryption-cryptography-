import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Shop from "./shop";
import Nav from "./nav";
import About from "./about";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import axios, { post } from "axios";
import SubmitComponent from "./fileread";

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/" exact component={Home} />

          <Route path="/about" component={About} />
          <Route path="/shop" component={Shop} />
        </Switch>{" "}
      </div>
    </Router>
  );
}

function Home() {
  return (
    <div>
      <h1>choose file to encrypt</h1>
      <SubmitComponent />
    </div>
  );
}
export default App;
