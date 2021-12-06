import React from "react";

import { Check } from "@bigbinary/neeto-icons";
import { Input } from "@bigbinary/neetoui/v2";

const Form = ({ handleSubmit, setFromPath, from_path, setToPath, to_path }) => {
  return (
    <div className="flex mb-2">
      <Input
        className="mr-4"
        required={true}
        value={from_path}
        onChange={e => setFromPath(e.target.value)}
      />
      <Input
        className="mr-4"
        required={true}
        value={to_path}
        onChange={e => setToPath(e.target.value)}
      />
      <Check onClick={handleSubmit} className="mx-4" />
    </div>
  );
};

export default Form;
