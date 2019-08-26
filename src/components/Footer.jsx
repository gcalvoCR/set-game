import React, { Component } from 'react';

class Footer extends Component{

  state = {
    information: 'by Gabriel Calvo V.'
  }

  render(){
    return (
      <div className="footer">
          <p>{this.state.information}</p>
      </div>
    )
  }
} 

export default Footer;