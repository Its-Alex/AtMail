import React, { Component } from 'react'

class Login extends Component {
  constructor (props) {
    super(props)

    this.state = {
      login: '',
      password: ''
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange (evt) {
    this.setState({[evt.target.name]: evt.target.value})
  }

  render () {
    return (
      <div>
        <input type='text' name='login' placeholder='Login' onChange={this.handleChange} />
        <input type='password' name='password' placeholder='Password' onChange={this.handleChange} />
        <button>Submit</button>
      </div>
    )
  }
}

export default Login
