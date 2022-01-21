import Button from "components/base/Button";
import ExploreCard from "components/Explore/ExploreCard";
import { useExplore } from "hooks/useExplore";
import React, { useEffect, useMemo, useState } from "react";
import { generateScientificNames } from "utils/generator";
import dayjs from "utils/dayjs";

const ExplorePage = () => {
  const names = useMemo(() => generateScientificNames(5), []);

  const fleetPower: [number, number, number, number, number] = [0, 0, 0, 1, 0];
  const [, , , travelSpeed, power] = fleetPower;

  const getDifficulty = (distance: number, fleetPower: number) => {
    if (distance == 1 && fleetPower > 100) return "easy";
    if (distance == 2 && fleetPower > 1000) return " easy";
    if (distance == 1 && fleetPower <= 100) return " normal";
    if (distance == 2 && fleetPower <= 100) return " hard";
    if (distance == 2 && fleetPower > 100) return "normal";
    if (distance == 3 && fleetPower > 1000) return " normal";
    if (distance == 3 && fleetPower <= 1000) return "hard";
    if (distance == 3 && fleetPower <= 100) return "very hard";
    if (distance == 3 && fleetPower > 100) return "hard";
    if (distance == 4 && fleetPower > 1000) return "hard";
    if (distance == 4 && fleetPower <= 1000) return "very hard";
    if (distance == 5) return "very hard";
    return "";
  };

  const getDuration = (distance: number) => {
    const secondsPerDistance = 18000;
    return (distance * secondsPerDistance) / travelSpeed;
  };

  const { explorationStatus, explore, claimExploration } = useExplore();

  const [timer, setTimer] = useState<string | null>("");
  const [isCompleted, setIsCompleted] = useState(false);
  useEffect(() => {
    const timer = setInterval(() => {
      const remainingTime =
        explorationStatus &&
        dayjs.duration(
          dayjs(explorationStatus.exploreCompleteTime).diff(dayjs())
        );

      setIsCompleted(remainingTime ? remainingTime.seconds() < 0 : false);
      setTimer(remainingTime?.format("HH:mm:ss") || null);
    }, 1000);
    return () => clearInterval(timer);
  }, [explorationStatus]);

  return (
    <div className="container mx-auto max-w-4xl">
      <div className="text-4xl font-mono mt-8">Explore</div>
      {explorationStatus?.fleetOnExplore && (
        <div className="flex justify-between bg-stone-900 border border-teal-300 my-8 rounded bg-opacity-75 items-center px-4 py-4">
          <div>
            Exploring {explorationStatus?.currentExplorationDistance} Lightyears
            away
          </div>
          {explorationStatus?.currentExplorationType > 0 && (
            <div>
              Exploration type {explorationStatus.currentExplorationType}
            </div>
          )}
          {explorationStatus?.currentEncounterType > 0 && (
            <div>Encounter type {explorationStatus.currentEncounterType}</div>
          )}
          <div>{timer} until complete</div>
          {explorationStatus?.damageTaken > 0 && (
            <div>{explorationStatus.damageTaken} damage</div>
          )}
          {explorationStatus?.currentMissionFailed && <div>Mission failed</div>}
        </div>
      )}
      {isCompleted && (
        <div className="flex justify-between bg-stone-900 border border-teal-300 my-8 rounded bg-opacity-75 items-center px-4 py-4">
          <div>Your exploration has completed.</div>
          <div>
            <Button onClick={() => claimExploration()}>Claim</Button>
          </div>
        </div>
      )}
      {[1, 2, 3, 4, 5].map((distance) => {
        return (
          <ExploreCard
            name={names[distance - 1]}
            distance={distance}
            difficulty={getDifficulty(distance, power)}
            duration={getDuration(distance)}
            key={distance}
            onExplore={() => explore({ _distance: distance })}
          />
        );
      })}
    </div>
  );
};

export default ExplorePage;
