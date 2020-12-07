import React from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import packageJson from "../../../../package.json";
import { ContainerConstrained } from "../../style/containers.styles";
import { SmallBold } from "../../style/typography.styles";
import {
  FooterColumn,
  FooterContainerFlexOnMobile,
  FooterEmailSmall,
  FooterEmailTextType,
  FooterHeadLink,
  FooterRoot,
  FooterSubLink,
  FooterUL,
} from "./footer.styles";
import { HeaderFooterProps } from "./header";
import "./footer.scss";

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
              <FooterColumn key={i}>
                <FooterUL>
                  <li>
                    <FooterHeadLink href={link.stem}>
                      {link.displayText}
                    </FooterHeadLink>
                  </li>
                </FooterUL>
                {link.subHeaders &&
                  link.subHeaders.map((subLinks, i) => (
                    <FooterUL key={i}>
                      <li>
                        <FooterSubLink href={subLinks.stem}>
                          {subLinks.displayText}
                        </FooterSubLink>
                      </li>
                    </FooterUL>
                  ))}
              </FooterColumn>
            ))}
          </Row>
        </FooterContainerFlexOnMobile>
      </ContainerConstrained>
    </FooterRoot>
  );
};
