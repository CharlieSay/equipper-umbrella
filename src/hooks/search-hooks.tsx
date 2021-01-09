import { ApolloError, gql, useQuery } from '@apollo/client'
import { InfluencerSearchModel } from '../core/models/influencer-search.model'

interface SearchResultsInterface {
  isLoading: boolean
  error?: ApolloError
  searchResults: InfluencerSearchModel[]
}

interface SearchHookProps {
  sort: string
  query: string
}

const SEARCH = gql`
  query search($sort: String!, $query: String!) {
    searchResults(sort: $sort, query: $query) {
      name
      description
      link
      imgUrl
      lastUpdatedBlurb
    }
  }
`

const getSearch = (props: SearchHookProps): SearchResultsInterface => {
  const { sort, query } = props
  const { loading, error, data } = useQuery(SEARCH, {
    variables: { sort, query },
  })

  return {
    isLoading: loading,
    error,
    searchResults: loading ? [] : data.searchResults,
  }
}

export default getSearch
