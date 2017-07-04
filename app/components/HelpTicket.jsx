// @flow
import React from 'react';
import type { ticketType } from '../actions/tickets-actions';

// just a skeleton, not sure how tickets will actually be represented yet
const HelpTicket = ({ ticket }: {ticket: ticketType}) => (
  <div>
    <pre>{`${ticket.question}`}</pre>
  </div>
);

export default HelpTicket;
