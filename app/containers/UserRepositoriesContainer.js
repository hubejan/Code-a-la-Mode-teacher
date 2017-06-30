import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as UserRepositoriesActions from '../actions/userrepositories-actions';
import UserRepositories from '../components/UserRepositories';

import { loadAfterCloning } from '../actions/lessonsession-actions';

function mapStateToProps(state) {
  return {
    repositories: state.lessonSession.userRepositories,
    repositoryPath: state.userRepositories.repositoryPath
  };
}

function mapDispatchToProps(dispatch) {
  const UserRepositoriesActionsWithLoad = Object.assign({}, UserRepositoriesActions, { loadAfterCloning });
  return bindActionCreators(UserRepositoriesActionsWithLoad, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(UserRepositories);
