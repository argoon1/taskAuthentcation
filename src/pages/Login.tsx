import React from "react";
import { FetchAuthenticationButton } from "../components/AuthenticationButtons/fetchAuthenticationButton/FetchAuthenticationButton";
import { ParamsAuthenticationButton } from "../components/AuthenticationButtons/paramsAuthenticationButton/ParamsAuthenticationButton";
export const Login = () => {
  return (
    <>
      <FetchAuthenticationButton
        authenticationToken={import.meta.env.VITE_VALID_TOKEN as string}
      />
      <FetchAuthenticationButton
        authenticationToken={import.meta.env.INVALID_TOKEN as string}
      />
      <ParamsAuthenticationButton
        authenticationToken={import.meta.env.VITE_VALID_TOKEN as string}
      />
      <ParamsAuthenticationButton
        authenticationToken={import.meta.env.VITE_INVALID_TOKEN as string}
      />
    </>
  );
};
