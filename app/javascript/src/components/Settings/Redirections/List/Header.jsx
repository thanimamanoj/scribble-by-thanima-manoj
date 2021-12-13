import React from "react";

import { Typography } from "@bigbinary/neetoui/v2";

const Header = () => {
  return (
    <div className="mt-2">
      <Typography style="h2">Redirections</Typography>
      <Typography style="body1" className="text-gray-600 ">
        Create and configure redirection rules to send users from old links to
        new links. All are performed with 301 status codes to be SEO friendly.
      </Typography>
    </div>
  );
};

export default Header;
