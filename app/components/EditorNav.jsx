import React from 'react';
import Flexbox from 'flexbox-react';

import AppBar from 'material-ui/AppBar';
import Badge from 'material-ui/Badge';
import IconButton from 'material-ui/IconButton';
import NotificationsIcon from 'material-ui/svg-icons/social/notifications';

import GitControlsContainer from '../containers/GitControlsContainer';
import NavMenu from './CodingNavMenu';

import colors from '../public/colors';

const appBarStyles = {
  width: '100%',
  height: "70px",
  alignItems: "center"
};

const titleStyles = {
  // a cool font could be nice- using Bones default to match student for now
  fontFamily: 'Monaco',
  fontSize: '35px'
};

const Title = () => (
  <div style={titleStyles}>
    <span style={{ color: colors.cyan }}>Code </span>
    <span style={{ color: colors.green }}>à </span>
    <span style={{ color: colors.orange }}>la </span>
    <span style={{ color: colors.magenta }}>Mode</span>
  </div>
);

const EditorNav = ({ openPanel, allTickets, githubLogout }) => {
  const unread = allTickets.filter(ticket => ticket.unread === true);

  return (
    <Flexbox element="header" height="70px" width="100vw">
      <AppBar
        iconElementLeft={ <NavMenu githubLogout={githubLogout}/> }
      title={<Title />}
      iconElementRight={ <GitControlsContainer /> }
      >
        <Badge
          badgeContent={unread.length}
          secondary={true}
          badgeStyle={{ top: 16, right: 16 }}
        >
          <IconButton tooltip="Show Help Tickets" onClick={() => openPanel()}>
            <NotificationsIcon />
          </IconButton>
        </Badge>
      </AppBar>
    </Flexbox>
  );
};

export default EditorNav;
