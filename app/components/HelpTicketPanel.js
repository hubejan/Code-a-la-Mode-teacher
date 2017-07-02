// @flow
import React, { Component } from 'react';
import HelpTicket from './HelpTicket';
import type { ticketsStateType } from '../reducers/tickets-reducer';


class HelpTicketPanel extends Component {
  props: {
    ticketsState: ticketsStateType,
    selectTicket: () => void,
    removeTicket: () => void
  };

  render() {
    const { allTickets } = this.props.ticketsState;
    return (
      <div>
        <h4>HelpTicketPanel Component</h4>
        { allTickets.map(ticket =>
          <HelpTicket key={ticket.question} ticket={ticket} />)
        }
      </div>
    );
  }
}

export default HelpTicketPanel;
