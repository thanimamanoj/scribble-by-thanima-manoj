import React, { useState, useEffect } from "react";

import { PageLoader, Typography } from "@bigbinary/neetoui/v2";

import generalsApi from "apis/generals";

const Header = () => {
  const [siteName, setSiteName] = useState("");
  const [loading, setLoading] = useState(false);
  const fetchSiteName = async () => {
    try {
      setLoading(true);
      const response = await generalsApi.show();
      setSiteName(response.data.general.name);
      setLoading(false);
    } catch (error) {
      logger.error(error);
      setLoading(false);
    }
  };
  useEffect(() => fetchSiteName(), []);

  if (loading) {
    <PageLoader />;
  }

  return (
    <div className="flex justify-center py-4 border">
      <Typography style="h4">{siteName}</Typography>
    </div>
  );
};

export default Header;
