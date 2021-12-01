import React, { useMemo } from "react";

import { Plus, Edit, Delete } from "@bigbinary/neeto-icons";
import { Typography, Button, Dropdown, Checkbox } from "@bigbinary/neetoui/v2";
import { isNil, isEmpty, either } from "ramda";
import { useHistory } from "react-router-dom";
import { useTable, useGlobalFilter, useFilters } from "react-table";

import { COLUMNS } from "./columns";
import { GlobalFilter } from "./GlobalFilter";
import "./table.css";

const Table = ({ tableData, categories }) => {
  const columns = useMemo(() => COLUMNS, []);
  const data = useMemo(() => tableData, [tableData]);
  const history = useHistory();
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

  const handleDelete = id => {
    var answer = window.confirm("Are you sure you want to delete article?");
    answer && true;
    id;
  };
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
                        <td>
                          <div className="flex">
                            <div className=" mr-4">
                              <Button
                                label="Edit"
                                onClick={() => {
                                  history.push({
                                    pathname: `/articles/${row.original.id}/edit`,
                                    state: { categories: categories },
                                  });
                                }}
                                style="secondary"
                                icon={() => <Edit />}
                                iconPosition="left"
                              />
                            </div>
                            <div className=" mr-8">
                              <Button
                                label="Delete"
                                onClick={() => {
                                  handleDelete(row.original.id);
                                }}
                                style="danger"
                                icon={() => <Delete />}
                                iconPosition="left"
                              />
                            </div>
                          </div>
                        </td>
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
