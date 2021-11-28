import React, { useState } from "react";

import { Search, Plus } from "@bigbinary/neeto-icons";
import { Typography } from "@bigbinary/neetoui/v2";
import { MenuBar } from "@bigbinary/neetoui/v2/layouts";

const SideBar = ({ categories }) => {
  const [isSearchCollapsed, setIsSearchCollapsed] = useState(true);
  const [isAddCollapsed, setIsAddCollapsed] = useState(true);
  // const [categories,setCategories] = useState([]);
  // const [loading,setLoading] = useState(false)
  // const fetchCategories = async () => {
  //   try {
  //     setLoading(true)
  //     const response = await categoriesApi.list();
  //     setCategories(response.data.categories);
  //     setLoading(false);
  //   } catch (error) {
  //     logger.error(error);
  //     setLoading(false);
  //   }
  // };

  // useEffect(() => {
  //   fetchCategories();
  // }, []);
  return (
    <div className="flex">
      {/* {JSON.stringify(categories)} */}
      <MenuBar showMenu={true} title="Articles">
        <MenuBar.Block label="All" count={13} active />
        <MenuBar.Block label="Draft" count={2} />
        <MenuBar.Block label="Published" count={7} />

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
        {/* <MenuBar.AddNew
          collapse={isAddCollapsed}
          onCollapse={() => setIsAddCollapsed(true)}
        /> */}
        {categories.map(({ name, id }) => (
          <MenuBar.Block key={id} label={name} count={80} />
        ))}
      </MenuBar>
    </div>
  );
};

export default SideBar;
