// @flow
import React, { Component } from 'react';
import type { Children } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import injectTapEventPlugin from 'react-tap-event-plugin';
import CodeTheme from '../utils/codeTheme';

injectTapEventPlugin();

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
