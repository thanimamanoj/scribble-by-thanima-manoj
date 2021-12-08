import React from "react";

import Submenu from "./Submenu";

const Sidebar = ({ data }) => {
  return (
    <ul className=" h-screen w-1/4 border pt-6">
      {data.map((item, index) => (
        <Submenu key={index} item={item} />
      ))}
    </ul>
  );
};

export default Sidebar;
