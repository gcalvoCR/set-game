import React, { Component } from 'react'
import alien from './alien.png';
import stripe from './stripe-circle.svg';
import './App.css';




class App extends Component {
  state = [
    {number: 1, value: "ambulance"},
    {number:2, value: "archive"},
    {number:3, value: "battery-empty"},
    {number:4, value: "battery-1"},
    {number:5, value: "battery-4"},
  ]

  game = {
    name : "THE X GAME",
    instructions: "pick a card!"
  }

  showComponent() {
    const timer = setTimeout(() => {
      this._handleTimeout()
    }, 4000)

    this.setState({
      timer,
      visible: true,
    })
  }

  hideComponent() {
    this.setState({
      visible: false,
    })
  }

  _handleTimeout() {
    this.hideComponent()
  }

  componentDidMount() {
    this.showComponent()
  }

  render() {
    return 
    <div className="App">
      <h1>{game.name}</h1>
      <p>{game.instructions}</p>
      <div>
        <div class="main-container">
          <div class="row">
          {listItems}
          </div>
          <div>
            <svg width="100" height="100">
              <circle cx="50" cy="50" r="40" stroke="green" stroke-width="4" fill="yellow" />
            </svg>
          </div>
          <div>
            <svg width="400" height="180">
              <rect x="50" y="20" rx="20" ry="20" width="100" height="100" class="rectangule" />
            </svg>
          </div>
          <div class="triangle-container">
	          <svg height="500" width="500">
		          <polygon points="250,60 100,400 400,400" class="triangle" />
	          </svg>
            </div>
        </div>
      </div>
    </div>
  }
}

export default App;


// function App() {



//   const listItems = items.map((item) =>
//   <div class="column" key={item.number}>
//     <i class={`fa fa-${item.value}`}></i>
//   </div>
//   );

//   let shuffle = items.shuffle((item =>
//     for()
//     ))
   

//   return (
    
//   );
// }

// export default App;
