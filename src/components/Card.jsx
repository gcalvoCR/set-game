import React, { Component } from 'react';

class Card extends Component{

  state = {
    color: 'gray'
  }

  changeState = () => {
    if(this.state.color=='gray'){
      this.setState(color => ({
        color: 'red' }));
    } else {
      this.setState(color => ({
        color: 'gray' }));
    }
    
  }

  render(){
    return(
      <div className={`card-${this.state.color}`} onClick={this.changeState}>
      </div>
    )
  }
}

export default Card;