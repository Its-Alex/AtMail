import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Typist from 'react-typist'

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
    console.log('test')
    if (evt.key === 'Enter' || evt.target.name === 'submit') {
      axiosInst().post('/user/signin', {
        mail: this.state.mail,
        password: this.state.password
      }).then(res => {
        if (res.data.success === true) {
          global.localStorage.setItem('token', res.data.user.token)
          global.localStorage.setItem('id', res.data.user.id)
          global.localStorage.setItem('mail', res.data.user.mail)
          global.localStorage.setItem('mail_at', res.data.user.mail_at)
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
        <Typist
          startDelay={200}
          cursor={{
            element: '|',
            hideWhenDone: true,
            hideWhenDoneDelay: 500
          }}>Mail serveur for everyone</Typist><br />
        <input type='email' name='mail' placeholder='Mail' onChange={this.handleChange} onKeyPress={this.handleSubmit} />
        <input type='password' name='password' placeholder='Password' onChange={this.handleChange} onKeyPress={this.handleSubmit} />
        <button name='submit' onClick={this.handleSubmit}>Connect</button>
        <Link to='/register'>Not register yet ?</Link>
      </div>
    )
  }
}

export default Login
