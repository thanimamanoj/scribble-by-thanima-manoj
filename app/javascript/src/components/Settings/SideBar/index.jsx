import React from "react";

import { Typography } from "@bigbinary/neetoui/v2";

import Data from "./Data";

const SideBar = () => {
  return (
    <div className="h-screen w-1/4 border ">
      <ul className=" pt-6">
        {Data.map((value, index) => (
          <li
            className=" h-20 flex items-center mx-6 cursor-pointer hover:neeto-ui-bg-pastel-blue "
            key={index}
            onClick={() => {
              window.location.pathname = value.link;
            }}
          >
            <div className="mx-4 flex items-center">
              <div className="grid items-center mr-2">{value.icon}</div>
              <div className="grid items-center ">
                {/* <Button label={value.label} size="large" style="text" /> */}
                <Typography style="h4">{value.label}</Typography>
                <Typography className="text-gray-600" style="body2">
                  {value.description}
                </Typography>
                {/* <Label className="">{value.description}</Label> */}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SideBar;
