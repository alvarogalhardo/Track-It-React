import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import LoadingProvider from "./contexts/LoadingContext";
import ProgressProvider from "./contexts/ProgressContext";
import TokenProvider from "./contexts/TokenContext";
import UserProvider from "./contexts/UserContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <LoadingProvider>
      <ProgressProvider>
        <UserProvider>
          <TokenProvider>
            <App />
          </TokenProvider>
        </UserProvider>
      </ProgressProvider>
    </LoadingProvider>
  </React.StrictMode>
);
