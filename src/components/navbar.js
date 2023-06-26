import Logout from "./logout.js"
export default function Navbar(props) {
  return (
    <nav>
      <h1>Welcome to the Newspaper App</h1>
      <div id="nav-links">
        <a className="nav-link" href="/">home</a>
        <button className="nav-link" onClick={props.signup}>sign up</button>
        <button className="nav-link" onClick={props.login}>log in</button>
        <a className="nav-link" href="/articles/new">add article</a>
        <Logout />
      </div>
    </nav>
  )
}