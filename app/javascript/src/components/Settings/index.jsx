import React from "react";

import { Route, Switch, BrowserRouter as Router } from "react-router-dom";

import General from "./General";
import ManageCategories from "./ManageCategories";
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
            <Route
              exact
              path="/settings/manage-categories"
              component={ManageCategories}
            />
          </Switch>
        </Router>
      </div>
    </div>
  );
};

export default Settings;
