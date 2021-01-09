import React, { Suspense } from 'react'
import { HelmetProvider } from 'react-helmet-async'
import ReactDOM from 'react-dom'
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'
import { ThemeProvider } from 'styled-components'
import Loading from './pages/utility-pages/loading/loading'
import Routes from './routes'
import * as theme from './themes'
import './core/scss/.critical.scss'

const client = new ApolloClient({
  uri:
    process.env.NODE_ENV === 'development'
      ? '//localhost:5000/gql'
      : 'https://equippr-gql-server.herokuapp.com/gql',
  cache: new InMemoryCache(),
})

ReactDOM.render(
  <ApolloProvider client={client}>
    <ThemeProvider theme={theme}>
      <HelmetProvider>
        <Suspense fallback={<Loading />}>
          <Routes />
        </Suspense>
      </HelmetProvider>
    </ThemeProvider>
  </ApolloProvider>,
  document.getElementById('root'),
)
