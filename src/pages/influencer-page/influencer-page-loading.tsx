import React from "react";
import ContentLoader from "react-content-loader";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const InfluencerPageLoading = (props: any) => (
  <ContentLoader
    speed={2}
    width={1224}
    height={1048}
    viewBox="0 0 500 500"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <circle cx="329" cy="70" r="45" />
    <rect x="22" y="19" rx="2" ry="2" width="140" height="10" />
    <rect x="22" y="40" rx="2" ry="2" width="214" height="79" />
    <rect x="22" y="133" rx="2" ry="2" width="140" height="10" />
    <rect x="22" y="197" rx="2" ry="2" width="81" height="79" />
    <rect x="22" y="152" rx="2" ry="2" width="140" height="10" />
    <rect x="22" y="173" rx="2" ry="2" width="140" height="10" />
    <rect x="118" y="245" rx="2" ry="2" width="87" height="11" />
    <rect x="117" y="204" rx="2" ry="2" width="90" height="33" />
  </ContentLoader>
);

export default InfluencerPageLoading;
