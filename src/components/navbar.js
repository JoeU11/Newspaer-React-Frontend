import Logout from "./logout.js"
export default function Navbar(props) {
  return (
    <nav>
      <h1>Welcome to the Newspaper App</h1>
      <div id="nav-links">
        <a href="/">home</a>
        <button onClick={props.signup}>sign up</button>
        <button onClick={props.login}>log in</button>
        <Logout />
      </div>
      {/* add nav links here */}
    </nav>
  )
}