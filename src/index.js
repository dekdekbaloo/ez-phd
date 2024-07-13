import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";
import "animate.css";
import Landing from "./landing/Landing";
import Wizard from "./wizard/Wizard";
import Certificate from "./certificate/Certificate";
import HallOfFame from "./hall-of-fame/HallOfFame";
import "./lib/firebase";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Landing />,
  },
  {
    path: "/wizard",
    element: <Wizard />,
  },
  {
    path: "/certificate",
    element: <Certificate />,
  },
  {
    path: "/hall-of-fame",
    element: <HallOfFame />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
