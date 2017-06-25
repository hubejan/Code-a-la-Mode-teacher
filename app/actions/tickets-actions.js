// @flow
export const ADD_TICKET = 'ADD_TICKET';
export const SELECT_TICKET = 'SELECT_TICKET';
export const REMOVE_TICKET = 'REMOVE_TICKET';

// codestate subject to change- still unsure how we are storing
// current state of code
// student-side will need some form of create-ticket
// discussion: what kinds of props should a ticket have?
export type ticketType = {
  id: number,
  question: string,
  codeState?: string
};

// breaking down flow syntax:
// state can have a selectedTicket property that is either {} or a ticket
// state is an object that will be used as a map
//   this map can have numbers as keys (ticket_id is for semantic documentation)
//   this map can have values of ticketType
export type ticketsType = {
  selectedTicket: {} | ticketType,
  [ticket_id: string | number]: ticketType
};

// actions set up such that tickets can be selected/removed by ID
// should allow simple add/click/remove later on
export function add(ticket: ticketType) {
  return {
    type: ADD_TICKET,
    id: ticket.id,
    ticket
  };
}

export function select(ticket: ticketType) {
  return {
    type: SELECT_TICKET,
    id: ticket.id
  };
}

export function remove(ticket: ticketType) {
  return {
    type: REMOVE_TICKET,
    id: ticket.id
  };
}
