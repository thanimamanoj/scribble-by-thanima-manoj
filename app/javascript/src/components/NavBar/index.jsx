import React from "react";

import { ExternalLink } from "@bigbinary/neeto-icons";
import { Typography, Button } from "@bigbinary/neetoui/v2";

const NavBar = () => {
  return (
    <nav className="bg-white shadow">
      <div className="px-2 mx-auto max-w-7xl sm:px-4 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center  px-2 lg:px-0">
            <Typography style="h4" className="mr-4">
              Scribble
            </Typography>
            <Button
              label="Articles"
              onClick={function noRefCheck() {}}
              style="link"
              className="mr-4"
              size="large"
            />
            <Button
              label="Settings"
              onClick={function noRefCheck() {}}
              style="link"
              size="large"
            />
          </div>
          <div className="flex items-center justify-end">
            <Button
              style="secondary"
              label="Preview"
              icon={() => <ExternalLink size={18} />}
              size="large"
            />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
