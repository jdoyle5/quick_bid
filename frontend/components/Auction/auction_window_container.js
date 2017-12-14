import { connect } from 'react-redux';

import AuctionWindow from './auction_window';
import { receiveAuctionItem } from '../../actions/auction_actions';

const mapStateToProps = (state) => ({
  item: state.entities.auction
});

const mapDispatchToProps = (dispatch) => ({
  receiveAuctionItem: (item) => dispatch(receiveAuctionItem(item))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AuctionWindow);
