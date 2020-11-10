import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import styled from "styled-components";
import InfluencerGroup from "../../core/components/popular-group/influencer-group";

import { HeroTitle, SubTitle } from "../../core/style/typography.styles";
import {
  ContainerConstrained,
  BaseUnitTopBottomPadding,
} from "../../core/style/containers.styles";

import popularInfluecers from "../../core/data/homepage-popular-data.json";

const HeroTextAligner = styled.div`
  display: flex;
  justify-content: center;
  padding: 20px;
  flex-direction: column;
  text-align: center;
`;

const getSearchQuery = () => {
  const queryItem = localStorage.getItem("searchQuery");
  const queryItemParsed = (queryItem && queryItem.toString()) || "";
  const sort = "relevance";
  return `?query=${encodeURIComponent(queryItemParsed)}&sort=${sort}`;
};

const HomePage = () => {
  const [toSearch, setToSearch] = useState(false);
  console.log("test me");
  console.log(
    process.env.REACT_APP_MONGO_DB_P
      ? process.env.REACT_APP_MONGO_DB_P
      : "there was none charles"
  );
  return (
    <ContainerConstrained>
      {toSearch ? <Redirect to={`/search${getSearchQuery()}`} /> : null}
      <HeroTextAligner>
        <HeroTitle>So who is your favourite influencer?</HeroTitle>
        <SubTitle>Just pop in their name and we will find it.</SubTitle>
        <Form
          inline
          onSubmit={() => setToSearch(true)}
          style={{ width: `100%`, display: `inline` }}
        >
          <BaseUnitTopBottomPadding>
            <FormControl
              type="text"
              placeholder="Jake Paul, KSI, Lisa Korelli..."
              style={{ maxWidth: `600px` }}
              onChange={(event) =>
                localStorage.setItem("searchQuery", event.target.value)
              }
            />
            <Button variant="red" type="submit" style={{ marginLeft: `8px` }}>
              Search
            </Button>
          </BaseUnitTopBottomPadding>
        </Form>
      </HeroTextAligner>
      <InfluencerGroup
        groupTitle={"Popular Influencers"}
        groupSubTitle={
          "The most popular influencers, and all the equipment they use."
        }
        popularInfluencers={popularInfluecers}
      />
    </ContainerConstrained>
  );
};

export default HomePage;
