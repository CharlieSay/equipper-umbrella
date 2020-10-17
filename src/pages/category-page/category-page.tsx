import React from "react";
import { useParams } from "react-router-dom";
import InfluencerGroup from "../../core/components/popular-group/influencer-group";
import categoryBeauty from "../../core/data/category-beauty.json";

const CategoryPage = () => {
  const { influencerCategory } = useParams();

  const influencerParsed =
    influencerCategory[0].toUpperCase() + influencerCategory.slice(1);

  return (
    <div className="container--constrained">
      <InfluencerGroup
        groupTitle={influencerParsed}
        popularInfluencers={categoryBeauty}
      />
    </div>
  );
};

export default CategoryPage;
