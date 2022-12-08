import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";

import "./index.css";
import App from "./App";
import store from "./store/ReduxStore";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // Provide redux store to the whole app
  <Provider store={store}>
    <App />
  </Provider>
);
