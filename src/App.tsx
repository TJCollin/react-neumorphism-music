import React, { Suspense } from "react";
import HomeLayout from "./layouts/HomeLayout";
import style from "./App.module.scss";
import { BrowserRouter } from "react-router-dom";
import { renderRoutes } from "react-router-config";
import routes from "./router";
import { Provider } from "react-redux";
import store from "./store";
function App() {
  return (
    <Provider store={store}>
      <div className={style["App"]}>
        <BrowserRouter>
          <Suspense fallback={null}>{renderRoutes(routes)}</Suspense>
        </BrowserRouter>
      </div>
    </Provider>
  );
}

export default App;
