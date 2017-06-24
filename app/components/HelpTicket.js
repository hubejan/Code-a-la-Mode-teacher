// @flow
import React from 'react';
import type { ticketType } from '../actions/tickets';

const HelpTicket = ({ ticket }: {ticket: ticketType}) => (
  <div>
    <pre>{`${ticket.question}`}</pre>
  </div>
);

export default HelpTicket;
