import React from "react";
import Auth from "../components/auth/Auth";
import { Link as MUILink } from "@mui/material";
import { useLogin } from "../hooks/useLogin";

const Login = () => {
  const { login, error } = useLogin();

  const onSubmit = async (credentials: { email: string; password: string }) => {
    const res = await login(credentials);

    console.log({ res, error });
  };

  return (
    <Auth submitLabel="Login" onSubmit={onSubmit} error={error}>
      <MUILink href={"/signup"} style={{ alignSelf: "center" }}>
        Signup
      </MUILink>
    </Auth>
  );
};

export default Login;
