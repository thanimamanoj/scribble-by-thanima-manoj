import React, { useState } from "react";

import { Edit, Delete, Check } from "@bigbinary/neeto-icons";
import { Typography, Input } from "@bigbinary/neetoui/v2";

const Rows = ({
  tableData,
  fetchRedirectionDetails,
  handleEdit,
  destroyRedirection,
  setFromPath,
  from_path,
  setToPath,
  to_path,
}) => {
  const [editId, setEditId] = useState(0);
  const editClicked = id => {
    setEditId(id);
    fetchRedirectionDetails(id);
  };

  return (
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
              {editId !== item.id ? (
                <>
                  <td>
                    <div className="flex">
                      <div className="neeto-ui-text-gray-500">
                        {`https://scribble.com`}
                      </div>
                      {item.from_path}
                    </div>
                  </td>
                  <td>
                    {" "}
                    <div className="flex">
                      <div className="neeto-ui-text-gray-500">
                        {`https://scribble.com`}
                      </div>
                      {item.to_path}
                    </div>
                  </td>
                  <td>
                    {
                      <div className="flex">
                        <Edit
                          onClick={() => editClicked(item.id)}
                          className="mr-4 cursor-pointer"
                        />
                        <Delete
                          onClick={() => destroyRedirection(item.id)}
                          className="cursor-pointer"
                        />
                      </div>
                    }
                  </td>
                </>
              ) : (
                <>
                  <td>
                    <Input
                      required={true}
                      value={from_path}
                      onChange={e => setFromPath(e.target.value)}
                    />
                  </td>
                  <td>
                    <Input
                      required={true}
                      value={to_path}
                      onChange={e => setToPath(e.target.value)}
                    />
                  </td>
                  <td>
                    <Check
                      onClick={() => {
                        setEditId(0);
                        handleEdit(item.id);
                      }}
                    />
                  </td>
                </>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Rows;
