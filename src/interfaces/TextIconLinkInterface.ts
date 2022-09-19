import { MouseEventHandler } from "react";

export interface TextIconLinkProps {
  href?: string | undefined;
  text?: string | undefined;
  icon?: React.ReactElement | undefined;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}
