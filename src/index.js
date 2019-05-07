import React from "react";
import ReactDOM from "react-dom";
import MainRouter from "./Router";
import HomeBar from "./components/HomeBar";

const App = () => {
  return (
    <div>
      <HomeBar />
      <MainRouter />
    </div>
  );
};
ReactDOM.render(<App />, document.getElementById("root"));
