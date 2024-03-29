import React from 'react'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import packageJson from '../../../../package.json'
import { ContainerConstrained } from '../../style/containers.styles'
import { PWhite } from '../../style/typography.styles'
import {
  FooterColumn,
  FooterContainerFlexOnMobile,
  FooterEmailSmall,
  FooterEmailTextType,
  FooterHeadLink,
  FooterRoot,
  FooterSubLink,
  FooterUL,
} from './footer.styles'
import { HeaderFooterProps } from './header'
import './footer.scss'

const Footer = (props: HeaderFooterProps) => {
  const { links } = props
  return (
    <FooterRoot id="footer">
      <ContainerConstrained>
        <FooterContainerFlexOnMobile>
          <Row noGutters>
            <Col>
              <Row>
                <FooterEmailTextType>Equippr</FooterEmailTextType>
              </Row>
              <Row>
                <FooterEmailSmall>hello@equippr.io</FooterEmailSmall>
              </Row>
              <Row>
                <PWhite>{` ${packageJson.name} (${packageJson.version})`}</PWhite>
              </Row>
              <Row>
                <a
                  rel="noreferrer"
                  href="https://www.buymeacoffee.com/charliesay"
                  target="_blank"
                >
                  <img
                    src="https://cdn.buymeacoffee.com/buttons/v2/default-red.png"
                    alt="Buy Me A Coffee"
                    style={{ height: '30px', width: '103.5px' }}
                  />
                </a>
              </Row>
            </Col>
            {links.map((link) => (
              <FooterColumn key={link.displayText}>
                <FooterUL>
                  <li>
                    <FooterHeadLink href={link.stem}>
                      {link.displayText}
                    </FooterHeadLink>
                  </li>
                </FooterUL>
                {link.subHeaders &&
                  link.subHeaders.map((subLinks) => (
                    <FooterUL key={subLinks.stem}>
                      <li>
                        <FooterSubLink
                          href={`${subLinks.stem}${
                            subLinks.params ? subLinks.params : ''
                          }`}
                        >
                          {subLinks.displayText}
                        </FooterSubLink>
                      </li>
                    </FooterUL>
                  ))}
              </FooterColumn>
            ))}
          </Row>
        </FooterContainerFlexOnMobile>
      </ContainerConstrained>
    </FooterRoot>
  )
}
export default Footer
