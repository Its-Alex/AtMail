import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Form, Input, Button } from 'element-react'
import Typist from 'react-typist'

import '../css/login.css'

const axiosInst = require('../utils/axiosInst.js')
const debounce = require('lodash/debounce')

class Login extends Component {
  constructor (props) {
    super(props)

    this.state = {
      form: {
        mail: '',
        password: ''
      }
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.affectEvent = debounce(this.affectEvent.bind(this), 200)
  }

  affectEvent (name, value) {
    this.setState({[name]: value})
  }

  handleChange (value, name) {
    this.affectEvent(name, value)
  }

  handleSubmit (evt) {
    evt.preventDefault()
    console.log('salut')
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

  render () {
    return (
      <Form id='login' className='body-center' model={this.state.form} onSubmit={this.handleSubmit}>
        <span className='title'>SupMail</span>
        <Typist
          startDelay={200}
          cursor={{
            element: '|',
            hideWhenDone: true,
            hideWhenDoneDelay: 500
          }}>Mail serveur for everyone</Typist><br />
        <Form.Item>
          <Input type='email' placeholder='Mail' onChange={this.handleChange.bind(this, 'mail')} />
        </Form.Item>
        <Form.Item>
          <Input type='password' placeholder='Password' onChange={this.handleChange.bind(this, 'password')} />
        </Form.Item>
        <Form.Item>
          <Button className='el-button el-button--primary' type='primary' nativeType='submit'>Connect</Button>
        </Form.Item>
        <Link to='/register'>Not register yet ?</Link>
      </Form>
    )
  }
}

export default Login
