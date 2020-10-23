import React, { useEffect } from 'react';
import { checkWin } from '../helpers/helpers';

function Popup({ correctLetters, selectedWord, wrongLetters, setPlayable }) {
  let finalMessage = '';
  let finalMessageRevealWord = '';
  let playable = true;

  if (checkWin(correctLetters, wrongLetters, selectedWord) === 'win') {
    finalMessage = 'Congratulation you win a bag of coins 🥇';
    playable = false;
  } else if (checkWin(correctLetters, wrongLetters, selectedWord) === 'lose') {
    finalMessage = 'You lost :apple: ';
    finalMessageRevealWord = `The word was ${selectedWord}`;
    playable = false;
  }

  useEffect(() => setPlayable(playable));

  return (
    <div
      className="popup-container"
      style={finalMessage !== '' ? { display: 'flex' } : {}}
    >
      <div className="popup">
        <h2>{finalMessage}</h2>
        <h3>{finalMessageRevealWord}</h3>
        <button>Play Again</button>
      </div>
    </div>
  );
}

export default Popup;
