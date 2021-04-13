import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./App.css";
/*these are all the pokeballs that the user can click,
The reason some variables and elements are called mines is that this game was originally meant to
 be a mine sweeper type game however I got the idea to change it into a pokemon game*/

//the images of pokemon were made by dekunobou-kizakura , images were found on deviant art
import Nav from "./components/nav";

import Mines from "./components/Mines";

import Mines2 from "./components/MinesLevel2";

import Mines3 from "./components/MinesLevel3";

import Help from "./components/Help";
//initialising counter variable
let newCount = 0;
class App extends Component {
  constructor(props) {
    super(props);
    // This binding is necessary to make `this` work in the callback
    this.counter = this.counter.bind(this);

    //In the constructor we initialise the state.
    this.state = { input: 0 };
  }

  //this function updates the state based on how many times the user presses the correct pokeball
  counter(count) {
    this.setState({ input: count });

    newCount = newCount + parseInt(count);
  }

  render() {
    return (
      <div class="mineDivFront">
        <Router>
          <Nav />

          <Switch>
            <Route exact path="/">
              <Mines onCounter={this.counter} newCountAmount={newCount} />
            </Route>
            <Route exact path="/level2">
              <Mines2 onCounter={this.counter} newCountAmount={newCount} />
            </Route>

            <Route exact path="/level3">
              <Mines3 onCounter={this.counter} newCountAmount={newCount} />
            </Route>

            <Route exact path="/help">
              <Help />
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
