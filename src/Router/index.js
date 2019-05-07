import React from "react";
import {
  HashRouter as Router, //外层容器
  Route, //一条一条的路由
  Link
} from "react-router-dom";

import Root from "../components/Root";
import Home from "../components/Home";
import User from "../components/User";
import About from "../components/About";
import LinkComp from "./linkComp";

const MainRouter = () => {
  return (
    <Router>
      <div>
        <LinkComp />
        {/* path 如果为/，访问/home 的时候也会访问到Root组件，所以需要进行设置，exact ，只有/的时候才会访问Root */}
        <Route path="/" exact component={Root} />
        <Route path="/home" component={Home} />
        <Route path="/user" component={User} />
        <Route path="/about" component={About} />
      </div>
    </Router>
  );
};
export default MainRouter;
