import React from "react";

import { ExternalLink } from "@bigbinary/neeto-icons";
import { Typography, Button } from "@bigbinary/neetoui/v2";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="bg-white shadow">
      <div className="px-2 mx-auto max-w-7xl sm:px-4 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center  px-2 lg:px-0">
            <Typography style="h4" className="mr-4">
              Scribble
            </Typography>
            <NavLink
              exact
              to="/"
              activeStyle={{ color: "#5e5ce6" }}
              className="text-base mr-4 font-medium hover:cursor neeto-ui-text-gray-400"
            >
              Articles
            </NavLink>
            <NavLink
              to="/settings"
              activeStyle={{ color: "#5e5ce6" }}
              className="text-base mr-4 font-medium hover:cursor neeto-ui-text-gray-400"
            >
              Settings
            </NavLink>
          </div>
          <div className="flex items-center justify-end">
            <Button
              style="secondary"
              label="Preview"
              icon={() => <ExternalLink size={18} />}
              size="large"
              to="/public"
            />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
