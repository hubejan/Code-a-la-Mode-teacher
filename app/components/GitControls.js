import React, { Component } from 'react';
import { lessonInfoType } from '../reducers/lessonSession-reducer';

export default class GitControls extends Component {

  props: {
    token: string,
    checkoutNextBranch: () => void,
    checkoutPreviousBranch: () => void,
    lessonInfo: lessonInfoType
  };

  render() {
    const { token,
            checkoutNextBranch,
            checkoutPreviousBranch,
            lessonInfo } = this.props;

    return (
      <div>
        <button onClick={() => { checkoutPreviousBranch(lessonInfo); }} >
          Previous branch
        </button>

        <button onClick={() => { checkoutNextBranch(lessonInfo); }} >
          Next branch
        </button>
      </div>
    );
  }
}
