import React, { useState } from "react";

import { Typography, Input, Button } from "@bigbinary/neetoui/v2";

import Password from "./Password";

const General = () => {
  const [site_name, setSiteName] = useState("Spinkart");
  const [password, setPassword] = useState("");
  const [create_password, setCreatePassword] = useState(false);

  const handleSave = () => {
    password;
  };
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
