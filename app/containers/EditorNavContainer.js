import { connect } from 'react-redux';
import EditorNav from '../components/EditorNav';
import { open } from '../actions/panelView-actions';

function mapStateToProps(state) {
  return {
    allTickets: state.tickets.allTickets
  };
}

function mapDispatchToProps(dispatch) {
  return {
    openPanel() {
      dispatch(open());
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(EditorNav);
