import React, { Suspense } from "react";
import { HelmetProvider } from "react-helmet-async";
import ReactDOM from "react-dom";

import Loading from "./pages/utility-pages/loading/loading";
import Routes from "./routes";
import { ThemeProvider } from "styled-components";
import * as theme from "./themes";
import "./core/scss/.critical.scss";

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <HelmetProvider>
      <Suspense fallback={<Loading />}>
        <Routes />
      </Suspense>
    </HelmetProvider>
  </ThemeProvider>,
  document.getElementById("root")
);
