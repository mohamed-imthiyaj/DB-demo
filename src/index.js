import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import AppErrorBoundary from "./App.errorBoundry";
import { store } from "./redux";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <AppErrorBoundary>
        <App />
      </AppErrorBoundary>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
