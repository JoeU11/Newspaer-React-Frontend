import { Routes, Route, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react'
import axios from 'axios'

export default function ArticleShow() {
  const params = useParams()
  const [article, setArticle] = useState()
  const [loading, setLoading] = useState(true)

  function getArticle() {
    console.log(params)
    axios.get(`http://localhost:3000/articles/${params.id}.json`).then(response => {
      console.log(response.data)
      setArticle(response.data)
      setLoading(false)
    })
  }

  useEffect(getArticle, [])

  if (loading) return (
    <p>loading page</p>
  )
  else return (
    <div id="article">
      {article.photos[0] && <img src={article.photos[0].url} style={{ width: 600 }} alt="article" />}
      <h1>{article.title}</h1>
      <p> by {article.author}</p>
      <p>{article.text}</p>
    </div>
  )
}