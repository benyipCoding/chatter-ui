import { Button, Stack, TextField } from "@mui/material";
import React, { PropsWithChildren, useState } from "react";

interface AuthProps {
  submitLabel: string;
  onSubmit: (credentials: {
    email: string;
    password: string;
  }) => Promise<unknown>;
  error?: string;
}

const Auth: React.FC<PropsWithChildren<AuthProps>> = ({
  submitLabel,
  onSubmit,
  children,
  error,
}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <Stack
      spacing={3}
      sx={{
        height: "100vh",
        maxWidth: {
          xs: "70%",
          md: "30%",
        },
        margin: "0 auto",
        justifyContent: "center",
      }}
    >
      <TextField
        type="email"
        label="Email"
        variant="outlined"
        onChange={(event) => setEmail(event.target.value)}
        error={!!error}
        helperText={error}
      />
      <TextField
        type="password"
        label="Password"
        variant="outlined"
        onChange={(event) => setPassword(event.target.value)}
        error={!!error}
        helperText={error}
      />
      <Button variant="contained" onClick={() => onSubmit({ email, password })}>
        {submitLabel}
      </Button>
      {children}
    </Stack>
  );
};

export default Auth;
