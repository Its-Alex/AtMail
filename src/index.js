import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Nav from './routes/navbar.js'
import Login from './routes/login.js'
import Register from './routes/register.js'
import Mail from './routes/mail.js'
import NotFound from './routes/notFound.js'

import 'element-theme-default'
import './css/index.css'
import registerServiceWorker from './registerServiceWorker'

class Index extends React.Component {
  componentDidMount () {
    if (!global.localStorage.getItem('token') &&
    this.props.location.pathname.indexOf('/login') === -1 &&
    this.props.location.pathname.indexOf('/register') === -1) {
      this.props.history.push('/login')
    }
  }

  render () {
    return (
      <div id='index'>
        <Nav history={this.props.history} />
        <Switch>
          <Route exact path='/mail' component={Mail} />
          <Route component={NotFound} />
        </Switch>
      </div>
    )
  }
}

ReactDOM.render(
  <Router>
    <Switch>
      <Route exact path='/login' component={Login} />
      <Route exact path='/register' component={Register} />
      <Route path='/' component={Index} />
    </Switch>
  </Router>, document.getElementById('root'))
registerServiceWorker()
