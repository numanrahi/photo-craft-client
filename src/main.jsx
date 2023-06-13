import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./Layout/Main";
import "bootstrap/dist/css/bootstrap.min.css";
import PageNotFound from "./components/PageNotFound/PageNotFound";
import Instructors from "./components/Instructors/Instructors";
import Classes from "./components/Classes/Classes";
import Dashboard from "./components/Dashboard/Dashboard";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import AuthProvider from "./providers/AuthProvider";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { RoleProvider } from "./providers/RoleProvider";

const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
  },
  {
    path: "instructors",
    element: <Instructors></Instructors>,
  },
  {
    path: "classes",
    element: <Classes></Classes>,
  },
  {
    path: "dashboard",
    element: <Dashboard></Dashboard>,
    children: [],
  },
  {
    path: "login",
    element: <Login></Login>,
  },
  {
    path: "register",
    element: <Register></Register>,
  },
  {
    path: "*",
    element: <PageNotFound></PageNotFound>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <RoleProvider>
          <RouterProvider router={router} />
          <ToastContainer />
        </RoleProvider>
      </AuthProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
