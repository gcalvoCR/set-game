import React, { Component } from 'react';

class Card extends Component{
  
  icons(card){
     
  }

  render(){
    //distructuring to avoid typing this.props.card.value ..... everywhere
    const { id, number,color, selected, displayed, figure  } = this.props.card;

    const items = []

    for (let i=0; i < number ; i++) {
    items.push(<i className={figure}></i>)
    }
    
    return(
      <div className={`card-selected-${selected} display-${displayed} ${color}`} onClick={this.props.handleCard.bind(this, id)}>
        {items}
      </div>
    )
  }
}

export default Card;