import { createBrowserRouter as createRouter } from "react-router-dom";
import Login from "../pages/Login";
import Signup from "../pages/Signup";

const router = createRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
]);

export default router;
