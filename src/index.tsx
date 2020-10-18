import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import author from "./author";
import contacts from "./contacts";
import main from "./main";

function App() {
  return (
    <Router>
      <div className="divNavBar">
        <ul className="navBar">
          <li>
            <a href="/functional">Главная</a>
          </li>
          <li>
            <a href="/author">| О создателе</a>
          </li>
          <li>
            <a href="/contacts">| Контакты</a>
          </li>
        </ul>
      </div>
      <hr className="myhr"></hr>
      <Switch>
        <Route exact path="/author" component={author}></Route>
        <Route exact path="/contacts" component={contacts}></Route>
        <Route exact path="/functional" component={main}></Route>
        {/* <Route exact path="/" component={functional}></Route> */}
      </Switch>
    </Router>
  );
}

ReactDOM.render(App(), document.getElementById("navBar"));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
