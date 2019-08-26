import React, { Component } from 'react';
import Card from './Card';
import Button from './Button';

class Main extends Component{
  state = {
    title: 'Instructions',
    body: 'In here I will place the instructions of the game'
  }

  createTable () {
    let table = []
    for (let i = 0; i < 16; i++) {
      table.push(<Card/>)
    }
    return table
  }

  render(){
    return (
      <div className = "main">
          <h1 >Set Game</h1>
          <p>Let's play!</p>
          <div className="header-line"></div>
          <div className="card-section">
            {this.createTable()}
          </div>
          <Button/>
      </div> 
    )
  }

}

export default Main;