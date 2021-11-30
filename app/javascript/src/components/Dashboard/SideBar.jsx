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
}) => {
  const [isSearchCollapsed, setIsSearchCollapsed] = useState(true);
  const [isAddCollapsed, setIsAddCollapsed] = useState(true);
  const [addCategory, setAddCategory] = useState();

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
          collapse={isSearchCollapsed}
          onCollapse={() => setIsSearchCollapsed(true)}
        />
        {!isAddCollapsed && (
          <div className="flex">
            <Input
              icon={() => <Check />}
              value={addCategory}
              onChange={e => setAddCategory(e.target.value)}
            />
            <Button
              icon={() => <Check />}
              style="secondary"
              //onClick={() => (console.log(addCategory)}
            ></Button>
          </div>
        )}
        {categories.map(({ name, id }) => (
          <MenuBar.Block
            key={id}
            label={name}
            count={count.category_count[id]}
            onClick={() => setSelectedCategory(name)}
            active={selectedCategory === name}
          />
        ))}
      </MenuBar>
    </div>
  );
};

export default SideBar;
