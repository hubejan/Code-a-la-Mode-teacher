// @flow
import { ADD_TICKET, SELECT_TICKET, REMOVE_TICKET } from '../actions/tickets-actions';
import type { ticketType, ticketsType } from '../actions/tickets-actions';

type actionType = {
  type: string,
  id?: number,
  ticket?: ticketType
};

// breaking down flow syntax:
// state can have a selectedTicket property that is either {} or a ticket
// state is an object that will be used as a map
//   this map can have numbers as keys (ticket_id is for semantic documentation)
//   this map can have values of ticketType

const defaultTickets = {
  selectedTicket: {}
};

export default function tickets(state: ticketsType = defaultTickets, action: actionType) {
  switch (action.type) {
    case ADD_TICKET:
      return {
        ...state,
        [action.id]: action.ticket
      };
    case SELECT_TICKET:
      return {
        ...state,
        selectedTicket: action.id ? state[action.id] : {}
      };
    case REMOVE_TICKET:
      return {
        state,
        [action.id]: undefined
      };
    default:
      return state;
  }
}
