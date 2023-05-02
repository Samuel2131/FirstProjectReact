import React, { useState } from 'react'
//import logo from './logo.svg';
import './App.css';
import { Card } from './Components/card';
import { news } from './news';
import { Frame } from './Components/frame';
import { ColorButton } from './Components/colorButton';
import { buttonsArray } from './utils/buttons';


const App = () => {
  const [color, setColor] = useState("gray");
  return (
    <div className="App container-fluid w-100 d-flex align-items-center flex-column">
      <div className='d-flex, align-items-center'>
        {buttonsArray.map(({classBootstrap, color, text}) => {
          return <ColorButton buttonStyle={{classBootstrap, color, setColor, text}}/>;
        })}
      </div>
      {news.map(({author, content}) => {
        return (
          <Frame border={5} color={color}>
            <Card author={author} content={content} /> 
          </Frame>
          )
      })}
      <Frame border={5} color='red'>
        <div className='d-flex align-items-center'>
          <p>Prova frame</p>
        </div>
      </Frame>
      <Frame border={3} color='green'/>
    </div>
  );
}

export default App;
