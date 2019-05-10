import Todolist from '../../components/Home/todolist';
import { connect } from 'react-redux';
import { deleteItem } from '../../actions/todo';
const mapStateToProps = state => {
  return {
    todos: state.getIn(['todoList', 'lists'])
  };
};
const mapDispatchToProps = dispatch => ({
  //
  delete: id => dispatch(deleteItem({ id }))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Todolist);
