import React from "react";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Headroom from "react-headroom";

import "./header.scss";

export interface HeaderFooterLinks {
  links: Array<Link>;
}

interface Link {
  displayText: string;
  url: string;
  isActive?: boolean;
  isDivider?: boolean;
  subHeaders?: Link[];
}

export const DesktopHeader = (links: HeaderFooterLinks) => {
  return (
    <Headroom>
      <Navbar bg="primary" variant="dark">
        <div className="container--fixed-wide header-footer-restrictor">
          <Navbar.Brand href="/">Equippr</Navbar.Brand>
          <Nav className="mr-auto">
            {links.links.map((key, i) => (
              <Nav.Link key={i} href={key.url}>
                {key.displayText}
              </Nav.Link>
            ))}
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-light">Search</Button>
          </Form>
        </div>
      </Navbar>
    </Headroom>
  );
};
export const MobileHeader = (links: HeaderFooterLinks) => {
  return (
    <Headroom>
      <Navbar bg="primary" variant="dark">
        <Navbar.Brand href="#home">Navbar</Navbar.Brand>
        {links.links.map((key, i) => (
          <Nav.Link key={i} href={key.url}>
            <span className="mobile-header-link">{key.displayText}</span>
          </Nav.Link>
        ))}
      </Navbar>
    </Headroom>
  );
};
