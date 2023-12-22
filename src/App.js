import React from "react";
import AppRouter from "./router/AppRouter";
import MovieContextProvider from "./context/MovieContext";

const App = () => {
  return (
    <div>
      <MovieContextProvider>
        <AppRouter />
      </MovieContextProvider>
    </div>
  );
};

export default App;
