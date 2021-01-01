import React, { Dispatch, SetStateAction, useState } from 'react'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Headroom from 'react-headroom'
import { useLocation } from 'react-router-dom'
import { Turn as Hamburger } from 'hamburger-react'

import {
  HeaderLinkActive,
  HeaderLinkStyled,
  HeaderRestrictor,
  MobileNavBackground,
  VisuallyHidden,
} from './header.styles'
import Logo from '../../../assets/logo.svg'
import './header.scss'

export interface HeaderFooterProps {
  links: Array<Link>
  isDesktop?: boolean
  isMobile?: boolean
  navOpen?: boolean
}
interface MobileNavProps {
  navOpen: boolean
  setNavOpen: Dispatch<SetStateAction<boolean>>
}

interface Link {
  displayText: string
  stem: string
  params?: string
  isActive?: boolean
  isDivider?: boolean
  subHeaders?: Link[]
}

interface HeaderLinkProps {
  stem: string
  displayText: string
}

const HeaderLink = (props: HeaderLinkProps) => {
  const { stem, displayText } = props
  const { pathname } = useLocation()
  const isActive = pathname === stem

  if (isActive) {
    return <HeaderLinkActive>{displayText}</HeaderLinkActive>
  }

  return <HeaderLinkStyled>{displayText}</HeaderLinkStyled>
}

const DesktopNavigation = (props: HeaderFooterProps) => {
  const { links } = props
  return (
    <Nav className="mr-auto">
      {links.map((key) => (
        <Nav.Link
          key={key.stem}
          href={`${key.stem}${key.params ? key.params : ''}`}
        >
          <HeaderLink stem={key.stem} displayText={key.displayText} />
        </Nav.Link>
      ))}
    </Nav>
  )
}

const MobileNavigation = (props: MobileNavProps) => {
  const { navOpen, setNavOpen } = props
  return (
    <Nav>
      <Hamburger
        color="#dc3545"
        toggled={navOpen}
        onToggle={() => setNavOpen(!navOpen)}
      />
    </Nav>
  )
}

const Header = (props: HeaderFooterProps) => {
  const { isDesktop, isMobile, links } = props
  const [mobileNavOpen, setNavOpen] = useState(false)
  return (
    <HeaderRestrictor>
      <Headroom
        style={{
          WebkitTransition: 'all .5s ease-in-out',
          MozTransition: 'all .5s ease-in-out',
          OTransition: 'all .5s ease-in-out',
          transition: 'all .5s ease-in-out',
        }}
      >
        <VisuallyHidden href="#content" rel="external">
          Skip to content
        </VisuallyHidden>
        <VisuallyHidden href="#footer" rel="external">
          Skip to footer
        </VisuallyHidden>
        <Navbar
          bg="primary"
          variant="dark"
          style={{ width: '100vw', justifyContent: 'space-between' }}
        >
          <Navbar.Brand href="/">
            <img
              alt="Equipper Logo"
              src={Logo}
              width="30"
              height="30"
              className="d-inline-block align-top"
            />
          </Navbar.Brand>
          {isDesktop && <DesktopNavigation links={links} />}
          {isMobile && (
            <MobileNavigation navOpen={mobileNavOpen} setNavOpen={setNavOpen} />
          )}
        </Navbar>
        {mobileNavOpen && (
          <MobileNavBackground>
            {links.map((key) => (
              <Nav.Link
                key={key.stem}
                href={`${key.stem}${key.params ? key.params : ''}`}
              >
                <HeaderLink stem={key.stem} displayText={key.displayText} />
              </Nav.Link>
            ))}
          </MobileNavBackground>
        )}
      </Headroom>
    </HeaderRestrictor>
  )
}

export default Header
