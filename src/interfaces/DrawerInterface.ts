import React from 'react';
export interface IDrawerContextProps {
  children?:React.ReactNode;
}

export interface IDrawerContext {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}
