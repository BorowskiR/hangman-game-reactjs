import React from 'react';

function WrongLetters({ wrongLetters }) {
  return (
    <div class="wrong-letters-container">
      <div>
        {wrongLetters.length > 0 && <p>Wrong</p>}
        {wrongLetters
          .map((letter, i) => <span key={i}>{letter}</span>)
          //   reduce adding ',' between all spans with wrong letter
          .reduce(
            (prev, cur) => (prev === null ? [cur] : [prev, ', ', 'cur']),
            null
          )}
      </div>
    </div>
  );
}

export default WrongLetters;
