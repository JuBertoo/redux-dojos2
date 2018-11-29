import React, { Component } from 'react'
import "./Student.css"
import { connect } from 'react-redux'
import { addStudentToFriends } from "../store/friendsActions"

export class Student extends Component {

  render() {
    console.log("props from Student.jsx", this.props)
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

const mapStateToProps = (state) => ({
  ...state
})

const mapDispatchToProps = {
  addStudentToFriends: (student) => addStudentToFriends(student)
}

export default connect(mapStateToProps, mapDispatchToProps)(Student)

