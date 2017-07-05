// @flow
// import { VIEW_TICKETS, VIEW_HISTORY } from '../actions/panelView-actions';
import { OPEN, CLOSE } from '../actions/panelView-actions';

type actionType = {
  type: string
};

const defaultView = false;

// may eventually add a terminal/REPL view?
// these states are used in RightPanelContainer to determine what to render
export default function panelOpen(state: boolean = defaultView, action: actionType) {
  switch (action.type) {
    case OPEN:
      return true;
    case CLOSE:
      return false;
    default:
      return state;
  }
}
