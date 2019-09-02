import React, { Component } from 'react';

class Sidebar extends Component{


  render(){
    let state = {
      title: 'Instructions',
      body: 'In here I will place the instructions of the game'
    }
    return (
      <div className="sidebar">
        <h1>{state.title}</h1>
        <p>{state.body}</p>
      </div>
    )
  }

}

export default Sidebar;