import React from 'react';
import ReactDOM from 'react-dom';
import MainRouter from './Router';
import HomeBar from './components/HomeBar';
import store from './store';
import { Provider } from 'react-redux';
// Provider负责向子组件提供上下文对象，上下文对象有一个store
const App = () => {
  return (
    <Provider store={store}>
      <div>
        <HomeBar />
        <MainRouter />
      </div>
      <div>aaa</div>
    </Provider>
  );
};
ReactDOM.render(<App />, document.getElementById('root'));
