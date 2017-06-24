// @flow
import React from 'react';

type TicketType = {
  question: string
};

const HelpTicket = ({ ticket }: {ticket: TicketType}) => (
  <div>
    <pre>{`${ticket.question}`}</pre>
  </div>
);

export default HelpTicket;
