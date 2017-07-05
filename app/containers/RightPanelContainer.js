// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Tab, Tabs } from 'material-ui/Tabs';
import HelpTicketPanel from '../components/HelpTicketPanel';
import { add, select, remove } from '../actions/tickets-actions';
import type { ticketsStateType } from '../reducers/tickets-reducer';

function mapStateToProps(state) {
  return {
    panelView: state.panelView,
    ticketsState: state.tickets
  };
}

function mapDispatchToProps(dispatch: *) {
  return {
    addTicket(ticket) {
      dispatch(add(ticket));
    },
    selectTicket(ticket) {
      dispatch(select(ticket));
    },
    removeTicket(ticket) {
      dispatch(remove(ticket));
    }
  };
}

class RightPanelContainer extends Component {
  props: {
    panelView: string,
    ticketsState: ticketsStateType,
    addTicket: () => void,
    selectTicket: () => void,
    removeTicket: () => void
  };

  render() {
    const { ticketsState, addTicket, selectTicket, removeTicket } = this.props;

    return (
      <div>
        <Link to="/">
          <i className="fa fa-arrow-left fa-3x" />
        </Link>
        <Tabs>
          <Tab label="Help Tickets">
            <HelpTicketPanel
              ticketsState={ticketsState}
              selectTicket={selectTicket}
              removeTicket={removeTicket}
            />
          </Tab>
        </Tabs>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RightPanelContainer);
