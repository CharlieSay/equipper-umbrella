import { ApolloError, gql, useQuery } from '@apollo/client'
import { InfluencerSearchModel } from '../core/models/influencer-search.model'
import BackupJson from '../core/data/backup-four-creators.json'

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

  const { loading, data, error } =
    process.env.REACT_APP_msm === 'true'
      ? { loading: false, data: BackupJson, error: undefined }
      : useQuery(SEARCH, {
          variables: { sort, query },
        })

  return {
    isLoading: loading,
    error,
    // eslint-disable-next-line no-nested-ternary
    searchResults: loading
      ? []
      : process.env.REACT_APP_msm === 'true'
      ? BackupJson.popularInfluencers
      : data.searchResults,
  }
}

export default getSearch
