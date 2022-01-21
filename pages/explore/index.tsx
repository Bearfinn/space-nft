import ExploreCard from "components/Explore/ExploreCard";
import React, { useState } from "react";

const ExplorePage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleObjectiveClick = (distance: number) => {
    console.log(distance);
    setIsOpen(true);
  };

  return (
    <div className="container mx-auto max-w-4xl">
      <div className="text-4xl font-mono mt-8">Explore</div>
      {[1, 2, 3, 4, 5].map((distance) => {
        return <ExploreCard key={distance} />;
      })}
    </div>
  );
};

export default ExplorePage;
