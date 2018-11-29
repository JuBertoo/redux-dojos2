import React, { Component } from 'react'
import Student from './Student';
import { connect } from 'react-redux'
import {fetchStudents} from "../store/friendsActions"

export class Students extends Component {

  componentDidMount = () => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((datas) => datas.json())
    .then((users) => this.props.fetchStudents(users))
    .catch((err) => console.log("Error while fetching datas : ", err))
  }
  
  render() {
    console.log("PROPS FROM Students.jsx", this.props)
    const {studentsList} = this.props
    return (
      <div className="studentsContainer">
        <h1>Students List</h1>
        {
          studentsList.length > 0 &&
          studentsList.map((student) => {
            return (
              <Student key={student.id} student={student}/>
            )
          })
        }
      </div>
    )
  }
}
const mapStateToProps = (state) => ({
  ...state
})

const mapDispatchToProps = {
  fetchStudents: (students) => fetchStudents(students)
}

export default connect(mapStateToProps, mapDispatchToProps)(Students)

