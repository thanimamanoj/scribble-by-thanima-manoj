import React from "react";

import SideBar from "./SideBar";

import NavBar from "../NavBar";

const General = () => {
  return (
    <div>
      <NavBar />
      <div className="flex">
        <SideBar />
        <div className="flex mx-auto border-gray text-blue-400"></div>
      </div>
    </div>
  );
};

export default General;
