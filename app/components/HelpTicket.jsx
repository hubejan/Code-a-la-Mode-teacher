// @flow
import React from 'react';
import Flexbox from 'flexbox-react';

import FlatButton from 'material-ui/FlatButton';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import type { ticketType } from '../actions/tickets-actions';

// just a skeleton, not sure how tickets will actually be represented yet
const truncate = (question: string) => `${question.slice(0, 15)}...`;

const HelpTicket = ({ ticket }: {ticket: ticketType}) => (
  <Card>
    <CardHeader
      title={ticket.question.length > 15 ? truncate(ticket.question) : ticket.question}
      actAsExpander={true}
      showExpandableButton={true}
    />
    {
      ticket.question.length > 15
      ? <CardText expandable={true}>
        {ticket.question}
      </CardText>
      : null
    }
    <CardActions expandable={true}>
      <Flexbox justifyContent="center">
        <FlatButton label="Show Code" />
        <FlatButton label="Close" />
      </Flexbox>
    </CardActions>
  </Card>
);

export default HelpTicket;
