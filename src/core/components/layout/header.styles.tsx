import styled from 'styled-components'

export const HeaderRestrictor = styled.header`
  margin: 0 auto;
  max-width: 1272px;
  padding: 8px 0 8px 0;
  position: relative;
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  background-color: transparent;
`

export const HeaderLinkBase = styled.span`
  color: ${(props) => props.theme.lightRed};
  font-weight: 600;
  transition: ${(props) => props.theme.defaultTransitionLength};
`

export const HeaderLinkStyled = styled(HeaderLinkBase)`
  &:hover {
    color: ${(props) => props.theme.darkRed};
  }
`

export const HeaderLinkActive = styled(HeaderLinkBase)`
  color: white;
  background-color: ${(props) => props.theme.lightRed};
  border-radius: 4px;
  padding: 2px 4px 2px 4px;
  text-decoration: underline;

  &:hover {
    color: ${(props) => props.theme.grey};
    padding: 2px 6px 2px 6px;
  }
`

export const VisuallyHidden = styled.a`
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  height: 1px;
  overflow: hidden;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`

export const MobileNavBackground = styled.div`
  background-color: ${(props) => props.theme.grey};
  transition: ${(props) => props.theme.defaultTransitionLength};
  padding: 16px 0 16px 0;
`

export const Divider = styled.div`
  margin-top: 10px;
  margin-bottom: 20px;
  border-top: 2px solid ${(props) => props.theme.white};
  width: 90%;
  margin-left: 3.5%;
`
