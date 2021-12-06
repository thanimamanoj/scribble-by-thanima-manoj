import React from "react";

import { Typography } from "@bigbinary/neetoui/v2";

const Redirections = () => {
  return (
    <div className=" mx-auto mt-6">
      <Typography style="h2">Redirections</Typography>
      <Typography style="body1" className="text-gray-600 ">
        Create and configure redirection rules to send users from old links to
        new links. All
      </Typography>
      <Typography style="body1" className="text-gray-600 ">
        are performed with 301 status codes to be SEO friendly.
      </Typography>
    </div>
  );
};

export default Redirections;
