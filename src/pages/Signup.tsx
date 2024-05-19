import { Link as MUILink } from "@mui/material";
import Auth from "../components/auth/Auth";
import { useCreateUser } from "../hooks/useCreateUser";

const Signup = () => {
  const [createUser] = useCreateUser();

  return (
    <Auth
      submitLabel="Signup"
      onSubmit={({ email, password }) =>
        createUser({
          variables: {
            createUserInput: {
              email,
              password,
            },
          },
        })
      }
    >
      <MUILink href={"/login"} style={{ alignSelf: "center" }}>
        Login
      </MUILink>
    </Auth>
  );
};

export default Signup;
