import { Store } from "@reduxjs/toolkit";
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { Router } from "react-router-dom";
import App from "./app";
import { BindingTypes } from "./features/common/binding/binding.types";
import "./index.css";
import { container } from "./inversify.config";
import reportWebVitals from "./reportWebVitals";
import { History } from "history";

const rootStore = container.get<Store>(BindingTypes.ROOT_STORE);
const history = container.get<History>(BindingTypes.HISTORY);

ReactDOM.render(
  <React.StrictMode>
    <Router history={history}>
      <Provider store={rootStore}>
        <App />
      </Provider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
