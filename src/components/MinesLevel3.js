import React from "react";

import winImg from "./images/win3.jpg";
import loseImg from "./images/lose.png";
class Mines2 extends React.Component {
  constructor(props) {
    super(props);
    //Restarts page
    this.restart = this.restart.bind(this);
    // This binding is necessary to make `this` work in the callback
    this.unsafe = this.unsafe.bind(this);
    this.safe = this.safe.bind(this);
  }

  //this function gets the button that is clicked, changes it's colour and disables it,
  //it also sends data to the parent class so it can update the state
  //it also checks if the user has pressed enough correct buttons to win
  safe(e) {
    let button = document.getElementById(e.target.value);
    button.style.backgroundColor = "white";
    button.style.display = "none";

    button.disabled = "true";
    let count = 1;
    //sending count to parent class so it can update the  variable
    this.props.onCounter(count);
    //condition for when the user wins
    if (this.props.newCountAmount === 14) {
      let mines = document.getElementById("mineDiv");

      let win1 = document.getElementById("win1");
      let lose1 = document.getElementById("lose1");

      win1.style.display = "block";

      lose1.style.display = "none";
      mines.style.display = "none";
      let ui = document.getElementById("userInterface");
      ui.style.display = "none";
    }
  }
  //this function lets the user know that they have lost
  unsafe(e) {
    let mines = document.getElementById("mineDiv");

    let win1 = document.getElementById("win1");
    let lose1 = document.getElementById("lose1");

    win1.style.display = "none";

    lose1.style.display = "block";
    mines.style.display = "none";
    let ui = document.getElementById("userInterface");
    ui.style.display = "none";
  }

  restart() {
    window.location.reload();
  }
  componentDidMount() {
    let win1 = document.getElementById("win1");
    let lose1 = document.getElementById("lose1");

    win1.style.display = "none";

    lose1.style.display = "none";
  }
  /*these are all the pokeballs that the user can click,
  The reason some variables and elements are called mines is that this game was originally meant to
   be a mine sweeper type game however I got the idea to change it into a pokemon game*/
  render() {
    return (
      <header className="">
        <div id="userInterface">
          <h2 id="title">Find The Pokemon</h2>
          <h2>Level 3</h2>
          <h2> Score : {this.props.newCountAmount}</h2>
        </div>
        <div id="mineDiv">
          <div class="mineRow">
            <button class="safeMine " onClick={this.unsafe} value="1" id="1">
              {" "}
            </button>
            <button class="safeMine " onClick={this.safe} value="2" id="2">
              {" "}
            </button>
            <button class="safeMine " onClick={this.safe} value="3" id="3">
              {" "}
            </button>
            <button class="safeMine " onClick={this.safe} value="4" id="4">
              {" "}
            </button>
            <button class="safeMine " onClick={this.safe} value="5" id="5">
              {" "}
            </button>
          </div>

          <div class="mineRow">
            <button class="safeMine " onClick={this.safe} value="6" id="6">
              {" "}
            </button>
            <button class="safeMine " onClick={this.safe} value="7" id="7">
              {" "}
            </button>
            <button class="safeMine " onClick={this.unsafe} value="8" id="8">
              {" "}
            </button>
            <button class="safeMine " onClick={this.safe} value="9" id="9">
              {" "}
            </button>
            <button class="safeMine " onClick={this.safe} value="10" id="10">
              {" "}
            </button>
          </div>
          <div class="mineRow">
            <button class="safeMine " onClick={this.safe} value="11" id="11">
              {" "}
            </button>
            <button class="safeMine " onClick={this.safe} value="12" id="12">
              {" "}
            </button>
            <button class="safeMine " onClick={this.unsafe} value="13" id="13">
              {" "}
            </button>
            <button class="safeMine " onClick={this.safe} value="14" id="14">
              {" "}
            </button>
            <button class="safeMine " onClick={this.safe} value="15" id="15">
              {" "}
            </button>
          </div>
          <div class="mineRow">
            <button class="safeMine " onClick={this.safe} value="16" id="16">
              {" "}
            </button>
            <button class="safeMine " onClick={this.safe} value="17" id="17">
              {" "}
            </button>
            <button class="safeMine " onClick={this.safe} value="18" id="18">
              {" "}
            </button>
            <button class="safeMine " onClick={this.unsafe} value="19" id="19">
              {" "}
            </button>
            <button class="safeMine " onClick={this.safe} value="20" id="20">
              {" "}
            </button>
          </div>

          <div class="mineRow">
            <button class="safeMine " onClick={this.safe} value="21" id="21">
              {" "}
            </button>
            <button class="safeMine " onClick={this.safe} value="22" id="22">
              {" "}
            </button>
            <button class="safeMine " onClick={this.safe} value="23" id="23">
              {" "}
            </button>
            <button class="safeMine " onClick={this.safe} value="24" id="24">
              {" "}
            </button>
            <button class="safeMine " onClick={this.safe} value="25" id="25">
              {" "}
            </button>
          </div>
        </div>
        <div id="win1" className="result">
          <h3>You found! </h3>
          <h1>Entei</h1>
          <img src={winImg} alt="Entei" />
        </div>

        <div id="lose1">
          <h3>You clicked the wrong pokeball! </h3>
          <h2>press restart to try again</h2>
          <img src={loseImg} alt="pikachu sad" />
        </div>

        <div id="restart">
          <br />

          <button onClick={this.restart}>restart</button>
        </div>
      </header>
    );
  }
}

export default Mines2;
