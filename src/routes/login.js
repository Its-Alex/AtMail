import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import '../css/login.css'

const axiosInst = require('../utils/axiosInst.js')
const debounce = require('lodash/debounce')

class Login extends Component {
  constructor (props) {
    super(props)

    this.state = {
      mail: '',
      password: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.affectEvent = debounce(this.affectEvent.bind(this), 200)
  }

  affectEvent (name, value) {
    this.setState({[name]: value})
  }

  handleChange (evt) {
    this.affectEvent(evt.target.name, evt.target.value)
  }

  handleSubmit (evt) {
    if (evt.key === 'Enter' || evt.target.name === 'submit') {
      axiosInst().post('/user/signin', {
        mail: this.state.mail,
        password: this.state.password
      }).then(res => {
        if (res.data.success === true) {
          global.localStorage.setItem('token', res.data.token)
          this.props.history.push('/mail')
        }
      }).catch(err => {
        if (err.response) console.log(err.response.data)
      })
    }
  }

  render () {
    return (
      <div id='body-center' className='login-container'>
        <span className='title'>SupMail</span>
        <input type='email' name='mail' placeholder='Mail' onChange={this.handleChange} onKeyPress={this.handleSubmit} />
        <input type='password' name='password' placeholder='Password' onChange={this.handleChange} onKeyPress={this.handleSubmit} />
        <button name='submit' onClick={this.handleSubmit}>Connect</button>
        <Link to='/register'>Not register yet ?</Link>
      </div>
    )
  }
}

export default Login
