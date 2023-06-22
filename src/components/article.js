export default function Article(article) {
  return (
    <div id="article">
      {article.photos[0] && <img src={article.photos[0].url} style={{ width: 300 }} alt="article" />}
      <a href={`/articles/${article.id}`}><h1>{article.title}</h1></a>
      <p> by {article.author}</p>
    </div>
  )
}