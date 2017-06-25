// @flow
import React, { Component } from 'react';
import HelpTicket from './HelpTicket';
import type { ticketsStateType } from '../reducers/tickets-reducer';


class HelpTicketPanel extends Component {
  props: {
    ticketsState: ticketsStateType
  };

  render() {
    const { selectedTicket, ...tickets } = this.props.ticketsState;
    return (
      <div>
        <h4>HelpTicketPanel Component</h4>
        { Object.keys(tickets).map(id => <HelpTicket key={id} ticket={tickets[id]} />) }
      </div>
    );
  }
}

export default HelpTicketPanel;
