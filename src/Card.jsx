import React, { Component } from 'react'
import './App.css';

function Card(){

  const changeFigure = () => {
    alert("Hi!");
  }

  return (
    <div className="card" onClick={changeFigure}>
    </div>
    
  );
}

export default Card;