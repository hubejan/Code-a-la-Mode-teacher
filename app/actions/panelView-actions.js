// @flow

// for sake of MVP we are only doing a ticket panel for now
// export const VIEW_TICKETS = 'VIEW_TICKETS';
// export const VIEW_HISTORY = 'VIEW_HISTORY';

// export function viewTickets() {
//   return { type: VIEW_TICKETS };
// }

// export function viewHistory() {
//   return { type: VIEW_HISTORY };
// }

export const OPEN = 'OPEN';
export const CLOSE = 'CLOSE';

export function open() {
  return { type: OPEN };
}

export function close() {
  return { type: CLOSE };
}
