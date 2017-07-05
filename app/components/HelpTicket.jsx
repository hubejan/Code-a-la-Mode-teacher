// @flow
import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import type { ticketType } from '../actions/tickets-actions';
import Flexbox from 'flexbox-react';

// just a skeleton, not sure how tickets will actually be represented yet
const truncate = (question: string) => `${question.slice(0, 15)}...`;

const HelpTicket = ({ ticket }: {ticket: ticketType}) => (
  <Card>
    <CardHeader
      title={ticket.question.length > 15 ? truncate(ticket.question) : ticket.question}
      actAsExpander={Boolean(true)}
      showExpandableButton={Boolean(true)}
    />
    <CardText expandable={Boolean(true)}>
      {ticket.question}
    </CardText>
  </Card>
);

export default HelpTicket;
