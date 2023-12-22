import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import "react-toastify/dist/ReactToastify.css";
import "tw-elements";
import { BrowserRouter } from "react-router-dom";
import MovieContextProvider from "./context/MovieContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <MovieContextProvider>
      {" "}
      <App />{" "}
    </MovieContextProvider>
  </BrowserRouter>
);
