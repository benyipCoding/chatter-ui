import React from "react";
import Auth from "../components/auth/Auth";
import { Link as MUILink } from "@mui/material";

const Login = () => {
  return (
    <Auth submitLabel="Login" onSubmit={async () => {}}>
      <MUILink href={"/signup"} style={{ alignSelf: "center" }}>
        Signup
      </MUILink>
    </Auth>
  );
};

export default Login;
