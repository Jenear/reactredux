import React from 'react';
import Todoheader from './todoheaderContainer';
import Todolist from './todolistContainer';

const Home = () => {
  return (
    <div>
      <Todoheader />
      <Todolist />
    </div>
  );
};
export default Home;
