import React, { Component } from 'react';
import { lessonInfoType } from '../reducers/lessonSession-reducer';

export default class GitControls extends Component {

  props: {
    token: string,
    repositoryPath: string,
    checkoutNextBranch: () => void,
    checkoutPreviousBranch: () => void,
    saveLesson: () => void,
    lessonInfo: lessonInfoType,
    currentOpenFiles: Array<string>,
    currentEditorValues: Array<string>
  };

  render() {
    const { token,
            repositoryPath,
            checkoutNextBranch,
            checkoutPreviousBranch,
            lessonInfo,
            saveLesson,
            currentOpenFiles,
            currentEditorValues } = this.props;

    return (
      <div>
        <button onClick={() => { checkoutPreviousBranch(lessonInfo, currentOpenFiles, currentEditorValues); }} >
          Previous Branch
        </button>

        <button onClick={() => { checkoutNextBranch(lessonInfo, currentOpenFiles, currentEditorValues); }} >
          Next Branch
        </button>

        <button onClick={() => {
          saveLesson(currentOpenFiles, currentEditorValues)
            .then(() => console.log('Saved!'))
            .catch(error => console.error(error));
        }}
        >
          Save Lesson
        </button>
      </div>
    );
  }
}
