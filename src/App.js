import React from "react";
import './App.scss';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

//페이지
import Home from "./components/Home/Home";
import Header from "./components/Header/Header";

function App() {
  return (
    <>
    <div className="App">
      <Router>
        <Header/>
        <Route path="/" exact component={Home} />
      </Router>
    </div>
    </>
  );
}

export default App;
