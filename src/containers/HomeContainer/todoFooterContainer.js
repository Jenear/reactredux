import { connect } from "react-redux";
import TodoFooter from "../../components/Home/todoFooter";
import {filterList}from '../../actions/todo';


const mapStateToProps=(state)=>({
    //
    filter:state.getIn(['filterType','type'])

})
const mapDispatchToProps=(dispatch)=>({
    //
filterList:(filter)=>{
    return dispatch(filterList({filter}))
}
    
})

export default connect(mapStateToProps,mapDispatchToProps)(TodoFooter)