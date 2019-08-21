import React, { Component } from 'react';
import './App.css';
import Card from './Card';

function App2(){

  const createTable = () => {
    let table = []
    for (let i = 0; i < 9; i++) {
      table.push(<Card/>)
    }
    return table
  }

  return (
    <div className="App">
      <h1 >Set Game</h1>
      <p>let's play!</p>
      {createTable()}
    </div>
    
  );
}

export default App2;