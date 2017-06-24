// @flow
import React, { Component } from 'react';
import HelpTicket from './HelpTicket';

type TicketType = {
  question: string
};

class HelpTicketPanel extends Component {
  props: {
    tickets: Array<TicketType> // what else does a ticket object have in it?
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
