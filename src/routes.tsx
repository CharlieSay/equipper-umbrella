import React from 'react'
import { BrowserRouter, Switch } from 'react-router-dom'

import PageRoute from './core/components/layout/with-layout'
import HomePage from './pages/homepage/homepage'
import NotFound from './pages/utility-pages/error/not-found'
import InfluencerPageUsingParams from './pages/influencer-page/influencer-page'
import CategoryPage from './pages/category-page/category-page'
import CategoryListPage from './pages/category-page/category-list-page'
import SearchPage from './pages/search-page/search'
import SubmitPage from './pages/submit-page/submit-page'
import PopularGearPage from './pages/popular-gear/popular-gear-page'
import HelpPage from './pages/help-page/help-page'
import FaqPage from './pages/help-page/faq-page'
import ContactUsPage from './pages/help-page/contact-us-page'
import DisclaimerPage from './pages/utility-pages/disclaimer/disclaimer-page'
import PrivacyPolicyPage from './pages/utility-pages/privacy-policy/privacy-policy-page'
import AboutUsPage from './pages/about-page/about-us-page'

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <PageRoute
        exact
        path="/"
        component={HomePage}
        pageData={{ title: 'Home' }}
      />
      <PageRoute
        exact
        path="/influencers/:id"
        component={InfluencerPageUsingParams}
        pageData={{ title: 'Influencer' }}
      />
      <PageRoute
        exact
        path="/category/:influencerCategory"
        component={CategoryPage}
        pageData={{ title: 'Category' }}
      />
      <PageRoute
        exact
        path="/categories"
        component={CategoryListPage}
        pageData={{ title: 'Categories' }}
      />
      <PageRoute
        exact
        path="/popular-gear"
        component={PopularGearPage}
        pageData={{ title: 'Popular Gear' }}
      />
      <PageRoute
        exact
        path="/search"
        component={SearchPage}
        pageData={{ title: 'Search' }}
      />
      <PageRoute
        exact
        path="/submit"
        component={SubmitPage}
        pageData={{ title: 'Submit' }}
      />
      <PageRoute
        exact
        path="/disclaimer"
        component={DisclaimerPage}
        pageData={{ title: 'Disclaimer' }}
      />
      <PageRoute
        exact
        path="/help"
        component={HelpPage}
        pageData={{ title: 'Support' }}
      />
      <PageRoute
        path="/help/contact"
        component={ContactUsPage}
        pageData={{ title: 'Contact Us' }}
      />
      <PageRoute
        path="/help/faq"
        component={FaqPage}
        pageData={{ title: 'FAQ' }}
      />
      <PageRoute
        exact
        path="/about-us"
        component={AboutUsPage}
        pageData={{ title: 'About Us' }}
      />
      <PageRoute
        path="/privacy-policy"
        component={PrivacyPolicyPage}
        pageData={{ title: 'Privacy Policy' }}
      />
      <PageRoute component={NotFound} pageData={{ title: 'Not Found' }} />
    </Switch>
  </BrowserRouter>
)

export default Routes
