import React from "react";
import { ToastContainer } from "react-toastify";
import AuthContextProvider from "./context/AuthContext";
import MovieContextProvider from "./context/MovieContext";
import AppRouter from "./router/AppRouter";

const App = () => {
  return (
    <div className="dark:bg-gray-dark-main bg-blue-200">
      <AuthContextProvider>
        <MovieContextProvider>
          <AppRouter />
          <ToastContainer />
        </MovieContextProvider>
      </AuthContextProvider>
    </div>
  );
};

export default App;
