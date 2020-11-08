import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Headroom from "react-headroom";

import Logo from "../../../assets/logo.svg";

import "./header.scss";
import styled from "styled-components";

export interface HeaderFooterProps {
  links: Array<Link>;
  isDesktop?: boolean;
}

interface Link {
  displayText: string;
  url: string;
  isActive?: boolean;
  isDivider?: boolean;
  subHeaders?: Link[];
}

const HeaderRestrictor = styled.header`
  margin: 0 auto;
  max-width: 1272px;
  padding: 8px 4px;
  position: relative;
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const HeaderLink = styled.span`
  color: ${(props) => props.theme.lightRed};
  font-weight: 600;

  &:hover {
    color: ${(props) => props.theme.darkRed};
  }
`;

const VisuallyHidden = styled.a`
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  height: 1px;
  overflow: hidden;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`;

export const DesktopHeader = (links: HeaderFooterProps) => {
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
              src={Logo}
              width="30"
              height="30"
              className="d-inline-block align-top"
            />
          </Navbar.Brand>
          <Nav className="mr-auto">
            {links.links.map((key, i) => (
              <Nav.Link key={i} href={key.url}>
                <HeaderLink>{key.displayText}</HeaderLink>
              </Nav.Link>
            ))}
          </Nav>
        </Navbar>
      </Headroom>
    </HeaderRestrictor>
  );
};
