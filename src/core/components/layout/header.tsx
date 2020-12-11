import React, { Dispatch, SetStateAction, useState } from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Headroom from "react-headroom";
import { useLocation } from "react-router-dom";
import { Turn as Hamburger } from "hamburger-react";

import {
  HeaderLinkActive,
  HeaderLinkStyled,
  HeaderRestrictor,
  MobileNavBackground,
  VisuallyHidden,
} from "./header.styles";
import Logo from "../../../assets/logo.svg";
// import Hamburger from "../../../assets/hamburger.svg";
import "./header.scss";

export interface HeaderFooterProps {
  links: Array<Link>;
  isDesktop?: boolean;
  isMobile?: boolean;
  navOpen?: boolean;
}

interface Link {
  displayText: string;
  stem: string;
  params?: string;
  isActive?: boolean;
  isDivider?: boolean;
  subHeaders?: Link[];
}

interface HeaderLinkProps {
  stem: string;
  displayText: string;
}

const HeaderLink = (props: HeaderLinkProps) => {
  const { pathname } = useLocation();
  const isActive = pathname === props.stem;

  if (isActive) {
    return <HeaderLinkActive>{props.displayText}</HeaderLinkActive>;
  }

  return <HeaderLinkStyled>{props.displayText}</HeaderLinkStyled>;
};

export const DesktopHeader = (props: HeaderFooterProps) => {
  const { isDesktop, isMobile, links } = props;
  const [mobileNavOpen, setNavOpen] = useState(false);
  return (
    <HeaderRestrictor>
      <Headroom>
        <VisuallyHidden href="#content" rel="external">
          Skip to content
        </VisuallyHidden>
        <VisuallyHidden href="#footer" rel="external">
          Skip to footer
        </VisuallyHidden>
        <Navbar
          bg="primary"
          variant="dark"
          style={{ width: `100vw`, justifyContent: `space-between` }}
        >
          <Navbar.Brand href="/">
            <img
              alt={"Equipper Logo"}
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
            {links.map((key, i) => (
              <Nav.Link
                key={i}
                href={`${key.stem}${key.params ? key.params : ""}`}
              >
                <HeaderLink stem={key.stem} displayText={key.displayText} />
              </Nav.Link>
            ))}
          </MobileNavBackground>
        )}
      </Headroom>
    </HeaderRestrictor>
  );
};

const DesktopNavigation = (props: HeaderFooterProps) => {
  const { links } = props;
  return (
    <Nav className="mr-auto">
      {links.map((key, i) => (
        <Nav.Link key={i} href={`${key.stem}${key.params ? key.params : ""}`}>
          <HeaderLink stem={key.stem} displayText={key.displayText} />
        </Nav.Link>
      ))}
    </Nav>
  );
};

interface MobileNavProps {
  navOpen: boolean;
  setNavOpen: Dispatch<SetStateAction<boolean>>;
}

const MobileNavigation = (props: MobileNavProps) => {
  const { navOpen, setNavOpen } = props;
  return (
    <Nav>
      <Hamburger
        color={"#dc3545"}
        toggled={navOpen}
        onToggle={() => setNavOpen(!navOpen)}
      />
    </Nav>
  );
};
