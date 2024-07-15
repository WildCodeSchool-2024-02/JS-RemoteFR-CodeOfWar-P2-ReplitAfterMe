import React from "react";
import ReactDOM from "react-dom/client";
import axios from "axios";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import request from "./data/request";

import App from "./App";
import Quizz from "./components/Quizz";
import Story from "./components/Story";
import HomePage from "./components/HomePage";

import "./style/app.css";

const countryData = async () => {
  const data = await axios.get(request[0].API);
  return data.data;
};

const router = createBrowserRouter([
  {
    element: <App />,

    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/quizz/chapter:chapter",
        element: <Quizz />,
        loader: countryData,
      },
      {
        path: "/story",
        element: <Story />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
