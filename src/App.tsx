import React, { useState } from "react";
import "./App.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SignIn from "./component/Auth/SignIn/SignIn";
import SingUp from "./component/Auth/SingUp/SingUp";
import Doctor from "./component/features/Doctor/Doctor";
import Users from "./component/features/Doctor/Users/Users";
import PageNotFound from "./component/Auth/PageNotFound";
import Timings from "./component/features/Doctor/Timings/Timings";
import Patient from "./component/features/Patient/Patient";
import Admin from "./component/features/Admin/Admin";

export const userContext = React.createContext<any>({ test: "test" });

const dyamicRoutes = [
  {
    path: "/",
    element: <SignIn />,
  },
  {
    path: "/signup",
    element: <SingUp />,
  },
  {
    path: "/patient",
    element: <Patient />,
  },
  {
    path: "/admin",
    element: <Admin />,
  },
  {
    path: "/doctor",
    element: <Doctor />,
    children: [
      {
        path: "users",
        element: <Users />,
      },
      {
        path: "timing",
        element: <Timings />,
      }
    ],
  },
  {
    path:"*",
    element: <PageNotFound />
  }
];

const router = createBrowserRouter(dyamicRoutes);

function App() {
  const [loginUser, setLoginUser] = useState<any>({});

  console.log("loginUser", loginUser);
  const providerObj = {
    loginUser,
    setLoginUser,
  };

  return (
    <userContext.Provider value={providerObj}>
      <RouterProvider router={router} />
    </userContext.Provider>
  );
}
export default App;
