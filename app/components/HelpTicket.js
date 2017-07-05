// @flow
import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import type { ticketType } from '../actions/tickets-actions';

// just a skeleton, not sure how tickets will actually be represented yet
const truncate = (question: string) => `${question.slice(0, 15)}...`;

const HelpTicket = ({ ticket }: {ticket: ticketType}) => (
  <Card>
    <CardHeader
      title={truncate(ticket.question)}
      actAsExpander={Boolean(true)}
      showExpandableButton={Boolean(true)}
    />
    <CardText expandable={Boolean(true)}>
      {ticket.question}
    </CardText>
  </Card>
);

export default HelpTicket;
