import { Link as MUILink } from "@mui/material";
import Auth from "../components/auth/Auth";
import { useCreateUser } from "../hooks/useCreateUser";
import { useState } from "react";
import { extractErrorMessage } from "../utils/errors";
import { useLogin } from "../hooks/useLogin";

const Signup = () => {
  const [createUser] = useCreateUser();
  const [error, setError] = useState("");
  const { login } = useLogin();

  return (
    <Auth
      submitLabel="Signup"
      error={error}
      onSubmit={async ({ email, password }) => {
        try {
          await createUser({
            variables: {
              createUserInput: {
                email,
                password,
              },
            },
          });
          setError("");
          await login({ email, password });
        } catch (err) {
          const errorMessage = extractErrorMessage(err);
          if (errorMessage) {
            setError(errorMessage);
            return;
          }
          setError("Unknown error occured");
        }
      }}
    >
      <MUILink href={"/login"} style={{ alignSelf: "center" }}>
        Login
      </MUILink>
    </Auth>
  );
};

export default Signup;
