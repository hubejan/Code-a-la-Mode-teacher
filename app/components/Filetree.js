

import React, { Component } from 'react';
import FileTree from 'react-filetree-electron';

import type { filetreeStateType } from '../reducers/filetree-reducer';
import { configureStore } from '../store/configureStore';
import { getUsername } from '../actions/filetree-actions';

// import './app.global.css';
// import { configureStore, history } from './store/configureStore';
// import './app.global.css';

// const store = configureStore();
const store = configureStore();


// import { Link } from 'react-router-dom';
// import styles from './Counter.css';
export default class Filetree extends Component {

  constructor(props) {
    super(props);
    console.log('mmmmmmmm filetree props; ', props);
    // this.state = {
    //   remoteVideoRendered: false,
    //   playerInfo:{
    //       name: props.myName,
    //       _id: props.id,
    //       id: socket.id
    //     }
    // }
    // this.setSelfToDriver = this.setSelfToDriver.bind(this)
  }

  componentDidMount() {
    console.log('reached COMPONENT WILL MOUNT');
    store.dispatch(getUsername());
  }

  render() {
    console.log('THIS.PROPS: ', this.props);
    return (
      <div>
        {(this.props.username) ?
          <FileTree directory={`/Users/${this.props.username}`} /> : <div />
      }
      </div>
    );
  }
}
