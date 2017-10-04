import React, { Component } from 'react'

const axiosInst = require('../utils/axiosInst.js')

class Signup extends Component {
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
  }

  handleChange (evt) {
    this.setState({[evt.target.name]: evt.target.value})
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
      }).catch(err => console.log(err.response.data))
    }
  }

  render () {
    return (
      <div>
        <input type='text' name='username' placeholder='Username' onChange={this.handleChange} onKeyPress={this.handleSubmit} />
        <input type='email' name='mail' placeholder='Mail' onChange={this.handleChange} onKeyPress={this.handleSubmit} />
        <input type='password' name='password' placeholder='Password' onChange={this.handleChange} onKeyPress={this.handleSubmit} />
        <input type='password' name='confirmPwd' placeholder='Confirm password' onChange={this.handleChange} onKeyPress={this.handleSubmit} />
        <button name='submit' onClick={this.handleSubmit}>Submit</button>
      </div>
    )
  }
}

export default Signup
