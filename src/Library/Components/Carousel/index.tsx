import React from "react";
import Modal from "react-modal";
import { clsx } from "../../Utilis/clsx";
import classes from "./styles.module.css";

type CarauselType = {
  images: JSX.Element[];
  initialImageIndex: number;
  isOpen: boolean;
  onClose: any;
};

const Carausel = ({
  images,
  initialImageIndex,
  isOpen,
  onClose,
}: CarauselType) => {
  const [currentImageIndex, setCurrentImageIndex] = React.useState(
    initialImageIndex
  );

  const memoizedImages = React.useMemo(() => images, [images]);
  const handleNext = React.useCallback(() => {
    setCurrentImageIndex((prevImageIndex) =>
      prevImageIndex === memoizedImages.length - 1 ? 0 : prevImageIndex + 1
    );
  }, [memoizedImages]);

  const handlePrevious = React.useCallback(
    () =>
      setCurrentImageIndex((prevImgIndex) =>
        prevImgIndex === 0 ? memoizedImages.length - 1 : prevImgIndex - 1
      ),
    [memoizedImages]
  );

  React.useEffect(() => {
    document.addEventListener("keydown", (key) => {
      if (key.key === "ArrowRight") {
        handleNext();
      } else if (key.key === "ArrowLeft") {
        handlePrevious();
      }
    });

    return () => {
      document.removeEventListener("keydown", (key) => {
        if (key.key === "ArrowRight") {
          handleNext();
        } else if (key.key === "ArrowLeft") {
          handlePrevious();
        }
      });
    };
  }, [handleNext, handlePrevious]);

  const currentImage = images[currentImageIndex];

  return (
    <Modal
      ariaHideApp={false}
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Example Modal"
    >
      <div className={classes.modal_wrap}>
        <span onClick={handlePrevious}>P</span>
        {React.cloneElement(currentImage, {
          className: clsx(classes.img, currentImage.props.className || ""),
        })}
        <span onClick={handleNext}>N</span>
      </div>
    </Modal>
  );
};

export default Carausel;
