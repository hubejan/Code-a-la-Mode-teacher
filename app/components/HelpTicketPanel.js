// @flow
import React, { Component } from 'react';
import HelpTicket from './HelpTicket';
import type { ticketsType } from '../actions/tickets-actions';


class HelpTicketPanel extends Component {
  props: {
    ticketsState: ticketsType
  };

  render() {
    const { selectedTicket, ...tickets } = this.props.ticketsState;
    return (
      <div>
        { Object.keys(tickets).map(id => <HelpTicket ticket={tickets[id]} />) }
      </div>
    );
  }
}

export default HelpTicketPanel;
