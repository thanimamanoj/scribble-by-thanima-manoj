import React, { useState, useEffect } from "react";

import { PageLoader } from "@bigbinary/neetoui/v2";
import { Route, Switch, Redirect } from "react-router-dom";

import generalsApi from "apis/generals";
import { getFromLocalStorage } from "helpers/storage";

import Authentication from "./Authentication";
import Eui from "./Eui";
import Header from "./Header";

const Public = () => {
  const [siteName, setSiteName] = useState("");
  const [isProtected, setIsProtected] = useState(false);
  const [loading, setLoading] = useState(true);
  const authToken = getFromLocalStorage("authToken");
  const fetchSiteDetails = async () => {
    try {
      setLoading(true);
      const response = await generalsApi.show();
      setSiteName(response.data.general?.name);
      response.data.general.password_digest && setIsProtected(true);
      setLoading(false);
    } catch (error) {
      logger.error(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSiteDetails();
  }, []);

  if (loading) {
    return <PageLoader />;
  }

  return (
    <>
      <Header siteName={siteName} />
      <Switch>
        <Route
          exact
          path="/public/authenticate"
          component={() => <Authentication siteName={siteName} />}
        />
        {isProtected && !authToken && <Redirect to="/public/authenticate" />}
        <Route exact path="/public" component={Eui} />
        <Route exact path={`/public/:slug`} component={Eui} />
      </Switch>
    </>
  );
};

export default Public;
