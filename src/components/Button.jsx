import React, { Component } from 'react';

class Button extends Component{

  state = {
    active: true
  }

  changeState = () => {
    alert(`Star over?= ${this.state.active}`);
    this.setState({active: !this.state.active});
  }

  render(){
    return(
      <div className="buttons-section">
        <button type="button" className="btn" onClick={this.changeState} >Start over!</button>
      </div>
    )
  }
}

export default Button;