import React, { createContext, FC } from "react";
import { IDrawerContext, IDrawerContextProps } from "../interfaces";

const DrawerContext = createContext<IDrawerContext | null>(null);

const DrawerContextProvider: FC<IDrawerContextProps> = ({ children }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const values: IDrawerContext = {
    isOpen,
    setIsOpen,
  };

  return (
    <DrawerContext.Provider value={values}>{children}</DrawerContext.Provider>
  );
};

export { DrawerContext, DrawerContextProvider };
