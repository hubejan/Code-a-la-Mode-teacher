// @flow
import { VIEW_TICKETS, VIEW_HISTORY } from '../actions/panelView-actions';

type actionType = {
  type: string
};

const defaultView = 'HelpTickets';

// may eventually add a terminal/REPL view?
// these states are used in RightPanelContainer to determine what to render
export default function panelView(state: string = defaultView, action: actionType) {
  switch (action.type) {
    case VIEW_TICKETS:
      return 'HelpTickets';
    case VIEW_HISTORY:
      return 'History';
    default:
      return state;
  }
}
