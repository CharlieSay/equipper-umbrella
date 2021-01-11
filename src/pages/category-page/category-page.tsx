import React from 'react'
import { useParams } from 'react-router-dom'
import InfluencerGroup from '../../core/components/popular-group/influencer-group'
import { ContainerConstrained } from '../../core/style/containers.styles'
import backupCreators from '../../core/data/backup-four-creators.json'

const CategoryPage = () => {
  const { influencerCategory } = useParams() as {
    influencerCategory: string
  }

  const influencerParsed =
    influencerCategory[0].toUpperCase() + influencerCategory.slice(1)

  return (
    <ContainerConstrained>
      <InfluencerGroup
        groupTitle={influencerParsed}
        popularInfluencers={backupCreators}
        groupSubTitle={`The most popular ${influencerParsed}, and all the equipment they use.`}
      />
    </ContainerConstrained>
  )
}

export default CategoryPage
