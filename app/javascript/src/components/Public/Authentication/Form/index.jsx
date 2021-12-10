import React from "react";

import { Input, Button, Typography } from "@bigbinary/neetoui/v2";

import img1 from "./img1.png";

const Form = ({ siteName, handleSubmit, setPassword, loading }) => {
  return (
    <div
      className="flex mt-6 justify-center min-h-screen
      px-4 py-12 lg:px-8 bg-gray-50 sm:px-6"
    >
      <div className="w-full max-w-md">
        <img src={img1} alt="image" className="mx-auto" />
        <Typography className="text-center " style="h2">
          {siteName} is password protected!
        </Typography>
        <Typography className="text-center text-gray-600">
          Enter the password to gain access to {siteName}
        </Typography>

        <form className="mt-6 ml-12 pl-1" onSubmit={handleSubmit}>
          <Input
            className=""
            label="Password"
            type="password"
            placeholder="********"
            onChange={e => setPassword(e.target.value)}
          />
          <Button
            type="submit"
            label="Continue"
            style="primary"
            size="large"
            className="neeto-ui-bg-secondary-indigo mt-6"
            loading={loading}
          />
        </form>
      </div>
    </div>
  );
};

export default Form;
