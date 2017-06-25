// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux';
import HelpTicketPanel from '../components/HelpTicketPanel';
import { add, select, remove } from '../actions/tickets-actions';
import type { ticketsType } from '../actions/tickets-actions';

function mapStateToProps(state) {
  return {
    panelView: state.panelView,
    ticketsState: state.tickets
  };
}

function mapDispatchToProps(dispatch: *) {
  return {
    addTicket(ticket) {
      dispatch(add(ticket));
    },
    selectTicket(ticket) {
      dispatch(select(ticket));
    },
    removeTicket(ticket) {
      dispatch(remove(ticket));
    }
  };
}

class RightPanelContainer extends Component {
  props: {
    panelView: string,
    ticketsState: ticketsType,
    addTicket: () => void,
    selectTicket: () => void,
    removeTicket: () => void
  };

  render() {
    const { panelView, ticketsState, addTicket, selectTicket, removeTicket } = this.props;

    return (
      <div>
        {() => {
          switch (panelView) {
            case 'HelpTickets':
              return (<HelpTicketPanel
                ticketsState={ticketsState}
                addTicket={addTicket}
                selectTicket={selectTicket}
                removeTicket={removeTicket}
              />);
            default:
              return (<HelpTicketPanel
                ticketsState={ticketsState}
                addTicket={addTicket}
                selectTicket={selectTicket}
                removeTicket={removeTicket}
              />);
          }
        }}
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RightPanelContainer);
