import React from "react";
import { BrowserRouter, Switch } from "react-router-dom";

import PageRoute from "./core/components/layout/with-layout";
import HomePage from "./pages/homepage/homepage";
import NotFound from "./pages/utility-pages/error/not-found";
import InfluencerPageUsingParams from "./pages/influencer-page/influencer-page";

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <PageRoute
        exact
        path="/"
        component={HomePage}
        pageData={{ title: "Home" }}
      />
      <PageRoute
        exact
        path="/influencers/:id"
        component={InfluencerPageUsingParams}
        pageData={{ title: "Influencer", id: "/influencers/:id" }}
      />
      <PageRoute component={NotFound} pageData={{ title: "Not Found" }} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
