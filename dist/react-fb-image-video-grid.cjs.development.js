'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var React__default = _interopDefault(React);
var Modal = _interopDefault(require('react-modal'));

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

var Carausel = function Carausel(_ref) {
  var _currentImage$props;

  var images = _ref.images,
      initialImageIndex = _ref.initialImageIndex,
      isOpen = _ref.isOpen,
      onClose = _ref.onClose;

  var _React$useState = React__default.useState(initialImageIndex),
      currentImageIndex = _React$useState[0],
      setCurrentImageIndex = _React$useState[1];

  var memoizedImages = React__default.useMemo(function () {
    return images;
  }, [images]);
  var handleNext = React__default.useCallback(function () {
    setCurrentImageIndex(function (prevImageIndex) {
      return prevImageIndex === memoizedImages.length - 1 ? 0 : prevImageIndex + 1;
    });
  }, [memoizedImages]);
  var handlePrevious = React__default.useCallback(function () {
    return setCurrentImageIndex(function (prevImgIndex) {
      return prevImgIndex === 0 ? memoizedImages.length - 1 : prevImgIndex - 1;
    });
  }, [memoizedImages]);
  React__default.useEffect(function () {
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
  return React__default.createElement(Modal, {
    ariaHideApp: false,
    isOpen: isOpen,
    onRequestClose: onClose,
    contentLabel: "Example Modal"
  }, React__default.createElement("div", {
    className: "layout"
  }, React__default.createElement("svg", {
    onClick: onClose,
    className: clsx("close_icon", "icon"),
    fill: "#000000",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    width: "24px",
    height: "24px"
  }, React__default.createElement("path", {
    d: "M 4.7070312 3.2929688 L 3.2929688 4.7070312 L 10.585938 12 L 3.2929688 19.292969 L 4.7070312 20.707031 L 12 13.414062 L 19.292969 20.707031 L 20.707031 19.292969 L 13.414062 12 L 20.707031 4.7070312 L 19.292969 3.2929688 L 12 10.585938 L 4.7070312 3.2929688 z"
  })), React__default.createElement("div", {
    className: "modal_wrap"
  }, React__default.createElement("svg", {
    className: clsx("icon", "left_arrow"),
    onClick: handlePrevious,
    xmlns: "http://www.w3.org/2000/svg",
    width: "24",
    height: "24"
  }, React__default.createElement("path", {
    d: "M7.293 4.707 14.586 12l-7.293 7.293 1.414 1.414L17.414 12 8.707 3.293 7.293 4.707z"
  })), React__default.cloneElement(currentImage, {
    className: clsx("img", (currentImage == null ? void 0 : (_currentImage$props = currentImage.props) == null ? void 0 : _currentImage$props.className) || "")
  }), React__default.createElement("svg", {
    className: clsx("icon"),
    onClick: handleNext,
    xmlns: "http://www.w3.org/2000/svg",
    width: "24",
    height: "24"
  }, React__default.createElement("path", {
    d: "M7.293 4.707 14.586 12l-7.293 7.293 1.414 1.414L17.414 12 8.707 3.293 7.293 4.707z"
  })))));
};

var ImageGrid = function ImageGrid(_ref) {
  var elements = _ref.children,
      _ref$showModal = _ref.showModal,
      showModal = _ref$showModal === void 0 ? true : _ref$showModal,
      _ref$className = _ref.className,
      className = _ref$className === void 0 ? '' : _ref$className,
      _ref$smart = _ref.smart,
      smart = _ref$smart === void 0 ? false : _ref$smart;

  var _useState = React.useState(elements),
      children = _useState[0],
      setChildren = _useState[1];

  var numberOfImages = Array.isArray(children) ? children.length : 1;

  var _React$useState = React__default.useState(0),
      selectedImageIndex = _React$useState[0],
      setSelectedImageIndex = _React$useState[1];

  var _React$useState2 = React__default.useState(false),
      isOpenCarausel = _React$useState2[0],
      setIsOpenCarausel = _React$useState2[1];

  var handleImageClick = function handleImageClick(imageIndex) {
    setIsOpenCarausel(true);
    return imageIndex;
  };

  var handleCloseCarausel = function handleCloseCarausel() {
    setSelectedImageIndex(0);
    setIsOpenCarausel(false);
  }; // const ref = useRef(new Array(numberOfImages).fill({}));


  var _useState2 = React.useState([]),
      images = _useState2[0],
      setImages = _useState2[1];

  React.useEffect(function () {
    if (images.length === numberOfImages && smart) {
      setChildren(images.filter(function (ele) {
        return ele.element;
      }).sort(function (a, b) {
        return Math.abs(a.dimensions.right - a.dimensions.left) - Math.abs(b.dimensions.right - b.dimensions.left);
      }).map(function (_ref2) {
        var element = _ref2.element;
        return element;
      }));
    }
  }, [images]);

  if (numberOfImages < 5) {
    return React__default.createElement(React__default.Fragment, null, smart && React__default.Children.map(children, function (child) {
      return React__default.cloneElement(child, {
        ref: function ref(element) {
          if (images.length >= numberOfImages) return;
          if (!element) return;
          setImages(function (prev) {
            return [].concat(prev, [{
              element: child,
              dimensions: (element == null ? void 0 : element.getBoundingClientRect()) || {}
            }]);
          });
        },
        style: {
          visibility: 'hidden',
          position: 'absolute'
        }
      });
    }), typeof showModal === 'boolean' && showModal && React__default.createElement(Carausel, {
      key: String(isOpenCarausel),
      isOpen: isOpenCarausel,
      images: numberOfImages === 1 ? [children] : children,
      initialImageIndex: selectedImageIndex,
      onClose: handleCloseCarausel
    }), React__default.createElement("div", {
      className: clsx('grid_wrapper', "grid_wrapper_" + numberOfImages + "_img", className)
    }, React__default.Children.map(children, function (child, i) {
      var _child$props;

      var imgCount = i + 1;
      return React__default.cloneElement(child, _extends({}, child.props, {
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
    return React__default.createElement(React__default.Fragment, null, smart && React__default.Children.map(children, function (child) {
      return React__default.cloneElement(child, {
        ref: function ref(element) {
          if (images.length >= numberOfImages) return;
          if (!element) return;
          setImages(function (prev) {
            return [].concat(prev, [{
              element: child,
              dimensions: (element == null ? void 0 : element.getBoundingClientRect()) || {}
            }]);
          });
        },
        style: {
          visibility: 'hidden',
          position: 'absolute'
        }
      });
    }), typeof showModal === 'boolean' && showModal && React__default.createElement(Carausel, {
      key: String(isOpenCarausel),
      isOpen: isOpenCarausel,
      initialImageIndex: selectedImageIndex,
      images: numberOfImages === 1 ? [children] : children,
      onClose: handleCloseCarausel
    }), React__default.createElement("div", {
      className: clsx('sub_grid_wrapper', className)
    }, React__default.createElement("div", {
      className: clsx('sub_grid_wrapper_first_row', "grid_wrapper_" + firstRow.length + "_img")
    }, React__default.Children.map(firstRow, function (child, i) {
      var _child$props2;

      var imgCount = i + 1;
      return React__default.cloneElement(child, _extends({}, child.props, {
        className: " " + 'img' + " " + ("img_" + firstRowImgCount + "_" + imgCount) + " " + (((_child$props2 = child.props) == null ? void 0 : _child$props2.className) || ''),
        onClick: function onClick() {
          child.props.onClick == null ? void 0 : child.props.onClick();
          setSelectedImageIndex(handleImageClick(i));
        }
      }));
    })), React__default.createElement("div", {
      className: clsx('sub_grid_wrapper_second_row', "sub_grid_wrapper_" + secondRow.length + "_img")
    }, React__default.Children.map(secondRow, function (child, i) {
      var _child$props5;

      var imgCount = i + 1;

      if (numberOfImages > 5 && imgCount === 3) {
        var _child$props3, _child$props4;

        return React__default.createElement("div", {
          className: clsx('img', "sub_img_" + secondRowImgCount + "_" + imgCount, ((_child$props3 = child.props) == null ? void 0 : _child$props3.className) || '', 'show_more_img'),
          onClick: function onClick() {
            return setSelectedImageIndex(handleImageClick(0));
          }
        }, React__default.cloneElement(child, _extends({}, child.props, {
          className: " " + 'img' + " " + ("sub_img_" + secondRowImgCount + "_" + imgCount) + " " + (((_child$props4 = child.props) == null ? void 0 : _child$props4.className) || ''),
          onClick: function onClick() {
            child.props.onClick == null ? void 0 : child.props.onClick();
            setSelectedImageIndex(handleImageClick(i + 2));
          }
        })), React__default.createElement("div", {
          className: 'show_more_text'
        }, ' ', "+ ", numberOfImages - 5, ' '));
      }

      return React__default.cloneElement(child, _extends({}, child.props, {
        className: " " + 'img' + " " + ("sub_img_" + secondRowImgCount + "_" + imgCount) + " " + (((_child$props5 = child.props) == null ? void 0 : _child$props5.className) || ''),
        onClick: function onClick() {
          child.props.onClick == null ? void 0 : child.props.onClick();
          setSelectedImageIndex(handleImageClick(i + 2));
        }
      }));
    }))));
  }
};

exports.ImageGrid = ImageGrid;
//# sourceMappingURL=react-fb-image-video-grid.cjs.development.js.map
