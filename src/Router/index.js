import React from 'react';
import {
  HashRouter as Router, //外层容器
  Route, //一条一条的路由
  Link
} from 'react-router-dom';

import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import Root from '../components/Root';
// import Home from '../components/Home';
import Home from '../containers/HomeContainer';
import User from '../components/User';
import About from '../components/About';
import LinkComp from './linkComp';
import './style.less';

const MainRouter = () => {
  return (
    <Router>
      <Grid className="routercontainer">
        <Grid item xs={3}>
          <LinkComp />
        </Grid>
        <Grid item xs={8}>
          {/* path 如果为/，访问/home 的时候也会访问到Root组件，所以需要进行设置，exact ，只有/的时候才会访问Root */}
          <Route path="/" exact component={Root} />
          <Route path="/home" component={Home} />
          <Route path="/user" component={User} />
          <Route path="/about" component={About} />
        </Grid>
      </Grid>
    </Router>
  );
};
export default MainRouter;
