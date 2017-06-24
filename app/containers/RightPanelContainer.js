// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux';
import HelpTicketPanel from '../components/HelpTicketPanel';
import type { ticketType } from '../actions/tickets-actions';

function mapStateToProps(state) {
  return {
    panelView: state.panelView,
    tickets: state.tickets
  };
}

// function mapDispatchToProps(dispatch) {
//   return bindActionCreators(CounterActions, dispatch);
// }

class RightPanelContainer extends Component {
  props: {
    panelView: string,
    tickets: Array<ticketType>
  };

  render() {
    const { panelView, tickets } = this.props;

    return (
      <div>
        {() => {
          switch (panelView) {
            case 'HelpTickets':
              return <HelpTicketPanel tickets={tickets} />;
            default:
              return <HelpTicketPanel tickets={tickets} />;
          }
        }}
      </div>
    );
  }
}

export default connect(mapStateToProps)(RightPanelContainer);
