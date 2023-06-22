export default function Article(article) {
  return (
    <div id="article">
      {article.photos[0] && <img src={article.photos[0].url} style={{ width: 300 }} alt="article" />}
      <h1>{article.title}</h1>
      <p> by {article.author}</p>
    </div>
  )
}