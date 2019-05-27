import { connect } from 'react-redux';
import User from '../../components/User/User';
const mapStateToProps = (state, ownProps) => ({
  // locale: state.root.language,
  locale: 'ZH',
});
const mapDispatchToProps = (dispatch, ownProps) => ({
  // changeLanguage: (val) => dispatch(actions.changeLanguage(val)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(User);
