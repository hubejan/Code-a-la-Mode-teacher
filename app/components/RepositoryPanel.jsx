import React, { Component } from 'react';
import { GithubIcon } from './LoginComponent';
import FileFileDownload from 'material-ui/svg-icons/file/file-download';
import { cyan, green, yellow } from '../public/colors';

import {
  Table,
  TableBody,
  TableFooter,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';
import RaisedButton from 'material-ui/RaisedButton';
import Flexbox from 'flexbox-react';
import FontIcon from 'material-ui/FontIcon';

const styles = {
  button: {
    margin: 2,
    border: 2,
    borderStyle: 'solid'
  },
  exampleImageInput: {
    cursor: 'pointer',
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    width: '100%',
    opacity: 0,
  },
  icon: {
    height: 30,
    paddingLeft: 5,
    paddingTop: 5
  }
};

export default class UserRepositories extends Component {
  props: {
    repository: Object,
    openRepoLink: () => void,
    loadLesson: () => void
  };

  render() {
    const { repository, openRepoLink, loadLesson, history } = this.props;
    const updatedAtObj = new Date(repository.updated_at);
    const updatedAtUTC = updatedAtObj.toUTCString();
    const updatedAtString = `${updatedAtUTC}`;

    return (
      <TableRow key={repository.id}>
        <TableRowColumn
          style={
            {
              fontSize: 20,
              color: yellow
            }
          }>{ repository.name }</TableRowColumn>
        <TableRowColumn
          style={
            {
              textAlign: 'center',
              fontSize: 14,
              color: yellow
            }
          }>{ updatedAtString }</TableRowColumn>
        <TableRowColumn
          style={
            {
              textAlign: 'right'
            }
          }>
          <RaisedButton
            onClick={(e) => { openRepoLink(repository.html_url, e); }}
            label="View on Github"
            style={styles.button}
            icon = {<GithubIcon />}
          ></RaisedButton>
          <RaisedButton
            onClick={() => {
              loadLesson(repository.html_url, history);
            }}
            label="Load Lesson"
            style={styles.button}
            icon={<FileFileDownload />}
          ></RaisedButton>
        </TableRowColumn>
      </TableRow>
    );
  }
}
