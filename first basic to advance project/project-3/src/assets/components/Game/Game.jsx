import React from "react";
import "./Game.css";

const Game = () => {
  return (
    <div>
      <div className="game">
        <div className="container">
          <div className="row">
            <div className="col-6">
              <div className="total-score">
                <h1>0</h1>
                Total Score
              </div>
            </div>
            <div className="col-6">
              <div className="selete">
                <span>Plz chose the number</span>
                <div className="allnumber">
                  <button>1</button>
                </div>
                <h4>Select Number</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Game;
