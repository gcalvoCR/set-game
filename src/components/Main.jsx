import React, { Component } from 'react';
import Cards from './Cards';
import Button from './Button';

class Main extends Component{

  state = {
    cards:[
      {card: 1, number: 1, valid:true},
      {card: 2, number: 2, valid:true},
      {card: 3, number: 3, valid:true},
      {card: 4, number: 4, valid:true},
      {card: 5, number: 5, valid:true},
      {card: 6, number: 6, valid:true},
      {card: 7, number: 7, valid:true},
      {card: 8, number: 8, valid:true},
      {card: 9, number: 9, valid:true},
      {card: 10, number: 10, valid:true},
      {card: 11, number: 11, valid:true},
      {card: 12, number: 12, valid:true},
      {card: 13, number: 13, valid:true},
      {card: 14, number: 14, valid:true},
      {card: 15, number: 15, valid:true},
      {card: 16, number: 16, valid:true}
    ]
  }

  render(){
    return (
      <div className = "main">
          <h1 >Set Game</h1>
          <p>Let's play!</p>
          <div className="header-line"></div>
          <div className="card-section">
            <Cards cards={this.state.cards}/>
          </div>
          <Button/>
      </div> 
    )
  }

}

export default Main;