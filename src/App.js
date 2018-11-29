import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Students from './components/Students/Students';
import Friends from './components/Friends/Friends';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      friendsList: []
    }
  }

  addStudentToFriends(student){
    let friends = this.state.friendsList;
    if(!friends.includes(student)){
      friends.push(student)
      this.setState({friendsList: friends})
    } else {
        alert("This student is already in friends list !")
    }
  }

  removeFriendFromList(friend){
    let friends = this.state.friendsList;
    const index = friends.indexOf(friend)
    friends.splice(index, 1)
    this.setState({friendsList: friends})
  }
  render() {
    return (
      <div className="App">
        <Students addStudentToFriends={(student) => this.addStudentToFriends(student)}/>
        <Friends friendsList={this.state.friendsList} removeFriendFromList={(friend) => this.removeFriendFromList(friend)}/>
      </div>
    );
  }
}

export default App;
