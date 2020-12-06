import styled from "styled-components";

export const FooterRoot = styled.footer`
  border-top: 1px solid ${(props) => props.theme.white} !important;
  box-sizing: border-box;
  background-color: ${(props) => props.theme.darkBlue};
  padding-top: 32px !important;
  box-shadow: 0 50vh 0 50vh ${(props) => props.theme.darkBlue};
`;

export const FooterContainerFlexOnMobile = styled.div`
  @media (max-width: 860px) {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
  }
`;

export const FooterColumn = styled.div`
  margin: 0 8px 0 8px;
`;
