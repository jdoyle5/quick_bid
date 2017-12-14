export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
import * as APIUtil from '../util/sessions_util';

export const receiveCurrentUser = currentUser => ({
  type: RECEIVE_CURRENT_USER,
  currentUser
});

// export const createUser = (user) => dispatch => (
//   APIUtil.postUser(user).then(userObj => {
//     debugger;
//     return dispatch(receiveCurrentUser(userObj));
//   })
// );
