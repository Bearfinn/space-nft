import Radar from "components/Explore/Radar";
import React from "react";

const ExplorePage = () => {

  const handleObjectiveClick = (distance: number) => {
    console.log(distance)
  }

  return (
    <>
      <Radar onObjectiveClick={handleObjectiveClick} />
    </>
  );
};

export default ExplorePage