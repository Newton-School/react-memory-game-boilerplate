import React, { useState, useEffect } from "react";
import "../styles/App.css";

const cardImages = [
  {
    src: "/src/images/cheeseburger.png",
    name: "cheeseburger",
    matched: false,
  },
  { src: "/src/images/fries.png", name: "fries", matched: false },
  { src: "/src/images/hotdog.png", name: "hotdog", matched: false },
  { src: "/src/images/icecream.png", name: "icecream", matched: false },
  { src: "/src/images/milkshake.png", name: "milkshake", matched: false },
  { src: "/src/images/pizza.png", name: "pizza", matched: false },
];

const SingleCard = ({ card }) => {

  return (
    <div className={`card ${card.name}`}>
      {/* <div className={flipped ? "flipped" : ""}> */}
        {/* <img className="front" src={card.src} alt="card front" /> */}
        <img className="back" src="/src/images/blank.png" alt="cover" />
      {/* </div> */}
    </div>
  );
};

const App = () => {
  const [cards, setCards] = useState([]);
  const [turns, setTurns] = useState(0);
  const [score, setScore] = useState(0); 
  //10 points for each correct match and -1 point for incorrect match
  
  const [gameOver, setGameOver] = useState(false);
  const [choiceOne, setChoiceOne] = useState(null);
  const [choiceTwo, setChoiceTwo] = useState(null);
  const [disabled, setDisabled] = useState(false);

  //check game over condition:


  // Set up the new game


  // handle a choice

  // compare 2 selected cards


  // reset choices & increase turn


  // start new game on first load


  return (
    <div className="App">
      <h1>Memory Game</h1>
      <p>
        <span id="turns">Turns: {turns}</span> |{" "}
        <span id="score">Score: {score}</span>
      </p>
      <button id="new-game">
        New Game
      </button>

      <div className="card-grid" id="card-grid">
        {cards.map((card) => (
          <SingleCard card={card} />
        ))}
      </div>
    </div>
  );
};

export default App;
