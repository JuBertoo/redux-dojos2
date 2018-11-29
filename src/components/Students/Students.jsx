import React, { Component } from 'react'
import Student from './Student';

export default class Students extends Component {
  constructor(props){
    super(props)
    this.state = {
      students: []
    }
  }

  componentDidMount = () => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((datas) => datas.json())
    .then((users) => this.setState({students: users}))
    .catch((err) => console.log("Error while fetching datas : ", err))
  }
  
  render() {
    const {students} = this.state;
    console.log(this.state)
    return (
      <div className="studentsContainer">
        <h1>Students List</h1>
        {
          students.length > 0 &&
          students.map((student) => {
            return (
              <Student key={student.id} student={student} addStudentToFriends={(student) => this.props.addStudentToFriends(student)}/>
            )
          })
        }
      </div>
    )
  }
}
