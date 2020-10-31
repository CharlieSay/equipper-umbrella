import React from "react";
import { HeaderFooterProps } from "./header";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {
  FooterRoot,
  FooterContainerFlexOnMobile,
  FooterColumn,
} from "./footer.styles";
import { ContainerConstrained } from "../../style/containers.styles";
import "./footer.scss";

export const Footer = (links: HeaderFooterProps) => {
  return (
    <FooterRoot id="footer">
      <ContainerConstrained>
        <FooterContainerFlexOnMobile>
          <Row noGutters>
            <Col>
              <Row>
                <h3 className="footer-equippr">Equippr</h3>
              </Row>
              <Row>
                <span className="footer-email-small">hello@equippr.io</span>
              </Row>
            </Col>
            {links.links.map((link, i) => (
              <Col key={i}>
                <ul>
                  <li>
                    <h5>
                      <a href={link.url}>
                        <span className="footer-link">{link.displayText}</span>
                      </a>
                    </h5>
                  </li>
                  {link.subHeaders &&
                    link.subHeaders.map((subLinks, i) => (
                      <li key={i}>
                        <h6>
                          <a href={subLinks.url}>
                            <span className="footer-sub-link">
                              {subLinks.displayText}
                            </span>
                          </a>
                        </h6>
                      </li>
                    ))}
                </ul>
              </Col>
            ))}
          </Row>
        </FooterContainerFlexOnMobile>
      </ContainerConstrained>
    </FooterRoot>
  );
};
