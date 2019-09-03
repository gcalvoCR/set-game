import React from 'react';
import './App.css';
import Sidebar from './components/Sidebar';
import Main from './components/Main';
import Footer from './components/Footer';

function App(){

  return (
    <div>
      <div className="page">
        <Sidebar/>
        <Main/>
      </div>
      <Footer/>
    </div>
  );
}

export default App;