import React from "react";

import { Plus } from "@bigbinary/neeto-icons";
import { Button, Dropdown, Checkbox } from "@bigbinary/neetoui/v2";
import { useHistory } from "react-router-dom";

import { Searchbar } from "./Searchbar";

const Header = ({ allColumns, categories, setSearchTitle }) => {
  const history = useHistory();
  return (
    <div className="flex items-center my-4">
      <Searchbar setSearchTitle={setSearchTitle} />
      <Dropdown
        buttonStyle="secondary"
        label="Columns"
        position="bottom-end"
        className="mr-4"
      >
        {allColumns.map((column, index) => (
          <div key={index}>
            <li key={column.id}>
              <Checkbox
                label={column.Header}
                {...column.getToggleHiddenProps()}
              />
            </li>
          </div>
        ))}
      </Dropdown>
      <Button
        className="neeto-ui-bg-secondary-indigo"
        label="Add New Article"
        style="primary"
        icon={() => <Plus size={20} />}
        onClick={() =>
          history.push({
            pathname: "/articles/create",
            state: { categories: categories },
          })
        }
      />
    </div>
  );
};

export default Header;
