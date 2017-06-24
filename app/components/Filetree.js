
import React from 'react';
import FileTree from 'react-filetree-electron';

import type { filetreeStateType } from '../reducers/filetree-reducer';

// import { Link } from 'react-router-dom';
// import styles from './Counter.css';


export default function Filetree(props) {
  console.log('filetree props; ', props);
  if (props.username) {
    console.log('what?! ', props.username);
    return (
      <FileTree directory={`Users/${props.username}`} />
    );
  }
  return null;
}
