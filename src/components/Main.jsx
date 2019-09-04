import React, { Component } from 'react';
import Cards from './Cards';
import Button from './Button';

class Main extends Component{

  state = {
    cards:[
      {id: 1, number: 1, valid:true, selected: false},
      {id: 2, number: 2, valid:true, selected: false},
      {id: 3, number: 3, valid:true, selected: false},
      {id: 4, number: 4, valid:true, selected: false},
      {id: 5, number: 5, valid:true, selected: false},
      {id: 6, number: 6, valid:true, selected: false},
      {id: 7, number: 7, valid:true, selected: false},
      {id: 8, number: 8, valid:true, selected: false},
      {id: 9, number: 9, valid:true, selected: false},
      {id: 10, number: 10, valid:true, selected: false},
      {id: 11, number: 11, valid:true, selected: false},
      {id: 12, number: 12, valid:true, selected: false},
      {id: 13, number: 13, valid:true, selected: false},
      {id: 14, number: 14, valid:true, selected: false},
      {id: 15, number: 15, valid:true, selected: false},
      {id: 16, number: 16, valid:true, selected: false}
    ]
  }

  handleCard = (id) => {
    this.setState({ cards: this.state.cards.map(card => {
      if(card.id=== id){
        card.selected= !card.selected;
      }
      return card;
    })
  });
  }

  render(){
    return (
      <div className = "main">
          <h1 >Set Game</h1>
          <p>Let's play!</p>
          <div className="header-line"></div>
          <div className="card-section">
            <Cards cards={this.state.cards} handleCard={this.handleCard}/>
          </div>
          <Button/>
      </div> 
    )
  }

}

export default Main;