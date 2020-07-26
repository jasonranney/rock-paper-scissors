import React, { useState } from 'react';
import './App.css';

const PlayerCard = ({ color, symbol }) => {
  const style = {
    backgroundColor: color,
    backgroundImage: `url(./img/${symbol}.png)`,
  };

  return <div style={style} className="player-card"></div>;
};

function App() {
  const [playerRed, setPlayerRed] = useState('');
  const [playerBlue, setPlayerBlue] = useState('');
  const [winner, setWinner] = useState('');

  const getSymbol = () => {
    const symbols = ['rock', 'paper', 'scissors'];

    return symbols[Math.floor(Math.random() * 3)];
  };

  const decideWinner = (red, blue) => {
    if (red === blue) {
      return "It's a draw!";
    }

    if (
      (red === 'rock' && blue === 'scissors') ||
      (red === 'paper' && blue === 'rock') ||
      (red === 'scissors' && blue === 'paper')
    ) {
      return 'Red player wins!';
    }

    return 'Blue player wins!';
  };

  const runGame = () => {
    let counter = 0;

    setWinner('');

    const intervalId = setInterval(() => {
      counter++;

      const red = getSymbol();
      const blue = getSymbol();

      setPlayerRed(red);
      setPlayerBlue(blue);

      if (counter > 10) {
        clearInterval(intervalId);
        setWinner(decideWinner(red, blue));
      }
    }, 100);
  };

  return (
    <div className="App">
      <PlayerCard color="red" symbol={playerRed} />
      <PlayerCard color="blue" symbol={playerBlue} />
      <p>{winner}</p>
      <button onClick={runGame}>Run game</button>
    </div>
  );
}

export default App;
