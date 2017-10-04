import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Login from './routes/login.js'
import Signup from './routes/signup.js'
import Mail from './routes/mail.js'
import NotFound from './routes/notFound.js'

import './css/index.css'
import registerServiceWorker from './registerServiceWorker'

class Index extends React.Component {
  componentDidMount () {
    if (!global.localStorage.getItem('token') &&
    this.props.location.pathname.indexOf('/login') === -1 &&
    this.props.location.pathname.indexOf('/signup') === -1) {
      this.props.history.push('/login')
    }
  }

  render () {
    return (
      <Switch>
        <Route exact path='/login' component={Login} />
        <Route exact path='/signup' component={Signup} />
        <Route exact path='/' component={Mail} />
        <Route component={NotFound} />
      </Switch>
    )
  }
}

ReactDOM.render(
  <Router>
    <Route path='/' component={Index} />
  </Router>, document.getElementById('root'))
registerServiceWorker()
