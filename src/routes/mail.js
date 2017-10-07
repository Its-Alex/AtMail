import React, { Component } from 'react'
import MailComponent from '../components/mail.js'
import axiosInst from '../utils/axiosInst.js'

class Mail extends Component {
  constructor (props) {
    super(props)

    this.state = {
      mails: []
    }
  }

  componentWillMount () {
    axiosInst().get('/mail')
    .then(res => {
      if (res.data.success === true) this.setState({mails: res.data.results})
    })
    .catch(err => {
      console.log(err.response)
    })
  }

  render () {
    return (
      <div>
        {this.state.mails.map(elmt => {
          return <MailComponent key={elmt.id} mail={elmt} />
        })}
      </div>
    )
  }
}

export default Mail
