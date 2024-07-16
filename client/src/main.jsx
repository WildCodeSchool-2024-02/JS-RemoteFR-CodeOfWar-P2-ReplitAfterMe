import React from "react";
import ReactDOM from "react-dom/client";
import axios from "axios";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { MusicProvider } from "./contexts/MusicContext";

import DifficultyProvider from "../contexts/DifficultyContext";
import request from "./data/request";
import App from "./App";
import Quizz from "./components/Quizz";
import Story from "./components/Story";
import HomePage from "./components/HomePage";
import Intro from "./components/Intro";

import "./style/app.css";

const router = createBrowserRouter([
  {
    element: <App />,

    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/intro",
        element: <Intro />,
      },
      {
        path: `/quizz/:chapter`,
        element: <Quizz />,
        loader: async ({ params }) => {
          const data = await axios.get(request[params.chapter].API);
          return data.data;
        },
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
    <MusicProvider>
      <DifficultyProvider>
        <RouterProvider router={router} />
      </DifficultyProvider>
    </MusicProvider>
  </React.StrictMode>
);
