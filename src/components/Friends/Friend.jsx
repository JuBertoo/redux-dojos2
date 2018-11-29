import React, { Component } from 'react'

export default class Friend extends Component {
  render() {
    const {name, username, email, phone, website} = this.props.friend
    return (
      <div className="studentCard">
        <h3>{username}</h3>
        <p>{email}</p>
        <p>{phone}</p>
        <p>{website}</p>
        <button
          onClick={() => this.props.removeFriendFromList(this.props.friend)}
        >Remove me from friends list</button>
      </div>
    )
  }
}
