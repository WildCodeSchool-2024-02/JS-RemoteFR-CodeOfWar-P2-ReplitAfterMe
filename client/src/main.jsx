import React from "react";
import ReactDOM from "react-dom/client";
import axios from "axios";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { MusicProvider } from "./contexts/MusicContext";
import { AvatarProvider } from "./contexts/AvatarContext";
import { DifficultyProvider } from "./contexts/DifficultyContext";

import request from "./data/request";
import App from "./App";
import Quizz from "./pages/Quizz";
import Story from "./pages/Story";
import HomePage from "./pages/HomePage";
import Intro from "./pages/Intro";

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
          if (request[params.chapter]) {
            const data = await axios.get(request[params.chapter].API);
            return data.data;
          }

          return null;
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
        <AvatarProvider>
          <RouterProvider router={router} />
        </AvatarProvider>
      </DifficultyProvider>
    </MusicProvider>
  </React.StrictMode>
);
