import React from "react";

import { Typography } from "@bigbinary/neetoui/v2";

const Header = ({ siteName }) => {
  return (
    <div className="flex justify-center py-4 border">
      <Typography style="h4">{siteName}</Typography>
    </div>
  );
};

export default Header;
