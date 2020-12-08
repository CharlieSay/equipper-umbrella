import styled from "styled-components";

export const HeroTitle = styled.h1`
  color: ${(props) => props.theme.lightRed};
  font-size: 2.2rem;
  line-height: 1.1;
  font-weight: 600;
`;

export const HeroTitleGray = styled(HeroTitle)`
  color: ${(props) => props.theme.darkBlue};
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

export const SubTitle = styled("span")<{ primary: boolean }>`
  font-size: 0.9rem;
  line-height: 1.1;
  font-weight: 400;
  color: ${(props) =>
    props.primary ? props.theme.darkBlue : props.theme.gray};
`;

export const ALinkSmallGray = styled.a`
  color: ${(props) => props.theme.darkBlue};
  font-weight: bold;
`;

export const SmallBold = styled.small`
  color: ${(props) => props.theme.white};
  font-weight: normal;
`;

export const SmallBoldButNot = styled.span`
  color: ${(props) => props.theme.darkBlue};
  font-weight: bold;
`;
