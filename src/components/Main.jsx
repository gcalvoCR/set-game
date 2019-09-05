import React, { Component } from 'react';
import Cards from './Cards';
import Button from './Button';

class Main extends Component{

  state = {
    cards:[
      {id: 1, number: 1, figure: "fa fa-square fa-3x", valid:true, played: true, selected: false},
      {id: 2, number: 2, figure: 'fa fa-square-o fa-3x', valid:true, played: true, selected: false},
      {id: 3, number: 3, figure: 'fa fa-minus-square-o fa-3x', valid:true, played: true, selected: false},
      {id: 4, number: 1, figure: 'fa fa-dot-circle-o fa-3x', valid:true, played: true, selected: false},
      {id: 5, number: 2, figure: 'fa fa-circle-o fa-3x', valid:true, played: true, selected: false},
      {id: 6, number: 3, figure: 'fa fa-circle fa-3x', valid:true, played: true, selected: false},
      {id: 7, number: 1, figure: 'fa fa-minus-square-o fa-3x', valid:true, played: true, selected: false},
      {id: 8, number: 2, figure: 'fa fa-minus-square-o fa-3x', valid:true, played: true, selected: false},
      {id: 9, number: 3, figure: 'fa fa-minus-square-o fa-3x', valid:true, played: true, selected: false},
      {id: 10, number: 1, figure: 'fa fa-heart fa-3x', valid:true, played: true, selected: false},
      {id: 11, number: 2, figure: 'fa fa-heart-o fa-3x', valid:true, played: true, selected: false},
      {id: 12, number: 3, figure: 'fa fa-heartbeat fa-3x', valid:true, played: true, selected: false},
      {id: 13, number: 1, figure: 'fa fa-minus-square-o fa-3x', valid:true, played: true, selected: false},
      {id: 14, number: 2, figure: 'fa fa-minus-square-o fa-3x', valid:true, played: true, selected: false},
      {id: 15, number: 3, figure: 'fa fa-minus-square-o fa-3x', valid:true, played: true, selected: false},
      {id: 16, number: 1, figure: 'fa fa-minus-square-o fa-3x', valid:true, played: true, selected: false}
      // {id: 17, number: 1, valid:true, played: true, selected: false}
      // {id: 18, number: 2, valid:true, played: true, selected: false},
      // {id: 19, number: 2, valid:true, played: true, selected: false},
      // {id: 20, number: 3, valid:true, played: true, selected: false},
      // {id: 21, number: 4, valid:true, played: true, selected: false},
      // {id: 22, number: 5, valid:true, played: true, selected: false},
      // {id: 23, number: 6, valid:true, played: true, selected: false},
      // {id: 24, number: 7, valid:true, played: true, selected: false},
      // {id: 25, number: 8, valid:true, played: true, selected: false},
      // {id: 26, number: 9, valid:true, played: true, selected: false},
      // {id: 27, number: 10, valid:true, played: true, selected: false},
      // {id: 28, number: 11, valid:true, played: true, selected: false},
      // {id: 29, number: 12, valid:true, played: true, selected: false},
      // {id: 30, number: 13, valid:true, played: true, selected: false},
      // {id: 31, number: 14, valid:true, played: true, selected: false},
      // {id: 32, number: 15, valid:true, played: true, selected: false},
      // {id: 33, number: 16, valid:true, played: true, selected: false}
    ]
  }


  shuffleCards = (cards) =>{
    let list = [];
    while (list.length<16){
      let upper = cards.length;  
      let i = Math.floor( Math.random() * upper ) + 1;
      let newCard = {
        id: cards[i-1].id, 
        number: cards[i-1].number, 
        figure: cards[i-1].figure,
        valid: cards[i-1].valid, 
        selected: cards[i-1].selected
      };
      if(list.filter(card => card.id ===i).length ===0){
        list.push(newCard)
      }
      
    }
    return list;
}
  
  //Handle selected card
  handleCard = (id) => {
    this.setState({ cards: this.state.cards.map(card => {
      if(card.id=== id){
        card.selected= !card.selected;
      }
      return card;
    })
  });
  }

  //Delete card
  deleteCard = (id) => {
    this.setState({ cards: [...this.state.cards.filter(card => card.id
      !==id)] });
  }
  

  render(){
    console.log(this.state.cards)
    const shuffleCards = this.shuffleCards(this.state.cards);
    return (
      <div className = "main">
          <h1 >Set Game</h1>
          <p>Let's play!</p>
          <div className="header-line"></div>
          <div className="card-section">
            <Cards cards={shuffleCards} handleCard={this.handleCard} />
          </div>
          <Button />
      </div> 
    )
  }

}

export default Main;