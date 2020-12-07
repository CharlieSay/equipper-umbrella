import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Headroom from "react-headroom";
import styled from "styled-components";
import { useLocation } from "react-router-dom";

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

const HeaderRestrictor = styled.header`
  margin: 0 auto;
  max-width: 1272px;
  padding: 8px 4px;
  position: relative;
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  color: transparent;
`;

const HeaderLinkBase = styled.span`
  color: ${(props) => props.theme.lightRed};
  font-weight: 600;
  transition: 0.25s;
`;

const HeaderLinkStyled = styled(HeaderLinkBase)`
  &:hover {
    color: ${(props) => props.theme.darkRed};
  }
`;

const HeaderLinkActive = styled(HeaderLinkBase)`
  color: white;
  background-color: ${(props) => props.theme.lightRed};
  border-radius: 4px;
  padding: 2px 4px 2px 4px;
  text-decoration: underline;

  &:hover {
    color: ${(props) => props.theme.grey};
    padding: 2px 6px 2px 6px;
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
              <Nav.Link
                key={i}
                href={`${key.stem}${key.params ? key.params : ""}`}
              >
                <HeaderLink stem={key.stem} displayText={key.displayText} />
              </Nav.Link>
            ))}
          </Nav>
        </Navbar>
      </Headroom>
    </HeaderRestrictor>
  );
};
