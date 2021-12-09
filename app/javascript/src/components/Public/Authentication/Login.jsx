import React, { useState } from "react";

import authApi from "apis/auth";
import { setAuthHeaders } from "apis/axios";
import { setToLocalStorage } from "helpers/storage";

import Form from "./Form";

const Login = () => {
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
      setAuthHeaders();
      setLoading(false);
      window.location.href = "/public";
    } catch (error) {
      logger.error(error);
      window.location.href = "/login";
      setLoading(false);
    }
  };

  return (
    <Form
      setPassword={setPassword}
      loading={loading}
      handleSubmit={handleSubmit}
    />
  );
};

export default Login;
