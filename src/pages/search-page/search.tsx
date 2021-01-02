import React from 'react'
import queryString from 'query-string'
import { useLocation } from 'react-router-dom'
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
import popularInfluencers from '../../core/data/homepage-popular-data.json'

const Search = () => {
  const { isLoading, searchResults } = getSearch()

  if (isLoading) {
    return <MyLoader />
  }

  if (searchResults.length === 0) {
    return (
      <>
        <SubTitle primary>Nothing found, try to refine your search</SubTitle>
        <PNormal>Here is some influencers you may be interested in</PNormal>
        <InfluencerGroup popularInfluencers={popularInfluencers} />
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
  const heroTitle =
    queryName === ''
      ? 'This is all the influencers we have got'
      : `Search results ${queryName}`

  return (
    <ContainerConstrained>
      <CardAsDiv>
        <H1HeroTitleLightRed>Search for more</H1HeroTitleLightRed>
        <SearchForm maxWidth={600} placeholderText={queryName} />
      </CardAsDiv>
      <hr />
      {queryName && (
        <>
          <H1HeroTitle>{heroTitle}</H1HeroTitle>
          <Search />
        </>
      )}
    </ContainerConstrained>
  )
}

export default SearchWrapper
