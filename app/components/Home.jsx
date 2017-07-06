// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Flexbox from 'flexbox-react';
import RightPanelConatiner from '../containers/RightPanelContainer';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import Toggle from 'material-ui/Toggle';
import Drawer from 'material-ui/Drawer';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import Badge from 'material-ui/Badge';
import NotificationsIcon from 'material-ui/svg-icons/social/notifications';
import HelpIcon from 'material-ui/svg-icons/action/help-outline';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import Paper from 'material-ui/Paper';

const stylePaper = {
  height: 100,
  width: 100,
  margin: 20,
  textAlign: 'center',
  display: 'inline-block',
};


export default class Home extends Component {
  render() {
    return (
      <Flexbox display="flex" flexDirection="column">

        <Flexbox flexDirection="row">
          <Paper style={stylePaper} zDepth={3}>
            <Link to="/panelView">test the Question/History panel</Link>
          </Paper>
          <Paper style={stylePaper} zDepth={3}>
            <Link to="/lessonInit">Start A Lesson</Link>
          </Paper>
          <Paper style={stylePaper} zDepth={3}>
            <Link to="/editor">Editor</Link>
          </Paper>
        </Flexbox>
      </Flexbox>
    );
  }
}
