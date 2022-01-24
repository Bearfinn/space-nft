import Button from "components/base/Button";
import ExploreCard from "components/Explore/ExploreCard";
import { useExplore } from "hooks/useExplore";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import dayjs from "utils/dayjs";
import { generateScientificNames } from "utils/generator";

const planets = generateScientificNames(5)

const ExplorePage = () => {
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
      {explorationStatus?.fleetOnExplore ? (
        <div className="grid grid-cols-12 bg-stone-900 border border-teal-300 my-8 rounded bg-opacity-75 items-center px-4 py-4">
          <div className="p-4 col-span-12 flex items-center justify-between">
            <div>
              <div className="text-stone-500">Exploring</div>
              <div className="text-2xl uppercase">{planets[explorationStatus?.currentExplorationDistance - 1]}</div>
            </div>

            <div className="flex gap-8">
              <div className="">
                <div className="text-stone-500 tracking-widest uppercase text-xs">
                  Distance
                </div>
                <div className="mt-1 font-mono">
                  {explorationStatus?.currentExplorationDistance} Lightyears
                </div>
              </div>
              {explorationStatus?.currentExplorationType > 0 && (
                <div className="">
                  <div className="text-stone-500 tracking-widest uppercase text-xs">
                    Exploration Type
                  </div>
                  <div className="mt-1 font-mono">
                    Type {explorationStatus?.currentExplorationType}
                  </div>
                </div>
              )}
            </div>

            {explorationStatus?.currentEncounterType > 0 && (
              <div className="mt-8">
                <div className="text-stone-500 tracking-widest uppercase text-xs">
                  Exploration Type
                </div>
                <div className="mt-1 font-mono">
                  Type {explorationStatus?.currentEncounterType}
                </div>
              </div>
            )}
          </div>

          <div className="col-span-12 grid grid-cols-12 border-t border-stone-500 h-60 items-center">
            <div className="col-span-6 text-center animate-pulse">
              <Image
                src="/assets/planet.png"
                width={256}
                height={256}
                alt="Planet"
              />
            </div>
            <div className="col-span-6">
              {explorationStatus?.currentMissionFailed && (
                <div className="text-red-500 text-center text-2xl border border-red-500 w-3/4 mx-auto p-4">
                  Mission failed
                </div>
              )}
              {isCompleted ? (
                <div className="flex justify-between bg-stone-900 border border-teal-300 my-8 rounded bg-opacity-75 items-center px-4 py-4">
                  <div>Your exploration has completed.</div>
                  <div>
                    <Button onClick={() => claimExploration()}>Claim</Button>
                  </div>
                </div>
              ) : (
                <div className="text-center w-full">
                  <div className="text-5xl font-mono">{timer}</div>
                  <div className="mt-4">until complete</div>
                </div>
              )}

              {explorationStatus?.damageTaken > 0 && (
                <div className="text-red-500">
                  Your ship has taken {explorationStatus.damageTaken} damage
                </div>
              )}
            </div>
          </div>
        </div>
      ) : (
        <>
          {[1, 2, 3, 4, 5].map((distance) => {
            return (
              <ExploreCard
                name={planets[distance - 1]}
                distance={distance}
                difficulty={getDifficulty(distance, power)}
                duration={getDuration(distance)}
                key={distance}
                onExplore={() => explore({ _distance: distance })}
              />
            );
          })}
        </>
      )}
    </div>
  );
};

export default ExplorePage;
