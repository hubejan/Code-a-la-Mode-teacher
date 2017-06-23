// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux';
import HelpTicketPanel from '../components/HelpTicketPanel';

function mapStateToProps(state) {
  return {
    currentView: state.currentView,
    tickets: state.tickets
  };
}

// function mapDispatchToProps(dispatch) {
//   return bindActionCreators(CounterActions, dispatch);
// }

class RightPanelContainer extends Component {
  props: {
    currentView: string,
    tickets: Array<{question: string}>
  };

  render() {
    const { currentView, tickets } = this.props;

    return (
      <div>
        {() => {
          switch (currentView) {
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
