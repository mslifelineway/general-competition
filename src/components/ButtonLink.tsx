import { FC } from "react";
import { TextIconLinkProps } from "../interfaces";

export const ButtonLink: FC<TextIconLinkProps> = ({
  href,
  text,
  icon,
  onClick,
}) => {
  const location = "/dashboard";

  return (
    <div className="buttonLink">
      {href ? (
        <a
          href={href}
          className={`btn u-full-width u-text-align-left ${
            location === href ? "btn--active" : ""
          }`}
        >
          {icon && <span className="btn__icon">{icon}</span>}
          {text && <span className="btn__text">{text}</span>}
        </a>
      ) : (
        <button
          className={`btn u-full-width u-text-align-left ${
            location === href ? "btn--active" : ""
          }`}
          onClick={onClick}
        >
          {icon && <span className="btn__icon">{icon}</span>}
          {text && <span className="btn__text">{text}</span>}
        </button>
      )}
    </div>
  );
};
