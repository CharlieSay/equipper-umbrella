import React, { Suspense } from "react";
import { HelmetProvider } from "react-helmet-async";
import ReactDOM from "react-dom";

import Loading from "./pages/utility-pages/loading/loading";
import Routes from "./routes";
import "./core/scss/.critical.scss";

ReactDOM.render(
  <HelmetProvider>
    <Suspense fallback={<Loading />}>
      <Routes />
    </Suspense>
  </HelmetProvider>,
  document.getElementById("root")
);
