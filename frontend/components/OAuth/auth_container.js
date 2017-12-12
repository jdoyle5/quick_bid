import { connect } from 'react-redux';

import {receiveCurrentUser} from '../../actions/session_actions';
import Auth from './auth';

const mapStateToProps = (state) => ({
  loggedIn: Boolean(state.session.currentUser)
});

const mapDispatchToProps = (dispatch) => ({
  receiveCurrentUser: (currentUser) => dispatch(receiveCurrentUser(currentUser))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Auth);
