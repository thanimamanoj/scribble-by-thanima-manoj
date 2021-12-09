import React from "react";

import Submenu from "./Submenu";

const Sidebar = ({ data }) => {
  return (
    <ul className=" h-screen w-1/4 border pt-6">
      {data.map((category, index) => (
        <Submenu key={index} category={category} />
      ))}
    </ul>
  );
};

export default Sidebar;
