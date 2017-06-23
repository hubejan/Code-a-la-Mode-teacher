// @flow
import React from 'react';

type ticketType = {
  question: string
};

const HelpTicket = ({ ticket }: {ticket: ticketType}) => (
  <div>
    <pre>{ticket.question}</pre>
  </div>
);

export default HelpTicket;
