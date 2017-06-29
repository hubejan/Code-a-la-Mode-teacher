import React, { Component } from 'react';

export default class UserRepositories extends Component {
  props: {
    repository: Object,
    openRepoLink: () => void
  };

  render() {
    const divStyle = {
      borderStyle: 'solid',
      borderColor: 'black',
      borderWidth: 2,
      margin: 5
    };

    const { repository, openRepoLink } = this.props;
    const updatedAtObj = new Date(repository.updated_at);
    const updatedAtUTC = updatedAtObj.toUTCString();
    const updatedAtString = `Last updated: ${updatedAtUTC}`;
    return (
      <div style={divStyle} >
        <div>
          { repository.name }
        </div>
        <div>
          { repository.html_url }
        </div>
        <div>
          { updatedAtString }
        </div>
        <button
          onClick={() => { openRepoLink(repository.html_url); }}
        >View on Github</button>
      </div>
    );
  }
}
