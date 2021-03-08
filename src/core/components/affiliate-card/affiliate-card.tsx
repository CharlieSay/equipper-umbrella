import React, { CSSProperties } from 'react'
import { Button } from 'react-bootstrap'
import { SocialImage } from '../image/social-image'

interface AffiliateCardProps {
  href: string
  variant: string
  style: CSSProperties
  vendor: string
}

const AffiliateCard = (props: AffiliateCardProps) => {
  const { href, variant, style, vendor } = props

  return (
    <Button
      key={vendor}
      href={href}
      variant={variant}
      style={style}
      target="_blank"
    >
      Buy on {vendor}
      <SocialImage constraint={{ width: 20, height: 20 }} name={vendor} />
    </Button>
  )
}

export default AffiliateCard
