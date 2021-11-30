import React from "react";

import { Search } from "@bigbinary/neeto-icons";
import { Input } from "@bigbinary/neetoui/v2";

export const GlobalFilter = ({ filter, setFilter }) => {
  return (
    <div>
      <Input
        prefix={<Search />}
        placeholder="Search article title"
        className="ml-48 mr-4 "
        value={filter || ""}
        onChange={e => setFilter(e.target.value)}
      />
    </div>
  );
};
