import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import * as Pages from "./containers";
import SuspenseComponent from "./components/SuspenseComponent";
import store from "./store";
// import reportWebVitals from "./reportWebVitals";

const root = createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <Router>
      {/* <React.StrictMode> */}
      <Pages.App>
        <Routes>
          <Route exact path="/" element={SuspenseComponent(Pages.Home)} />
          <Route exact path="/about" element={SuspenseComponent(Pages.About)} />
          <Route
            exact
            path="/people"
            element={SuspenseComponent(Pages.People)}
          />
          <Route
            exact
            path="/contact"
            element={SuspenseComponent(Pages.Contact)}
          />
          <Route
            exact
            path="/person"
            element={SuspenseComponent(Pages.Person)}
          />
          <Route path="*" element={SuspenseComponent(Pages.Unknown)} />
        </Routes>
      </Pages.App>
      {/* </React.StrictMode> */}
    </Router>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
