import React, { useState } from "react";

import authApi from "apis/auth";
import { setToLocalStorage } from "helpers/storage";

import Form from "./Form";

const Authentication = ({ siteName }) => {
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async event => {
    event.preventDefault();
    setLoading(true);
    try {
      const response = await authApi.login({ login: { password } });
      setToLocalStorage({
        authToken: response.data.authentication_token,
      });
      // setAuthHeaders();
      setLoading(false);
      window.location.href = "/public";
    } catch (error) {
      logger.error(error);
      setLoading(false);
    }
  };

  return (
    <Form
      siteName={siteName}
      setPassword={setPassword}
      loading={loading}
      handleSubmit={handleSubmit}
    />
  );
};

export default Authentication;
