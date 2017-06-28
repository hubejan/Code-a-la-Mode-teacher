import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as UserRepositoriesActions from '../actions/userrepositories-actions';
import UserRepositories from '../components/UserRepositories';

function mapStateToProps(state) {
  return {
    repositories: state.lessonSession.userRepositories
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(UserRepositoriesActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(UserRepositories);
