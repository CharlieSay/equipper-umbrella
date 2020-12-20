import React from 'react'
import { InfluencerSearchModel } from '../../models/influencer-search.model'
import {
  InfluencerCard,
  CardContent,
  CardFooter,
  CardText,
  CardTitle,
  UpdatedBlurb,
} from './cards-styles'

import ImageCom from '../image/image'

interface CardType {
  influencer: InfluencerSearchModel
  key: string
}

const Influencer = (props: CardType) => {
  const { influencer, key } = props

  return (
    <InfluencerCard key={key} href={influencer.link}>
      <ImageCom src={influencer.imgUrl} />
      <CardContent>
        <CardTitle>{influencer.name}</CardTitle>
        <CardText>{influencer.description}</CardText>
      </CardContent>
      <CardFooter>
        <UpdatedBlurb>
          {influencer.lastUpdatedBlurb
            ? `Last updated ${influencer.lastUpdatedBlurb}`
            : 'This is broke'}
        </UpdatedBlurb>
      </CardFooter>
    </InfluencerCard>
  )
}

export default Influencer
