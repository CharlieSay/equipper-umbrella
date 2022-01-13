import React from 'react'
import { Badge } from 'react-bootstrap'
import { InfluencerSearchModel } from '../../models/influencer-search.model'
import {
  InfluencerCard,
  CardContent,
  CardFooter,
  CardText,
  CardTitle,
  UpdatedBlurb,
  Image,
} from './cards-styles'

interface CardType {
  influencer: InfluencerSearchModel
  key: string
}

const Influencer = (props: CardType) => {
  const { influencer, key } = props

  return (
    <InfluencerCard key={key} href={influencer.link}>
      <Image alt={`${influencer.name}`} src={influencer.imgUrl} />
      <CardContent>
        <CardTitle>{influencer.name}</CardTitle>
        <CardText>{influencer.description}</CardText>
      </CardContent>
      <CardFooter>
        <UpdatedBlurb>
          {influencer.lastUpdatedBlurb
            ? `Last updated ${influencer.lastUpdatedBlurb}`
            : ''}
        </UpdatedBlurb>
        {influencer.popular && (
          <Badge style={{ maxHeight: `20px` }} variant="purple">
            POPULAR
          </Badge>
        )}
      </CardFooter>
    </InfluencerCard>
  )
}

export default Influencer
