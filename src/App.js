import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {


  let game = {
    name : "THE X GAME",
    instructions: "pick a card!"
  }

  const items = [
    {number: 1, value: "ambulance"},
    {number:2, value: "archive"},
    {number:3, value: "battery-empty"},
    {number:4, value: "battery-1"},
    {number:5, value: "battery-4"},

  ]

  const listItems = items.map((item) =>
  <div class="column" key={item.number}>
    <i class={`fa fa-${item.value}`}></i>
  </div>
  );

  return (
    <div className="App">
      <h1>{game.name}</h1>
      <p>{game.instructions}</p>
      <div>
        <div class="main-container">
          <div class="row">
          {listItems}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
