import React from "react";

import { Typography } from "@bigbinary/neetoui/v2";
import { NavLink } from "react-router-dom";

import Data from "./Data";

const SideBar = () => {
  return (
    <div className="h-screen w-1/3 border ">
      <div className=" pt-6">
        {Data.map((value, index) => (
          <NavLink
            exact
            to={value.link}
            activeStyle={{ backgroundColor: "#eaf3fc" }}
            className=" h-20 flex items-center mx-6 cursor-pointer  "
            key={index}
          >
            <div className="mx-4 flex items-center">
              <div className="grid items-center mr-2">{value.icon}</div>
              <div className="grid items-center ">
                <Typography style="h4">{value.label}</Typography>
                <Typography className="text-gray-600" style="body2">
                  {value.description}
                </Typography>
              </div>
            </div>
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default SideBar;
