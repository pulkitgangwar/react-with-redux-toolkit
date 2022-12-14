import React from "react";
import { createRoot } from "react-dom/client";
import { Provider as ReduxStoreProvider } from "react-redux";
import App from "./App";
import store from "./store";

const root = createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ReduxStoreProvider store={store}>
      <App />
    </ReduxStoreProvider>
  </React.StrictMode>
);
