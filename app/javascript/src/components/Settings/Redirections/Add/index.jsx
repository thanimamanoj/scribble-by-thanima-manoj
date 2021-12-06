import React, { useState } from "react";

import { Plus } from "@bigbinary/neeto-icons";
import { Button } from "@bigbinary/neetoui/v2";

import redirectionsApi from "apis/redirections";

import Form from "../Form";

const Add = ({ fetchRedirections }) => {
  const [addRedirection, setAddRedirection] = useState(false);
  const [from_path, setFromPath] = useState("https://scribble.com");
  const [to_path, setToPath] = useState("https://scribble.com");
  const handleSubmit = async event => {
    setAddRedirection(false);
    event.preventDefault();
    try {
      await redirectionsApi.create({ redirection: { from_path, to_path } });
      await fetchRedirections();
    } catch (error) {
      logger.error(error);
    }
  };

  return (
    <div className="neeto-ui-bg-pastel-blue p-2 ">
      {addRedirection && (
        <Form
          handleSubmit={handleSubmit}
          setFromPath={setFromPath}
          from_path={from_path}
          setToPath={setToPath}
          to_path={to_path}
        />
      )}
      <Button
        label="Add New Redirection"
        onClick={() => setAddRedirection(!addRedirection)}
        style="link"
        icon={() => <Plus />}
        iconPosition="left"
      />
    </div>
  );
};

export default Add;
