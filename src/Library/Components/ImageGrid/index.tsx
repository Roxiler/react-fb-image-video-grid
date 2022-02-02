import React, { ReactElement } from "react";
import { clsx } from "../../Utilis/clsx";
import classes from "./styles.module.css";

interface Props {
  children: JSX.Element | JSX.Element[];
  className?: string;
  style?: object;
}

const ImageGrid = ({ children, className = "", style = {} }: Props) => {
  const numberOfImages = Array.isArray(children) ? children.length : 1;

  return (
    <div
      className={clsx(
        classes.grid_wrapper,
        classes[`grid_wrapper_${numberOfImages}_img`],
        className
      )}
      style={style}
    >
      {React.Children.map(children, (child, i) =>
        React.cloneElement(child as ReactElement, {
          ...child.props,
          className: ` ${classes.img} ${
            classes[`img_${numberOfImages}_${i + 1}`]
          } ${child.props.className || ""}`,
        })
      )}
    </div>
  );
};

export default ImageGrid;
