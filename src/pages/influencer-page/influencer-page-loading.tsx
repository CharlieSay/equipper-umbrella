import React from 'react'
import ContentLoader from 'react-content-loader'

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
    <rect x="6" y="18" rx="0" ry="0" width="584" height="509" />
  </ContentLoader>
)

export default InfluencerPageLoading
