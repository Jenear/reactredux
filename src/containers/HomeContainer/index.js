import React from 'react';
import Todoheader from './todoheaderContainer';
import Todolist from './todolistContainer';
import TodoFooter from './todoFooterContainer'

const Home = () => {
  return (
    <div>
      <Todoheader />
      <Todolist />
      <TodoFooter/>
    </div>
  );
};
export default Home;
