import React from "react";
import Modal from "react-modal";
import { clsx } from "../../Utilis/clsx";
import "./styles.css";

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
      <div className={"layout"}>
        <svg
          onClick={onClose}
          className={clsx("close_icon", "icon")}
          fill="#000000"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="24px"
          height="24px"
        >
          <path d="M 4.7070312 3.2929688 L 3.2929688 4.7070312 L 10.585938 12 L 3.2929688 19.292969 L 4.7070312 20.707031 L 12 13.414062 L 19.292969 20.707031 L 20.707031 19.292969 L 13.414062 12 L 20.707031 4.7070312 L 19.292969 3.2929688 L 12 10.585938 L 4.7070312 3.2929688 z" />
        </svg>
        <div className={"modal_wrap"}>
          <svg
            className={clsx("icon", "left_arrow")}
            onClick={handlePrevious}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
          >
            <path d="M7.293 4.707 14.586 12l-7.293 7.293 1.414 1.414L17.414 12 8.707 3.293 7.293 4.707z" />
          </svg>
          {React.cloneElement(currentImage, {
            className: clsx("img", currentImage.props.className || ""),
          })}

          <svg
            className={clsx("icon")}
            onClick={handleNext}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
          >
            <path d="M7.293 4.707 14.586 12l-7.293 7.293 1.414 1.414L17.414 12 8.707 3.293 7.293 4.707z" />
          </svg>
        </div>
      </div>
    </Modal>
  );
};

export default Carausel;
