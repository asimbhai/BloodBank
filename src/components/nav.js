import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import './index.css'
var root = document.getElementById('root')
class Navbar extends Component {
  render() {
    return (
      <nav className="nav">
        <div className="nav-wrapper container ">
          <a href="#" className="brand-logo">Blood Back App</a>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li><a href="sass.html">Sign in</a></li>
            <li><a href="badges.html">Sign up</a></li>
            <li><a href="collapsible.html">Log out</a></li>
          </ul>
        </div>
      </nav>
    )
  }
}

// ReactDOM.render(
//   <Navbar />,
//   root
// )

export default Navbar