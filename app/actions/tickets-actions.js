// @flow
export const ADD_TICKET = 'ADD_TICKET';
export const SELECT_TICKET = 'SELECT_TICKET';
export const REMOVE_TICKET = 'REMOVE_TICKET';

export type ticketType = {
  question: string,
  unread?: boolean
};

export function add(question: string) {
  return {
    type: ADD_TICKET,
    ticket: { question, unread: true }
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
