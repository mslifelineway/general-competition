import { FC } from "react";
import { Link } from "react-router-dom";
import { TextIconLinkProps } from "../interfaces";

export const ButtonLink: FC<TextIconLinkProps> = ({
  modifierClassName = "button",
  href,
  text,
  icon,
  onClick,
}) => {
  const className = `btn u-full-width u-text-align-left ${
    modifierClassName ? `btn--${modifierClassName}` : ""
  }`;

  const children = (
    <>
      {icon && <span className="btn__icon">{icon}</span>}
      {text && <span className="btn__text">{text}</span>}
    </>
  );

  return (
    <div className="buttonLink">
      {href ? (
        <Link to={href} className={className}>
          {children}
        </Link>
      ) : (
        <button onClick={onClick} className={className}>
          {children}
        </button>
      )}
    </div>
  );
};
