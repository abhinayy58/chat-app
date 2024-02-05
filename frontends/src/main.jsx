import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";

import "./index.css";
import { AuthContextProvider } from "./context/AuthContext.jsx";
import { SocketConetxtProvider } from "./context/SocketContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthContextProvider>
        <SocketConetxtProvider>
        <App />
        </SocketConetxtProvider>
      </AuthContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
