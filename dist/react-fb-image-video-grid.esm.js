import React from 'react';
import Modal from 'react-modal';

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

var clsx = function clsx() {
  for (var _len = arguments.length, classes = new Array(_len), _key = 0; _key < _len; _key++) {
    classes[_key] = arguments[_key];
  }

  return classes.filter(Boolean).map(function (className) {
    return className.trim();
  }).join(" ");
};

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z = ".img {\n  height: 100%;\n  width: 100%;\n  overflow: hidden;\n}\n\n.modal_wrap {\n  display: flex;\n  align-items: center;\n  height: 90%;\n  width: 100%;\n  padding: 0.5rem 0;\n}\n\n.layout {\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n  height: 100%;\n  width: 100%;\n}\n\n.close_icon {\n  align-self: flex-end;\n}\n\n.icon {\n  cursor: pointer;\n  font-size: 1.5rem;\n}\n\n.left_arrow {\n  transform: rotate(180deg);\n}\n";
styleInject(css_248z);

var Carausel = function Carausel(_ref) {
  var images = _ref.images,
      initialImageIndex = _ref.initialImageIndex,
      isOpen = _ref.isOpen,
      onClose = _ref.onClose;

  var _React$useState = React.useState(initialImageIndex),
      currentImageIndex = _React$useState[0],
      setCurrentImageIndex = _React$useState[1];

  var memoizedImages = React.useMemo(function () {
    return images;
  }, [images]);
  var handleNext = React.useCallback(function () {
    setCurrentImageIndex(function (prevImageIndex) {
      return prevImageIndex === memoizedImages.length - 1 ? 0 : prevImageIndex + 1;
    });
  }, [memoizedImages]);
  var handlePrevious = React.useCallback(function () {
    return setCurrentImageIndex(function (prevImgIndex) {
      return prevImgIndex === 0 ? memoizedImages.length - 1 : prevImgIndex - 1;
    });
  }, [memoizedImages]);
  React.useEffect(function () {
    document.addEventListener("keydown", function (key) {
      if (key.key === "ArrowRight") {
        handleNext();
      } else if (key.key === "ArrowLeft") {
        handlePrevious();
      }
    });
    return function () {
      document.removeEventListener("keydown", function (key) {
        if (key.key === "ArrowRight") {
          handleNext();
        } else if (key.key === "ArrowLeft") {
          handlePrevious();
        }
      });
    };
  }, [handleNext, handlePrevious]);
  var currentImage = images[currentImageIndex];
  return React.createElement(Modal, {
    ariaHideApp: false,
    isOpen: isOpen,
    onRequestClose: onClose,
    contentLabel: "Example Modal"
  }, React.createElement("div", {
    className: "layout"
  }, React.createElement("svg", {
    onClick: onClose,
    className: clsx("close_icon", "icon"),
    fill: "#000000",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    width: "24px",
    height: "24px"
  }, React.createElement("path", {
    d: "M 4.7070312 3.2929688 L 3.2929688 4.7070312 L 10.585938 12 L 3.2929688 19.292969 L 4.7070312 20.707031 L 12 13.414062 L 19.292969 20.707031 L 20.707031 19.292969 L 13.414062 12 L 20.707031 4.7070312 L 19.292969 3.2929688 L 12 10.585938 L 4.7070312 3.2929688 z"
  })), React.createElement("div", {
    className: "modal_wrap"
  }, React.createElement("svg", {
    className: clsx("icon", "left_arrow"),
    onClick: handlePrevious,
    xmlns: "http://www.w3.org/2000/svg",
    width: "24",
    height: "24"
  }, React.createElement("path", {
    d: "M7.293 4.707 14.586 12l-7.293 7.293 1.414 1.414L17.414 12 8.707 3.293 7.293 4.707z"
  })), React.cloneElement(currentImage, {
    className: clsx("img", currentImage.props.className || "")
  }), React.createElement("svg", {
    className: clsx("icon"),
    onClick: handleNext,
    xmlns: "http://www.w3.org/2000/svg",
    width: "24",
    height: "24"
  }, React.createElement("path", {
    d: "M7.293 4.707 14.586 12l-7.293 7.293 1.414 1.414L17.414 12 8.707 3.293 7.293 4.707z"
  })))));
};

var css_248z$1 = ".sub_grid_wrapper {\n  width: 100%;\n  height: 100%;\n}\n\n.sub_grid_wrapper_first_row {\n  display: grid;\n  grid-auto-flow: row;\n  width: 100%;\n  height: 66.66%;\n  gap: 0.25rem;\n}\n.sub_grid_wrapper_second_row {\n  display: grid;\n  grid-auto-flow: row;\n  width: 100%;\n  height: 33.33%;\n  gap: 0.25rem;\n}\n\n.grid_wrapper {\n  display: grid;\n  grid-auto-flow: row;\n  width: 100%;\n  height: 100%;\n  gap: 0.25rem;\n}\n\n.grid_wrapper_1_img {\n  grid-template-columns: repeat(1, 1fr);\n}\n\n.grid_wrapper_2_img {\n  grid-template-columns: repeat(2, 1fr);\n}\n.grid_wrapper_3_img {\n  grid-template-columns: repeat(2, 1fr);\n}\n.grid_wrapper_4_img {\n  grid-template-columns: repeat(3, 1fr);\n}\n.grid_wrapper_5_img {\n  grid-template-columns: repeat(2, 1fr 1fr);\n}\n\n.img {\n  height: 100%;\n  width: 100%;\n  overflow: hidden;\n  cursor: pointer;\n}\n\n.show_more_img {\n  height: 100%;\n  width: 100%;\n  overflow: hidden;\n  opacity: 0.5;\n  position: relative;\n}\n\n.show_more_text {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  font-size: 1.5rem;\n  color: white;\n}\n\n.img_1_1 {\n  grid-column: 1;\n  grid-row: 1;\n}\n\n.img_2_1 {\n  grid-column: 1/2;\n  grid-row: 1;\n}\n.img_2_2 {\n  grid-column: 2;\n  grid-row: 1;\n}\n\n.img_3_1 {\n  grid-column: 1 / 3;\n  grid-row: 1 / 3;\n}\n\n.img_3_2 {\n  grid-row: 3;\n  grid-column: 1 / 2;\n}\n.img_3_3 {\n  grid-row: 3;\n  grid-column: 2 / 3;\n}\n\n.img_4_1 {\n  grid-column: 1 / 4;\n  grid-row: 1 / 3;\n}\n\n.img_4_2 {\n  grid-row: 3;\n  grid-column: 1 / 2;\n}\n.img_4_3 {\n  grid-row: 3;\n  grid-column: 2 / 3;\n}\n.img_4_4 {\n  grid-row: 3;\n  grid-column: 3;\n}\n\n.img_5_1 {\n  grid-column: 1 / 3;\n  grid-row: 1/3;\n}\n\n.img_5_2 {\n  grid-row: 1;\n  grid-column: 3/5;\n}\n\n.img_5_3 {\n  grid-row: 3;\n  grid-column: 1 / 2;\n}\n.img_5_4 {\n  grid-row: 3;\n  grid-column: 2/3;\n}\n.img_5_5 {\n  grid-row: 3;\n  grid-column: 3/5;\n}\n\n/* sub-grid-second-row */\n\n.sub_grid_wrapper_3_img {\n  grid-template-columns: repeat(3, 1fr);\n}\n\n.sub_img_3_1 {\n  grid-column: 1 / 2;\n  grid-row: 2;\n}\n\n.sub_img_3_2 {\n  grid-column: 2 / 3;\n  grid-row: 2;\n}\n.sub_img_3_3 {\n  grid-column: 3;\n  grid-row: 2;\n}\n";
styleInject(css_248z$1);

var ImageGrid = function ImageGrid(_ref) {
  var children = _ref.children,
      _ref$showModal = _ref.showModal,
      showModal = _ref$showModal === void 0 ? true : _ref$showModal,
      _ref$className = _ref.className,
      className = _ref$className === void 0 ? '' : _ref$className;
  var numberOfImages = Array.isArray(children) ? children.length : 1;

  var _React$useState = React.useState(0),
      selectedImageIndex = _React$useState[0],
      setSelectedImageIndex = _React$useState[1];

  var _React$useState2 = React.useState(false),
      isOpenCarausel = _React$useState2[0],
      setIsOpenCarausel = _React$useState2[1];

  var handleImageClick = function handleImageClick(imageIndex) {
    setIsOpenCarausel(true);
    return imageIndex;
  };

  var handleCloseCarausel = function handleCloseCarausel() {
    setSelectedImageIndex(0);
    setIsOpenCarausel(false);
  };

  if (numberOfImages < 5) {
    return React.createElement(React.Fragment, null, typeof showModal === 'boolean' && showModal && React.createElement(Carausel, {
      key: String(isOpenCarausel),
      isOpen: isOpenCarausel,
      images: numberOfImages === 1 ? [children] : children,
      initialImageIndex: selectedImageIndex,
      onClose: handleCloseCarausel
    }), React.createElement("div", {
      className: clsx('grid_wrapper', "grid_wrapper_" + numberOfImages + "_img", className)
    }, React.Children.map(children, function (child, i) {
      var _child$props;

      var imgCount = i + 1;
      return React.cloneElement(child, _extends({}, child.props, {
        className: " " + 'img' + " " + ("img_" + numberOfImages + "_" + imgCount) + " " + (((_child$props = child.props) == null ? void 0 : _child$props.className) || ''),
        onClick: function onClick() {
          child.props.onClick == null ? void 0 : child.props.onClick();
          setSelectedImageIndex(handleImageClick(i));
        }
      }));
    })));
  } else {
    var firstRow = children.filter(function (_, i) {
      return i < 2;
    });
    var firstRowImgCount = firstRow.length;
    var secondRow = children.filter(function (_, i) {
      return i >= 2 && i <= 4;
    });
    var secondRowImgCount = secondRow.length;
    return React.createElement(React.Fragment, null, typeof showModal === 'boolean' && showModal && React.createElement(Carausel, {
      key: String(isOpenCarausel),
      isOpen: isOpenCarausel,
      initialImageIndex: selectedImageIndex,
      images: numberOfImages === 1 ? [children] : children,
      onClose: handleCloseCarausel
    }), React.createElement("div", {
      className: clsx('sub_grid_wrapper', className)
    }, React.createElement("div", {
      className: clsx('sub_grid_wrapper_first_row', "grid_wrapper_" + firstRow.length + "_img")
    }, React.Children.map(firstRow, function (child, i) {
      var _child$props2;

      var imgCount = i + 1;
      return React.cloneElement(child, _extends({}, child.props, {
        className: " " + 'img' + " " + ("img_" + firstRowImgCount + "_" + imgCount) + " " + (((_child$props2 = child.props) == null ? void 0 : _child$props2.className) || ''),
        onClick: function onClick() {
          child.props.onClick == null ? void 0 : child.props.onClick();
          setSelectedImageIndex(handleImageClick(i));
        }
      }));
    })), React.createElement("div", {
      className: clsx('sub_grid_wrapper_second_row', "sub_grid_wrapper_" + secondRow.length + "_img")
    }, React.Children.map(secondRow, function (child, i) {
      var _child$props5;

      var imgCount = i + 1;

      if (numberOfImages > 5 && imgCount === 3) {
        var _child$props3, _child$props4;

        return React.createElement("div", {
          className: clsx('img', "sub_img_" + secondRowImgCount + "_" + imgCount, ((_child$props3 = child.props) == null ? void 0 : _child$props3.className) || '', 'show_more_img'),
          onClick: function onClick() {
            return setSelectedImageIndex(handleImageClick(0));
          }
        }, React.cloneElement(child, _extends({}, child.props, {
          className: " " + 'img' + " " + ("sub_img_" + secondRowImgCount + "_" + imgCount) + " " + (((_child$props4 = child.props) == null ? void 0 : _child$props4.className) || ''),
          onClick: function onClick() {
            child.props.onClick == null ? void 0 : child.props.onClick();
            setSelectedImageIndex(handleImageClick(i + 2));
          }
        })), React.createElement("div", {
          className: 'show_more_text'
        }, ' ', "+ ", numberOfImages - 5, ' '));
      }

      return React.cloneElement(child, _extends({}, child.props, {
        className: " " + 'img' + " " + ("sub_img_" + secondRowImgCount + "_" + imgCount) + " " + (((_child$props5 = child.props) == null ? void 0 : _child$props5.className) || ''),
        onClick: function onClick() {
          child.props.onClick == null ? void 0 : child.props.onClick();
          setSelectedImageIndex(handleImageClick(i + 2));
        }
      }));
    }))));
  }
};

export { ImageGrid };
//# sourceMappingURL=react-fb-image-video-grid.esm.js.map
