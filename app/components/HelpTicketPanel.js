// @flow
import React, { Component } from 'react';
import HelpTicket from './HelpTicket';
import type { ticketType } from '../actions/tickets-actions';

class HelpTicketPanel extends Component {
  props: {
    tickets: Array<ticketType>
  };

  render() {
    const { tickets } = this.props;
    return (
      <div>
        { tickets.map(ticket => <HelpTicket ticket={ticket} />) }
      </div>
    );
  }
}
export default HelpTicketPanel;
