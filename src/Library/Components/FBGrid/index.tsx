import React, { ReactElement } from "react";
import { clsx } from "../../Utilis/clsx";
import classes from "./styles.module.css";

interface Props {
  children: JSX.Element | JSX.Element[];
  className?: string;
}

const ImageGrid = ({ children, className = "" }: Props) => {
  const numberOfImages = Array.isArray(children) ? children.length : 1;

  if (numberOfImages < 5) {
    return (
      <div
        className={clsx(
          classes.grid_wrapper,
          classes[`grid_wrapper_${numberOfImages}_img`],
          className
        )}
      >
        {React.Children.map(children, (child, i) => {
          const imgCount = i + 1;
          return React.cloneElement(child as ReactElement, {
            ...child.props,
            className: ` ${classes.img} ${
              classes[`img_${numberOfImages}_${imgCount}`]
            } ${child.props?.className || ""}`,
          });
        })}
      </div>
    );
  } else {
    const firstRow = (children as JSX.Element[]).filter((_, i) => i < 2);
    const firstRowImgCount = firstRow.length;
    const secondRow = (children as JSX.Element[]).filter((_, i) => i >= 2);
    const secondRowImgCount = secondRow.length;

    return (
      <div className={clsx(classes.sub_grid_wrapper, className)}>
        <div
          className={clsx(
            classes.sub_grid_wrapper_first_row,
            classes[`grid_wrapper_${firstRow.length}_img`]
          )}
        >
          {React.Children.map(firstRow, (child, i) => {
            const imgCount = i + 1;
            return React.cloneElement(child as ReactElement, {
              ...child.props,
              className: ` ${classes.img} ${
                classes[`img_${firstRowImgCount}_${imgCount}`]
              } ${child.props?.className || ""}`,
            });
          })}
        </div>
        <div
          className={clsx(
            classes.sub_grid_wrapper_second_row,
            classes[`sub_grid_wrapper_${secondRow.length}_img`]
          )}
        >
          {React.Children.map(secondRow, (child, i) => {
            const imgCount = i + 1;
            return React.cloneElement(child as ReactElement, {
              ...child.props,
              className: ` ${classes.img} ${
                classes[`sub_img_${secondRowImgCount}_${imgCount}`]
              } ${child.props?.className || ""}`,
            });
          })}
        </div>
      </div>
    );
  }
};

export default ImageGrid;
