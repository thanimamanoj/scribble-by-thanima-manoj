import React, { useState } from "react";

import { Right, Down } from "@bigbinary/neeto-icons";
import { Typography } from "@bigbinary/neetoui/v2";
import { NavLink } from "react-router-dom";

const Submenu = ({ item }) => {
  const [subnav, setSubnav] = useState(false);
  const showSubnav = () => setSubnav(!subnav);
  return (
    <li className=" flex items-center ml-6 cursor-pointer ">
      <div className="mx-4 items-center">
        <div className=" items-center mr-4">{item.icon}</div>
        <div
          className=" mt-4 flex items-center "
          onClick={item.articles && showSubnav}
        >
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
                exact
                activeStyle={{ color: "#6366F1" }}
                to={`/public/${article.slug}`}
              >
                <Typography style="body2" className="ml-4">
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
