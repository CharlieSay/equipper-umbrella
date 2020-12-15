import React from 'react';
import styled from 'styled-components';
import InfluencerGroup from '../../core/components/popular-group/influencer-group';
import SearchForm from '../../core/components/search-form/search-form';
import { HeroTitle } from '../../core/style/typography.styles';
import { ContainerConstrained } from '../../core/style/containers.styles';

import popularInfluecers from '../../core/data/homepage-popular-data.json';
import { CardAsDiv } from '../../core/components/influencer-card/cards-styles';

const HeroTextAligner = styled.div`
  display: flex;
  justify-content: center;
  padding: 20px;
  flex-direction: column;
  text-align: center;
`;

const HomePage = () => {
  console.log(
    process.env.REACT_APP_MONGO_DB_P
      ? process.env.REACT_APP_MONGO_DB_P
      : 'No MongoDB VAR',
  );
  return (
    <ContainerConstrained>
      <CardAsDiv>
        <HeroTextAligner>
          <HeroTitle>So who is your favourite influencer?</HeroTitle>
          <SearchForm maxWidth={600} />
        </HeroTextAligner>
      </CardAsDiv>
      <InfluencerGroup
        groupTitle="Popular Influencers"
        groupSubTitle="The most popular influencers, and all the equipment they use."
        popularInfluencers={popularInfluecers}
      />
    </ContainerConstrained>
  );
};

export default HomePage;
