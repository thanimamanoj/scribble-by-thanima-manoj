import React from "react";

import { Route, Switch, BrowserRouter as Router } from "react-router-dom";

import General from "./General";
import SideBar from "./SideBar";

import NavBar from "../NavBar";

const Settings = () => {
  return (
    <div>
      <NavBar />
      <div className="flex">
        <SideBar />
        <Router>
          <Switch>
            <Route exact path="/settings" component={General} />
          </Switch>
        </Router>
      </div>
    </div>
  );
};

export default Settings;
