import React from 'react'
import queryString from 'query-string'
import { useLocation } from 'react-router-dom'
import styled from 'styled-components'
import getSearch from '../../hooks/search-hooks'
import {
  BaseUnitTopBottomPadding,
  ContainerConstrained,
} from '../../core/style/containers.styles'
import {
  H1HeroTitle,
  H1HeroTitleLightRed,
  PNormal,
  SubTitle,
} from '../../core/style/typography.styles'
import InfluencerCard from '../../core/components/influencer-card/influencer-card'
import MyLoader from '../../core/components/influencer-card/influencer-card-loading'
import {
  CardAsDiv,
  Cards,
  Centered,
} from '../../core/components/influencer-card/cards-styles'
import convertToTitleCase from '../../utils/format-utils'
import SearchForm from '../../core/components/search-form/search-form'
import InfluencerGroup from '../../core/components/popular-group/influencer-group'
import backupCreators from '../../core/data/backup-four-creators.json'

const HeroTextAligner = styled.div`
  display: flex;
  justify-content: center;
  padding: 20px;
  flex-direction: column;
  text-align: center;
`

const Search = (props: { query: string; sort: string }) => {
  const { query, sort } = props
  const { isLoading, error, searchResults } = getSearch({
    query,
    sort,
  })

  if (isLoading) {
    return <MyLoader />
  }

  if (error) {
    return <h1>ERRORRRRR</h1>
  }

  if (searchResults.length === 0) {
    return (
      <>
        <SubTitle primary>Nothing found, try to refine your search</SubTitle>
        <PNormal>Here is some influencers you may be interested in</PNormal>
        <InfluencerGroup
          popularInfluencers={backupCreators.popularInfluencers}
        />
      </>
    )
  }

  return (
    <>
      <SubTitle primary>{`${searchResults.length} influencers found`}</SubTitle>
      <BaseUnitTopBottomPadding />
      <Centered>
        <Cards>
          {searchResults &&
            searchResults.map((influencer) => (
              <InfluencerCard influencer={influencer} key={influencer.name} />
            ))}
        </Cards>
      </Centered>
    </>
  )
}

const SearchWrapper = () => {
  const queryFromStorage = queryString.parse(useLocation().search)
  const queryName = convertToTitleCase(
    queryFromStorage?.query ? queryFromStorage.query.toString() : '',
  )
  return (
    <ContainerConstrained>
      <CardAsDiv>
        <HeroTextAligner>
          <H1HeroTitleLightRed>Search for more</H1HeroTitleLightRed>
          <SearchForm placeholderText={queryName} />
        </HeroTextAligner>
      </CardAsDiv>
      <hr />
      {queryName && (
        <>
          <div style={{ display: `flex` }}>
            <H1HeroTitle>Search results for</H1HeroTitle>{' '}
            <H1HeroTitleLightRed>{` ${queryName}`}</H1HeroTitleLightRed>
          </div>
          <Search query={queryName} sort="popular" />
        </>
      )}
    </ContainerConstrained>
  )
}

export default SearchWrapper
