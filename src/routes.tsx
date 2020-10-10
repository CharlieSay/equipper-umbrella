import React from 'react'
import { BrowserRouter, Switch } from 'react-router-dom'

import PageRoute from './core/components/layout/with-layout'
import HomePage from './pages/homepage/homepage'
import NotFound from './pages/utility-pages/error/not-found'

export const HomePageComponent = HomePage
export const ErrorPageComponent = NotFound

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <PageRoute
        exact
        path="/"
        component={HomePageComponent}
        pageData={{ title: 'homepage' }}
      />
    <PageRoute
        component={ErrorPageComponent}
        pageData={{ title: 'Not Found' }}
      />
    </Switch>
  </BrowserRouter>
)

export default Routes
