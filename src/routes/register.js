import React, { Component } from 'react'
import { Link } from 'react-router-dom'

const axiosInst = require('../utils/axiosInst.js')
const debounce = require('lodash/debounce')

class Register extends Component {
  constructor (props) {
    super(props)

    this.state = {
      username: '',
      mail: '',
      password: '',
      confirmPwd: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.affectEvent = debounce(this.affectEvent.bind(this), 300)
  }

  affectEvent (name, value) {
    this.setState({[name]: value})
  }

  handleChange (evt) {
    this.affectEvent(evt.target.name, evt.target.value)
  }

  handleSubmit (evt) {
    if (evt.key === 'Enter' || evt.target.name === 'submit') {
      axiosInst().post('/user/signup', {
        username: this.state.username,
        mail: this.state.mail,
        password: this.state.password,
        confirmPwd: this.state.confirmPwd
      }).then(res => {
        console.log(res.data)
      }).catch(err => {
        if (err.response) console.log(err.response.data)
      })
    }
  }

  render () {
    return (
      <div id='body-center'>
        <input type='text' name='username' placeholder='Username' onChange={this.handleChange} onKeyPress={this.handleSubmit} />
        <input type='email' name='mail' placeholder='Mail' onChange={this.handleChange} onKeyPress={this.handleSubmit} />
        <input type='password' name='password' placeholder='Password' onChange={this.handleChange} onKeyPress={this.handleSubmit} />
        <input type='password' name='confirmPwd' placeholder='Confirm password' onChange={this.handleChange} onKeyPress={this.handleSubmit} />
        <button name='submit' onClick={this.handleSubmit}>Register</button>
        <Link to='/login'>Login</Link>
      </div>
    )
  }
}

export default Register
