import React, { useState } from "react";

import redirectionsApi from "apis/redirections";

import Header from "./Header";
import Rows from "./Rows";
import "./table.css";

const List = ({ tableData, fetchRedirections }) => {
  const [to_path, setToPath] = useState("");
  const [from_path, setFromPath] = useState("");

  const fetchRedirectionDetails = async id => {
    try {
      const response = await redirectionsApi.show(id);
      setFromPath(response.data.redirection.from_path);
      setToPath(response.data.redirection.to_path);
    } catch (error) {
      logger.error(error);
    }
  };
  const handleEdit = async id => {
    try {
      await redirectionsApi.update({
        id,
        payload: { redirection: { from_path, to_path } },
      });
      fetchRedirections();
    } catch (error) {
      logger.error(error);
    }
  };

  const destroyRedirection = async id => {
    try {
      await redirectionsApi.destroy(id);
      await fetchRedirections();
    } catch (error) {
      logger.error(error);
    }
  };
  return (
    <div>
      <Header />
      <Rows
        tableData={tableData}
        fetchRedirectionDetails={fetchRedirectionDetails}
        handleEdit={handleEdit}
        destroyRedirection={destroyRedirection}
        setFromPath={setFromPath}
        from_path={from_path}
        setToPath={setToPath}
        to_path={to_path}
      />
    </div>
  );
};

export default List;
