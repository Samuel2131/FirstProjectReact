import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Card } from './Components/card';
import { news } from './news';

const App = () => {
  return (
    <div className="App container-fluid w-100 d-flex align-items-center flex-column">
      {news.map((item) => {
        return <Card author={item.author} content={item.content}/>
      })}
    </div>
  );
}

export default App;
