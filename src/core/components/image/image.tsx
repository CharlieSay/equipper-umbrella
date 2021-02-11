import React from 'react'
import { Img } from 'react-image'
import VisibilitySensor from 'react-visibility-sensor'

interface ImageProps {
  src: string
  fallbacks?: string[]
  maxWidth?: string
  maxHeight?: string
}

const ImageComponent = (props: ImageProps) => {
  const { src, fallbacks = [], maxWidth, maxHeight } = props

  const imageSrc = [src].concat(fallbacks)

  return (
    <VisibilitySensor>
      <Img
        loading="lazy"
        src={imageSrc}
        style={{ width: `100%`, height: `auto`, maxWidth, maxHeight }}
      />
    </VisibilitySensor>
  )
}

export default ImageComponent
