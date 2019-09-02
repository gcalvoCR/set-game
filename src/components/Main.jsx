import React, { Component } from 'react';
import Card from './Card';
import Button from './Button';

class Main extends Component{

  state = {
    cards: [
      {value: 1, number: 1, valid:true},
      {value: 2, number: 2, valid:true},
      {value: 3, number: 3, valid:true},
      {value: 4, number: 4, valid:true},
      {value: 5, number: 5, valid:true},
      {value: 6, number: 6, valid:true},
      {value: 7, number: 7, valid:true},
      {value: 8, number: 8, valid:true},
      {value: 9, number: 9, valid:true},
      {value: 10, number: 10, valid:true},
      {value: 11, number: 11, valid:true},
      {value: 12, number: 12, valid:true},
      {value: 13, number: 13, valid:true},
      {value: 14, number: 14, valid:true},
      {value: 15, number: 15, valid:true},
      {value: 16, number: 16, valid:true},
      {value: 17, number: 17, valid:true},
      {value: 18, number: 18, valid:true},
      {value: 19, number: 19, valid:true},
      {value: 20, number: 20, valid:true},
      {value: 21, number: 21, valid:true},
      {value: 22, number: 22, valid:true},
      {value: 23, number: 23, valid:true},
    ]
  }

  createTable () {
    let table = []
    for (let i = 0; i < 16; i++) {
      let size = this.state.cards.length;
      let x= Math.floor(Math.random()*size);
      table.push(<Card card = {x}/>)
    }
    return table
  }

  onRemoveItem = i => {
    this.setState(state => {
      const list = state.cards.filter((item, j) => i !== j);
      return {
        list,
      };
    });
  };

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