import { gql } from '@apollo/client'

export default gql`
  query influencerPage($influencerName: String!) {
    influencerResult(influencerName: $influencerName) {
      personalFacts {
        name
        creatorType
        lastUpdated
        description
        socialLinks {
          socialNetwork
          link
        }
      }
      similarCreators {
        name
        description
        link
        imgUrl
        lastUpdatedBlurb
      }
      usedEquipment {
        friendlySectionName
        anchor
        equipment {
          affiliate {
            affiliateUrl
            vendor
          }
          part
          thumbnail
          friendlyName
        }
      }
      keyFacts {
        identifier
        fact
        value
      }
      media {
        ytBanner
        ytTumbnail
        faceThumbnail
      }
    }
  }
`
