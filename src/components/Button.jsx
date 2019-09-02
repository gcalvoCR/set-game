import React, { Component } from 'react';

class Button extends Component{

  refreshPage = () => {
    window.location.reload(false);
  }

  render(){
    return(
      <div className="buttons-section">
        <button type="button" className="btn" onClick={this.refreshPage} >Start over!</button>
      </div>
    )
  }
}

export default Button;