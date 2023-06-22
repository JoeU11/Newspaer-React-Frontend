import logo from './logo.svg';
import './App.css';
import axios from 'axios'
import { useState, useEffect } from 'react'
import Navbar from "./components/navbar.js"
import Article from "./components/article.js"
import ArticleShow from "./components/showArticle.js"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import TestComponent from "./components/testComponent"

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
      <Router>
        <Routes>
          <Route path="/" element={articleElements} />
          <Route path="/articles/:id" element={<ArticleShow />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

// import React, { Suspense, lazy } from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Home from "./components/navbar.js"
// import About from "./components/testComponent.js"

// const Home = lazy(() => import('./components/navbar'));
// const About = lazy(() => import('./components/testComponent'));

// const App = () => (
//   <Router>
//     <Suspense fallback={<div>Loading...</div>}>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/about" element={<About />} />
//       </Routes>
//     </Suspense>
//   </Router>
// );

// export default App;