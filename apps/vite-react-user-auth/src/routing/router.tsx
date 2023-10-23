import { Authentication } from "../features/auth/auth";
import { SignIn } from "../features/auth/sign-in";
import { SignUp } from "../features/auth/sign-up";
import { Home } from "../features/home/home";
import { ErrorPage } from "../features/error-page";
import { createBrowserRouter } from "react-router-dom";
import { App } from "../App";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/auth",
        element: <Authentication />,
        children: [
          {
            path: "login",
            element: <SignIn />,
          },
          {
            path: "register",
            element: <SignUp />,
          },
        ],
      },
    ],
  },
]);
