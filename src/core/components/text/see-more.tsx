import React, { useState } from 'react'
import styled from 'styled-components'

interface SeeMoreProps {
  text: string
  limit: number
}

const SeeMore = styled.button`
  border: none;
  background-color: transparent;
  color: ${(props) => props.theme.purple};
  font-weight: 500;
  font-size: 0.95em;
`

const WholeText = styled.p`
  color: ${(props) => props.theme.darkGrey};
  font-size: 0.85em;
  line-height: 14px;
`

const TextWithSeeMore = (props: SeeMoreProps) => {
  const { text, limit } = props

  const [viewMore, setViewMore] = useState(false)

  const allText = viewMore ? text : text.substring(0, limit)

  const colOrMore = viewMore ? 'Less' : 'See more'

  return (
    <div>
      <WholeText>
        {allText}
        {!viewMore && `...`}
        <SeeMore type="submit" onClick={() => setViewMore(!viewMore)}>
          {colOrMore}
        </SeeMore>
      </WholeText>
    </div>
  )
}

export default TextWithSeeMore
