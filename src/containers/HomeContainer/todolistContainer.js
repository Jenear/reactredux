import Todolist from '../../components/Home/todolist';
import { connect } from 'react-redux';
const mapStateToProps = state => ({
  //
  list: []
});
const mapDispatchToProps = dispatch => ({
  //
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Todolist);
