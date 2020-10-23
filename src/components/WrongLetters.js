import React from 'react';

function WrongLetters({ wrongLetters }) {
  return (
    <div className="wrong-letters-container">
      <div>
        {wrongLetters.length > 0 && <p>Wrong</p>}
        {wrongLetters
          .map((letter, i) => <span key={i}>{letter}</span>)
          //   reduce adding ',' between all spans with wrong letter
          .reduce(
            (prev, curr) => (prev === null ? [curr] : [prev, ', ', curr]),
            null
          )}
      </div>
    </div>
  );
}

export default WrongLetters;
