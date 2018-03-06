import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import '../css/navbar.css'

class Navbar extends Component {
  render () {
    return (
      <div id='navbar'>
        <div id='nav-data'>
          <span>{global.localStorage.getItem('mail_at')}</span>
        </div>
        <div id='nav-links'>
          <Link to='/acceuil'>Mail</Link>
          <Link to='/folder'>Sub</Link>
        </div>
      </div>
    )
  }
}

export default Navbar
