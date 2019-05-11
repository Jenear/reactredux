import Todoheader from '../../components/Home/todoheader';
import { ADDTODO } from '../../constants/actionTypes';
import { connect } from 'react-redux';
import { addTodo } from '../../actions/todo';
// mapStateToProps：把状态对象映射为当前组件属性对象，输入从redux中读取状态在页面中渲染
const mapStateToProps = state => ({
  //a: 12用来测试
  a: 12
});
// mapDispatchToProps：把dispatch方法映射为属性，输出到当前视图中的操作发射出去
const mapDispatchToProps = dispatch => ({
  //
  // addTodo: title => {
  //     dispatch({ type: ADDTODO, title });
  // },
  addTodo: e => {
    if (e && e.keyCode === 13) {
      const inputValue = e.target.value;
      e.target.value = '';
      if (inputValue) {
        dispatch(
          addTodo({ id: Date.now(), value: inputValue, completed: false })
        );
      }
    }
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Todoheader);
