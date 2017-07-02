import React, { Component } from 'react';
import { lessonInfoType } from '../reducers/lessonSession-reducer';

export default class GitControls extends Component {

  props: {
    getUserRepositories: () => void,
    token: string,
    checkoutNextBranch: () => void,
    checkoutPreviousBranch: () => void,
    createNewLesson: () => void,
    lessonInfo: lessonInfoType
  };

  render() {
    const { getUserRepositories,
            token,
            checkoutNextBranch,
            checkoutPreviousBranch,
            createNewLesson,
            lessonInfo } = this.props;

    return (
      <div>
        <button onClick={() => { getUserRepositories(token); }}>
           Get User&apos;s Repositories
        </button>

        <button onClick={() => { checkoutPreviousBranch(lessonInfo); }} >
          Previous branch
        </button>

        <button onClick={() => { checkoutNextBranch(lessonInfo); }} >
          Next branch
        </button>

        <button onClick={() => { createNewLesson(); }} >
          New Lesson
        </button>
      </div>
    );
  }
}
