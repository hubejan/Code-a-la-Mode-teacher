import React from 'react';
import Flexbox from 'flexbox-react';

import AppBar from 'material-ui/AppBar';
import Badge from 'material-ui/Badge';
import IconButton from 'material-ui/IconButton';
import NotificationsIcon from 'material-ui/svg-icons/social/notifications';

import GitControlsContainer from '../containers/GitControlsContainer';


// need menu for back-to-lesson-page
// need menu item for logout

const EditorNav = ({ openPanel, allTickets }) => {
  const unread = allTickets.filter(ticket => ticket.unread === true);

  return (
    <Flexbox element="header" height="70px" width="100vw">
      <AppBar title="Code-a-la-Mode">
        <GitControlsContainer />
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
