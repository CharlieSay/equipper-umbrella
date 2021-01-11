import React from 'react'
import styled from 'styled-components'
import { gql, useQuery } from '@apollo/client'
import { Spinner } from 'react-bootstrap'
import InfluencerGroup from '../../core/components/popular-group/influencer-group'
import SearchForm from '../../core/components/search-form/search-form'
import { H1HeroTitleLightRed } from '../../core/style/typography.styles'
import { ContainerConstrained } from '../../core/style/containers.styles'
import { CardAsDiv } from '../../core/components/influencer-card/cards-styles'

const POPULAR_INFLUENCERS = gql`
  # Write your query or mutation here
  query popularInfluencers {
    popularInfluencers {
      name
      description
      link
      imgUrl
      lastUpdatedBlurb
    }
  }
`

const HeroTextAligner = styled.div`
  display: flex;
  justify-content: center;
  padding: 20px;
  flex-direction: column;
  text-align: center;
`

const HomePage = () => {
  // eslint-disable-next-line no-console
  console.log(
    process.env.REACT_APP_MONGO_DB_P
      ? process.env.REACT_APP_MONGO_DB_P
      : 'No MongoDB VAR',
  )

  console.log(process.env.NODE_ENV)

  const { loading, data } = useQuery(POPULAR_INFLUENCERS)

  return (
    <ContainerConstrained>
      <CardAsDiv>
        <HeroTextAligner>
          <H1HeroTitleLightRed>
            So who is your favourite influencer?
          </H1HeroTitleLightRed>
          <SearchForm />
        </HeroTextAligner>
      </CardAsDiv>
      {!loading ? (
        <InfluencerGroup
          groupTitle="Popular Influencers"
          groupSubTitle="The most popular influencers, and all the equipment they use."
          popularInfluencers={data ? data.popularInfluencers : []}
        />
      ) : (
        <Spinner animation="border" role="status">
          <span className="sr-only">Loading...</span>
        </Spinner>
      )}
    </ContainerConstrained>
  )
}

export default HomePage
