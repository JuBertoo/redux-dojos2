function fetchStudents(students){
  return ({
    type: "FETCH_STUDENTS",
    payloads: students
  })
}
function addStudentToFriends(student){
  return ({
    type: "ADD_FRIEND",
    payloads: student
  })
}

function removeStudentFromFriends(student){
  return ({
    type: "REMOVE_FRIEND",
    payloads: student
  })
}

module.exports = {
  addStudentToFriends: addStudentToFriends,
  removeStudentFromFriends: removeStudentFromFriends,
  fetchStudents: fetchStudents
}