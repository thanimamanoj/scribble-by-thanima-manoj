import React, { useMemo } from "react";

import { Edit, Delete } from "@bigbinary/neeto-icons";
import { Typography, Button } from "@bigbinary/neetoui/v2";
import { useHistory } from "react-router-dom";
import { useTable, useGlobalFilter, useFilters } from "react-table";

import { COLUMNS } from "./columns";
import Header from "./Header";
import "./table.css";

const Table = ({ tableData, categories, deleteArticle }) => {
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

  return (
    <div className="ml-10">
      <Header
        allColumns={allColumns}
        categories={categories}
        globalFilter={globalFilter}
        setGlobalFilter={setGlobalFilter}
        history={history}
      />
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
                                onClick={() => deleteArticle(row.original.id)}
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
    </div>
  );
};

export default Table;
