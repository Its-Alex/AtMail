import React, { Component } from 'react'
const axiosInst = require('../utils/axiosInst.js')

class Login extends Component {
  constructor (props) {
    super(props)

    this.state = {
      mail: '',
      password: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange (evt) {
    this.setState({[evt.target.name]: evt.target.value})
  }

  handleSubmit (evt) {
    if (evt.key === 'Enter' || evt.target.name === 'submit') {
      axiosInst().post('/user/signin', {
        mail: this.state.mail,
        password: this.state.password
      }).then(res => {
        if (res.data.success === true) {
          global.localStorage.setItem('token', res.data.token)
          this.props.history.push('/')
        }
        console.log(res.data)
      }).catch(err => {
        console.log(err.response.data)
      })
    }
  }

  render () {
    return (
      <div>
        <input type='email' name='mail' placeholder='Mail' onChange={this.handleChange} onKeyPress={this.handleSubmit} />
        <input type='password' name='password' placeholder='Password' onChange={this.handleChange} onKeyPress={this.handleSubmit} />
        <button name='submit' onClick={this.handleSubmit}>Submit</button>
      </div>
    )
  }
}

export default Login
