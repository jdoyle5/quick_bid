import { connect } from 'react-redux';

import { createUser, receiveCurrentUser } from '../../actions/session_actions';
import { postUser } from '../../util/sessions_util';
import Auth from './auth';

const mapStateToProps = (state) => ({
  loggedIn: Boolean(state.session.currentUser)
});

const mapDispatchToProps = (dispatch) => ({
  receiveCurrentUser: (currentUser) => dispatch(receiveCurrentUser(currentUser)),
  postUser: postUser
  // createUser: (currentUser) => dispatch(createUser(currentUser))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Auth);
