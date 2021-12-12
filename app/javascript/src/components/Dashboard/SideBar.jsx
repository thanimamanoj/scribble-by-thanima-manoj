import React, { useState } from "react";

import { Search, Plus, Check } from "@bigbinary/neeto-icons";
import { Typography, Input, Button } from "@bigbinary/neetoui/v2";
import { MenuBar } from "@bigbinary/neetoui/v2/layouts";

const SideBar = ({
  categories,
  selectedCategory,
  setSelectedCategory,
  active,
  setActive,
  count,
  handleAddCategory,
}) => {
  const [search, setSearch] = useState("");
  const [isSearchCollapsed, setIsSearchCollapsed] = useState(true);
  const [isAddCollapsed, setIsAddCollapsed] = useState(true);
  const [name, setName] = useState();

  return (
    <div className="flex">
      <MenuBar showMenu={true} title="Articles">
        <MenuBar.Block
          label="All"
          count={count.all_count}
          onClick={() => setActive("All")}
          active={active === "All"}
        />
        <MenuBar.Block
          label="Draft"
          count={count.status_count?.Draft}
          onClick={() => setActive("Draft")}
          active={active === "Draft"}
        />
        <MenuBar.Block
          label="Published"
          count={count.status_count?.Published}
          onClick={() => setActive("Published")}
          active={active === "Published"}
        />

        <MenuBar.SubTitle
          iconProps={[
            {
              icon: Search,
              onClick: () => {
                setIsSearchCollapsed(!isSearchCollapsed);
              },
            },
            {
              icon: Plus,
              onClick: () => {
                setIsAddCollapsed(!isAddCollapsed);
              },
            },
          ]}
        >
          <Typography
            component="h4"
            style="h5"
            textTransform="uppercase"
            weight="bold"
          >
            Categories
          </Typography>
        </MenuBar.SubTitle>
        <MenuBar.Search
          onChange={e => setSearch(e.target.value.toLowerCase())}
          onClose={() => setSearch("")}
          collapse={isSearchCollapsed}
          onCollapse={() => {
            setIsSearchCollapsed(true);
            setSearch("");
          }}
        />
        {!isAddCollapsed && (
          <div className="flex">
            <Input value={name} onChange={e => setName(e.target.value)} />
            <Button
              icon={() => <Check />}
              style="secondary"
              onClick={() => {
                handleAddCategory(name);
                setIsAddCollapsed(!isAddCollapsed);
              }}
            ></Button>
          </div>
        )}
        {categories
          .filter(({ name }) => name.toLowerCase().includes(search))
          .map(({ name, id, count }) => (
            <MenuBar.Block
              key={id}
              label={name}
              count={count}
              onClick={() => setSelectedCategory(name)}
              active={selectedCategory === name}
            />
          ))}
      </MenuBar>
    </div>
  );
};

export default SideBar;
