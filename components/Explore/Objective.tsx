import React, { FunctionComponent } from "react";
import { motion } from "framer-motion";
import ObjectiveIcon from "../../public/assets/explore-objective.svg"

const iconMotion = {
  rest: { width: 20, height: 25, duration: 0.2, type: "tween" },
  hover: {
    width: 22,
    height: 27,
    transition: {
      duration: 0.2,
      type: "tween",
    },
  },
};

interface IconObjectiveProps {
  onClick: () => void;
}

export const IconObjective: FunctionComponent<IconObjectiveProps> = ({
  onClick,
}) => {
  const onClickIcon = () => {
    onClick();
  };

  return (
    <motion.svg
      onClick={onClickIcon}
      initial="rest"
      whileHover="hover"
      animate="rest"
      variants={iconMotion}
    >
      <ObjectiveIcon />
    </motion.svg>
  );
};

export default IconObjective;
