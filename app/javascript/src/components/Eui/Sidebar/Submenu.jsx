import React, { useState } from "react";

import { Right, Down } from "@bigbinary/neeto-icons";
import { Typography } from "@bigbinary/neetoui/v2";
import { NavLink } from "react-router-dom";

const Submenu = ({ item }) => {
  const [subnav, setSubnav] = useState(false);
  const showSubnav = () => setSubnav(true);
  return (
    <li
      className=" flex items-center mx-6 cursor-pointer "
      onClick={item.articles && showSubnav}
    >
      <div className="mx-4 items-center">
        <div className=" items-center mr-2">{item.icon}</div>
        <div className=" h-10 flex items-center ">
          {item.articles && subnav ? <Down size={16} /> : <Right size={16} />}
          <Typography style="h4" className="text-gray-600">
            {item.name}
          </Typography>
        </div>
        {item.articles && subnav && (
          <div>
            {item.articles.map((article, index) => (
              <NavLink
                key={index}
                className="text-gray-500 ml-4"
                to={`/preview/articles/show/${article.id}`}
              >
                <Typography style="body2" className="text-gray-500 ml-4">
                  {article.title}
                </Typography>
              </NavLink>
            ))}
          </div>
        )}
      </div>
    </li>
  );
};

export default Submenu;
