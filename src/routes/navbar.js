import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import '../css/navbar.css'

const md5 = require('js-md5')

class Navbar extends Component {
  render () {
    return (
      <div id='navbar'>
        <img id='profileImg' src={`https://www.gravatar.com/avatar/` + md5(global.localStorage.getItem('mail')) + 's=2048'} alt='profile' />
        <div id='nav-data'>
          <span>{global.localStorage.getItem('mail_at')}</span>
        </div>
        <div id='nav-links'>
          <Link to='/acceuil'>Acceuil</Link>
        </div>
      </div>
    )
  }
}

export default Navbar
