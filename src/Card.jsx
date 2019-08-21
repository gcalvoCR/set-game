import React, { Component } from 'react'
import './App.css';

function Card(){

  const changeFigure = () => {
    console.log("Here I am")
    return  <div className="column" >
              <i className="fa fa-ambulance"></i>
            </div>;
  }

  return (
    <div className="card" onClick={changeFigure}>
    </div>
    
  );
}

export default Card;