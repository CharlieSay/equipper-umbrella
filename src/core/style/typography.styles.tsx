import styled from 'styled-components'

// H1
export const H1HeroTitle = styled.h1`
  font-size: 2.2rem;
  font-weight: 600;
  color: ${(props) => props.theme.black};
`
export const H1HeroTitleLightRed = styled(H1HeroTitle)`
  color: ${(props) => props.theme.lightRed};
`

export const H1HeroTitlePurple = styled(H1HeroTitle)`
  color: ${(props) => props.theme.purple};
`

// H2

export const H2Title = styled.h2`
  font-size: 1.5rem;
  font-weight: 600;
  color: ${(props) => props.theme.grey};
`
export const H2TitleLightRed = styled(H2Title)`
  color: ${(props) => props.theme.lightRed};
`

export const H2TitlePurple = styled(H2Title)`
  color: ${(props) => props.theme.purple};
`

// SUBTITLE

export const SubTitle = styled('span')<{ primary: boolean }>`
  font-size: 0.9rem;
  font-weight: 400;
  color: ${(props) =>
    props.primary ? props.theme.darkBlue : props.theme.gray};
`

// A

export const ALinkSmall = styled('a')<{ primary: boolean }>`
  color: ${(props) =>
    props.primary ? props.theme.darkBlue : props.theme.darkRed};
  font-weight: bold;
  &:hover {
    color: ${(props) =>
      props.primary ? props.theme.lightRed : props.theme.purple};
  }
`

// SPAN

export const SpanBold = styled.span`
  color: ${(props) => props.theme.grey};
  font-weight: bold;
`

// P

export const PNormal = styled.p`
  color: ${(props) => props.theme.darkBlue};
  font-size: 1em;
  font-weight: normal;
`

export const PBold = styled.p`
  color: ${(props) => props.theme.darkBlue};
  font-size: 0.9em;
  font-weight: bold;
`

export const PBoldPurple = styled.p`
  color: ${(props) => props.theme.purple};
  font-size: 0.9em;
  font-weight: bold;
`

export const PWhite = styled.p`
  color: ${(props) => props.theme.white};
  font-size: 11px;
  font-weight: normal;
`

export const Small = styled.small`
  color: ${(props) => props.theme.darkGrey};
  font-size: 0.7em;
`
