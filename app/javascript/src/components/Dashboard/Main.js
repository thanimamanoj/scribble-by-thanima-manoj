import React, { useState, useEffect } from "react";

import Table from "../Articles/Table";

const Main = ({ tdata, active, selectedCategory }) => {
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    selectedCategory
      ? active === "All"
        ? setTableData(
            tdata.filter(({ category }) => category === selectedCategory)
          )
        : setTableData(
            tdata
              .filter(({ status }) => status === active)
              .filter(({ category }) => category === selectedCategory)
          )
      : active === "All"
      ? setTableData(tdata)
      : setTableData(tdata.filter(({ status }) => status === active));
  }, [selectedCategory, active]);

  return (
    <div>
      <Table tableData={tableData} />
    </div>
  );
};

export default Main;
