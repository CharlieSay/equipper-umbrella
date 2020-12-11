import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Headroom from "react-headroom";
import { useLocation } from "react-router-dom";

import {
  HeaderLinkActive,
  HeaderLinkStyled,
  HeaderRestrictor,
  VisuallyHidden,
} from "./header.styles";
import Logo from "../../../assets/logo.svg";
import "./header.scss";

export interface HeaderFooterProps {
  links: Array<Link>;
  isDesktop?: boolean;
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
  const { isDesktop, links } = props;
  return (
    <HeaderRestrictor>
      <Headroom>
        <VisuallyHidden href="#content" rel="external">
          Skip to content
        </VisuallyHidden>
        <VisuallyHidden href="#footer" rel="external">
          Skip to footer
        </VisuallyHidden>
        <Navbar bg="primary" variant="dark">
          <Navbar.Brand href="/">
            <img
              alt={"Equipper Logo"}
              src={Logo}
              width="30"
              height="30"
              className="d-inline-block align-top"
            />
          </Navbar.Brand>
          <Nav className="mr-auto">
            {links.map((key, i) => (
              <Nav.Link
                key={i}
                href={`${key.stem}${key.params ? key.params : ""}`}
              >
                <HeaderLink stem={key.stem} displayText={key.displayText} />
              </Nav.Link>
            ))}
          </Nav>
          {/* {isDesktop && <SearchForm maxWidth={200} excludeButton={true} />} */}
        </Navbar>
      </Headroom>
    </HeaderRestrictor>
  );
};
