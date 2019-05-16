import Todolist from '../../components/Home/todolist';
import { connect } from 'react-redux';
import { deleteItem, toggleTodos ,checkedAll,doubleClick,updateItem,changeValue} from '../../actions/todo';
const mapStateToProps = state => {
  const todoLists =state.getIn(['todoList', 'lists']).toJS();
  return {
    todos: state.getIn(['todoList', 'lists']).toJS().filter(item=>{
      const type =state.getIn(['filterType','type']);
      if(type==='active'){
        return !item.completed
      }else if(type==='completed'){
        return item.completed

      }else{
        return true
      }
    }),
    activeCount:todoLists.filter(item=>!item.completed).length,
    editing:state.getIn(['todoList','editing']),
    editValue:state.getIn(['todoList','editValue'])
  };
};
const mapDispatchToProps = dispatch => ({
  //
  delItem: id => dispatch(deleteItem({ id })),
  toggle: id =>dispatch(toggleTodos({id})),
  // checkedToggle:checked=>dispatch(checkedAll({checked})),
  checkedToggle:checked=>dispatch(checkedAll({checked})),
  doubleClickItem:(id,value)=>dispatch(doubleClick({id,value})),
  updateValue:(id,value,code,e)=>dispatch(updateItem({id,value,code,e})),
  changeValue:(value)=>dispatch(changeValue({value}))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Todolist);
