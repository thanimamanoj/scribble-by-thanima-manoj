import React, { useMemo } from "react";

import { Plus } from "@bigbinary/neeto-icons";
import { Typography, Button, Dropdown, Checkbox } from "@bigbinary/neetoui/v2";
import { isNil, isEmpty, either } from "ramda";
import { useTable, useGlobalFilter, useFilters } from "react-table";

import { COLUMNS } from "./columns";
import { GlobalFilter } from "./GlobalFilter";
import "./table.css";

const Table = ({ tableData }) => {
  const columns = useMemo(() => COLUMNS, []);
  const data = useMemo(() => tableData, [tableData]);

  const tableInstance = useTable(
    {
      columns,
      data,
    },
    useFilters,
    useGlobalFilter
  );
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    allColumns,
    state,
    setGlobalFilter,
  } = tableInstance;
  const { globalFilter } = state;

  if (either(isNil, isEmpty)(tableData)) {
    return (
      <div className="mt-24 ml-32">
        <h1 className="text-xl leading-5 text-center">No articles found!😔</h1>
      </div>
    );
  }

  return (
    <>
      <div className="flex items-center my-4">
        <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter} />
        <Dropdown
          buttonStyle="secondary"
          label="Columns"
          position="bottom-end"
          className="mr-4"
        >
          {allColumns.map((column, index) => (
            <div key={index}>
              <li key={column.Id}>
                <Checkbox
                  label={column.Header}
                  {...column.getToggleHiddenProps()}
                />
              </li>
            </div>
          ))}
        </Dropdown>
        <Button
          label="Add New Article"
          onClick={function noRefCheck() {}}
          style="primary"
          icon={() => <Plus size={20} />}
          className=""
        />
      </div>
      <div className="flex flex-col mt-10 ">
        <div className="my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
            <div className="overflow-hidden border-b border-gray-200 shadow md:custom-box-shadow">
              <table {...getTableProps()}>
                <thead>
                  {headerGroups.map((headerGroup, index) => (
                    <tr key={index} {...headerGroup.getHeaderGroupProps()}>
                      {headerGroup.headers.map((column, index) => (
                        <th key={index} {...column.getHeaderProps()}>
                          {column.render("Header")}
                        </th>
                      ))}
                    </tr>
                  ))}
                </thead>
                <tbody {...getTableBodyProps()}>
                  {rows.map((row, index) => {
                    prepareRow(row);
                    return (
                      <tr key={index} {...row.getRowProps()}>
                        {row.cells.map((cell, index) => {
                          return (
                            <td key={index} {...cell.getCellProps()}>
                              <div className="flex  ">
                                <Typography>{cell.render("Cell")}</Typography>
                              </div>
                            </td>
                          );
                        })}
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Table;
