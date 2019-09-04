import React, { Component } from 'react';

class Card extends Component{
  render(){
    //distructuring to avoid typing this.props.card.value ..... everywhere
    const { id, selected  } = this.props.card;

    return(
      <div className={`card-selected-${selected}`} onClick={this.props.handleCard.bind(this, id)}>
        <p>{ id }</p>
      </div>
    )
  }
}

export default Card;