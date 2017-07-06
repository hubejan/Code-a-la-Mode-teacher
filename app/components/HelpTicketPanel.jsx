// @flow
import React, { Component } from 'react';
import HelpTicket from './HelpTicket';
import Flexbox from 'flexbox-react';
import Divider from 'material-ui/Divider';
import type { ticketsStateType } from '../reducers/tickets-reducer';

const dividerStyle = {
  marginTop: '0px'
};

class HelpTicketPanel extends Component {
  props: {
    ticketsState: ticketsStateType,
    selectTicket: () => void,
    removeTicket: () => void
  };

  render() {
    const { allTickets } = this.props.ticketsState;
    return (
      <Flexbox flexDirection="column" >
        { allTickets.map(ticket => (
          <div>
            <HelpTicket
              key={ticket.question}
              ticket={ticket}
              selectTicket={this.props.selectTicket}
            />
            <Divider
              key={`div ${ticket.question}`}
              style={dividerStyle}
            />
          </div>
          ))
        }
      </Flexbox>
    );
  }
}

export default HelpTicketPanel;
