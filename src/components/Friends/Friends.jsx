import React, { Component } from 'react'
import Friend from './Friend';
import "./Friend.css"

export default class Friends extends Component {
  render() {
    const {friendsList} = this.props;
    return (
      <div className="friendsContainer">
        <h2>Friends List</h2>
        {
          friendsList.length > 0 &&
          friendsList.map((friend) => {
            return(
              <Friend key={`friend_${friend.id}`} friend={friend} removeFriendFromList={(friend) => this.props.removeFriendFromList(friend)}/>
            )
          })
        }
      </div>
    )
  }
}
