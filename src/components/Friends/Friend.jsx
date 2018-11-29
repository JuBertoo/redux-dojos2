import React, { Component } from 'react'
import { connect } from 'react-redux'
import {removeStudentFromFriends} from "../store/friendsActions"

export class Friend extends Component {

  render() {
    const {name, username, email, phone, website} = this.props.friend
    return (
      <div className="studentCard">
        <h3>{username}</h3>
        <p>{email}</p>
        <p>{phone}</p>
        <p>{website}</p>
        <button
          onClick={() => this.props.removeStudentFromFriends(this.props.friend)}
        >Remove me from friends list</button>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  ...state
})

const mapDispatchToProps = {
  removeStudentFromFriends: (student) => removeStudentFromFriends(student)
}

export default connect(mapStateToProps, mapDispatchToProps)(Friend)

