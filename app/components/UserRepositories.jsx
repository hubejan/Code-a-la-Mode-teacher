import React, { Component } from 'react';
import { shell } from 'electron';

import { GithubIcon } from './LoginComponent';

import { orange } from '../public/colors';

import {
  Table,
  TableBody,
  TableFooter,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';

import RepositoryPanel from './RepositoryPanel';

const iconStyle = {
  height: 60,
  width: 60,
  verticalAlign: 'middle',
  paddingTop: 10,
  paddingLeft: 10
};

export default class UserRepositories extends Component {
  props: {
    repositories: Array<Object>,
    openRepoLink: (repoLink: string, event: Object) => void,
    loadLesson: (repoLink: string, history: Object) => void,
    history: Object
  };

  render() {
    const { repositories, openRepoLink, loadLesson, history } = this.props;

    return (
      <Table fixedHeader={true} selectable={true} showCheckboxes={false} >
        <TableHeader enableSelectAll={false} displaySelectAll={false} adjustForCheckbox={false}>
          <TableRow>
            <TableHeaderColumn
              colSpan="3"
              style={{ textAlign: 'center', fontSize: 30, color: orange }}>
                Load from Github
                <GithubIcon style={iconStyle}/>
            </TableHeaderColumn>
          </TableRow>
          <TableRow>
            <TableHeaderColumn
              style={{
                fontSize: 28,
                color: orange
              }}>Name</TableHeaderColumn>
            <TableHeaderColumn
              style={
                {
                  textAlign: 'center',
                  fontSize: 28,
                  color: orange
                }
              }>Updated</TableHeaderColumn>
            <TableHeaderColumn
              style={
                {
                textAlign: 'center',
                fontSize: 28,
                color: orange
              }
              }>Actions</TableHeaderColumn>
          </TableRow>
        </TableHeader>
        <TableBody showRowHover={true} stripedRows={true} >
          {
            repositories &&
            repositories.map(repository => (
              <RepositoryPanel
                history={history}
                key={repository.id}
                repository={repository}
                openRepoLink={openRepoLink}
                loadLesson={loadLesson}
              />
            ))
          }
        </TableBody>
      </Table>
    );
  }
}
