import React, { Suspense } from "react";
import HomeLayout from "./layouts/HomeLayout";
import style from "./App.module.scss";
import { BrowserRouter } from "react-router-dom";
import { renderRoutes } from "react-router-config";
import routes from "./router";

function App() {
  return (
    <div className={style["App"]}>
      <BrowserRouter>
        <Suspense fallback={null}>{renderRoutes(routes)}</Suspense>
      </BrowserRouter>
    </div>
  );
}

export default App;
