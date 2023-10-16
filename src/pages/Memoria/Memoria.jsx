import "./Memoria.css";
import React, { useState, useEffect } from 'react';

const shuffleArray = (array) => {
  let shuffledArray = array.slice();
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }
  return shuffledArray;
};

const Memoria = () => {
  const [cards, setCards] = useState([
    '🐱', '🐶', '🐰', '🐻', '🐼', '🐨', '🦁', '🐯', '🐷', '🐵',
    '🦊', '🐸', '🐙', '🦑', '🦐', '🦀', '🐡', '🐢', '🦕', '🐊'
  ]);

  const [flippedIndices, setFlippedIndices] = useState([]);
  const [matchedPairs, setMatchedPairs] = useState([]);

  useEffect(() => {
    if (flippedIndices.length === 2) {
      const [firstIndex, secondIndex] = flippedIndices;
      if (cards[firstIndex] === cards[secondIndex]) {
        setMatchedPairs([...matchedPairs, cards[firstIndex]]);
      }
      setTimeout(() => setFlippedIndices([]), 1000);
    }
  }, [flippedIndices, cards, matchedPairs]);

  const handleCardClick = (index) => {
    if (flippedIndices.length < 2 && !flippedIndices.includes(index)) {
      setFlippedIndices([...flippedIndices, index]);
    }
  };

  const shuffledCards = shuffleArray(cards);

  return (
    <div className="App">
      <h1>Juego de Memoria</h1>
      <div className="card-container">
        {shuffledCards.map((card, index) => {
          const isFlipped = flippedIndices.includes(index) || matchedPairs.includes(card);
          return (
            <div
              key={index}
              className={`card ${isFlipped ? 'flipped' : ''}`}
              onClick={() => handleCardClick(index)}
            >
              {isFlipped ? card : '❓'}
            </div>
          );
        })}
      </div>
    </div>
  );
};


export default Memoria