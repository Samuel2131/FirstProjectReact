import React, { useEffect, useState } from 'react'
//import logo from './logo.svg';
import './App.css';
import { Card } from './Components/card';
import { news } from './news';
import { Frame } from './Components/frame';
import { ColorButton } from './Components/colorButton';
import { buttonsArray } from './utils/buttons';
import axios from "axios";
import { CardNews } from './Components/cardNews';

type Product = {
  title: string,
  price: number,
  description: string,
  category: string,
}

export type Articles = {
  author: string,
  description: string,
  title: string,
  urlToImage: string
}

const key = "4f7fff3667724e8d848fcc304fc6759c";

const App = () => {
  const [color, setColor] = useState<"blue" | "red" | "yellow" | "green" | "black" | "gray" | "#40E0D0">("gray");
  const [product, setProduct] = useState<Product[]>([]);
  const [articles, setArticles] = useState<Articles[]>([]);
  const [textInInput, setTextInInput] = useState<string>("");
  const [textToSearch, setTextToSearch] = useState<string>("tesla");

  const getData = async () => {
      const { data } = await axios.get("http://localhost:3001/v1/products");
      setProduct(data)
  }
  
  const getNews = async (textToSearch: string) => {
    const { data } = await axios.get(`https://newsapi.org/v2/everything?q=${textToSearch}&from=2023-04-05&sortBy=publishedAt&apiKey=${key}`);
    setArticles(data.articles);
  }

  const changeText = (event: any) => setTextInInput(event.target.value);

  useEffect(() => {
    getData();
    getNews("tesla");
  }, []);

  useEffect(() => {
    getNews(textToSearch);
  }, [textToSearch])

  return (
    <div className="App container-fluid w-100 d-flex align-items-center flex-column">
      <div className='d-flex, align-items-center'>
        {buttonsArray.map(({classBootstrap, color, text}) => {
          return <ColorButton buttonStyle={{classBootstrap, color, setColor, text}}/>;
        })}
      </div>

      <textarea id="textArea" name='textArea' value={textInInput} onChange={changeText}></textarea>
      <button type="button" className="btn btn-primary mt-3" onClick={() => setTextToSearch(textInInput)}>Search</button>

      {articles.map(({author, urlToImage, description, title}) => {
        return (
          <Frame border={5} color={color}>
            <CardNews author={author} urlToImage={urlToImage} description={description} title={title} /> 
          </Frame>
          )
      })}

      {news.map(({author, content}, index) => {
        return (
          <Frame border={5} color={color}>
            <Card author={author} content={content} product={product[index] ? product[index] : undefined} /> 
          </Frame>
          )
      })}

      <Frame border={5} color={color}>
        <div className='d-flex align-items-center'>
          <p>Prova frame</p>
        </div>
      </Frame>
      <Frame border={3} color={color} />
    </div>
  );
}

export default App;
