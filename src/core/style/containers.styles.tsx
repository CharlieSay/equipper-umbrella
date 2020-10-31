import styled from "styled-components";

export const Container = styled.div`
  display: block;
  margin: 0 0 72px;
  max-width: auto;
  position: relative;
  padding-top: 16px;
  padding-bottom: 16px;
`;

export const ContainerConstrained = styled(Container)`
  margin: 0 auto 72px;
  padding: 0 20px 0 20px;
  max-width: 1224px;

  @media (min-width: 640px) {
    margin: 0 auto 48px;
  }

  @media (min-width: (360px) + (32px)) {
    margin: 0 auto 48px;
  }
`;

export const ContainerFixedWide = styled(Container)`
  margin: 0 auto 72px;
  width: 1224px;
`;

export const BaseUnitTopBottomPadding = styled.div`
  padding-top: 8px;
  padding-bottom: 8px;
`;

export const Flex = styled.div`
  display: flex;
`;
