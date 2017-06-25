import React, { Component } from 'react';
import FileTree from 'react-filetree-electron';
// import type { filetreeStateType } from '../reducers/filetree-reducer';
// import store from '../store/configureStore.dev';
// import { getUsername } from '../actions/filetree-actions';

// import './app.global.css';
// import { configureStore, history } from './store/configureStore';
// const store = configureStore();
// import styles from './Counter.css';
export default class Filetree extends Component {
  props: {
    username: string
  };
  constructor(props) {
    super(props);
    console.log('mmmmmmmm filetree props; ', props);
  }

  componentDidMount() {
    console.log('reached COMPONENT WILL MOUNT');
    this.props.dispatchGetUsername();
  }

  render() {
    console.log('THIS.PROPS: ', this.props);
    return (
      <div>
        {/*{(this.props.username) ?*/}
          <FileTree directory={`/Users/${this.props.username}`} />
          {/*{this.props.username}*/}
      </div>
    );
  }
}
