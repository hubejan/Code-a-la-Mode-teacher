// @flow
import React, { Component } from 'react';
import { HelpTicket } from './HelpTicket';

// class Counter extends Component {
//   props: {
//     increment: () => void,
//     incrementIfOdd: () => void,
//     incrementAsync: () => void,
//     decrement: () => void,
//     counter: number
//   };

//   render() {
//     const { increment, incrementIfOdd, incrementAsync, decrement, counter } = this.props;
//     return (
//       <div> 
//       </div>
//     );
//   }
// }

class HelpTicketPanel extends Component {
  props: {
    tickets: Array<{question: string}> // what else does a ticket object have in it?
  };

  render() {
    const { tickets } = this.props;
    return (
      <div>
        { tickets.map(ticket => <HelpTicket ticket={ticket} />) }
      </div>
    );
  }
}
export default HelpTicketPanel;
