import React, { Component } from 'react';
import { lessonInfoType } from '../reducers/lessonSession-reducer';

export default class GitControls extends Component {

  props: {
    token: string,
    repositoryPath: string,
    checkoutNextBranch: () => void,
    checkoutPreviousBranch: () => void,
    saveLesson: () => void,
    lessonInfo: lessonInfoType
  };

  render() {
    const { token,
            repositoryPath,
            checkoutNextBranch,
            checkoutPreviousBranch,
            lessonInfo,
            saveLesson } = this.props;

    return (
      <div>
        <button onClick={() => { checkoutPreviousBranch(lessonInfo); }} >
          Previous Branch
        </button>

        <button onClick={() => { checkoutNextBranch(lessonInfo); }} >
          Next Branch
        </button>

        <button onClick={() => { saveLesson(repositoryPath, ); }} >
          Save Lesson
        </button>
      </div>
    );
  }
}
