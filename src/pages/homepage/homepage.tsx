import React from "react";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";

import InfluencerGroup from "../../core/components/popular-group/influencer-group";
import popularInfluecers from "../../core/data/homepage-popular-data.json";

const HomePage = () => {
  return (
    <div className="container--constrained">
      <div
        style={{
          display: `flex`,
          justifyContent: `center`,
          padding: `20px`,
          flexDirection: `column`,
          textAlign: `center`,
        }}
      >
        <h3
          style={{
            color: `#de354c`,
            fontSize: `2rem`,
            lineHeight: `1.1`,
            fontWeight: 600,
          }}
        >
          So who is your favourite influencer?
        </h3>
        <span style={{ fontSize: `0.9rem` }}>
          Just pop in their name and we will find it.
        </span>
        <Form
          inline
          onSubmit={() => console.log("sure")}
          style={{ width: `100%`, display: `inline` }}
        >
          <div style={{ marginTop: `8px` }}>
            <FormControl
              type="text"
              placeholder="Jake Paul, KSI, Lisa Korelli..."
              style={{ maxWidth: `600px` }}
              onChange={(event) =>
                localStorage.setItem("searchQuery", (event.target as any).value)
              }
            />
            <Button variant="red" type="submit">
              Search
            </Button>
          </div>
        </Form>
      </div>
      <InfluencerGroup
        groupTitle={"Popular Influencers"}
        groupSubTitle={
          "Our most popular influencers, and all the equipment they use."
        }
        popularInfluencers={popularInfluecers}
      />
    </div>
  );
};

export default HomePage;
