import React, { useEffect, useState } from "react";

import {
  Route,
  Switch,
  BrowserRouter as Router,
  Redirect,
} from "react-router-dom";
import { ToastContainer } from "react-toastify";

import { registerIntercepts, setAuthHeaders } from "apis/axios";
import redirectionsApi from "apis/redirections";
import { initializeLogger } from "common/logger";
import CreateArticle from "components/Dashboard/Articles/CreateArticle";
import EditArticle from "components/Dashboard/Articles/EditArticle";
import Dashboard from "components/Dashboard/index";
import Public from "components/Public";
import Settings from "components/Settings";

const App = () => {
  const [loading, setLoading] = useState(true);
  const [redirectionList, setRedirectionList] = useState([]);

  const fetchRedirections = async () => {
    try {
      setLoading(true);
      const response = await redirectionsApi.list();
      setRedirectionList(response.data.redirections);
      setLoading(false);
    } catch (error) {
      logger.error(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    initializeLogger();
    registerIntercepts();
    setAuthHeaders(setLoading);
    fetchRedirections();
  }, []);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  return (
    <Router>
      <ToastContainer />
      <Switch>
        {redirectionList.map((redirection, index) => (
          <Redirect
            key={index}
            exact
            from={redirection.from_path}
            to={redirection.to_path}
          />
        ))}
        <Route exact path="/" component={Dashboard} />
        <Route exact path="/articles/create" component={CreateArticle} />
        <Route exact path="/articles/:id/edit" component={EditArticle} />
        <Route path="/settings" component={Settings} />
        <Route path="/public" component={Public} />
      </Switch>
    </Router>
  );
};

export default App;
