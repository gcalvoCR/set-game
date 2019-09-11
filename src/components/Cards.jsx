import React, { Component } from 'react';
import Card from './Card';

class Cards extends Component{
  
  render(){
    console.log(this.props.cards)
    return this.props.cards.map((card, index)=>(
      <Card key={index} card={card} handleCard={this.props.handleCard}/>
    ));
  }
}

export default Cards;