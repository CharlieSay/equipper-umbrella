import React from "react";
import { HeaderFooterLinks } from "./header";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import "./footer.scss";

export const Footer = (links: HeaderFooterLinks) => {
  return (
    <footer className="footer-root">
      <div className="container--constrained">
        <div className="footer-spacing">
          <Row>
            <Col>
              <h3>Equippr</h3>
            </Col>
            {links.links.map((link, i) => (
              <Col key={i}>
                <ul>
                  <li>
                    <h5>
                      <a href={link.url}>{link.displayText}</a>
                    </h5>
                  </li>
                  {link.subHeaders &&
                    link.subHeaders.map((subLinks, i) => (
                      <li key={i}>
                        <h6>
                          <a href={subLinks.url}>{subLinks.displayText}</a>
                        </h6>
                      </li>
                    ))}
                </ul>
              </Col>
            ))}
          </Row>
        </div>
      </div>
    </footer>
  );
};
