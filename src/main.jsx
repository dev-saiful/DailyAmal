import { StrictMode } from "react";
import {BrowseRouter} from "react-router";
import {Provider} from "@reduxjs/toolkit";
import { createRoot } from "react-dom/client";

import "./index.css";
import App from "./App.jsx";
import store from "./redux/store.js";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
    <BrowseRouter>
    <App />
    </BrowseRouter>
    </Provider>
  </StrictMode>
);
