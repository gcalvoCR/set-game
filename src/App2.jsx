import React, { Component } from 'react';
import './App.css';
import Card from './Card';

function App2(){

  const createTable = () => {
    let table = []
    for (let i = 0; i < 16; i++) {
      table.push(<Card/>)
    }
    return table
  }

  return (
    <div>
      <div className="page">
        <div className="sidebar">
          <h1>Instructions</h1>
          <p>In here I will place the instructions of the game</p>
        </div>
        <div className = "main">
          <h1 >Set Game</h1>
          <p>Let's play!</p>
          <div className="header-line"></div>
          <div className="card-section">
            {createTable()}
          </div>
        </div>
      </div>
      <div className="footer">
            <p>by Gabriel Calvo V.</p>
          </div>
    </div>
  );
}

export default App2;