import React, { useState, useEffect } from "react";

import { Typography, Input, Button, PageLoader } from "@bigbinary/neetoui/v2";

import generalsApi from "apis/generals";
import { setToLocalStorage } from "helpers/storage";

import Password from "./Password";

const General = ({ history }) => {
  const [site_name, setSiteName] = useState("Spinkart");
  const [password, setPassword] = useState();
  const [create_password, setCreatePassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const handleSave = async event => {
    event.preventDefault();
    setToLocalStorage({ authToken: null });
    try {
      await generalsApi.update({
        payload: { general: { name: site_name, password: password || null } },
      });

      history.push("/settings");
    } catch (error) {
      logger.error(error);
    }
  };

  const fetchGeneralDetails = async () => {
    try {
      setLoading(true);
      const response = await generalsApi.show();
      setSiteName(response.data.general.name);
    } catch (error) {
      logger.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchGeneralDetails();
  }, []);

  if (loading) {
    <PageLoader />;
  }

  return (
    <div className=" mx-auto mt-4">
      <Typography style="h2">General Settings</Typography>
      <Typography style="body1" className="text-gray-600">
        Configure general attributes of scribble.
      </Typography>
      <Input
        label="Site Name"
        value={site_name}
        onChange={e => setSiteName(e.target.value)}
        className="mt-4"
      />
      <Typography style="body3" className="text-gray-600">
        Customize the site name which is used to show the site name in
      </Typography>
      <Typography style="h5" className="text-gray-600">
        Open Graph Tags.
      </Typography>
      <Password
        create_password={create_password}
        setCreatePassword={setCreatePassword}
        setPassword={setPassword}
      />
      <div className="flex mt-6">
        <Button
          className="neeto-ui-bg-secondary-indigo mr-4"
          label="Save Changes"
          onClick={handleSave}
          style="primary"
        />
        <Button
          label="Cancel"
          onClick={() => window.location.reload()}
          style="primary"
        />
      </div>
    </div>
  );
};

export default General;
