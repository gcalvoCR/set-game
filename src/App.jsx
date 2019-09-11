import React from 'react';
import './App.css';
import Sidebar from './components/Sidebar';
import Main from './components/Main';
import Footer from './components/Footer';
import useGetData from './data/useGetData';



function App(){

  const data = useGetData();
  console.log(data);
  return( data.length === 0 ? <h1>Loading ...</h1> : (
          <div>
            <div className="page">
              <Sidebar/>
              <Main
                cards = {data.cards}
              />
            </div>
            <Footer/>
          </div>
        )
      );
    }

export default App;
