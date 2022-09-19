export interface IDrawerContextProps {
  children?: React.ReactElement;
}

export interface IDrawerContext {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}
