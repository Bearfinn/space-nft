import { Children, createContext, FunctionComponent, useContext, useState } from "react";

const UpdateContext = createContext<{
  trigger: boolean;
  makeTrigger: () => void;
}>({
  trigger: false,
  makeTrigger: () => {},
});

export const UpdateProvider: FunctionComponent = ({ children }) => {
  const [trigger, setTrigger] = useState(false);

  const makeTrigger = () => {
    setTrigger((trigger) => !trigger)
  }

  return (
    <UpdateContext.Provider value={{ trigger, makeTrigger }}>
      {children}
    </UpdateContext.Provider>
  )
}

export const useTrigger = () => {
  const { trigger, makeTrigger } = useContext(UpdateContext);
  return { trigger, makeTrigger } 
};
