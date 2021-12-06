import React, { useState, useEffect } from "react";

import { PageLoader } from "@bigbinary/neetoui/v2";

import redirectionsApi from "apis/redirections";

import Add from "./Add";
import List from "./List";

const Redirections = () => {
  const [redirections, setRedirections] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchRedirections = async () => {
    try {
      setLoading(true);
      const response = await redirectionsApi.list();
      setRedirections(response.data.redirections);
      setLoading(false);
    } catch (error) {
      logger.error(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRedirections();
  }, []);

  if (loading) {
    return <PageLoader />;
  }

  return (
    <div className=" mx-auto mt-6">
      <List tableData={redirections} fetchRedirections={fetchRedirections} />
      <Add fetchRedirections={fetchRedirections} />
    </div>
  );
};

export default Redirections;
