import React, { useEffect } from "react";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRouter = () => {
  window.onbeforeunload = function (e) {
    window.localStorage.unloadTime = JSON.stringify(new Date());
  };

  window.onload = function () {
    let loadTime = new Date();
    let unloadTime = new Date(JSON.parse(window.localStorage.unloadTime));
    let refreshTime = loadTime.getTime() - unloadTime.getTime();

    if (refreshTime > 2500) {
      //3000 milliseconds
      window.localStorage.removeItem("userEmail");
    }
  };

  const isUserAuthenticated = localStorage.getItem("userEmail") !== null;
  return isUserAuthenticated ? <Outlet /> : <Navigate to="/" />;
};

export default PrivateRouter;
