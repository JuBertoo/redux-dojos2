import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Students from './components/Students/Students';
import Friends from './components/Friends/Friends';
import friendsReducer from "./components/store/friendsReducer"
import {createStore} from 'redux';
import {Provider} from 'react-redux';

const store = createStore(friendsReducer)

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      friendsList: []
    }
  }
  render() {
    console.log("Get store from App.js", store.getState())
    return (
      <Provider store={store}>
        <div className="App">
          <Students />
          <Friends />
        </div>
      </Provider>
    );
  }
}

export default App;
