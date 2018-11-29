import React, { Component } from 'react'
import Friend from './Friend';
import "./Friend.css"
import { connect } from 'react-redux'

export class Friends extends Component {
  render() {
    console.log("Props from Friends.jsx", this.props)
    const {friendsList} = this.props;
    return (
      <div className="friendsContainer">
        <h2>Friends List</h2>
        {
          friendsList.length > 0 &&
          friendsList.map((friend) => {
            return(
              <Friend key={`friend_${friend.id}`} friend={friend}/>
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
  
}

export default connect(mapStateToProps, mapDispatchToProps)(Friends)

