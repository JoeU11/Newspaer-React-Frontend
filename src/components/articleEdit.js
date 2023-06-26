import { useState } from 'react'
import axios from 'axios'

export default function PostArticle(article) {
  const [errors, setErrors] = useState([])

  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target)
    axios.patch(`http://localhost:3000/articles/${article.id}.json`, params).then(response => {
      console.log(response)
      event.target.reset()
      window.location.href = "/"
    }).catch(error => {
      console.log(error)
      setErrors(error.response.data)
    })
  }

  return (
    <div id="postArticle">
      <ul>
        {errors.map((error) => <li key="error">{error}</li>)}
      </ul>
      <form onSubmit={handleSubmit}>
        <div>
          Title: <input name="title" defaultValue={article.title}></input>
        </div>
        <div>
          Text: <input name="text" defaultValue={article.text}></input>
        </div>
        <button type="submit">submit</button>
      </form>
    </div>
  )
}