// @flow
export const VIEW_TICKETS = 'VIEW_TICKETS';
export const VIEW_HISTORY = 'VIEW_HISTORY';

export function viewTickets() {
  return { type: VIEW_TICKETS };
}

export function viewHistory() {
  return { type: VIEW_HISTORY };
}
