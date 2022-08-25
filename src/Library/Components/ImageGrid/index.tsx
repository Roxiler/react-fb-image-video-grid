import React, { ReactElement, useEffect, useState } from 'react';
import { clsx } from '../../Utilis/clsx';
import Carausel from '../Carousel';
import './styles.css';

interface Props {
  children: JSX.Element | JSX.Element[];
  className?: string;
  showModal?: boolean;
  smart?: boolean;
}

const ImageGrid = ({
  children: elements,
  showModal = true,
  className = '',
  smart = false,
}: Props) => {
  const [children, setChildren] = useState(elements);

  const numberOfImages = Array.isArray(children) ? children.length : 1;

  const [selectedImageIndex, setSelectedImageIndex] = React.useState<number>(0);
  const [isOpenCarausel, setIsOpenCarausel] = React.useState(false);

  const handleImageClick = (imageIndex: number) => {
    setIsOpenCarausel(true);
    return imageIndex;
  };

  const handleCloseCarausel = () => {
    setSelectedImageIndex(0);
    setIsOpenCarausel(false);
  };
  // const ref = useRef(new Array(numberOfImages).fill({}));
  const [images, setImages] = useState<
    Array<{ element: JSX.Element; dimensions: DOMRect }>
  >([]);

  useEffect(() => {
    if (images.length === numberOfImages && smart) {
      setChildren(
        images
          .filter((ele) => ele.element)
          .sort(
            (a, b) =>
              Math.abs(a.dimensions.right - a.dimensions.left) -
              Math.abs(b.dimensions.right - b.dimensions.left)
          )
          .map(({ element }) => element as unknown as JSX.Element)
      );
    }
  }, [images]);

  if (numberOfImages < 5) {
    return (
      <>
        {smart &&
          React.Children.map(children, (child) =>
            React.cloneElement(child, {
              ref: (element: HTMLElement) => {
                if (images.length >= numberOfImages) return;
                if (!element) return;
                setImages((prev) => [
                  ...prev,
                  {
                    element: child,
                    dimensions: element?.getBoundingClientRect() || {},
                  },
                ]);
              },
              style: {
                visibility: 'hidden',
                position: 'absolute',
              },
            })
          )}
        {typeof showModal === 'boolean' && showModal && (
          <Carausel
            key={String(isOpenCarausel)}
            isOpen={isOpenCarausel}
            images={
              numberOfImages === 1
                ? [children as JSX.Element]
                : (children as JSX.Element[])
            }
            initialImageIndex={selectedImageIndex}
            onClose={handleCloseCarausel}
          />
        )}

        <div
          className={clsx(
            'grid_wrapper',
            `grid_wrapper_${numberOfImages}_img`,
            className
          )}
        >
          {React.Children.map(children, (child, i) => {
            const imgCount = i + 1;
            return React.cloneElement(child as ReactElement, {
              ...child.props,
              className: ` ${'img'} ${`img_${numberOfImages}_${imgCount}`} ${
                child.props?.className || ''
              }`,
              onClick: () => {
                child.props.onClick?.();
                setSelectedImageIndex(handleImageClick(i));
              },
            });
          })}
        </div>
      </>
    );
  } else {
    const firstRow = (children as JSX.Element[]).filter((_, i) => i < 2);
    const firstRowImgCount = firstRow.length;
    const secondRow = (children as JSX.Element[]).filter(
      (_, i) => i >= 2 && i <= 4
    );
    const secondRowImgCount = secondRow.length;

    return (
      <>
        {smart &&
          React.Children.map(children, (child) =>
            React.cloneElement(child, {
              ref: (element: HTMLElement) => {
                if (images.length >= numberOfImages) return;
                if (!element) return;
                setImages((prev) => [
                  ...prev,
                  {
                    element: child,
                    dimensions: element?.getBoundingClientRect() || {},
                  },
                ]);
              },
              style: {
                visibility: 'hidden',
                position: 'absolute',
              },
            })
          )}
        {typeof showModal === 'boolean' && showModal && (
          <Carausel
            key={String(isOpenCarausel)}
            isOpen={isOpenCarausel}
            initialImageIndex={selectedImageIndex}
            images={
              numberOfImages === 1
                ? [children as JSX.Element]
                : (children as JSX.Element[])
            }
            onClose={handleCloseCarausel}
          />
        )}

        <div className={clsx('sub_grid_wrapper', className)}>
          <div
            className={clsx(
              'sub_grid_wrapper_first_row',
              `grid_wrapper_${firstRow.length}_img`
            )}
          >
            {React.Children.map(firstRow, (child, i) => {
              const imgCount = i + 1;
              return React.cloneElement(child as ReactElement, {
                ...child.props,
                className: ` ${'img'} ${`img_${firstRowImgCount}_${imgCount}`} ${
                  child.props?.className || ''
                }`,
                onClick: () => {
                  child.props.onClick?.();
                  setSelectedImageIndex(handleImageClick(i));
                },
              });
            })}
          </div>
          <div
            className={clsx(
              'sub_grid_wrapper_second_row',
              `sub_grid_wrapper_${secondRow.length}_img`
            )}
          >
            {React.Children.map(secondRow, (child, i) => {
              const imgCount = i + 1;

              if (numberOfImages > 5 && imgCount === 3) {
                return (
                  <div
                    className={clsx(
                      'img',
                      `sub_img_${secondRowImgCount}_${imgCount}`,
                      child.props?.className || '',
                      'show_more_img'
                    )}
                    onClick={() => setSelectedImageIndex(handleImageClick(0))}
                  >
                    {React.cloneElement(child as ReactElement, {
                      ...child.props,
                      className: ` ${'img'} ${`sub_img_${secondRowImgCount}_${imgCount}`} ${
                        child.props?.className || ''
                      }`,
                      onClick: () => {
                        child.props.onClick?.();
                        setSelectedImageIndex(handleImageClick(i + 2));
                      },
                    })}
                    <div className={'show_more_text'}>
                      {' '}
                      + {numberOfImages - 5}{' '}
                    </div>
                  </div>
                );
              }

              return React.cloneElement(child as ReactElement, {
                ...child.props,
                className: ` ${'img'} ${`sub_img_${secondRowImgCount}_${imgCount}`} ${
                  child.props?.className || ''
                }`,
                onClick: () => {
                  child.props.onClick?.();
                  setSelectedImageIndex(handleImageClick(i + 2));
                },
              });
            })}
          </div>
        </div>
      </>
    );
  }
};

export default ImageGrid;
