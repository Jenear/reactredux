import Todolist from '../../components/Home/todolist';
import { connect } from 'react-redux';
const mapStateToProps = state => {
    console.log('state3333333', state)
    return {
        // todos: state.todosReducer.toJS()
        todos: state.getIn(['todosReducer','lists']),
    }
}
const mapDispatchToProps = dispatch => ({
    //
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Todolist);