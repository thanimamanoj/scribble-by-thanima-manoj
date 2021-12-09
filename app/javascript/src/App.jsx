import React, { useEffect, useState } from "react";

import { either, isEmpty, isNil } from "ramda";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import { registerIntercepts, setAuthHeaders } from "apis/axios";
import { initializeLogger } from "common/logger";
import CreateArticle from "components/Articles/CreateArticle";
import EditArticle from "components/Articles/EditArticle";
import PrivateRoute from "components/Common/PrivateRoute";
import Dashboard from "components/Dashboard/index";
import Authentication from "components/Public/Authentication";
import Preview from "components/Public/Eui";
import Settings from "components/Settings";
import { getFromLocalStorage } from "helpers/storage";

const App = () => {
  const [loading, setLoading] = useState(true);
  const authToken = getFromLocalStorage("authToken");
  const isLoggedIn = !either(isNil, isEmpty)(authToken) && authToken !== "null";

  useEffect(() => {
    initializeLogger();
    registerIntercepts();
    setAuthHeaders(setLoading);
  }, []);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  return (
    <Router>
      <ToastContainer />
      <Switch>
        {/* <Route exact path="/" render={() => <div>Home</div>} />
        <Route exact path="/about" render={() => <div>About</div>} /> */}
        <Route exact path="/" component={Dashboard} />
        <Route exact path="/articles/create" component={CreateArticle} />
        <Route exact path="/articles/:id/edit" component={EditArticle} />
        <Route path="/settings" component={Settings} />
        {/* <Route path="/public" component={Preview} /> */}
        <Route exact path="/login" component={Authentication} />
        <PrivateRoute
          path="/public"
          redirectRoute="/login"
          condition={isLoggedIn}
          component={Preview}
        />
      </Switch>
    </Router>
  );
};

export default App;
