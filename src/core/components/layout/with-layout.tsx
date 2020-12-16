import React, { FC } from 'react';

import { Route, RouteProps } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import { Helmet } from 'react-helmet-async';
import Header from './header';
import Footer  from './footer';

import navigationLinks from '../../data/header-footer-links.json';

export interface PageRouteProps extends RouteProps {
  pageData: PageDataProps;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  component: FC<any>;
}

export interface PageDataProps {
  title?: string;
  metaDescription?: string;
  meta?: Array<Meta>;
  id?: string;
}

export interface Meta {
  name: string;
  content: string;
}

const withLayout = <P extends Record<string, unknown>>(
  ContentComponent: FC<P>,
  helmetData: PageDataProps,
): FC<P> => {
  const WithLayout = (props: P) => {
    const isDesktop = useMediaQuery({
      query: '(min-device-width: 861px)',
    });

    const isMobile = useMediaQuery({
      query: '(max-device-width: 860px)',
    });

    const pageData: PageDataProps = {
      title: `${helmetData.title || 'Oops'} - Equippr`,
      metaDescription: `${
        helmetData.metaDescription
        || 'Equippr - What gear do popular influencers use for Social Media? Your number 1 source to check equipment'
      }`,
      meta: helmetData.meta || [],
    };

    return (
      <>
        <Helmet>
          <title>{pageData.title}</title>
          {pageData.meta?.map((meta) => (
            <meta key={meta.name} name={meta.name} content={meta.content} />
          ))}
          <meta name="description" content={pageData.metaDescription} />
        </Helmet>
        <Header
          links={navigationLinks.header}
          isDesktop={isDesktop}
          isMobile={isMobile}
        />
        <main id="content">
          <ContentComponent {...props} />
        </main>
        <Footer links={navigationLinks.footer} />
      </>
    );
  };

  return WithLayout;
};

const PageRoute = (props: PageRouteProps) => {
  const {pageData, component} = props;

  const internalPageData = pageData || {};
  return (
    <Route
      component={withLayout(component, internalPageData)}
    />
  );
};

export default PageRoute;
