import React, { Component } from 'react'
import "./Student.css"

export default class Student extends Component {
  render() {
    const {name, username, email, phone, website} = this.props.student
    return (
      <div className="studentCard">
        <h3>{username}</h3>
        <p>{email}</p>
        <p>{phone}</p>
        <p>{website}</p>
        <button
          onClick={() => this.props.addStudentToFriends(this.props.student)}
        >Add me to friend list</button>
      </div>
    )
  }
}
