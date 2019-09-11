import React, { Component } from 'react';
import Cards from './Cards';
import Button from './Button';

class Main extends Component{

  state = {
    cards:[
      {id: 1, number: 1, color: 'green', figure: "fa fa-square fa-2x", valid:true, displayed: true, selected: false},
      {id: 2, number: 2, color: 'red', figure: 'fa fa-square-o fa-2x', valid:true, displayed: true, selected: false},
      {id: 3, number: 3, color: 'blue', figure: 'fa fa-minus-square-o fa-2x', valid:true, displayed: true, selected: false},
      {id: 4, number: 1, color: 'green', figure: 'fa fa-dot-circle-o fa-2x', valid:true, displayed: true, selected: false},
      {id: 5, number: 2, color: 'green', figure: 'fa fa-circle-o fa-2x', valid:true, displayed: true, selected: false},
      {id: 6, number: 3, color: 'green', figure: 'fa fa-circle fa-2x', valid:true, displayed: true, selected: false},
      {id: 7, number: 1, color: 'blue', figure: 'fa fa-minus-square-o fa-2x', valid:true, displayed: true, selected: false},
      {id: 8, number: 2, color: 'green', figure: 'fa fa-minus-square-o fa-2x', valid:true, displayed: true, selected: false},
      {id: 9, number: 3, color: 'green', figure: 'fa fa-minus-square-o fa-2x', valid:true, displayed: true, selected: false},
      {id: 10, number: 1, color: 'blue', figure: 'fa fa-heart fa-2x', valid:true, displayed: true, selected: false},
      {id: 11, number: 2, color: 'green', figure: 'fa fa-heart-o fa-2x', valid:true, displayed: true, selected: false},
      {id: 12, number: 3, color: 'green', figure: 'fa fa-heartbeat fa-2x', valid:true, displayed: true, selected: false},
      {id: 13, number: 1, color: 'red', figure: 'fa fa-minus-square-o fa-2x', valid:true, displayed: true, selected: false},
      {id: 14, number: 2, color: 'green', figure: 'fa fa-minus-square-o fa-2x', valid:true, displayed: true, selected: false},
      {id: 15, number: 3, color: 'blue', figure: 'fa fa-minus-square-o fa-2x', valid:true, displayed: true, selected: false},
      {id: 16, number: 1, color: 'red', figure: 'fa fa-circle fa-2x', valid:true, played: true, displayed: true, selected: false},
      {id: 17, number: 1, color: 'green', figure: "fa fa-square fa-2x", valid:true, displayed: false, selected: false},
      {id: 18, number: 2, color: 'red', figure: 'fa fa-square-o fa-2x', valid:true, displayed: false, selected: false},
      {id: 19, number: 3, color: 'blue', figure: 'fa fa-minus-square-o fa-2x', valid:true, displayed: false, selected: false},
      {id: 20, number: 1, color: 'green', figure: 'fa fa-dot-circle-o fa-2x', valid:true, displayed: false, selected: false},
      {id: 21, number: 2, color: 'green', figure: 'fa fa-circle-o fa-2x', valid:true, displayed: false, selected: false},
      {id: 22, number: 3, color: 'green', figure: 'fa fa-circle fa-2x', valid:true, displayed: false, selected: false},
      {id: 23, number: 1, color: 'blue', figure: 'fa fa-minus-square-o fa-2x', valid:true, displayed: false, selected: false},
      {id: 24, number: 2, color: 'green', figure: 'fa fa-minus-square-o fa-2x', valid:true, displayed: false, selected: false},
      {id: 25, number: 3, color: 'green', figure: 'fa fa-minus-square-o fa-2x', valid:true, displayed: false, selected: false},
      {id: 26, number: 1, color: 'blue', figure: 'fa fa-heart fa-2x', valid:true, displayed: false, selected: false},
      {id: 27, number: 2, color: 'green', figure: 'fa fa-heart-o fa-2x', valid:true, displayed: false, selected: false},
      {id: 28, number: 3, color: 'green', figure: 'fa fa-heartbeat fa-2x', valid:true, displayed: false, selected: false},
      {id: 29, number: 1, color: 'red', figure: 'fa fa-minus-square-o fa-2x', valid:true, displayed: false, selected: false},
      {id: 30, number: 2, color: 'green', figure: 'fa fa-minus-square-o fa-2x', valid:true, displayed: false, selected: false},
      {id: 31, number: 3, color: 'blue', figure: 'fa fa-minus-square-o fa-2x', valid:true, displayed: false, selected: false},
      {id: 32, number: 1, color: 'red', figure: 'fa fa-circle fa-2x', valid:true, played: true, displayed: false, selected: false}
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

shuffleCards2 = () =>{
  let list = [];
  while (list.length<16){
    let upper = this.state.cards.length;  
    let i = Math.floor( Math.random() * upper ) + 1;
    let id= this.state.cards[i-1].id; 
    this.setState({ cards: this.state.cards.map(card => {
      if(card.id=== id){
        card.displayed= !card.displayed;
      }
      return card;
    })
  });
  }
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
    console.log("Cartas"+ this.props.cards)
   // this.shuffleCards2();
    return (
      <div className = "main">
          <h1 >Set Game</h1>
          <p>Let's play!</p>
          <div className="header-line"></div>
          <div className="card-section">
            <Cards cards={this.state.cards} handleCard={this.handleCard} />
          </div>
          <div className="command-section">
            <Button />
          </div>
      </div> 
    )
  }

}

export default Main;