import React from "react";

class Help extends React.Component {




//Giving user instructions
  render() {
    return (
      <div className="help">
  
        <h2>How to Play</h2>
        <h3>-you must click the correct pokeballs to unlock the pokemon,  </h3>
        <h3>-If you click the wrong pokeball , you will lose and will have to restart.</h3>
        <h3>-If you click the correct pokeballs , you win and will unlock an awesome Pokemon</h3>
        <h3>#Bonus tip- memorize where you click so that you dont hit the wrong pokeball </h3>
          <h3>Happy Gaming</h3>

      </div>
    );
  }
}

export default Help;
