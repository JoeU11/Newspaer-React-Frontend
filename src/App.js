import logo from './logo.svg';
import './App.css';
import axios from 'axios'
import { useState, useEffect } from 'react'
import Navbar from "./components/navbar.js"
import Article from "./components/article.js"
import ArticleShow from "./components/showArticle.js"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Signup from "./components/signup.js";
import Login from "./components/login.js";
import Logout from "./components/logout.js";
import Modal from "./components/modal.js"

import TestComponent from "./components/testComponent"

function App() {
  const [articles, setArticles] = useState([])
  const [showModal, setShowModal] = useState(false)
  const [modalContent, setModalContent] = useState(null)

  function login() {
    setShowModal(true)
    setModalContent(<Login />)
  }
  function signup() {
    setShowModal(true)
    setModalContent(<Signup />)
  }

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
      <Navbar login={login} signup={signup} show={() => setShowModal(true)} />
      <Modal show={showModal} onClose={() => setShowModal(false)} >
        {modalContent}
      </Modal>
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