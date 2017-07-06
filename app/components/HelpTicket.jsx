// @flow
import React from 'react';
import Flexbox from 'flexbox-react';

import FlatButton from 'material-ui/FlatButton';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import { warmBlack } from '../public/colors';
import type { ticketType } from '../actions/tickets-actions';

const cardBackground = {
  backgroundColor: warmBlack
};

const truncate = (question: string) => `${question.slice(0, 15)}...`;

const HelpTicket = ({ ticket, selectTicket }) => (
  <Card onExpandChange={() => selectTicket(ticket)}>
    <CardHeader
      style={cardBackground}
      title={ticket.question.length > 15 ? truncate(ticket.question) : ticket.question}
      actAsExpander={true}
      showExpandableButton={true}
    />
    {
      ticket.question.length > 15
      ? <CardText style={cardBackground} expandable={true}>
        {ticket.question}
      </CardText>
      : null
    }
    <CardActions expandable={true}>
      <Flexbox justifyContent="center">
        <Flexbox flexGrow={1} justifyContent="center">
          <FlatButton label="Show Code" />
        </Flexbox>
        <Flexbox flexGrow={1} justifyContent="center">
          <FlatButton label="Close" />
        </Flexbox>
      </Flexbox>
    </CardActions>
  </Card>
);

export default HelpTicket;
