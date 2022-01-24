export enum ExplorationType {
  NOTHING = 0,
  FOUND_MINERAL = 1,
  ENCOUNTER = 2,
}

export enum EncounterType {
  ABANDONED_MINE = 0,
  AMBUSH = 1,
  SPACE_STORM = 2,
}

export const encounterMessages = [
  { type: EncounterType.AMBUSH, missionFailed: false, message: "We had an ambush and we prevailed! We got their minerals!" },
  { type: EncounterType.AMBUSH, missionFailed: true, message:   "We had an ambush and unfortunately lost the fight" },
  { type: EncounterType.SPACE_STORM, message: "We ventured into the unknown and encountered a storm. Although we got some damage, we were able to leave the place without any loss." },
  { type: EncounterType.ABANDONED_MINE, message: "The exploration showed its fruits. We found an abandoned mine and got minerals without any hassle." },
]
export const explorationMessages = [
  { type: ExplorationType.FOUND_MINERAL, missionFailed: true, message: "We found a great mineral source. It was a shame we didn’t have any miner ships to collect the riches." },
  { type: ExplorationType.FOUND_MINERAL, missionFailed: false, message: "We found a mineral source and mined it to the last bits. This caused the exploration to last a bit longer but it was worth it!" },
  { type: ExplorationType.NOTHING, message: "We ventured into the uncharted territories. We had nothing to discover at this location. Although this was a loss of time for us, it is an additional knowledge for our history." }
]
