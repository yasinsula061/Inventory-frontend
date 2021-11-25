import React from "react";
import { Provider } from "react-redux";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import * as serviceWorker from "./config/serviceWorker";

import App from "./app";
import configureStore from "./store/reducers/configureStore"

const app = (
  <Provider store={configureStore}>
    <BrowserRouter basename={"inventory"}>
      <App />
    </BrowserRouter>
  </Provider>
);

ReactDOM.render(app, document.getElementById("root"));
serviceWorker.unregister();
