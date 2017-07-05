// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux';

import Drawer from 'material-ui/Drawer';
import AppBar from 'material-ui/AppBar';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import IconButton from 'material-ui/IconButton';

import HelpTicketPanel from '../components/HelpTicketPanel';
import { select, remove } from '../actions/tickets-actions';
import { close } from '../actions/panelView-actions';
import type { ticketsStateType } from '../reducers/tickets-reducer';

function mapStateToProps(state) {
  return {
    panelOpen: state.panelOpen,
    ticketsState: state.tickets
  };
}

function mapDispatchToProps(dispatch: *) {
  return {
    selectTicket(ticket) {
      dispatch(select(ticket));
    },
    removeTicket(ticket) {
      dispatch(remove(ticket));
    },
    closePanel() {
      dispatch(close());
    }
  };
}

class RightPanelContainer extends Component {
  props: {
    panelOpen: boolean,
    ticketsState: ticketsStateType,
    selectTicket: () => void,
    removeTicket: () => void,
    closePanel: () => void
  };

  render() {
    const { ticketsState, selectTicket, removeTicket, panelOpen, closePanel } = this.props;

    return (
      <Drawer width={400} openSecondary={true} open={panelOpen} >
        <AppBar
          title="Help Tickets"
          iconElementLeft={<IconButton><NavigationClose /></IconButton>}
          onLeftIconButtonTouchTap={() => closePanel()}
        />
        <HelpTicketPanel
          ticketsState={ticketsState}
          selectTicket={selectTicket}
          removeTicket={removeTicket}
        />
      </Drawer>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RightPanelContainer);
