import React from "react";
import { FC } from "react";
import { Route, RouteProps } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import { DesktopHeader, MobileHeader } from "./header";
import { Footer } from "./footer";
import { Helmet } from "react-helmet-async";

import headerLinks from "../../data/header-footer-links.json"

export interface PageRouteProps extends RouteProps {
  pageData?: PageDataProps;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  component: FC<any>;
}

export interface PageDataProps {
  title?: string;
  metaDescription?: string;
  meta?: Array<Meta>;
}

export interface Meta {
  name: string;
  content: string;
}

const withLayout = <P extends Record<string, unknown>>(
  ContentComponent: FC<P>,
  helmetData: PageDataProps
): FC<P> => {
  const WithLayout = (props: P) => {
    const isTabletOrMobile = useMediaQuery({ query: "(max-width: 860px)" });
    const isTabletOrMobileDevice = useMediaQuery({
      query: "(max-device-width: 860px)",
    });
    const isMobile = isTabletOrMobile && isTabletOrMobileDevice;

    const isDesktop = useMediaQuery({
      query: "(min-device-width: 861px)",
    });

    const pageData: PageDataProps = {
      title: helmetData.title || "This website",
      metaDescription: helmetData.metaDescription || "This website",
      meta: helmetData.meta || [],
    };

    return (
      <>
        <Helmet>
          <title>{pageData.title}</title>
          {pageData.meta?.map((meta, i) => (
            <meta key={i} name={meta.name} content={meta.content}></meta>
          ))}
          <meta name="description" content={pageData.metaDescription}></meta>
        </Helmet>
        {isDesktop && <DesktopHeader links={headerLinks} />}
        {isMobile && <MobileHeader links={headerLinks} />}
        <main id="content">
          <ContentComponent {...props} />
        </main>
        {Footer && <Footer links={headerLinks} />}
      </>
    );
  };

  return WithLayout;
};

const PageRoute = (props: PageRouteProps) => {
  const pageData = props.pageData || {};
  return <Route component={withLayout(props.component, pageData)} />;
};

export default PageRoute;
