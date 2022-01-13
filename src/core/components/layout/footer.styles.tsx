import styled from 'styled-components'

export const FooterRoot = styled.footer`
  border-top: 1px solid ${(props) => props.theme.white} !important;
  box-sizing: border-box;
  background-color: ${(props) => props.theme.darkBlue};
  padding-top: 32px !important;
  box-shadow: 0 50vh 0 50vh ${(props) => props.theme.darkBlue};
`

export const FooterContainerFlexOnMobile = styled.div`
  @media (max-width: 860px) {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
  }
`

export const FooterColumn = styled.div`
  margin-left: 0;
  margin-right: 0;
  flex-basis: 0;
  flex-grow: 1;
  max-width: 100%;
  @media (max-width: 575px) {
    margin-top: 16px;
    flex-basis: initial;
    flex-grow: initial;
    width: 100%;
  }
`

export const FooterEmailSmall = styled.span`
  color: ${(props) => props.theme.white};
  font-weight: 400;
`

export const FooterEmailTextType = styled.span`
  color: ${(props) => props.theme.white};
  font-weight: 700;
  font-size: 2em;
`

export const FooterSubLink = styled.a`
  color: ${(props) => props.theme.white};
  font-weight: 400;
  transition: ${(props) => props.theme.defaultTransitionLength};

  &:hover {
    text-decoration: none;
    color: ${(props) => props.theme.lightRed};
  }
`

export const FooterHeadLink = styled.a`
  color: ${(props) => props.theme.white};
  font-weight: 600;
  font-size: 20px;
  transition: ${(props) => props.theme.defaultTransitionLength};

  &:hover {
    text-decoration: none;
    color: ${(props) => props.theme.lightRed};
  }
`

export const FooterUL = styled.ul`
  margin-bottom: 0;
`
