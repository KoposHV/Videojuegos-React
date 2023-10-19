import "./Memoria.css";
import React, { useState, useEffect } from 'react';

const cardImages = [
  '🐶', '🐱', '🐰', '🦊', '🐼',
  '🐵', '🦁', '🐯', '🐮', '🐷',
  '🐸', '🐙', '🦑', '🐢', '🦎',
  '🦅', '🦉', '🦇', '🐺', '🐝'
];

const shuffleArray = (array) => {
  return array.sort(() => Math.random() - 0.5);
};

const Memoria = () => {
  const [cards, setCards] = useState(shuffleArray([...cardImages, ...cardImages]));
  const [flippedIndices, setFlippedIndices] = useState([]);
  const [matchedPairs, setMatchedPairs] = useState([]);

  const handleCardClick = (index) => {
    if (flippedIndices.length < 2 && !flippedIndices.includes(index)) {
      setFlippedIndices([...flippedIndices, index]);
    }
  };

  useEffect(() => {
    if (flippedIndices.length === 2) {
      const [firstIndex, secondIndex] = flippedIndices;
      if (cards[firstIndex] === cards[secondIndex]) {
        setMatchedPairs([...matchedPairs, cards[firstIndex]]);
      }
      setTimeout(() => {
        setFlippedIndices([]);
      }, 1000);
    }
  }, [flippedIndices, cards, matchedPairs]);

  const isCardFlipped = (index) => {
    return flippedIndices.includes(index) || matchedPairs.includes(cards[index]);
  };

  return (
    <div className="memory-game">
      {cards.map((card, index) => (
        <div
          key={index}
          className={`card ${isCardFlipped(index) ? 'flipped' : ''}`}
          onClick={() => handleCardClick(index)}
        >
          {isCardFlipped(index) ? card : '?'}
        </div>
      ))}
    </div>
  );
};

export default Memoria;
