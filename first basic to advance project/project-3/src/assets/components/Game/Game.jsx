import React, { useState } from "react";
import styled from "styled-components";
import "./Game.css";
import d1 from "../../Images/dice_1.png";
import d2 from "../../Images/dice_2.png";
import d3 from "../../Images/dice_3.png";
import d4 from "../../Images/dice_4.png";
import d5 from "../../Images/dice_5.png";
import d6 from "../../Images/dice_6.png";

const Game = () => {
  const arrNo = [1, 2, 3, 4, 5, 6];
  const [selNo, setSelNo] = useState(0);
  console.log(selNo);

  function myChoice() {
    pass;
  }
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
                <div>
                  {arrNo.map((value, index) => (
                    <Box
                      isSelected={value === selNo}
                      onClick={() => setSelNo(value)}
                      key={index}
                    >
                      {value}
                    </Box>
                  ))}
                </div>
                <h4>Select Number</h4>
              </div>
            </div>
          </div>
          {/* main part dice place */}
          <div className="row">
            <div className="col-12">
              <div className="dice">
                <img src={d1} alt="" />
                <h1>Click on Dice to roll</h1>
                <button>Reset Score</button>
                <button>Show Rules</button>
              </div>
            </div>
          </div>

          {/* game rule */}
          <div className="row ">
            <div className="col-12">
              <div className="gameRule">
                <h1>How to play dice game</h1>
                <p>Select any number</p>
                <p>Click on dice image</p>
                <p>
                  after click on dice if selected number is equal to dice number
                  you will get same point as dice{" "}
                </p>
                <p>if you get wrong guess then 2 point will be dedcuted </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Game;

const Box = styled.div`
  border: 1px solid black;
  width: 50px;
  padding: 10px 20px;
  background-color: ${(props) => (props.isSelected ? "black" : "white")};
  color: ${(props) => (props.isSelected ? "white" : "black")};
  margin: 0 10px;
  display: inline-block;
`;
