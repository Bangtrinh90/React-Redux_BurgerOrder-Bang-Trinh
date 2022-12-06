import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";

import Nav from "./pages/Nav.jsx";
import { store } from "./redux/configureStore.jsx";
import BaiTapBurger from "./components/BaiTapBurger.jsx";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <Router>
      <Routes>
        <Route path="" element={<Nav />}>
          <Route index element={<BaiTapBurger />}></Route>
          <Route path="baitapburger" element={<BaiTapBurger />}></Route>
        </Route>
      </Routes>
    </Router>
  </Provider>
);
