import { useState } from 'react'
import axios from 'axios'

export default function PostArticle() {
  const [errors, setErrors] = useState([])

  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target)
    axios.post("http://localhost:3000/articles.json", params).then(response => {
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
          Title: <input name="title"></input>
        </div>
        <div>
          Author ID: <input name="author_id" type="integer"></input>
        </div>
        <div>
          Text: <input name="text"></input>
        </div>
        <button type="submit">submit</button>
      </form>
    </div>
  )
}