import React from "react";

import { Route, Switch } from "react-router-dom";

import General from "./General";
import ManageCategories from "./ManageCategories";
import Redirections from "./Redirections";
import SideBar from "./SideBar";

import NavBar from "../NavBar";

const Settings = () => {
  return (
    <div>
      <NavBar />
      <div className="flex">
        <SideBar />
        <Switch>
          <Route exact path="/settings" component={General} />
          <Route
            exact
            path="/settings/manage-categories"
            component={ManageCategories}
          />
          <Route exact path="/settings/redirections" component={Redirections} />
        </Switch>
      </div>
    </div>
  );
};

export default Settings;
