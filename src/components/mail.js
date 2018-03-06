import React, { Component } from 'react'

class Mail extends Component {
  render () {
    return (
      <div id='mails-component'>
        <span>{this.props.mail.sender}</span>
        <span>{this.props.mail.subject}</span>
        <span>{this.props.mail.content_text}</span>
      </div>
    )
  }
}
// <p>{this.props.mail.content_html}</p>

export default Mail
