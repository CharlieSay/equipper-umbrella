import styled from "styled-components";

export const HeroTitle = styled.h1`
  color: ${(props) => props.theme.lightRed};
  font-size: 2.2rem;
  line-height: 1.1;
  font-weight: 600;
`;

export const HeroTitleGray = styled(HeroTitle)`
  color: ${(props) => props.theme.gray};
`;

export const SectionH2 = styled.h1`
  font-size: 1.5em;
  font-weight: 600;
`;

export const SectionH2Red = styled.h1`
  font-size: 1.5em;
  font-weight: 600;
  color: ${(props) => props.theme.lightRed};
`;

export const SubTitle = styled.span`
  font-size: 0.9rem;
  line-height: 1.1;
  font-weight: 400;
`;

export const ALinkSmallGray = styled.a`
  color: ${(props) => props.theme.gray};
  font-weight: bold;
`;
