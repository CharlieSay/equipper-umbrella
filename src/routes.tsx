import React from "react";
import { BrowserRouter, Switch } from "react-router-dom";

import PageRoute from "./core/components/layout/with-layout";
import HomePage from "./pages/homepage/homepage";
import NotFound from "./pages/utility-pages/error/not-found";
import InfluencerPageUsingParams from "./pages/influencer-page/influencer-page";
import CategoryPage from "./pages/category-page/category-page";
import SearchPage from "./pages/search-page/search";
import SubmitPage from "./pages/submit-page/submit-page";

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
      <PageRoute
        exact
        path="/category/:influencerCategory"
        component={CategoryPage}
        pageData={{ title: "Category", id: "/category/:influencerCategory" }}
      />
      <PageRoute
        exact
        path="/search"
        component={SearchPage}
        pageData={{ title: "Search", id: "/search" }}
      />
      <PageRoute
        exact
        path="/submit"
        component={SubmitPage}
        pageData={{ title: "Submit", id: "/submit" }}
      />
      <PageRoute component={NotFound} pageData={{ title: "Not Found" }} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
