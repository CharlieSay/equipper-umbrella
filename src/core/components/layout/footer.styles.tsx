import styled from "styled-components";

export const FooterRoot = styled.footer`
  border-top: 1px solid ${(props) => props.theme.white} !important;
  box-sizing: border-box;
  background-color: ${(props) => props.theme.gray};
  padding-top: 32px !important;
  box-shadow: 0 50vh 0 50vh ${(props) => props.theme.gray};
`;
