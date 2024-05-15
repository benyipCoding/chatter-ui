import { createBrowserRouter as createRouter } from "react-router-dom";
import Auth from "./auth/Auth";

const router = createRouter([
  {
    path: "/login",
    element: <Auth />,
  },
]);

export default router;
