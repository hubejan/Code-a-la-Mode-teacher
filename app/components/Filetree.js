// @flow
import React from 'react';
import FileTree from 'react-filetree-electron';

// import { Link } from 'react-router-dom';
// import styles from './Counter.css';


export default function Filetree(props) {
  return (
    <FileTree directory={`Users/${props.name}`} />
  );
}
