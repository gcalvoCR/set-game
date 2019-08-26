import React, { Component } from 'react';

class Sidebar extends Component{
  state = {
    title: 'Instructions',
    body: 'In here I will place the instructions of the game'
  }

  render(){
    return (
      <div className="sidebar">
        <h1>{this.state.title}</h1>
        <p>{this.state.body}</p>
      </div>
    )
  }

}

export default Sidebar;