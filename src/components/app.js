import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";

import MainPage from "./mainPage";
import Auth from "./login/auth";

export default class App extends Component {
  constructor() {
    super();

    this.state = {

    }
  }

  render() {
    return (
      <div className='app'>
        <BrowserRouter >
          <div>
            <Switch>
              <Route exact path="/" component={Auth} />
              <Route path="/page" component={MainPage} />
            </Switch>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}
