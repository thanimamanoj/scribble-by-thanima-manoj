import React from "react";

import { Edit, Delete } from "@bigbinary/neeto-icons";
import { Typography } from "@bigbinary/neetoui/v2";

import Header from "./Header";
import "./table.css";

const List = ({ tableData }) => {
  return (
    <div>
      <Header />
      <div className="neeto-ui-bg-pastel-blue flex mt-6 justify-center">
        <table className="redirection">
          <thead>
            <tr className="text-gray-600 p-2">
              <th>
                <Typography style="body2">FROM PATH</Typography>
              </th>
              <th>TO PATH</th>
              <th>ACTIONS</th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((item, index) => (
              <tr key={index} className="p-2 neeto-ui-bg-white  my-1">
                <td>
                  <div className="flex">
                    <div className="neeto-ui-text-gray-500">
                      {`https://scribble.com`}
                    </div>
                    {item.from_path.slice(20)}
                  </div>
                </td>
                <td>{item.to_path}</td>
                <td>
                  {
                    <div className="flex">
                      <Edit className="mr-4 cursor-pointer" />
                      <Delete className="cursor-pointer" />
                    </div>
                  }
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default List;
