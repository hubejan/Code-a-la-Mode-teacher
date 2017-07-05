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
import Divider from 'material-ui/Divider';
import Paper from 'material-ui/Paper';

const stylePaper = {
  height: 100,
  width: 100,
  margin: 20,
  textAlign: 'center',
  display: 'inline-block',
};


const tempStyle = {
  position: 'absolute',
  top: '30%',
  left: '30%',
  textAlign: 'left'
};

const btnStyle = {
  position: 'right',
  top: '2%',
  left: '2%'
};

const style = {
  margin: 14,
};

export default class Home extends Component {
  props: {
    username: string,
    githubLogout: () => void
  };


  state = { open: false };

  handleToggle = () => this.setState({ open: !this.state.open });

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
