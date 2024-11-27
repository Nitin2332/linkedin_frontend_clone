import React from "react";
import TrendingCard from "../../TrendingCard";
import PromotionsCard from "../../PromotionsCard";

function RightCard() {
  return (
    <>
      {" "}
      <div>
      <TrendingCard />
      <div className="sticky top-20">
      <PromotionsCard/>
      </div>
      </div>
    </>
  );
}

export default RightCard;
