import React from "react";

import { Search } from "@bigbinary/neeto-icons";
import { Input } from "@bigbinary/neetoui/v2";

export const Searchbar = ({ setSearchTitle }) => {
  return (
    <div>
      <Input
        prefix={<Search />}
        placeholder="Search article title"
        className="ml-48 mr-4 "
        onChange={e => setSearchTitle(e.target.value.toLowerCase())}
      />
    </div>
  );
};
