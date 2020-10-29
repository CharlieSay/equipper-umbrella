import React from "react";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Headroom from "react-headroom";
import Logo from "../../../assets/logo.svg";

import "./header.scss";

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

export const DesktopHeader = (links: HeaderFooterProps) => {
  return (
    <Headroom>
      <Navbar bg="primary" variant="dark">
        <div className="container--fixed-wide header-footer-restrictor">
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
                <span className="red-header-text">{key.displayText}</span>
              </Nav.Link>
            ))}
          </Nav>
          {/* {links.isDesktop && (
            <Form onSubmit={() => console.log("sure")} inline>
              <FormControl
                type="text"
                placeholder="Search"
                className="mr-sm-2"
                onChange={(event) =>
                  localStorage.setItem(
                    "searchQuery",
                    (event.target as any).value
                  )
                }
              />
              <Button variant="red" type="submit">
                Search
              </Button>
            </Form>
          )} */}
        </div>
      </Navbar>
    </Headroom>
  );
};
