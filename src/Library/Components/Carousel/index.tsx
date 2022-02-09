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
    () => images.findIndex((_, i) => i === initialImageIndex) as number
  );

  React.useEffect(() => {
    setCurrentImageIndex(
      () => images.findIndex((_, i) => i === initialImageIndex) as number
    );

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
    //eslint-disable-next-line
  }, [initialImageIndex]);

  const currentImage = images[currentImageIndex];

  const handleNext = () =>
    setCurrentImageIndex((prevImageIndex) =>
      prevImageIndex === images.length - 1 ? 0 : prevImageIndex + 1
    );

  const handlePrevious = () =>
    setCurrentImageIndex((prevImgIndex) =>
      prevImgIndex === 0 ? images.length - 1 : prevImgIndex - 1
    );

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
