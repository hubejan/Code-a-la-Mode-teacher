import React, { Component } from 'react';

export default class GitControls extends Component {
  props: {
    getUserRepositories: () => void,
    token: string,
    checkoutNextBranch: () => void,
    lessonInfo: Object
  };

  render() {
    const { getUserRepositories, token, checkoutNextBranch, lessonInfo } = this.props;
    return (
      <div>
        <button onClick={() => { getUserRepositories(token); }}>
           Get User&apos;s Repositories
        </button>

        <button>Previous branch</button>


        <button onClick={() => { checkoutNextBranch(lessonInfo); }} >
          Next branch
        </button>

        {
          /* COMMENT STUFF OUT HERE */
        }


      </div>
    );
  }
}
