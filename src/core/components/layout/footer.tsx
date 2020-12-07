import React from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import styled from "styled-components";
import packageJson from "../../../../package.json";
import { ContainerConstrained } from "../../style/containers.styles";
import { SmallBold } from "../../style/typography.styles";
import "./footer.scss";
import { FooterContainerFlexOnMobile, FooterRoot } from "./footer.styles";
import { HeaderFooterProps } from "./header";

const FooterEmailSmall = styled.span`
  color: ${(props) => props.theme.white};
  font-weight: 400;
`;

const FooterEmailTextType = styled.span`
  color: ${(props) => props.theme.white};
  font-weight: 700;
  font-size: 2em;
`;

export const Footer = (links: HeaderFooterProps) => {
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
                <SmallBold>{` ${packageJson.name} (${packageJson.version})`}</SmallBold>
              </Row>
            </Col>
            {links.links.map((link, i) => (
              <Col key={i}>
                <ul>
                  <li>
                    <h5>
                      <a href={link.stem}>
                        <span className="footer-link">{link.displayText}</span>
                      </a>
                    </h5>
                  </li>
                  {link.subHeaders &&
                    link.subHeaders.map((subLinks, i) => (
                      <li key={i}>
                        <h6>
                          <a href={subLinks.stem}>
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
