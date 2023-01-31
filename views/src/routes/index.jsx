import { createBrowserRouter } from "react-router-dom";
//layouts
import Layout from "../common/layouts";
import Root from "../common/layouts/root";
//pages
import Home from "../pages/home";
import Login from "../pages/login";
import Register from "../pages/register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        element: <Layout />,
        children: [
          {
            path: "/",
            element: <Home />,
          },
          {
            path: "/login",
            element: <Login />,
          },
          {
            path: "/register",
            element: <Register />,
          },
        ],
      },
    ],
  },
]);

export default router;

// {
//   path: "contact",
//   element: <Contact />,
// },
// {
//   path: "dashboard",
//   element: <Dashboard />,
//   loader: ({ request }) =>
//     fetch("/api/dashboard.json", {
//       signal: request.signal,
//     }),
// },
// {
//   element: <AuthLayout />,
//   children: [
//     {
//       path: "login",
//       element: <Login />,
//       loader: redirectIfUser,
//     },
//     {
//       path: "logout",
//       action: logoutUser,
//     },
//   ],
// },
