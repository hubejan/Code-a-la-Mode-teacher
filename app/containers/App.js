// @flow
import React, { Component } from 'react';
import type { Children } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import CodeTheme from '../utils/codeTheme';

export default class App extends Component {
  props: {
    children: Children
  };

  render() {
    return (
      <div>
        <MuiThemeProvider muiTheme={getMuiTheme(CodeTheme)}>
          {this.props.children}
        </MuiThemeProvider>
      </div>
    );
  }
}
