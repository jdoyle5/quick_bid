import { connect } from 'react-redux';

import { createUser } from '../../actions/session_actions';
import Auth from './auth';

const mapStateToProps = (state) => ({
  loggedIn: Boolean(state.session.currentUser)
});

const mapDispatchToProps = (dispatch) => ({
  // receiveCurrentUser: (currentUser) => dispatch(receiveCurrentUser(currentUser)),
  createUser: (currentUser) => dispatch(createUser(currentUser))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Auth);
