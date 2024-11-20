import React from "react";
import HomeProfileCard from "../../HomeProfileCard";
import RecentCard from "../../RecentCard";

function LeftCard() {
  return (
    <>
      {" "}
      <div>
        <HomeProfileCard />
        <RecentCard />
      </div>
    </>
  );
}

export default LeftCard;
