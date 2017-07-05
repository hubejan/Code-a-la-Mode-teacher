import { connect } from 'react-redux';
import EditorNav from '../components/EditorNav';
import { open } from '../actions/panelView-actions';
import { teacherLogout } from '../actions/auth-actions';

function mapStateToProps(state) {
  return {
    allTickets: state.tickets.allTickets
  };
}

function mapDispatchToProps(dispatch) {
  return {
    openPanel() {
      dispatch(open());
    },
    githubLogout() {
      dispatch(teacherLogout());
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(EditorNav);
