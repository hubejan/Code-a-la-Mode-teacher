// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Flexbox from 'flexbox-react';
import RightPanelConatiner from '../containers/RightPanelContainer';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import Toggle from 'material-ui/Toggle';
import Drawer from 'material-ui/Drawer';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import Badge from 'material-ui/Badge';
import NotificationsIcon from 'material-ui/svg-icons/social/notifications';
import HelpIcon from 'material-ui/svg-icons/action/help-outline';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import Divider from 'material-ui/Divider';
import Paper from 'material-ui/Paper';


const questions = [
{
  status: "new",
  lineNumber: "22",
  question: "Was is das?"
},
{
  status: "answered",
  lineNumber: "0",
  question: "Was is das?"
},
]



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

const TicketsMenu = (props) => (
  <IconMenu
    {...props}
    iconButtonElement={
      <IconButton><MoreVertIcon /></IconButton>
    }
    targetOrigin={{ horizontal: 'right', vertical: 'top' }}
    anchorOrigin={{ horizontal: 'right', vertical: 'top' }}
  >
    <MenuItem primaryText="Create Ticket" />
  </IconMenu>
);

const getNumberOfNewQuestions = (questionsArr) => {
  return questionsArr.filter(el => el.status === 'new').length;
}

const getQuestionHeader = (q) => {
  let header;
  if (q.lineNumber !== '0') header = `Line Number: ${q.lineNumber}`;
  else header = 'General';
  return (q.status === 'new' ? `${header}` : header);
}

const markQuestionAsRead = (q) => {
  if(q.status !== 'new')
    console.log("NO DISPATCH --> question has been read before !!!", q);
  else
    console.log("DISPATCH --> expanded question marked as read !!!", q);
}



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
        <AppBar title={`Welcome back ${this.props.username.split(' ')[0]}`}  display="flex">
          <Flexbox display="flex" justifyContent="center">
                    <Badge
                      badgeContent={getNumberOfNewQuestions(questions)}
                      secondary={true}
                      badgeStyle={{ top: 16, right: 16 }}
                    >
                      <IconButton tooltip="Show Questions" onClick={() => this.handleToggle()}>
                        <NotificationsIcon />
                      </IconButton>
                    </Badge>
          <RaisedButton style={style} onClick={this.props.githubLogout}>Logout</RaisedButton>
          </Flexbox>
        </AppBar>
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

          <Drawer width={600} openSecondary={true} open={this.state.open} zDepth={5} >
            <AppBar
              title="Questions"
              iconElementLeft={<TicketsMenu />}
              iconElementRight={<IconButton><NavigationClose /></IconButton>}
              onRightIconButtonTouchTap={() => this.handleToggle()}
            >
            </AppBar>
              <Flexbox display="flex" flexDirection="column">
                { questions.map((q)=> {
                  return (
                  <Card>
                    <CardHeader
                      title={ getQuestionHeader(q) }
                      actAsExpander={true}
                      showExpandableButton={true}
                      onClick={() => markQuestionAsRead(q) }
                    />
                    <CardText expandable={true}>
                      {q.question}
                    </CardText>
                  <Divider />
                  </Card>
                  )
                })
                }
              </Flexbox>
          </Drawer>
      </Flexbox>
    );
  }
}
