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
    //eslint-disable-next-line
  }, [initialImageIndex]);

  const currentImage = images[currentImageIndex];

  return (
    <Modal
      ariaHideApp={false}
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Example Modal"
    >
      <div className={classes.modal_wrap}>
        <span
          onClick={() =>
            setCurrentImageIndex(
              currentImageIndex === 0
                ? images.length - 1
                : currentImageIndex - 1
            )
          }
        >
          P
        </span>
        {React.cloneElement(currentImage, {
          className: clsx(classes.img, currentImage.props.className || ""),
        })}
        <span
          onClick={() =>
            setCurrentImageIndex(
              currentImageIndex === images.length - 1
                ? 0
                : currentImageIndex + 1
            )
          }
        >
          N
        </span>
      </div>
    </Modal>
  );
};

export default Carausel;
