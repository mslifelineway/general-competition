import { MouseEventHandler } from "react";

export interface TextIconLinkProps {
  modifierClassName?: string | undefined;
  href?: string | undefined;
  text?: string | undefined;
  icon?: React.ReactElement | undefined;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}
