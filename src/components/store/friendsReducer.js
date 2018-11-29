const defaultState = {
  friendsList: [],
  studentsList: []
}
export default function friendsReducer(state = defaultState, action){
  let {friendsList, studentsList} = state;
  switch(action.type){
    case "FETCH_STUDENTS":
      return {studentsList: action.payloads, friendsList: []}
    case "ADD_FRIEND":
      friendsList.push(action.payloads)
      return {...state, friendsList: [...friendsList], studentsList}
    case "REMOVE_FRIEND":
      const indexOfStudent = friendsList.indexOf(action.payloads)
      friendsList.splice(indexOfStudent, 1)
      return {...state, friendsList: [...friendsList], studentsList}
    default:
      return state
  }
}