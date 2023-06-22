import logo from './logo.svg';
import './App.css';
import axios from 'axios'
import { useState, useEffect } from 'react'
import Navbar from "./components/navbar.js"
import Article from "./components/article.js"

function App() {
  const [articles, setArticles] = useState([])

  function getArticles() {
    console.log("getting articles")
    axios.get("http://localhost:3000/articles.json").then(response => {
      console.log(response.data)
      setArticles(response.data)
    })
  }

  const articleElements = articles.map(article => {
    return (<Article key={article.id} {...article} />)
  })

  useEffect(getArticles, [])
  return (
    <div className="App">
      <Navbar />
      {articleElements}
    </div>
  );
}

export default App;
