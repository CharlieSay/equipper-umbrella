import React from 'react'
import styled from 'styled-components'
import Facebook from '../../../assets/socials/facebook.svg'
import Instagram from '../../../assets/socials/insta.svg'
import Snapchat from '../../../assets/socials/snapchat.svg'
import TikTok from '../../../assets/socials/tik-tok.svg'
import Twitter from '../../../assets/socials/twitter.svg'
import YouTube from '../../../assets/socials/youtube.svg'
import Amazon from '../../../assets/affiliates/amazon-mini.svg'

export interface SocialSVGProps {
  name: string
  link?: string
  constraint?: { height: number; width: number }
}

const SocialImageHover = styled.img`
  transition: ${(props) => props.theme.defaultTransitionLength};
  &:hover {
    transform: scale(1.1, 1.1);
  }
`

export const SocialImage = (props: SocialSVGProps) => {
  const { name, link, constraint } = props

  let svgPath = ''

  switch (name.toLowerCase()) {
    case 'facebook': {
      svgPath = Facebook
      break
    }
    case 'instagram': {
      svgPath = Instagram
      break
    }
    case 'snapchat': {
      svgPath = Snapchat
      break
    }
    case 'tiktok': {
      svgPath = TikTok
      break
    }
    case 'twitter': {
      svgPath = Twitter
      break
    }
    case 'youtube': {
      svgPath = YouTube
      break
    }
    case 'amazon': {
      svgPath = Amazon
      break
    }
    default: {
      svgPath = ''
    }
  }

  if (link) {
    return (
      <a href={link} style={{ padding: `0 8px 0 8px` }}>
        <SocialImageHover
          height={(constraint && constraint.height) || 30}
          width={(constraint && constraint.width) || 30}
          src={svgPath}
          alt={name}
        />
      </a>
    )
  }

  return (
    <SocialImageHover
      height={(constraint && constraint.height) || 30}
      width={(constraint && constraint.width) || 30}
      src={svgPath}
      alt={name}
    />
  )
}
