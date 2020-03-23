import React, { Component } from 'react'

class NavBar extends Component {
  render() {
    return (
      <header className="navbar">
        <ul>
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="">Movies</a>
          </li>
          <li>
            <a href="">Info</a>
          </li>
          <li>
            <a href="">Contact</a>
          </li>
        </ul>
      </header>
    )
  }
}

export default NavBar
