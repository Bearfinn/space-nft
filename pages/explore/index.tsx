import ExploreModal from "components/Explore/ExploreModal";
import Radar from "components/Explore/Radar";
import React, { useState } from "react";

const ExplorePage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleObjectiveClick = (distance: number) => {
    console.log(distance)
    setIsOpen(true)
  }

  return (
    <>
      <Radar onObjectiveClick={handleObjectiveClick} />
      <ExploreModal open={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
};

export default ExplorePage