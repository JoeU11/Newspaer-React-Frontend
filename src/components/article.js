export default function ArticleIndex(article) {
  return (
    <div id="articleIndex">
      {article.photos[0] && <img src={article.photos[0].url} alt="article" />}
      <h1>{article.title}</h1>
      <p> by {article.author}</p>
    </div>
  )
}