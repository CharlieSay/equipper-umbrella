import React from "react";
import Alert from "react-bootstrap/Alert";
import InfluencerGroup from "../../core/components/popular-group/influencer-group";
import popularInfluecers from "../../core/data/homepage-popular-data.json";

const HomePage = () => {
  return (
    <div className="container--constrained">
      <Alert variant={"purple"} style={{ marginTop: `16px` }}>
        Lets find out what your favourite influencers use!
      </Alert>
      <InfluencerGroup
        groupTitle={"Popular Influencers"}
        popularInfluencers={popularInfluecers}
      />
    </div>
  );
};

export default HomePage;
