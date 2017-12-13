import { connect } from 'react-redux';

import {requestItems} from '../../actions/item_actions';
import Home from './home';
import { selectItems } from '../../reducers/selectors';

const mapStateToProps = (state) => ({
  items: state.entities.items
});

const mapDispatchToProps = (dispatch) => ({
  requestItems: () => dispatch(requestItems())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
