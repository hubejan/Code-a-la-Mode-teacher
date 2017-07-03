// @flow
export const ADD_TICKET = 'ADD_TICKET';
export const SELECT_TICKET = 'SELECT_TICKET';
export const REMOVE_TICKET = 'REMOVE_TICKET';

// codestate subject to change- still unsure how we are storing
// current state of code
// student-side will need some form of create-ticket
// discussion: what kinds of props should a ticket have?
export type ticketType = {
  question: string,
  takeSnapshot?: boolean
};

// may add a takeSnapshot? property to ticket later
export function add(question: string) {
  return {
    type: ADD_TICKET,
    ticket: { question }
  };
}

export function select(ticket: ticketType) {
  return {
    type: SELECT_TICKET,
    ticket
  };
}

export function remove(ticket: ticketType) {
  return {
    type: REMOVE_TICKET,
    ticket
  };
}
