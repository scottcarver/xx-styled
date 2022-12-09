/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./assets/AdminStyle.js":
/*!******************************!*\
  !*** ./assets/AdminStyle.js ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ AdminStyle; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);


/* Internal block libraries */
const {
  __
} = wp.i18n;


class AdminStyle extends _wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor() {
    super(...arguments);
  }

  render() {
    const {
      attributes: {
        blockID,
        spacingMobile,
        spacingTablet,
        spacingDesktop
      },
      setAttributes,
      clientId
    } = this.props;
    var combinedCss = ` 
			/* For Admin */
			#block-${clientId} .paddingpreview{;
				top: ${spacingMobile.top};
				bottom: ${spacingMobile.bottom};
				left: ${spacingMobile.left};
				right: ${spacingMobile.right};
			}

			@media(min-width: 992px){
				#block-${clientId} .paddingpreview{;
					top: ${spacingTablet.top};
					bottom: ${spacingTablet.bottom};
					left: ${spacingTablet.left};
					right: ${spacingTablet.right};
				}
			}
			@media(min-width:1200px){
				#block-${clientId} .paddingpreview{;
					top: ${spacingDesktop.top};
					bottom: ${spacingDesktop.bottom};
					left: ${spacingDesktop.left};
					right: ${spacingDesktop.right};
				}
		
			}	
		`; // Remove Newlines, Tabs are spaces

    var compressedCSS = combinedCss.replaceAll("\n", "").replaceAll("\t", " "); // Remove extraneous spaces

    compressedCSS = compressedCSS.replace(/\s+/g, ' ').trim(); //  style={{position:'absolute',width:'100%',height:'100%', top:0, left:0, maxWidth:"none"}}

    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "paddingpreview",
      style: {
        position: 'absolute'
      }
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      style: {
        border: "dashed 1px currentColor",
        height: "100%",
        width: "100%",
        opacity: .2
      }
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("style", {
      type: "text/css",
      dangerouslySetInnerHTML: {
        __html: compressedCSS
      }
    }));
  }

}

/***/ }),

/***/ "./assets/BGGradControl.js":
/*!*********************************!*\
  !*** ./assets/BGGradControl.js ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ BGGradControl; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);


/* BGGradControl is meant to be generic, it can be reused any time a background image or radial gradient bckground control is needed */

/*  Internal block libraries */
const {
  __
} = wp.i18n;
const {
  Component,
  Fragment
} = wp.element;
const {
  Button,
  ButtonGroup,
  RangeControl
} = wp.components;
/* Create a Block Controls wrapper Component */

class BGGradControl extends Component {
  constructor() {
    super(...arguments);
  }

  render() {
    const {
      positionVert,
      attributes: {
        backgroundGradientSize,
        backgroundGradientSizeCustom,
        backgroundGradientRepeat,
        backgroundGradientAttachment,
        backgroundGradientAlignVert,
        backgroundGradientAlignHori,
        backgroundGradientAlignVertCustom,
        backgroundGradientAlignHoriCustom
      },
      setAttributes
    } = this.props;
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      class: "px-simplerow px-simplerow--shortheadline"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h2", null, "Background Size")), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      class: "px-buttongroup px-buttongroup--small"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(ButtonGroup, {
      "aria-label": __("Column Layout")
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(Button, {
      isDefault: true,
      isPrimary: backgroundGradientSize === "cover",
      onClick: () => {
        setAttributes({
          backgroundGradientSize: "cover"
        });
      }
    }, "Cover"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(Button, {
      isDefault: true,
      isPrimary: backgroundGradientSize === "contain",
      onClick: () => {
        setAttributes({
          backgroundGradientSize: "contain"
        });
      }
    }, "Contain"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(Button, {
      isDefault: true,
      isPrimary: backgroundGradientSize === "auto",
      onClick: () => {
        setAttributes({
          backgroundGradientSize: "auto"
        });
      }
    }, "Auto"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(Button, {
      isDefault: true,
      isPrimary: backgroundGradientSize === "custom",
      onClick: () => {
        setAttributes({
          backgroundGradientSize: "custom"
        });
      }
    }, "Custom"))), backgroundGradientSize === "custom" && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      class: "px-columnrow px-columnrow--nolabel px-columnrow--spaceabove"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(RangeControl, {
      label: __("Custom"),
      value: backgroundGradientSizeCustom,
      onChange: backgroundGradientSizeCustom => {
        setAttributes({
          backgroundGradientSizeCustom
        });
      },
      min: 0,
      max: 200
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      class: "px-simplerow px-simplerow--shortheadline"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h2", null, "Background Repeat")), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      class: "px-buttongroup px-buttongroup--small"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(ButtonGroup, {
      "aria-label": __("Column Layout")
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(Button, {
      isDefault: true,
      isPrimary: backgroundGradientRepeat === "no-repeat",
      onClick: () => {
        setAttributes({
          backgroundGradientRepeat: "no-repeat"
        });
      }
    }, "No"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(Button, {
      isDefault: true,
      isPrimary: backgroundGradientRepeat === "repeat",
      onClick: () => {
        setAttributes({
          backgroundGradientRepeat: "repeat"
        });
      }
    }, "Yes"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(Button, {
      isDefault: true,
      isPrimary: backgroundGradientRepeat === "repeat-x",
      onClick: () => {
        setAttributes({
          backgroundGradientRepeat: "repeat-x"
        });
      }
    }, "Repeat-x"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(Button, {
      isDefault: true,
      isPrimary: backgroundGradientRepeat === "repeat-y",
      onClick: () => {
        setAttributes({
          backgroundGradientRepeat: "repeat-y"
        });
      }
    }, "Repeat-y"))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      class: "px-simplerow px-simplerow--shortheadline"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h2", null, "Background Position"), this.props.position), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      class: "px-sidepanel"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      class: "px-simplerow"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", null, "Vertical")), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      class: "px-buttongroup px-buttongroup--small"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(ButtonGroup, {
      "aria-label": __("Column Layout")
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(Button, {
      isDefault: true,
      isPrimary: backgroundGradientAlignVert === "top",
      onClick: () => {
        setAttributes({
          backgroundGradientAlignVert: "top"
        });
      }
    }, "Top"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(Button, {
      isDefault: true,
      isPrimary: backgroundGradientAlignVert === "center",
      onClick: () => {
        setAttributes({
          backgroundGradientAlignVert: "center"
        });
      }
    }, "Center"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(Button, {
      isDefault: true,
      isPrimary: backgroundGradientAlignVert === "bottom",
      onClick: () => {
        setAttributes({
          backgroundGradientAlignVert: "bottom"
        });
      }
    }, "Bottom"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(Button, {
      isDefault: true,
      isPrimary: backgroundGradientAlignVert === "custom",
      onClick: () => {
        setAttributes({
          backgroundGradientAlignVert: "custom"
        });
      }
    }, "Custom"))), backgroundGradientAlignVert == "custom" && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      class: "px-columnrow px-columnrow--smallspaceabove"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(RangeControl, {
      label: __("Custom"),
      value: backgroundGradientAlignVertCustom,
      onChange: backgroundGradientAlignVertCustom => {
        setAttributes({
          backgroundGradientAlignVertCustom
        });
      },
      min: -50,
      max: 200
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      class: "px-simplerow px-simplerow--padtop"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", null, "Horizontal"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("br", null)), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      class: "px-buttongroup px-buttongroup--small"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(ButtonGroup, {
      "aria-label": __("Column Layout")
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(Button, {
      isDefault: true,
      isPrimary: backgroundGradientAlignHori === "left",
      onClick: () => {
        setAttributes({
          backgroundGradientAlignHori: "left"
        });
      }
    }, "Left"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(Button, {
      isDefault: true,
      isPrimary: backgroundGradientAlignHori === "center",
      onClick: () => {
        setAttributes({
          backgroundGradientAlignHori: "center"
        });
      }
    }, "Center"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(Button, {
      isDefault: true,
      isPrimary: backgroundGradientAlignHori === "right",
      onClick: () => {
        setAttributes({
          backgroundGradientAlignHori: "right"
        });
      }
    }, "Right"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(Button, {
      isDefault: true,
      isPrimary: backgroundGradientAlignHori === "custom",
      onClick: () => {
        setAttributes({
          backgroundGradientAlignHori: "custom"
        });
      }
    }, "Custom"))), backgroundGradientAlignHori == "custom" && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      class: "px-columnrow px-columnrow--smallspaceabove"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(RangeControl, {
      label: __("Custom"),
      value: backgroundGradientAlignHoriCustom,
      onChange: backgroundGradientAlignHoriCustom => {
        setAttributes({
          backgroundGradientAlignHoriCustom
        });
      },
      min: -50,
      max: 200
    }))));
  }

}

/***/ }),

/***/ "./assets/BGImgControl.js":
/*!********************************!*\
  !*** ./assets/BGImgControl.js ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ BGImgControl; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);


/* BGImgControl is meant to be generic, it can be reused any time a background image or radial gradient bckground control is needed */

/*  Internal block libraries */
const {
  __
} = wp.i18n;
const {
  Component,
  Fragment
} = wp.element; // const { Button, ButtonGroup, RangeControl } = wp.components;


/* Create a Block Controls wrapper Component */

class BGImgControl extends Component {
  constructor() {
    super(...arguments);
  }

  render() {
    const {
      positionVert,
      attributes: {
        backgroundImageSize,
        backgroundImageSizeCustom,
        backgroundImageSizeCustomSm,
        backgroundImageSizeCustomMd,
        backgroundImageRepeat,
        backgroundImageAttachment,
        backgroundImageAlignVert,
        backgroundImageAlignHori,
        backgroundImageAlignVertCustom,
        backgroundImageAlignHoriCustom
      },
      setAttributes
    } = this.props;
    let defaultUnits = [{
      default: 33,
      label: '%',
      value: '%'
    }, {
      default: 33,
      label: 'vw',
      value: 'vw'
    }, {
      default: 20,
      label: 'vh',
      value: 'vh'
    }, {
      default: 500,
      label: 'px',
      value: 'px'
    }];
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      class: "px-simplerow  px-simplerow--shortheadline"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h2", null, "Background Size")), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      class: "px-buttongroup px-buttongroup--small"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ButtonGroup, {
      "aria-label": __("Column Layout")
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Button, {
      isPrimary: backgroundImageSize === "cover",
      onClick: () => {
        setAttributes({
          backgroundImageSize: "cover"
        });
      }
    }, "Cover"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Button, {
      isPrimary: backgroundImageSize === "contain",
      onClick: () => {
        setAttributes({
          backgroundImageSize: "contain"
        });
      }
    }, "Contain"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Button, {
      isPrimary: backgroundImageSize === "auto",
      onClick: () => {
        setAttributes({
          backgroundImageSize: "auto"
        });
      }
    }, "Auto"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Button, {
      isPrimary: backgroundImageSize === "custom",
      onClick: () => {
        setAttributes({
          backgroundImageSize: "custom"
        });
      }
    }, "Custom"))), backgroundImageSize === "custom" && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "px-triptych"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.__experimentalUnitControl, {
      label: "Small",
      onChange: newdata => {
        setAttributes({
          backgroundImageSizeCustomSm: newdata
        });
      },
      value: backgroundImageSizeCustomSm,
      units: defaultUnits
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.__experimentalUnitControl, {
      label: "Medium",
      onChange: newdata => {
        setAttributes({
          backgroundImageSizeCustomMd: newdata
        });
      },
      value: backgroundImageSizeCustomMd,
      units: defaultUnits
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.__experimentalUnitControl, {
      label: "Large",
      onChange: newdata => {
        setAttributes({
          backgroundImageSizeCustom: newdata
        });
      },
      value: backgroundImageSizeCustom,
      units: defaultUnits
    })))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      class: "px-simplerow px-simplerow--shortheadline"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h2", null, "Background Repeat")), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      class: "px-buttongroup px-buttongroup--small"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ButtonGroup, {
      "aria-label": __("Column Layout")
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Button, {
      isPrimary: backgroundImageRepeat === "no-repeat",
      onClick: () => {
        setAttributes({
          backgroundImageRepeat: "no-repeat"
        });
      }
    }, "No"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Button, {
      isPrimary: backgroundImageRepeat === "repeat",
      onClick: () => {
        setAttributes({
          backgroundImageRepeat: "repeat"
        });
      }
    }, "Yes"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Button, {
      isPrimary: backgroundImageRepeat === "repeat-x",
      onClick: () => {
        setAttributes({
          backgroundImageRepeat: "repeat-x"
        });
      }
    }, "Repeat-x"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Button, {
      isPrimary: backgroundImageRepeat === "repeat-y",
      onClick: () => {
        setAttributes({
          backgroundImageRepeat: "repeat-y"
        });
      }
    }, "Repeat-y"))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      class: "px-simplerow px-simplerow--shortheadline"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h2", null, "Background Attachment")), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      class: "px-buttongroup"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ButtonGroup, {
      "aria-label": __("Column Layout")
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Button, {
      isPrimary: backgroundImageAttachment === "scroll",
      onClick: () => {
        setAttributes({
          backgroundImageAttachment: "scroll"
        });
      }
    }, "Scroll"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Button, {
      isPrimary: backgroundImageAttachment === "fixed",
      onClick: () => {
        setAttributes({
          backgroundImageAttachment: "fixed"
        });
      }
    }, "Fixed"))));
  }

}

/***/ }),

/***/ "./assets/BGTabs.js":
/*!**************************!*\
  !*** ./assets/BGTabs.js ***!
  \**************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ BGTabs; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _BGImgControl__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./BGImgControl */ "./assets/BGImgControl.js");
/* harmony import */ var _BGGradControl__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./BGGradControl */ "./assets/BGGradControl.js");
/* harmony import */ var _lib_js_calculatedTabset__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./lib/js/calculatedTabset */ "./assets/lib/js/calculatedTabset.js");
/* harmony import */ var _src_library_calculated_calculatedRgbaString__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../src/library/calculated/calculatedRgbaString */ "./src/library/calculated/calculatedRgbaString.js");



/* BGGradControl is meant to be generic, it can be reused any time a background image or radial gradient bckground control is needed */
// Node modules

/*  Internal block libraries */

const {
  __
} = wp.i18n;



const {
  TabPanel,
  Button,
  ButtonGroup,
  RangeControl,
  IconButton,
  Placeholder,
  ColorIndicator,
  ColorPicker
} = wp.components; // My helper code


 // import BGCurrentTabset from "./BGCurrentTabset"; // Component

 // Function Component


/* Create a Block Controls wrapper Component */

class BGTabs extends _wordpress_element__WEBPACK_IMPORTED_MODULE_1__.Component {
  constructor() {
    super(...arguments);
  }

  componentDidMount() {}

  render() {
    const {
      positionVert,
      attributes: {
        blockID,
        styleEnabled,
        heightEnabled,
        bgColorEnabled,
        bgGradientEnabled,
        bgImageEnabled,
        bgGelEnabled,
        backgroundColorCount,
        foregroundColor,
        backgroundColor,
        backgroundColor1,
        backgroundColor2,
        backgroundColor3,
        backgroundColor1Start,
        backgroundColor2Start,
        backgroundImage,
        backgroundStackFirst,
        backgroundGradientAttachment,
        gradientType,
        gradientLinearAngle,
        gradientAlignRadialHori,
        gradientAlignRadialVert,
        selectionFGColor,
        selectionBGColor,
        foregroundHeadlineFont,
        foregroundCopyFont,
        foregroundCaptionFont,
        focalPoint
      },
      setAttributes
    } = this.props;
    const rendermyComponent = true;
    const themTabs = (0,_lib_js_calculatedTabset__WEBPACK_IMPORTED_MODULE_7__["default"])(this.props);
    const backgroundTabClasses = classnames__WEBPACK_IMPORTED_MODULE_2___default()("px-tabwrap px-tabwrap--margintop", {
      "px-tabwrap--centered": themTabs.length > 0,
      "px-tabwrap--single": themTabs.length === 1
    });

    const onImageSelect = imageObject => setAttributes({
      backgroundImage: imageObject.sizes.full.url
    });

    const onColorChange = function (colorValue) {
      console.log("changed to", colorValue);
      setAttributes({
        backgroundColor: colorValue
      });
    };
    /*
    const onSelect = tabName => {
    	console.log("Selecting tab", tabName);
          };
          */


    const bgcolor1classes = classnames__WEBPACK_IMPORTED_MODULE_2___default()("px-colorbox", "px-colorbox--marginabove", {
      "px-colorbox--paddingbelow": backgroundColorCount == "gradient"
    }, {
      "px-colorbox--linebelow": backgroundColorCount == "gradient"
    });

    const getBackgroundTab = name => {
      console.log("got here!"); // Help Tab

      if (name == "bghelptab") {
        return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("h1", null, "Halp"));
      } // Color Tab


      if (name == "bgcolortab") {
        return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
          className: "px-colorbox"
        }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("h2", null, "Color"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("input", {
          type: "checkbox",
          id: "bgcolorSwatch",
          name: "bgcolorSwatch"
        }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("label", {
          htmlFor: "bgcolorSwatch"
        }, "Palette"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.ColorPalette, {
          value: backgroundColor // onChange={backgroundColor => setAttributes({ backgroundColor })} 
          ,
          onChange: onColorChange,
          enableAlpha: true // clearable={false}

        })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
          className: bgcolor1classes
        }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(ColorPicker, {
          color: backgroundColor,
          onChangeComplete: value => setAttributes({
            backgroundColor: value.hex
          })
        })));
      } // Gradient Tab


      if (name == "bggradienttab") {
        return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
          className: "px-simplerow px-simplerow--shortheadline"
        }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("h2", {
          style: {
            textAlign: "center"
          }
        }, "Gradient Type")), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
          className: "px-buttongroup px-buttongroup--split"
        }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(ButtonGroup, {
          "aria-label": __("Column Layout")
        }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(Button, {
          isDefault: true,
          isPrimary: gradientType === "linear",
          onClick: () => {
            setAttributes({
              gradientType: "linear"
            });
          }
        }, "Linear"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(Button, {
          isDefault: true,
          isPrimary: gradientType === "radial",
          onClick: () => {
            setAttributes({
              gradientType: "radial"
            });
          }
        }, "Radial"))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
          className: "px-simplerow"
        }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("h2", {
          style: {
            textAlign: "center"
          }
        }, "Gradient Settings")), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(TabPanel, {
          className: "px-tabwrap px-tabwrap--centered",
          activeClass: "active-tab",
          initialTabName: "gradcolortab",
          tabs: [{
            name: "gradcolortab",
            title: "Colors",
            className: "tab-gradcolor"
          }, {
            name: "gradsettingstab",
            title: "Settings",
            className: "tab-gradsettings"
          } // ,
          // {
          // 	name: "gradbgtab",
          // 	title: "Background",
          // 	className: "tab-gradbg"
          // }
          ]
        }, tab => getGradientTab(tab.name)));
      }

      const dimensions = {
        width: 400,
        height: 100
      }; // Image Tab

      if (name == "bgimagetab") {
        return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, backgroundImage && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
          className: "px-simplerow px-simplerow--shortheadline"
        }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("h2", null, "Background Image")), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.FocalPointPicker, {
          url: backgroundImage // dimensions={ dimensions }
          ,
          value: focalPoint,
          onChange: focalPoint => setAttributes({
            focalPoint: focalPoint
          }) // onChange={ ( focalPoint ) => setFocalPoint( { focalPoint } ) }

        })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
          className: "px-simplerow px-simplerow--mediaupload"
        }, !backgroundImage && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.MediaUploadCheck, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.MediaUpload, {
          allowedTypes: ['image'],
          onSelect: onImageSelect,
          value: backgroundImage,
          render: _ref => {
            let {
              open
            } = _ref;
            return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(Button, {
              onClick: open
            }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("span", null, "Select Image"));
          }
        })), backgroundImage && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("button", {
          className: "clear-button",
          onClick: event => setAttributes({
            backgroundImage: null
          })
        }, "Remove Image")), backgroundImage && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_BGImgControl__WEBPACK_IMPORTED_MODULE_5__["default"], (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
          setAttributes
        }, this.props)));
      }

      const mycurrentproblem = classnames__WEBPACK_IMPORTED_MODULE_2___default()("px-statusbox", {
        "px-statusbox--disabled": !bgGelEnabled
      }); // BG Gel Tab

      if (name == "bggeltab") {
        return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
          className: "px-colorbox px-colorbox--paddingbelow px-colorbox--linebelow"
        }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("h2", null, "Background Gel"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("input", {
          type: "checkbox",
          id: "bg3Swatch",
          name: "bg3Swatch"
        }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("label", {
          htmlFor: "bg3Swatch"
        }, "Palette"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.ColorPalette, {
          value: backgroundColor3,
          onChange: backgroundColor3 => setAttributes({
            backgroundColor3
          })
        })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
          className: "px-simplerow px-simplerow--padleft"
        }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
          className: mycurrentproblem
        }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(ColorPicker, {
          color: backgroundColor3,
          onChangeComplete: value => setAttributes({
            backgroundColor3: (0,_src_library_calculated_calculatedRgbaString__WEBPACK_IMPORTED_MODULE_8__["default"])(value)
          })
        }))));
      }
    };

    const getGradientTab = name => {
      // Color Tab
      if (name == "gradcolortab") {
        return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
          className: "px-colorbox"
        }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("h2", null, "Gradient Color 1"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(ColorPicker, {
          color: backgroundColor1,
          onChangeComplete: value => setAttributes({
            backgroundColor1: (0,_src_library_calculated_calculatedRgbaString__WEBPACK_IMPORTED_MODULE_8__["default"])(value)
          })
        })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
          className: "px-colorbox px-colorbox--nopicker"
        }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("input", {
          type: "checkbox",
          id: "bg1Swatch",
          name: "bg1Swatch"
        }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("label", {
          htmlFor: "bg1Swatch"
        }, "Palette"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.ColorPalette, {
          value: backgroundColor1,
          onChange: backgroundColor1 => setAttributes({
            backgroundColor1
          })
        })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
          className: "px-colorbox"
        }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("h2", null, "Gradient Color 2"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(ColorPicker, {
          color: backgroundColor2,
          onChangeComplete: value => setAttributes({
            backgroundColor2: (0,_src_library_calculated_calculatedRgbaString__WEBPACK_IMPORTED_MODULE_8__["default"])(value)
          })
        })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
          className: "px-colorbox px-colorbox--nopicker"
        }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("input", {
          type: "checkbox",
          id: "bg2Swatch",
          name: "bg2Swatch"
        }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("label", {
          htmlFor: "bg2Swatch"
        }, "Palette"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.ColorPalette, {
          value: backgroundColor2,
          onChange: backgroundColor2 => setAttributes({
            backgroundColor2
          })
        })));
      } // Gradient Tab


      if (name == "gradsettingstab") {
        return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
          className: "px-simplerow"
        }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("h2", null, "Start Position")), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
          className: "px-columnrow"
        }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(RangeControl, {
          label: __("Color 1"),
          value: backgroundColor1Start,
          onChange: backgroundColor1Start => {
            setAttributes({
              backgroundColor1Start
            });
          },
          min: -50,
          max: 200
        })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
          className: "px-columnrow"
        }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(RangeControl, {
          label: __("Color 2"),
          value: backgroundColor2Start,
          onChange: backgroundColor2Start => {
            setAttributes({
              backgroundColor2Start
            });
          },
          min: -50,
          max: 200
        })), gradientType === "linear" && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
          className: "px-columnrow"
        }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(RangeControl, {
          label: __("Angle"),
          value: gradientLinearAngle,
          onChange: gradientLinearAngle => {
            setAttributes({
              gradientLinearAngle
            });
          },
          min: 0,
          max: 365
        })), gradientType === "radial" && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
          className: "px-simplerow"
        }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("h2", null, "Alignment")), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
          className: "px-columnrow"
        }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(RangeControl, {
          label: __("From Top"),
          value: gradientAlignRadialVert,
          onChange: gradientAlignRadialVert => {
            setAttributes({
              gradientAlignRadialVert
            });
          },
          min: -50,
          max: 200
        })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
          className: "px-columnrow"
        }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(RangeControl, {
          label: __("From Left"),
          value: gradientAlignRadialHori,
          onChange: gradientAlignRadialHori => {
            setAttributes({
              gradientAlignRadialHori
            });
          },
          min: -50,
          max: 200
        }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
          className: "px-simplerow px-simplerow--shortheadline"
        }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("h2", null, "Background Attachment")), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
          className: "px-buttongroup"
        }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(ButtonGroup, {
          "aria-label": __("Column Layout")
        }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(Button, {
          isDefault: true,
          isPrimary: backgroundGradientAttachment === "scroll",
          onClick: () => {
            setAttributes({
              backgroundGradientAttachment: "scroll"
            });
          }
        }, "Scroll"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(Button, {
          isDefault: true,
          isPrimary: backgroundGradientAttachment === "fixed",
          onClick: () => {
            setAttributes({
              backgroundGradientAttachment: "fixed"
            });
          }
        }, "Fixed"))));
      }

      {
        /* 
        // Image Tab
        if (name == "gradbgtab") {
        return (
        	<Fragment>
        		<BGGradControl {...{ setAttributes, ...this.props }} />
        	</Fragment>
        );
        }
        */
      }
    };

    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, themTabs.length > 0 && rendermyComponent && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(TabPanel, {
      className: backgroundTabClasses,
      activeClass: "active-tab",
      tabs: themTabs
    }, tab => getBackgroundTab(tab.name)));
  }

}

/***/ }),

/***/ "./assets/lib/js/calculatedTabset.js":
/*!*******************************************!*\
  !*** ./assets/lib/js/calculatedTabset.js ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// Returns the final "background-color"
const calculatedTabset = props => {
  const {
    bgColorEnabled,
    bgImageEnabled,
    bgGradientEnabled,
    bgGelEnabled,
    backgroundStackFirst
  } = props.attributes;
  console.log("before");
  console.log(bgColorEnabled);
  console.log("affer");
  const tabOrder = [];

  if (bgGelEnabled) {
    tabOrder.push({
      name: "bggeltab",
      title: "Gel",
      className: "tab-bggel"
    });
  }

  console.log("stack order " + backgroundStackFirst); // Stack Order 1

  if (backgroundStackFirst == "gradient") {
    if (bgGradientEnabled) {
      tabOrder.push({
        name: "bggradienttab",
        title: "Gradient",
        className: "tab-bggradient"
      });
    }

    if (bgImageEnabled) {
      tabOrder.push({
        name: "bgimagetab",
        title: "Image",
        className: "tab-bgimage"
      });
    } // Stack Order 2

  } else {
    if (bgImageEnabled) {
      tabOrder.push({
        name: "bgimagetab",
        title: "Image",
        className: "tab-bgimage"
      });
    }

    if (bgGradientEnabled) {
      tabOrder.push({
        name: "bggradienttab",
        title: "Gradient",
        className: "tab-bggradient"
      });
    }
  }

  if (bgColorEnabled) {
    tabOrder.push({
      name: "bgcolortab",
      title: "Base",
      className: "tab-bgcolor1"
    });
  }

  console.log(tabOrder);
  return tabOrder;
};

/* harmony default export */ __webpack_exports__["default"] = (calculatedTabset);
/*

		const fixedTabset = [
			{
				name: "bgcolortab",
				title: "Base",
				className: "tab-bgcolor1"
			},
			{
				name: "bgimagetab",
				title: "Image",
				className: "tab-bgimage"
			},
			{
				name: "bggradienttab",
				title: "Gradient",
				className: "tab-bggradient"
			},
			{
				name: "bggeltab",
				title: "Gel",
				className: "tab-bggel"
			}
		];

		const fixedTabsetReversed = [
			{
				name: "bgcolortab",
				title: "Base",
				className: "tab-bgcolor1"
			},
			{
				name: "bggradienttab",
				title: "Gradient",
				className: "tab-bggradient"
			},
			{
				name: "bgimagetab",
				title: "Image",
				className: "tab-bgimage"
			},
			{
				name: "bggeltab",
				title: "Gel",
				className: "tab-bggel"
			}
		];
		*/

/***/ }),

/***/ "./assets/styleControls.js":
/*!*********************************!*\
  !*** ./assets/styleControls.js ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ StyleControls; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _BGTabs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./BGTabs */ "./assets/BGTabs.js");
/* harmony import */ var _src_components_StyledPreview_StyledPreview__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../src/components/StyledPreview/StyledPreview */ "./src/components/StyledPreview/StyledPreview.js");
/* harmony import */ var _src_components_AccordionInterface__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../src/components/AccordionInterface */ "./src/components/AccordionInterface.js");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__);


// Node modules

/** Internal block libraries
 */




const {
  __
} = wp.i18n;


 // This uses the old syntax and maybe needs updated to @wordpress

const {
  PanelBody,
  // this is new in this demo
  PanelRow,
  // this is new in this demo
  TabPanel,
  Button,
  ButtonGroup,
  FormToggle,
  ComboboxControl
} = wp.components;
const options = [{
  value: 'small',
  label: 'Small'
}, {
  value: 'normal',
  label: 'Normal'
}, {
  value: 'large',
  label: 'Large'
}, {
  value: 'huge',
  label: 'Huge'
}];
/*
const fontOptions = [
	{"label":"Inherit","value":"inherit"},
	{"label":"Serif","value":"serif"},
	{"label":"Sans-Serif","value":"sansserif"},
	{"label":"Monospace","value":"monospace"},
	{"label":"Cursive","value":"cursive"},
	{"label":"Fantasy","value":"fantasy"},
];
*/

const gradients = [{
  gradient: 'linear-gradient(135deg,rgba(6,147,227,1) 0%,rgb(155,81,224) 100%)',
  name: 'Vivid cyan blue to vivid purple',
  slug: 'vivid-cyan-blue-to-vivid-purple'
}, {
  gradient: 'linear-gradient(135deg,rgb(122,220,180) 0%,rgb(0,208,130) 100%)',
  name: 'Light green cyan to vivid green cyan',
  slug: 'light-green-cyan-to-vivid-green-cyan'
}, {
  gradient: 'linear-gradient(135deg,rgba(252,185,0,1) 0%,rgba(255,105,0,1) 100%)',
  name: 'Luminous vivid amber to luminous vivid orange',
  slug: 'luminous-vivid-amber-to-luminous-vivid-orange'
}, {
  gradient: 'linear-gradient(135deg,rgba(255,105,0,1) 0%,rgb(207,46,46) 100%)',
  name: 'Luminous vivid orange to vivid red',
  slug: 'luminous-vivid-orange-to-vivid-red'
}, {
  gradient: 'linear-gradient(135deg,rgb(238,238,238) 0%,rgb(169,184,195) 100%)',
  name: 'Very light gray to cyan bluish gray',
  slug: 'very-light-gray-to-cyan-bluish-gray'
}, {
  gradient: 'linear-gradient(135deg,rgb(74,234,220) 0%,rgb(151,120,209) 20%,rgb(207,42,186) 40%,rgb(238,44,130) 60%,rgb(251,105,98) 80%,rgb(254,248,76) 100%)',
  name: 'Cool to warm spectrum',
  slug: 'cool-to-warm-spectrum'
}];
const fontOptions = global_named_fonts;
const stylePresets = [{
  "label": "None",
  "value": "none"
}, {
  "label": "News",
  "value": "news"
}, {
  "label": "Magazine",
  "value": "magazine"
}, {
  "label": "Technical",
  "value": "technical"
}, {
  "label": "Modern",
  "value": "modern"
}, {
  "label": "Natural",
  "value": "natural"
}];
const {
  withState
} = wp.compose;
/**
 * Create a Block Controls wrapper Component
 */

class StyleControls extends _wordpress_element__WEBPACK_IMPORTED_MODULE_1__.Component {
  constructor() {
    super(...arguments);
  }

  render() {
    const {
      attributes: {
        blockID,
        namedstyle,
        babygradient,
        styleEnabled,
        styleMode,
        heightEnabled,
        bgColorEnabled,
        bgGradientEnabled,
        bgImageEnabled,
        bgGelEnabled,
        backgroundStackFirst,
        backgroundColorCount,
        backgroundColor,
        backgroundColor1,
        backgroundColor2,
        backgroundColor3,
        backgroundColor1Start,
        backgroundColor2Start,
        backgroundImage,
        backgroundGradientAttachment,
        gradientType,
        gradientLinearAngle,
        gradientAlignRadialHori,
        gradientAlignRadialVert,
        headlineColor,
        foregroundColor,
        linkColor,
        dropcapColor,
        blockquoteColor,
        lineartColor,
        selectionFGColor,
        selectionBGColor,
        foregroundHeadlineFont,
        foregroundCopyFont,
        foregroundCaptionFont,
        spacingMobile,
        spacingTablet,
        spacingDesktop
      },
      setAttributes,
      clientID
    } = this.props;

    const onSelect = tabName => {
      console.log("Selecting tab", tabName);
    };

    const selectTab = tabName => {
      console.log("Selecting tab", tabName);
    };

    const attributeLibrary = {
      'black-bg': {
        'backgroundColor': '#000000',
        'foregroundColor': '#FFFFFF'
      },
      'red-bg': {
        'backgroundColor': '#FF0000',
        'foregroundColor': '#0000FF'
      },
      'white-bg': {
        'backgroundColor0': '#FFFFFF',
        'foregroundColor': '#000000'
      }
    }; // Toggles

    const toggleStyleEnabled = () => setAttributes({
      styleEnabled: !styleEnabled
    });

    const toggleBgColorEnabled = () => {
      setAttributes({
        bgColorEnabled: !bgColorEnabled
      });
    };

    const toggleGradientEnabled = () => {
      setAttributes({
        bgGradientEnabled: !bgGradientEnabled
      });
    };

    const toggleImageEnabled = () => {
      setAttributes({
        bgImageEnabled: !bgImageEnabled
      });
    };

    const toggleGelEnabled = () => {
      setAttributes({
        bgGelEnabled: !bgGelEnabled
      });
    };

    const toggleFgEnabled = () => setAttributes({
      foregroundEnabled: !foregroundEnabled
    });

    const toggleHeightEnabled = () => setAttributes({
      heightEnabled: !heightEnabled
    });

    const toggleBgStack = backgroundStackFirst => function () {
      if (backgroundStackFirst == "image") {
        setAttributes({
          backgroundStackFirst: "gradient"
        });
      }

      if (backgroundStackFirst == "gradient") {
        setAttributes({
          backgroundStackFirst: "image"
        });
      }
    };

    const doStyleChange = selection => {
      // alert(selection);
      var obj = attributeLibrary[selection];
      setAttributes(obj);
    };

    const presetcolors = [{
      name: "red",
      color: "#f00"
    }, {
      name: "green",
      color: "#0f0"
    }, {
      name: "blue",
      color: "#00f"
    }, {
      name: "red1",
      color: "#ff0"
    }, {
      name: "red2",
      color: "#fe0"
    }];
    const presets = {
      selectionText: [{
        name: "red",
        color: "#f00"
      }, {
        name: "green",
        color: "#0f0"
      }, {
        name: "blue",
        color: "#00f"
      }],
      selectionBg: [{
        name: "red",
        color: "#f00"
      }, {
        name: "green",
        color: "#0f0"
      }, {
        name: "blue",
        color: "#00f"
      }],
      flatBg: [{
        name: "red",
        color: "#f00"
      }, {
        name: "blue",
        color: "#00f"
      }],
      gradientBg: [{
        name: "red",
        color: "#f00"
      }, {
        name: "blue",
        color: "#00f"
      }]
    };
    var isOpen = false;

    const getForegroundTab = name => {
      if (name == "fgcolor") {
        return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
          className: "px-colorbox"
        }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("h2", null, "Headline"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("input", {
          type: "checkbox",
          id: "headlineSwatch",
          name: "headlineSwatch"
        }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("label", {
          htmlFor: "headlineSwatch"
        }, "Palette"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_6__.ColorPalette, {
          value: headlineColor,
          onChange: headlineColor => setAttributes({
            headlineColor
          })
        })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
          className: "px-colorbox"
        }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("h2", null, "Text"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("input", {
          type: "checkbox",
          id: "textSwatch",
          name: "textSwatch"
        }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("label", {
          htmlFor: "textSwatch"
        }, "Palette"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_6__.ColorPalette, {
          value: foregroundColor,
          onChange: foregroundColor => setAttributes({
            foregroundColor
          })
        })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
          className: "px-colorbox"
        }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("h2", null, "Link"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("input", {
          type: "checkbox",
          id: "linkSwatch",
          name: "linkSwatch"
        }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("label", {
          htmlFor: "linkSwatch"
        }, "Palette"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_6__.ColorPalette, {
          value: linkColor,
          onChange: linkColor => setAttributes({
            linkColor
          })
        })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
          className: "px-colorbox"
        }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("h2", null, "Block Quote"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("input", {
          type: "checkbox",
          id: "blockquoteSwatch",
          name: "blockquoteSwatch"
        }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("label", {
          htmlFor: "blockquoteSwatch"
        }, "Palette"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_6__.ColorPalette, {
          value: blockquoteColor,
          onChange: blockquoteColor => setAttributes({
            blockquoteColor
          })
        })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
          className: "px-colorbox"
        }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("h2", null, "Dropcap"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("input", {
          type: "checkbox",
          id: "dropcapSwatch",
          name: "dropcapSwatch"
        }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("label", {
          htmlFor: "dropcapSwatch"
        }, "Palette"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_6__.ColorPalette, {
          value: dropcapColor,
          onChange: dropcapColor => setAttributes({
            dropcapColor
          })
        })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
          className: "px-colorbox"
        }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("h2", null, "Lineart"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("input", {
          type: "checkbox",
          id: "lineartSwatch",
          name: "lineartSwatch"
        }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("label", {
          htmlFor: "lineartSwatch"
        }, "Palette"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_6__.ColorPalette, {
          value: lineartColor,
          onChange: lineartColor => setAttributes({
            lineartColor
          })
        })));
      }

      if (name == "fgselection") {
        return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
          className: "px-colorbox px-colorbox--paddingbelow px-colorbox--linebelow"
        }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("h2", null, "Selected Text"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("input", {
          type: "checkbox",
          id: "selectionfgSwatch",
          name: "selectionfgSwatch"
        }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("label", {
          htmlFor: "selectionfgSwatch"
        }, "Palette"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_6__.ColorPalette, {
          value: selectionFGColor,
          onChange: selectionFGColor => setAttributes({
            selectionFGColor
          })
        })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
          className: "px-colorbox px-colorbox--marginabove"
        }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("h2", null, "Selected Text BG"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("input", {
          type: "checkbox",
          id: "selectionbgSwatch",
          name: "selectionbgSwatch"
        }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("label", {
          htmlFor: "selectionbgSwatch"
        }, "Palette"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_6__.ColorPalette, {
          value: selectionBGColor,
          onChange: selectionBGColor => setAttributes({
            selectionBGColor
          })
        })));
      }

      if (name == "fgfont") {
        return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
          className: "px-simplerow px-simplerow--flatbottom px-simplerow--flatheadline"
        }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("h2", null, "Headline Font")), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
          className: "px-buttongroup px-buttongroup--small"
        }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(ButtonGroup, {
          "aria-label": __("Headline Font")
        }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(Button, {
          isDefault: true,
          isPrimary: foregroundHeadlineFont === "serif",
          onClick: () => {
            setAttributes({
              foregroundHeadlineFont: "serif"
            });
          }
        }, "Serif"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(Button, {
          isDefault: true,
          isPrimary: foregroundHeadlineFont === "sansserif",
          onClick: () => {
            setAttributes({
              foregroundHeadlineFont: "sansserif"
            });
          }
        }, "Sans"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(Button, {
          isDefault: true,
          isPrimary: foregroundHeadlineFont === "monospace",
          onClick: () => {
            setAttributes({
              foregroundHeadlineFont: "monospace"
            });
          }
        }, "Mono"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(Button, {
          isDefault: true,
          isPrimary: foregroundHeadlineFont === "custom",
          onClick: () => {
            setAttributes({
              foregroundHeadlineFont: "custom"
            });
          }
        }, "Custom"))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
          className: "px-simplerow px-simplerow--flatbottom"
        }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("h2", null, "Copy Font")), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
          className: "px-buttongroup px-buttongroup--small"
        }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(ButtonGroup, {
          "aria-label": __("Copy Font")
        }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(Button, {
          isDefault: true,
          isPrimary: foregroundCopyFont === "serif",
          onClick: () => {
            setAttributes({
              foregroundCopyFont: "serif"
            });
          }
        }, "Serif"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(Button, {
          isDefault: true,
          isPrimary: foregroundCopyFont === "sansserif",
          onClick: () => {
            setAttributes({
              foregroundCopyFont: "sansserif"
            });
          }
        }, "Sans"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(Button, {
          isDefault: true,
          isPrimary: foregroundCopyFont === "monospace",
          onClick: () => {
            setAttributes({
              foregroundCopyFont: "monospace"
            });
          }
        }, "Mono"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(Button, {
          isDefault: true,
          isPrimary: foregroundCopyFont === "custom",
          onClick: () => {
            setAttributes({
              foregroundCopyFont: "custom"
            });
          }
        }, "Custom"))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
          className: "px-simplerow px-simplerow--flatbottom"
        }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("h2", null, "Caption Font")), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
          className: "px-buttongroup px-buttongroup--small"
        }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(ButtonGroup, {
          "aria-label": __("Caption Font")
        }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(Button, {
          isDefault: true,
          isPrimary: foregroundCaptionFont === "serif",
          onClick: () => {
            setAttributes({
              foregroundCaptionFont: "serif"
            });
          }
        }, "Serif"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(Button, {
          isDefault: true,
          isPrimary: foregroundCaptionFont === "sansserif",
          onClick: () => {
            setAttributes({
              foregroundCaptionFont: "sansserif"
            });
          }
        }, "Sans"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(Button, {
          isDefault: true,
          isPrimary: foregroundCaptionFont === "monospace",
          onClick: () => {
            setAttributes({
              foregroundCaptionFont: "monospace"
            });
          }
        }, "Mono"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(Button, {
          isDefault: true,
          isPrimary: foregroundCaptionFont === "custom",
          onClick: () => {
            setAttributes({
              foregroundCaptionFont: "custom"
            });
          }
        }, "Custom"))));
      }
    };

    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
      id: "styledarea-toggle",
      className: "px-buttongroup px-buttongroup--centered px-buttongroup--padbottom"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(ButtonGroup, {
      "aria-label": __("Style Mode")
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(Button, {
      isDefault: true,
      isPrimary: styleMode === "disabled",
      onClick: () => {
        setAttributes({
          styleMode: "disabled"
        });
        setAttributes({
          styleEnabled: false
        });
      }
    }, "Disabled"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(Button, {
      isDefault: true,
      isPrimary: styleMode === "named",
      onClick: () => {
        setAttributes({
          styleMode: "named"
        });
        setAttributes({
          styleEnabled: true
        });
      }
    }, "Named"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(Button, {
      isDefault: true,
      isPrimary: styleMode === "custom",
      onClick: () => {
        setAttributes({
          styleMode: "custom"
        });
        setAttributes({
          styleEnabled: true
        });
      }
    }, "Custom"))), styleMode == 'named' && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(PanelBody, {
      title: __("Saved Styles", "pxblocks"),
      className: "panel-savedstyles",
      initialOpen: true
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
      className: "px-sidepanel"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
      className: "px-simplerow px-simplerow--padtop px-simplerow--padbottom px-simplerow--padleft px-simplerow--padright px-simplerow--hascomboboxcontrol"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(ComboboxControl, {
      label: "Select a Style",
      placeholder: "Default",
      value: namedstyle,
      allowReset: true,
      options: global_named_styles,
      onChange: newval => setAttributes({
        namedstyle: newval
      }),
      onInputChange: newval => setFilteredOptions(options.filter(option => option.label.toLowerCase().startsWith(newval.toLowerCase())))
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
      className: "px-simplerow px-simplerow--hasstyletiles"
    }, global_named_styles.map(option => // className={"style-tile " + "style-tile--active"}
    // className={`styled-tile ${namedstyle == option.value ? "styled-tile--active" : ""}`} 
    (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
      className: `styled-tile ${namedstyle == option.value ? "styled-tile--active" : ""}`,
      key: option.value
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("button", {
      className: "xx-styled",
      "data-theme": option.value,
      onClick: () => setAttributes({
        namedstyle: option.value
      }),
      style: {
        padding: "0px 20px 0px 10px"
      },
      "aria-label": "select style " + option.value
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("h3", null, "Aa"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("p", null, "Lorem Ipsum eget tortor risus."), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("span", null), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("span", null), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("span", null), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("span", null)), option.label))))))), styleMode == 'custom' && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_src_components_StyledPreview_StyledPreview__WEBPACK_IMPORTED_MODULE_4__["default"], (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      setAttributes
    }, this.props)), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(PanelBody, {
      title: __("Foreground", "pxblocks"),
      className: "panel-foreground",
      initialOpen: false
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
      className: "px-sidepanel"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(TabPanel, {
      className: "px-tabwrap px-tabwrap--centered px-tabwrap--margintop",
      activeclassName: "active-tab",
      onSelect: onSelect,
      tabs: [{
        name: "fgcolor",
        title: "Color",
        className: "tab-one"
      }, {
        name: "fgselection",
        title: "Selection",
        className: "tab-two"
      } // {
      // 	name: "fgfont",
      // 	title: "Typography",
      // 	className: "tab-three"
      // }
      ]
    }, tab => getForegroundTab(tab.name))))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(PanelBody, {
      title: __("Background", "pxblocks"),
      className: "panel-background",
      initialOpen: false
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
      className: "px-sidepanel"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
      className: "px-simplerow px-simplerow--padtop px-simplerow--padbottom"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("label", {
      htmlFor: "bggel-styleenabled-form-toggle"
    }, __("Gel", "pxblocks")), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(FormToggle, {
      id: "bggel-styleenabled-form-toggle",
      label: __("Gel", "pxblocks"),
      checked: bgGelEnabled,
      onChange: toggleGelEnabled
    })), backgroundStackFirst === "gradient" ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
      className: "px-simplerow px-simplerow--padtop px-simplerow--padbottom"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("label", {
      htmlFor: "gradient-styleenabled-form-toggle"
    }, __("Gradient", "pxblocks")), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(FormToggle, {
      id: "gradient-styleenabled-form-toggle",
      label: __("Gradient", "pxblocks"),
      checked: bgGradientEnabled,
      onChange: toggleGradientEnabled
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
      className: "px-simplerow px-simplerow--padtop px-simplerow--padbottom"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("label", {
      htmlFor: "bgimage-styleenabled-form-toggle"
    }, __("Image", "pxblocks")), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(FormToggle, {
      id: "bgimage-styleenabled-form-toggle",
      label: __("Image", "pxblocks"),
      checked: bgImageEnabled,
      onChange: toggleImageEnabled
    }))) : (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
      className: "px-simplerow px-simplerow--padtop px-simplerow--padbottom"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("label", {
      htmlFor: "bgimage-styleenabled-form-toggle"
    }, __("Image", "pxblocks")), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(FormToggle, {
      id: "bgimage-styleenabled-form-toggle",
      label: __("Image", "pxblocks"),
      checked: bgImageEnabled,
      onChange: toggleImageEnabled
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
      className: "px-simplerow px-simplerow--padtop px-simplerow--padbottom"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("label", {
      htmlFor: "gradient-styleenabled-form-toggle"
    }, __("Gradient", "pxblocks")), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(FormToggle, {
      id: "gradient-styleenabled-form-toggle",
      label: __("Gradient", "pxblocks"),
      checked: bgGradientEnabled,
      onChange: toggleGradientEnabled
    }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
      className: "px-simplerow px-simplerow--padtop px-simplerow--padbottom"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("label", {
      htmlFor: "bg-styleenabled-form-toggle"
    }, __("Base Color", "pxblocks")), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(FormToggle, {
      id: "bg-styleenabled-form-toggle",
      label: __("Base Color", "pxblocks"),
      checked: bgColorEnabled,
      onChange: toggleBgColorEnabled
    })), bgGradientEnabled && bgImageEnabled && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
      className: "px-simplerow px-simplerow--padtop px-simplerow--padbottom"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("label", {
      htmlFor: "bgimage-stackfirst-form-toggle"
    }, __("Re-Order Gradient & Image", "pxblocks")), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(FormToggle, {
      id: "bgimage-stackfirst-form-toggle",
      label: __("Image over Gradient?", "pxblocks"),
      checked: backgroundStackFirst == "image",
      onChange: toggleBgStack(backgroundStackFirst)
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_BGTabs__WEBPACK_IMPORTED_MODULE_3__["default"], (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      setAttributes
    }, this.props)))))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_src_components_AccordionInterface__WEBPACK_IMPORTED_MODULE_5__.AccordionInterface, this.props), (styleMode == 'named' || styleMode == 'custom') && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(PanelBody, {
      title: __("Dimensions", "pxblocks"),
      className: "panel-dimensions",
      initialOpen: false
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
      className: "px-sidepanel px-sidepanel--grey"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
      className: "px-simplerow px-simplerow--padtop px-simplerow--borderbottom px-simplerow--paddingcontrol"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__.__experimentalBoxControl, {
      label: "Mobile Spacing",
      values: spacingMobile,
      sides: ['top', 'bottom', 'left', 'right'],
      resetValues: {
        top: '0',
        bottom: '0',
        left: '0',
        right: '0'
      },
      defaultValues: {
        top: '0',
        bottom: '0',
        left: '0',
        right: '0'
      },
      onChange: newdata => {
        setAttributes({
          spacingMobile: newdata
        });
      }
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
      className: "px-simplerow px-simplerow--borderbottom px-simplerow--marginbottom px-simplerow--margintop  px-simplerow--paddingcontrol"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__.__experimentalBoxControl, {
      label: "Tablet Spacing (992+)",
      values: spacingTablet,
      sides: ['top', 'bottom', 'left', 'right'],
      resetValues: {
        top: '0',
        bottom: '0',
        left: '0',
        right: '0'
      },
      defaultValues: {
        top: '0',
        bottom: '0',
        left: '0',
        right: '0'
      },
      onChange: newdata => {
        setAttributes({
          spacingTablet: newdata
        });
      }
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
      className: "px-simplerow  px-simplerow--paddingcontrol"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__.__experimentalBoxControl, {
      label: "Desktop Spacing (1200+)",
      values: spacingDesktop,
      sides: ['top', 'bottom', 'left', 'right'],
      resetValues: {
        top: '0',
        bottom: '0',
        left: '0',
        right: '0'
      },
      defaultValues: {
        top: '0',
        bottom: '0',
        left: '0',
        right: '0'
      },
      onChange: newdata => {
        setAttributes({
          spacingDesktop: newdata
        });
      }
    }))))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(PanelBody, {
      title: __("Typography", "pxblocks"),
      className: "panel-typography",
      initialOpen: false
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(PanelRow, null, fontOptions.length > 0 && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
      className: "px-sidepanel"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
      className: "px-simplerow px-simplerow--padtop px-simplerow--padbottom px-simplerow--hascomboboxcontrol"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(ComboboxControl, {
      label: "Headline Font Family",
      placeholder: "Initial",
      value: foregroundHeadlineFont,
      allowReset: true,
      options: fontOptions,
      onChange: newval => setAttributes({
        foregroundHeadlineFont: newval
      }),
      onInputChange: newval => setFilteredOptions(options.filter(option => option.label.toLowerCase().startsWith(newval.toLowerCase())))
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
      className: "px-simplerow px-simplerow--padtop px-simplerow--padbottom px-simplerow--hascomboboxcontrol"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(ComboboxControl, {
      label: "Copy Font Family",
      placeholder: "Initial",
      value: foregroundCopyFont,
      allowReset: true,
      options: fontOptions,
      onChange: newval => setAttributes({
        foregroundCopyFont: newval
      }),
      onInputChange: newval => setFilteredOptions(options.filter(option => option.label.toLowerCase().startsWith(newval.toLowerCase())))
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
      className: "px-simplerow px-simplerow--padtop px-simplerow--padbottom px-simplerow--hascomboboxcontrol"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(ComboboxControl, {
      label: "Caption Font Family",
      placeholder: "Initial",
      value: foregroundCaptionFont,
      allowReset: true,
      options: fontOptions,
      onChange: newval => setAttributes({
        foregroundCaptionFont: newval
      }),
      onInputChange: newval => setFilteredOptions(options.filter(option => option.label.toLowerCase().startsWith(newval.toLowerCase())))
    }))), fontOptions.length == 0 && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("p", null, " No Font Families defined in theme.json, ", (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("a", {
      href: "https://fullsiteediting.com/lessons/theme-json-typography-options/",
      target: "_blank"
    }, "read more"), ".")))));
  }

}

/***/ }),

/***/ "./src/components/AccordionInterface.js":
/*!**********************************************!*\
  !*** ./src/components/AccordionInterface.js ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AccordionInterface": function() { return /* binding */ AccordionInterface; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _library_helpers_PxColorBox_PxColorBox_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../library/helpers/PxColorBox/PxColorBox.js */ "./src/library/helpers/PxColorBox/PxColorBox.js");

const {
  __
} = wp.i18n;




function AccordionInterface(_ref) {
  let {
    attributes,
    setAttributes
  } = _ref;
  let colorboxes = [{
    'name': 'interfaceFGColor',
    'title': 'Foreground'
  }, {
    'name': 'interfaceBGColor',
    'title': 'Background'
  }, {
    'name': 'interfaceKeyColor',
    'title': 'Key'
  }];

  if (attributes.styleMode == 'named') {
    return false;
  }

  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.PanelBody, {
    title: __("Interface", "pxblocks"),
    className: "panel-interface",
    initialOpen: false
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "px-sidepanel"
  }, "Before", (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_library_helpers_PxColorBox_PxColorBox_js__WEBPACK_IMPORTED_MODULE_3__["default"], {
    name: "interfaceFGColor",
    title: "Foreground",
    attributes: attributes,
    setAttributes: setAttributes
  }), "After", colorboxes.map(currentValue => {
    const onColorChange = function (colorValue) {
      let cleanColor = colorValue !== undefined ? colorValue : '';
      setAttributes({
        [currentValue.name]: cleanColor
      });
    }; //  <ColorBox color={red} /> 


    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "px-colorbox",
      key: currentValue.name
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h2", null, "UI ", currentValue.title, " Color"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
      type: "checkbox",
      id: `${currentValue.name}Swatch`,
      name: `${currentValue.name}Swatch`
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
      htmlFor: `${currentValue.name}Swatch`
    }, "Palette"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.ColorPalette, {
      value: `${attributes[currentValue.name]}`,
      onChange: onColorChange,
      enableAlpha: true
    }));
  })))));
}

/***/ }),

/***/ "./src/components/PoststylePlugin.js":
/*!*******************************************!*\
  !*** ./src/components/PoststylePlugin.js ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_plugins__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/plugins */ "@wordpress/plugins");
/* harmony import */ var _wordpress_plugins__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_plugins__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_edit_post__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/edit-post */ "@wordpress/edit-post");
/* harmony import */ var _wordpress_edit_post__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_edit_post__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_dom_ready__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/dom-ready */ "@wordpress/dom-ready");
/* harmony import */ var _wordpress_dom_ready__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_dom_ready__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../editor.scss */ "./src/editor.scss");
/*
poststylemeta_type : postStyleType
poststylemeta_headline : postStyleHeadline
poststylemeta_copy : postStyleCopy
poststylemeta_captions : postStyleCaptions
*/

/* Tutorial on dynamic post select https://rudrastyh.com/gutenberg/get-posts-in-dynamic-select-control.html */

/* Most of the ideas were taken from here Lifted from here https://github.com/HardeepAsrani/gutenberg-boilerplate/blob/master/src/sidebar.js */
const {
  createElement,
  Fragment
} = wp.element;

 // const { PluginSidebar, PluginSidebarMoreMenuItem } = wp.editPost;

const {
  Button,
  ButtonGroup,
  PanelRow,
  PanelBody,
  ToggleControl,
  SelectControl,
  ComboboxControl
} = wp.components;
const {
  withSelect,
  withDispatch,
  useSelect
} = wp.data;
const {
  compose
} = wp.compose;
const {
  __
} = wp.i18n;
 // import "./lib/scss/style.scss";



function PoststylePlugin(props) {
  const {
    myPostMetaKey,
    updateMyPostMetaKey,
    updateMyPostMetaType,
    updateMyPostMetaHeadline,
    updateMyPostMetaCopy,
    updateMyPostMetaCaptions,
    postStyleType,
    postStyleHeadline,
    postStyleCopy,
    postStyleCaptions,
    setAttributes
  } = props;
  /*
  const fontOptions = [
  	{"label":"Inherit","value":"inherit"},
  	{"label":"Serif","value":"serif"},
  	{"label":"Sans-Serif","value":"sansserif"},
  	{"label":"Monospace","value":"monospace"},
  	{"label":"Cursive","value":"cursive"},
  	{"label":"Fantasy","value":"fantasy"},
  ];
  */

  const fontOptions = global_named_fonts;
  const stylePresets = [{
    "label": "None",
    "value": "none"
  }, {
    "label": "News",
    "value": "news"
  }, {
    "label": "Magazine",
    "value": "magazine"
  }, {
    "label": "Technical",
    "value": "technical"
  }, {
    "label": "Modern",
    "value": "modern"
  }, {
    "label": "Natural",
    "value": "natural"
  }]; // CurrentPostType
  // const currentPostType = useSelect( select => select( 'core/editor' ).getCurrentPostType() );

  const PostsDropdownControl = compose( // withSelect allows to get posts for our SelectControl and also to get the post meta value
  withSelect(function (select, props) {
    return {
      posts: select('core').getEntityRecords('postType', 'styled', {
        per_page: -1
      }) // metaValue: select( 'core/editor' ).getEditedPostAttribute( 'meta' )[ props.metaKey ],

    };
  }))(function (props) {
    // options for SelectControl
    var options = []; // if posts found

    if (props.posts) {
      options.push({
        value: '',
        label: 'Default'
      });
      props.posts.forEach(post => {
        // simple foreach loop
        // console.log(post);
        const dynamicLabel = post.title.rendered !== '' ? post.title.rendered : 'Style ID ' + post.id;
        console.log("slug, label:", post.generated_slug, dynamicLabel);
        options.push({
          value: post.generated_slug,
          label: dynamicLabel
        });
      });
    } else {
      options.push({
        value: postStyleType,
        label: 'Loading...'
      });
    }

    return createElement(ComboboxControl, {
      label: "Choose a Styled Area",
      placeholder: 'Default',
      value: postStyleType,
      allowReset: true,
      options: options,
      onChange: function (content) {
        updateMyPostMetaType(content); // alert('onchange');
      },
      onInputChange: function (inputValue) {
        setFilteredOptions(options.filter(option => option.label.toLowerCase().startsWith(inputValue.toLowerCase()))); // alert('oninput');
      }
    });
  });

  let dynamicOptions = function () {
    return [{
      value: "short",
      label: "Short"
    }];
  };

  _wordpress_dom_ready__WEBPACK_IMPORTED_MODULE_2___default()(function () {
    /*
    if(typeof(postStyleType) === undefined){
    	var postStyleType = '';
    }
    */

    /*
    jQuery("body").removeClass (function (index, className) {
    	return (className.match (/(^|\s)xx-styled\S+/g) || []).join(' ');
    }); */
    // alert('wo');
    // Moved off of
    // alert('someone like u ' + postStyleType);
    var stylestring = '--foregroundHeadlineFont: var(--' + postStyleHeadline + '); --foregroundCopyFont: var(--' + postStyleCopy + '); --foregroundCaptionFont: var(--' + postStyleCaptions + ');';
    jQuery("body").addClass('xx-styled--admin').attr('data-theme', postStyleType).attr('style', stylestring);
    var fontClass = "wp-headlinefont--" + postStyleHeadline;
    var editorClass = ".edit-post-visual-editor";

    if (myPostMetaKey) {
      // alert('someone like u ' + postStyleType);
      jQuery("body").addClass("wp-admin--gutenbergdebug");
      jQuery(editorClass).attr("data-headline", postStyleHeadline);
      jQuery(editorClass).attr("data-copy", postStyleCopy);
      jQuery(editorClass).attr("data-captions", postStyleCaptions);
    } else {
      // alert('nobody like u ' + postStyleType);
      jQuery("body").removeClass("wp-admin--gutenbergdebug");

      if (postStyleType === null) {
        jQuery("body").attr('data-theme', '');
      }
    }
  }); // Don't show the interface on the "style" interface

  /*
  if(currentPostType === "style"){
  	return false;
  } else {
  	console.log("Warning, the style picker was not show because you are editing a style	");
  }
  */

  return createElement(Fragment, null, createElement(_wordpress_edit_post__WEBPACK_IMPORTED_MODULE_1__.PluginSidebarMoreMenuItem, {
    target: "post-style-sidebar-plugin",
    icon: "art"
  }, "Entry Style"), createElement(_wordpress_edit_post__WEBPACK_IMPORTED_MODULE_1__.PluginSidebar, {
    name: "post-style-sidebar-plugin",
    icon: "art",
    title: "Entry Style"
  }, createElement(Fragment, null, createElement("div", {
    className: "px-simplerow px-simplerow--padtop px-simplerow--padbottom px-simplerow--padleft px-simplerow--padright  px-simplerow--hascomboboxcontrol"
  }, createElement(PostsDropdownControl, null)), createElement(PanelBody, {
    title: __("Typography", "pxblocks"),
    initialOpen: false
  }, createElement(PanelRow, null, fontOptions.length > 0 && createElement("div", {
    className: "px-sidepanel"
  }, createElement("div", {
    className: "px-simplerow px-simplerow--padtop px-simplerow--padbottom px-simplerow--hascomboboxcontrol"
  }, createElement(ComboboxControl, {
    label: "Headline Font Family",
    placeholder: "Initial",
    value: postStyleHeadline,
    allowReset: true,
    options: fontOptions,
    onChange: newval => updateMyPostMetaHeadline(newval)
  })), createElement("div", {
    className: "px-simplerow px-simplerow--padtop px-simplerow--padbottom px-simplerow--hascomboboxcontrol"
  }, createElement(ComboboxControl, {
    label: "Copy Font Familyx",
    placeholder: "Initial",
    value: postStyleCopy,
    allowReset: true,
    options: fontOptions,
    onChange: newval => updateMyPostMetaCopy(newval)
  })), createElement("div", {
    className: "px-simplerow px-simplerow--padtop px-simplerow--padbottom px-simplerow--hascomboboxcontrol"
  }, createElement(ComboboxControl, {
    label: "Caption Font Family",
    placeholder: "Initial",
    value: postStyleCaptions,
    allowReset: true,
    options: fontOptions,
    onChange: newval => updateMyPostMetaCaptions(newval)
  })), createElement("div", {
    className: "px-simplerow px-simplerow--padtop px-simplerow--padbottom px-simplerow--hascomboboxcontrol"
  }, createElement(ComboboxControl, {
    label: "Typographic Themes",
    placeholder: "Select a Preset",
    allowReset: true,
    options: stylePresets,
    onChange: function (newval) {
      if (newval === 'none') {
        updateMyPostMetaHeadline("inherit");
        updateMyPostMetaCopy("inherit");
        updateMyPostMetaCaptions("inherit");
      }

      if (newval === 'news') {
        updateMyPostMetaHeadline("serif");
        updateMyPostMetaCopy("sansserif");
        updateMyPostMetaCaptions("sansserif");
      }

      if (newval === 'magazine') {
        updateMyPostMetaHeadline("sansserif");
        updateMyPostMetaCopy("serif");
        updateMyPostMetaCaptions("sansserif");
      }

      if (newval === 'technical') {
        updateMyPostMetaHeadline("monospace");
        updateMyPostMetaCopy("monospace");
        updateMyPostMetaCaptions("sansserif");
      }

      if (newval === 'modern') {
        updateMyPostMetaHeadline("sansserif");
        updateMyPostMetaCopy("sansserif");
        updateMyPostMetaCaptions("sansserif");
      }

      if (newval === 'natural') {
        updateMyPostMetaHeadline("sansserif");
        updateMyPostMetaCopy("sansserif");
        updateMyPostMetaCaptions("fantasy");
      }
    }
  }))), fontOptions.length == 0 && createElement("p", null, " No Font Families defined in theme.json, ", createElement("a", {
    href: "https://fullsiteediting.com/lessons/theme-json-typography-options/",
    target: "_blank"
  }, "read more"), "."))))));
}

const applyWithSelect = withSelect(select => {
  const {
    getEditedPostAttribute
  } = select("core/editor");
  const {
    my_post_meta_key: myPostMetaKey
  } = getEditedPostAttribute("meta");
  const {
    my_post_meta_string: myPostMetaString
  } = getEditedPostAttribute("meta"); // new

  const {
    poststylemeta_type: postStyleType
  } = getEditedPostAttribute("meta");
  const {
    poststylemeta_headline: postStyleHeadline
  } = getEditedPostAttribute("meta");
  const {
    poststylemeta_copy: postStyleCopy
  } = getEditedPostAttribute("meta");
  const {
    poststylemeta_captions: postStyleCaptions
  } = getEditedPostAttribute("meta");
  return {
    myPostMetaKey,
    myPostMetaString,
    postStyleType,
    postStyleHeadline,
    postStyleCopy,
    postStyleCaptions
  };
});
const applyWithDispatch = withDispatch(dispatch => {
  const {
    editPost
  } = dispatch("core/editor");
  return {
    updateMyPostMetaKey(value) {
      editPost({
        meta: {
          my_post_meta_key: value
        }
      });
    },

    updateMyPostMetaString(value) {
      editPost({
        meta: {
          my_post_meta_string: value
        }
      });
    },

    // new
    updateMyPostMetaType(value) {
      // Set Type
      editPost({
        meta: {
          poststylemeta_type: value
        }
      });

      switch (value) {
        case "default":
          // Set Style
          editPost({
            meta: {
              poststylemeta_headline: "sansserif"
            }
          });
          editPost({
            meta: {
              poststylemeta_copy: "serif"
            }
          });
          editPost({
            meta: {
              poststylemeta_captions: "monospace"
            }
          }); // code block

          break;

        case "modern":
          // Set Style
          editPost({
            meta: {
              poststylemeta_headline: "serif"
            }
          });
          editPost({
            meta: {
              poststylemeta_copy: "serif"
            }
          });
          editPost({
            meta: {
              poststylemeta_captions: "serif"
            }
          }); // code block

          break;

        case "classical":
          // Set Style
          editPost({
            meta: {
              poststylemeta_headline: "sansserif"
            }
          });
          editPost({
            meta: {
              poststylemeta_copy: "sansserif"
            }
          });
          editPost({
            meta: {
              poststylemeta_captions: "sansserif"
            }
          }); // code block

          break;

        case "technical":
          // Set Style
          editPost({
            meta: {
              poststylemeta_headline: "monospace"
            }
          });
          editPost({
            meta: {
              poststylemeta_copy: "monospace"
            }
          });
          editPost({
            meta: {
              poststylemeta_captions: "monospace"
            }
          }); // code block

          break;

        default:
      }
    },

    updateMyPostMetaHeadline(value) {
      editPost({
        meta: {
          poststylemeta_headline: value
        }
      });
    },

    updateMyPostMetaCopy(value) {
      editPost({
        meta: {
          poststylemeta_copy: value
        }
      });
    },

    updateMyPostMetaCaptions(value) {
      editPost({
        meta: {
          poststylemeta_captions: value
        }
      });
    }

  };
});

if (global_current_posttype !== 'styled') {
  (0,_wordpress_plugins__WEBPACK_IMPORTED_MODULE_0__.registerPlugin)("sidebar-poststyle-plugin", {
    render: compose(applyWithSelect, applyWithDispatch)(PoststylePlugin)
  });
}

/***/ }),

/***/ "./src/components/StyledPreview/StyledPreview.js":
/*!*******************************************************!*\
  !*** ./src/components/StyledPreview/StyledPreview.js ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ StyledPreview; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _StyledPreview_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./StyledPreview.scss */ "./src/components/StyledPreview/StyledPreview.scss");
/* harmony import */ var _StyledTile_StyledTile_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../StyledTile/StyledTile.scss */ "./src/components/StyledTile/StyledTile.scss");
/* harmony import */ var _library_calculated_calculated__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../library/calculated/calculated */ "./src/library/calculated/calculated.js");


/* BGGradControl is meant to be generic, it can be reused any time a background image or radial gradient bckground control is needed */
// Node modules
 //  WP Libraries

const {
  __
} = wp.i18n;
 // Project Files




/* Create a Block Controls wrapper Component */

class StyledPreview extends _wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor() {
    super(...arguments);
  }

  componentDidMount() {}

  render() {
    const {
      positionVert,
      attributes: {
        bgColorEnabled,
        bgGradientEnabled,
        bgImageEnabled,
        bgGelEnabled,
        foregroundColor,
        headlineColor,
        linkColor,
        backgroundColor,
        backgroundColor3,
        backgroundImage,
        backgroundStackFirst,
        foregroundHeadlineFont,
        foregroundCopyFont,
        foregroundCaptionFont
      },
      setAttributes
    } = this.props;
    const bgImageStack = _library_calculated_calculated__WEBPACK_IMPORTED_MODULE_4__["default"].calculatedBgImage(this.props.attributes);
    var combinedCss = ` 
			.fgtext{
				color: ${foregroundColor};
				font-family: ${foregroundCopyFont}
			}
			.fgtext h1{
				color: ${headlineColor};
				font-family: ${foregroundHeadlineFont}
			}
			.fgtext p{
				color: ${foregroundColor};
				
			}
			.fgtext a{
				color: ${linkColor};
			}
			.fgcolor{
				background: ${backgroundColor3};
				// outline: solid 1px red;
			}
			.bgimage{
				background-image: url(${backgroundImage});
			}
			.gradient{
				background: ${_library_calculated_calculated__WEBPACK_IMPORTED_MODULE_4__["default"].calculatedGradient(this.props.attributes)};
			}
			.base{
				background: ${backgroundColor};
			}
		`;
    var compressedCSS = combinedCss.replaceAll("\n", "").replaceAll("\t", " "); // Remove extraneous spaces

    compressedCSS = compressedCSS.replace(/\s+/g, ' ').trim();
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "px-sidepanel"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "px-simplerow px-simplerow--padleft px-simplerow--padtop px-simplerow--padbottom"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("strong", null, "Preview:"))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "px-sidepanel"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "px-simplerow px-simplerow--padbottom"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: `styled-preview ${backgroundStackFirst == "gradient" ? "styled-preview--gradientfirst" : ""}`,
      "data-viewtype": "stack"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "cube"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "layer layer-1 fgtext textual"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h1", null, "Foreground Text"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, "Lorem Ipsum Preview ", (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
      href: "#"
    }, "Stuffs"), " halibut")), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: `layer layer-2 ${bgGelEnabled ? "fgcolor" : ""}`
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: `layer layer-3 ${bgImageEnabled ? "bgimage" : ""}`
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: `layer layer-4 ${bgGradientEnabled ? "gradient" : ""}`
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: `layer layer-5 ${bgColorEnabled ? "base" : ""}`
    }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("style", {
      type: "text/css",
      dangerouslySetInnerHTML: {
        __html: compressedCSS
      }
    }))));
  }

}

/***/ }),

/***/ "./src/edit.js":
/*!*********************!*\
  !*** ./src/edit.js ***!
  \*********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ edit; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./editor.scss */ "./src/editor.scss");
/* harmony import */ var _assets_styleControls__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../assets/styleControls */ "./assets/styleControls.js");
/* harmony import */ var _assets_AdminStyle__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../assets/AdminStyle */ "./assets/AdminStyle.js");
/* harmony import */ var _src_library_calculated_calculated__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../src/library/calculated/calculated */ "./src/library/calculated/calculated.js");


// Node modules
 // WordPress modules



 // Custom modules




 // Export Edit Function

function edit(props) {
  // Destructure props
  const {
    attributes: {
      styleMode,
      namedstyle
    },
    className,
    setAttributes
  } = props; // Retrieve a CSS Object

  const styleObj = _src_library_calculated_calculated__WEBPACK_IMPORTED_MODULE_8__["default"].calculatedStyleObj(props.attributes); // Retrieve/Set Classes

  const classes = classnames__WEBPACK_IMPORTED_MODULE_2___default()(className, "xx-styled"); // Create a BlockProps Object

  const blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__.useBlockProps)({
    className: classes,
    style: styleMode == 'custom' || styleMode == 'named' ? styleObj : undefined,
    'data-theme': styleMode == 'named' ? namedstyle : ''
  });
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", blockProps, styleMode == "custom" && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_assets_AdminStyle__WEBPACK_IMPORTED_MODULE_7__["default"], (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    setAttributes
  }, props)), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__.InspectorControls, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_assets_styleControls__WEBPACK_IMPORTED_MODULE_6__["default"], props)), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__.InnerBlocks, null)));
}

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./editor.scss */ "./src/editor.scss");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.scss */ "./src/style.scss");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./edit */ "./src/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./save */ "./src/save.js");
/* harmony import */ var _components_PoststylePlugin_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/PoststylePlugin.js */ "./src/components/PoststylePlugin.js");
// WorePress modules
const {
  __
} = wp.i18n;
 // Custom Modules





 // import './components/BlockVariations.js';
// Register "Styled Area" Block

(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockType)('xx/styled', {
  edit: _edit__WEBPACK_IMPORTED_MODULE_3__["default"],
  save: _save__WEBPACK_IMPORTED_MODULE_4__["default"],
  category: 'design',

  getEditWrapperProps(attributes) {
    const {
      blockAlignment
    } = attributes;
  },

  getSelectedBlockClientId(attributes) {
    const {
      blockID
    } = attributes;
  }

});

/***/ }),

/***/ "./src/library/calculated/calculated.js":
/*!**********************************************!*\
  !*** ./src/library/calculated/calculated.js ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _calculatedBgColor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./calculatedBgColor */ "./src/library/calculated/calculatedBgColor.js");
/* harmony import */ var _calculatedBgImage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./calculatedBgImage */ "./src/library/calculated/calculatedBgImage.js");
/* harmony import */ var _calculatedBGIMGSize__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./calculatedBGIMGSize */ "./src/library/calculated/calculatedBGIMGSize.js");
/* harmony import */ var _calculatedBgPos__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./calculatedBgPos */ "./src/library/calculated/calculatedBgPos.js");
/* harmony import */ var _calculatedBGIMGAtt__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./calculatedBGIMGAtt */ "./src/library/calculated/calculatedBGIMGAtt.js");
/* harmony import */ var _calculatedBGIMGRepeat__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./calculatedBGIMGRepeat */ "./src/library/calculated/calculatedBGIMGRepeat.js");
/* harmony import */ var _calculatedInlineVars__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./calculatedInlineVars */ "./src/library/calculated/calculatedInlineVars.js");
/* harmony import */ var _calculatedPadding__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./calculatedPadding */ "./src/library/calculated/calculatedPadding.js");
/* harmony import */ var _calculatedRgbaString__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./calculatedRgbaString */ "./src/library/calculated/calculatedRgbaString.js");
/* harmony import */ var _calculatedGradient__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./calculatedGradient */ "./src/library/calculated/calculatedGradient.js");
/* harmony import */ var _calculatedStyleObj__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./calculatedStyleObj */ "./src/library/calculated/calculatedStyleObj.js");
// Custom Calculated Functions










 // Combine these utilities into one object

const calculated = {
  calculatedBgColor: _calculatedBgColor__WEBPACK_IMPORTED_MODULE_0__["default"],
  calculatedBgImage: _calculatedBgImage__WEBPACK_IMPORTED_MODULE_1__["default"],
  calculatedBGIMGSize: _calculatedBGIMGSize__WEBPACK_IMPORTED_MODULE_2__["default"],
  calculatedBgPos: _calculatedBgPos__WEBPACK_IMPORTED_MODULE_3__["default"],
  calculatedBGIMGAtt: _calculatedBGIMGAtt__WEBPACK_IMPORTED_MODULE_4__["default"],
  calculatedBGIMGRepeat: _calculatedBGIMGRepeat__WEBPACK_IMPORTED_MODULE_5__["default"],
  calculatedInlineVars: _calculatedInlineVars__WEBPACK_IMPORTED_MODULE_6__["default"],
  calculatedPadding: _calculatedPadding__WEBPACK_IMPORTED_MODULE_7__["default"],
  calculatedRgbaString: _calculatedRgbaString__WEBPACK_IMPORTED_MODULE_8__["default"],
  calculatedGradient: _calculatedGradient__WEBPACK_IMPORTED_MODULE_9__["default"],
  calculatedStyleObj: _calculatedStyleObj__WEBPACK_IMPORTED_MODULE_10__["default"]
}; // Export `calculated` utility

/* harmony default export */ __webpack_exports__["default"] = (calculated);

/***/ }),

/***/ "./src/library/calculated/calculatedBGIMGAtt.js":
/*!******************************************************!*\
  !*** ./src/library/calculated/calculatedBGIMGAtt.js ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// Returns a computed value for background-size
const calculatedBGIMGAtt = attributes => {
  const {
    bgGelEnabled,
    bgImageEnabled,
    backgroundImageAttachment,
    backgroundImage,
    bgGradientEnabled,
    backgroundGradientAttachment,
    backgroundStackFirst
  } = attributes; // Store each layer in an array

  const bgLayers = []; // Capture output in a string

  let bgLayersString = ""; // if background enabled

  if (bgGelEnabled) {
    bgLayers.push("scroll");
  } // Note: The user can swap layer order of Gradient and Image using the backgroundStackFirst variable
  // Gradient Stacks First


  if (backgroundStackFirst == "gradient") {
    // Gradient
    if (bgGradientEnabled) {
      bgLayers.push(backgroundGradientAttachment);
    } // Image


    if (bgImageEnabled && backgroundImage) {
      bgLayers.push(backgroundImageAttachment);
    } // Image stacks first

  } else {
    // Image
    if (bgImageEnabled && backgroundImage) {
      bgLayers.push(backgroundImageAttachment);
    } // Gradient


    if (bgGradientEnabled) {
      bgLayers.push(backgroundGradientAttachment);
    }
  } // Concatenate a style string, Adding commas, but not on the last


  for (var i = 0; i < bgLayers.length; i++) {
    bgLayersString += bgLayers[i];

    if (i < bgLayers.length - 1) {
      bgLayersString += ", ";
    }
  } // When no styles are available, return 'none'


  if (bgLayers.length == 0) {
    bgLayersString += "scroll";
  }

  return bgLayersString;
};

/* harmony default export */ __webpack_exports__["default"] = (calculatedBGIMGAtt);

/***/ }),

/***/ "./src/library/calculated/calculatedBGIMGRepeat.js":
/*!*********************************************************!*\
  !*** ./src/library/calculated/calculatedBGIMGRepeat.js ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// Returns a computed value for background-size
const calculatedBGIMGRepeat = attributes => {
  const {
    bgGelEnabled,
    bgImageEnabled,
    backgroundImage,
    backgroundImageRepeat,
    bgGradientEnabled,
    backgroundStackFirst
  } = attributes; // Store each layer in an array

  const bgLayers = []; // Capture output in a string

  let bgLayersString = ""; // if background enabled

  if (bgGelEnabled) {
    bgLayers.push("no-repeat");
  } // Note: The user can swap layer order of Gradient and Image using the backgroundStackFirst variable
  // Gradient Stacks First


  if (backgroundStackFirst == "gradient") {
    // Gradient
    if (bgGradientEnabled) {
      bgLayers.push("no-repeat");
    } // Image


    if (bgImageEnabled && backgroundImage) {
      bgLayers.push(backgroundImageRepeat);
    } // Image stacks first

  } else {
    // Image
    if (bgImageEnabled && backgroundImage) {
      bgLayers.push(backgroundImageRepeat);
    } // Gradient


    if (bgGradientEnabled) {
      bgLayers.push("no-repeat");
    }
  } // Concatenate a style string, Adding commas, but not on the last


  for (var i = 0; i < bgLayers.length; i++) {
    bgLayersString += bgLayers[i];

    if (i < bgLayers.length - 1) {
      bgLayersString += ", ";
    }
  } // When no styles are available, return 'none'


  if (bgLayers.length == 0) {
    bgLayersString += "auto";
  }

  return bgLayersString;
};

/* harmony default export */ __webpack_exports__["default"] = (calculatedBGIMGRepeat);

/***/ }),

/***/ "./src/library/calculated/calculatedBGIMGSize.js":
/*!*******************************************************!*\
  !*** ./src/library/calculated/calculatedBGIMGSize.js ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// Returns a computed value for background-size
const calculatedBGIMGSize = (attributes, key) => {
  // console.log("key is", key);
  const {
    bgGelEnabled,
    backgroundStackFirst,
    bgImageEnabled,
    backgroundImage,
    backgroundImageSize,
    backgroundImageSizeCustomSm,
    backgroundImageSizeCustomMd,
    backgroundImageSizeCustom,
    bgGradientEnabled
  } = attributes;
  let activeData = backgroundImageSizeCustom;

  if (key == 'sm') {
    activeData = backgroundImageSizeCustomSm;
  }

  if (key == 'md') {
    activeData = backgroundImageSizeCustomMd;
  } // Store each layer in an array


  const bgLayers = []; // Capture output in a string

  let bgLayersString = ""; // if background enabled

  if (bgGelEnabled) {
    bgLayers.push("cover");
  } // console.log('backgroundImageSizeCustom', activeData);
  // Note: The user can swap layer order of Gradient and Image using the backgroundStackFirst variable
  // Gradient Stacks First


  if (backgroundStackFirst == "gradient") {
    if (bgGradientEnabled) {
      bgLayers.push("cover");
    }

    if (bgImageEnabled && backgroundImage) {
      backgroundImageSize == "custom" ? bgLayers.push(activeData) : bgLayers.push(backgroundImageSize);
    } // Image stacks first

  } else {
    if (bgImageEnabled && backgroundImage) {
      backgroundImageSize == "custom" ? bgLayers.push(activeData) : bgLayers.push(backgroundImageSize);
    }

    if (bgGradientEnabled) {
      bgLayers.push("cover");
    }
  } // Concatenate a style string


  for (var i = 0; i < bgLayers.length; i++) {
    bgLayersString += bgLayers[i]; // Adding commas, but not on the last

    if (i < bgLayers.length - 1) {
      bgLayersString += ", ";
    }
  } // When no styles are available, return 'none'


  if (bgLayers.length == 0) {
    bgLayersString += "auto";
  }

  let bgLayerObject = {
    'sm': bgLayersString,
    'md': bgLayersString,
    'lg': bgLayersString
  }; // return bgLayerObject;

  return bgLayersString;
};

/* harmony default export */ __webpack_exports__["default"] = (calculatedBGIMGSize);

/***/ }),

/***/ "./src/library/calculated/calculatedBgColor.js":
/*!*****************************************************!*\
  !*** ./src/library/calculated/calculatedBgColor.js ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// Returns the final "background-color"
const calculatedBgColor = attributes => {
  // Get all of these variables
  const {
    bgColorEnabled,
    backgroundColor
  } = attributes;

  if (bgColorEnabled && backgroundColor != null) {
    return backgroundColor;
  } else {
    return false; // return "transparent";
  }
};

/* harmony default export */ __webpack_exports__["default"] = (calculatedBgColor);

/***/ }),

/***/ "./src/library/calculated/calculatedBgImage.js":
/*!*****************************************************!*\
  !*** ./src/library/calculated/calculatedBgImage.js ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _calculatedGradient__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./calculatedGradient */ "./src/library/calculated/calculatedGradient.js");
/* harmony import */ var _calculatedGel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./calculatedGel */ "./src/library/calculated/calculatedGel.js");
/* harmony import */ var _calculatedImg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./calculatedImg */ "./src/library/calculated/calculatedImg.js");
// We need to reuese this other function, calculatedGradient


 // Returns the final "background-image", which is a combination of gradient and image

const calculatedBgImage = attributes => {
  // Get all of these variables
  const {
    bgImageEnabled,
    bgGradientEnabled,
    bgGelEnabled,
    backgroundImage,
    backgroundStackFirst
  } = attributes; // Store each layer in an array

  const bgLayers = []; // Capture output in a string

  let bgLayersString = ""; // Push Base Color

  if (bgGelEnabled) {
    bgLayers.push((0,_calculatedGel__WEBPACK_IMPORTED_MODULE_1__["default"])(attributes));
  } // Note: The user can swap layer order of Gradient and Image using the backgroundStackFirst variable
  // Gradient Stacks First!


  if (backgroundStackFirst == "gradient") {
    // Gradient
    if (bgGradientEnabled) {
      bgLayers.push((0,_calculatedGradient__WEBPACK_IMPORTED_MODULE_0__["default"])(attributes));
    } // Image


    if (bgImageEnabled && backgroundImage) {
      bgLayers.push((0,_calculatedImg__WEBPACK_IMPORTED_MODULE_2__["default"])(attributes));
    } // Image Stacks First!

  } else {
    // Image
    if (bgImageEnabled && backgroundImage) {
      bgLayers.push((0,_calculatedImg__WEBPACK_IMPORTED_MODULE_2__["default"])(attributes));
    } // Gradient


    if (bgGradientEnabled) {
      bgLayers.push((0,_calculatedGradient__WEBPACK_IMPORTED_MODULE_0__["default"])(attributes));
    }
  } // Concatenate a style string


  for (var i = 0; i < bgLayers.length; i++) {
    bgLayersString += bgLayers[i]; // Adding commas, but not on the last

    if (i < bgLayers.length - 1) {
      bgLayersString += ", ";
    }
  } // When no styles are available, return 'none'


  if (bgLayers.length == 0) {
    // bgLayersString += "none";
    bgLayersString += "";
  }

  return bgLayersString;
};

/* harmony default export */ __webpack_exports__["default"] = (calculatedBgImage);

/***/ }),

/***/ "./src/library/calculated/calculatedBgPos.js":
/*!***************************************************!*\
  !*** ./src/library/calculated/calculatedBgPos.js ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// Returns the final "background-position"
const calculatedBgPos = attributes => {
  // Get all of these variables
  const {
    focalPoint,
    backgroundImageAlignHori,
    backgroundImageAlignVert,
    backgroundImageAlignVertCustom,
    backgroundImageAlignHoriCustom
  } = attributes;
  var combined = focalPoint.x * 100 + "% " + focalPoint.y * 100 + "%";
  return combined;
  /*
  let hSelect, vSelect;
  // Horizontal
  if (backgroundImageAlignHori == "custom") {
  	hSelect = backgroundImageAlignHoriCustom + "%";
  } else {
  	hSelect = backgroundImageAlignHori;
  }
  	// Vertical
  if (backgroundImageAlignVert == "custom") {
  	vSelect = backgroundImageAlignVertCustom + "%";
  } else {
  	vSelect = backgroundImageAlignVert;
  }
  //  ${backgroundImageAlignHori} ${backgroundImageAlignVert};
  const composed = hSelect + " " + vSelect;
  console.log(composed);
  return composed;
  */
};

/* harmony default export */ __webpack_exports__["default"] = (calculatedBgPos);

/***/ }),

/***/ "./src/library/calculated/calculatedGel.js":
/*!*************************************************!*\
  !*** ./src/library/calculated/calculatedGel.js ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// Returns a computed value for gradient
const calculatedGel = attributes => {
  // Get all of these variables
  const {
    backgroundColor3
  } = attributes; // Return a Linear Gradient

  return "linear-gradient(" + backgroundColor3 + ", " + backgroundColor3 + ")";
};

/* harmony default export */ __webpack_exports__["default"] = (calculatedGel);

/***/ }),

/***/ "./src/library/calculated/calculatedGradient.js":
/*!******************************************************!*\
  !*** ./src/library/calculated/calculatedGradient.js ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// Returns a computed value for gradient
const calculatedGradient = attributes => {
  // Get all of these variables
  const {
    backgroundColor1,
    backgroundColor2,
    backgroundColor1Start,
    backgroundColor2Start,
    gradientType,
    gradientLinearAngle,
    gradientAlignRadialHori,
    gradientAlignRadialVert
  } = attributes; // Return a Linear Gradient

  if (gradientType == "linear") {
    return "linear-gradient(" + gradientLinearAngle + "deg, " + backgroundColor1 + " " + backgroundColor1Start + "%, " + backgroundColor2 + " " + backgroundColor2Start + "%)";
  } // Return a Radial Gradient


  if (gradientType == "radial") {
    var gradient = "radial-gradient(circle at " + gradientAlignRadialHori + "% " + gradientAlignRadialVert + "%, " + backgroundColor1 + " " + backgroundColor1Start + "%, " + backgroundColor2 + " " + backgroundColor2Start + "%)";
    return gradient;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (calculatedGradient);

/***/ }),

/***/ "./src/library/calculated/calculatedImg.js":
/*!*************************************************!*\
  !*** ./src/library/calculated/calculatedImg.js ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// Returns a computed value for gradient
const calculatedImg = attributes => {
  // Get all of these variables
  const {
    backgroundImage
  } = attributes; // Return a Linear Gradient

  return "url(" + backgroundImage + ")";
};

/* harmony default export */ __webpack_exports__["default"] = (calculatedImg);

/***/ }),

/***/ "./src/library/calculated/calculatedInlineVars.js":
/*!********************************************************!*\
  !*** ./src/library/calculated/calculatedInlineVars.js ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _calculatedBgImage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./calculatedBgImage */ "./src/library/calculated/calculatedBgImage.js");
/* harmony import */ var _calculatedBgColor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./calculatedBgColor */ "./src/library/calculated/calculatedBgColor.js");
/* harmony import */ var _calculatedBGIMGSize__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./calculatedBGIMGSize */ "./src/library/calculated/calculatedBGIMGSize.js");
/* harmony import */ var _calculatedBgPos__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./calculatedBgPos */ "./src/library/calculated/calculatedBgPos.js");
/* harmony import */ var _calculatedBGIMGAtt__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./calculatedBGIMGAtt */ "./src/library/calculated/calculatedBGIMGAtt.js");
/* harmony import */ var _calculatedBGIMGRepeat__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./calculatedBGIMGRepeat */ "./src/library/calculated/calculatedBGIMGRepeat.js");
/* harmony import */ var _calculatedPadding__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./calculatedPadding */ "./src/library/calculated/calculatedPadding.js");
// Custom Functions






 // Returns the final "background-image", which is a combination of gradient and image

const calculatedInlineVars = attributes => {
  // Get all of these variables
  const {
    foregroundColor,
    headlineColor,
    linkColor,
    dropcapColor,
    blockquoteColor,
    lineartColor,
    styleMode,
    selectionFGColor,
    selectionBGColor,
    backgroundColor,
    backgroundColor3,
    foregroundHeadlineFont,
    foregroundCopyFont,
    foregroundCaptionFont,
    styleEnabled
  } = attributes;
  const bgImageStack = (0,_calculatedBgImage__WEBPACK_IMPORTED_MODULE_0__["default"])(attributes);
  const bgColorStack = (0,_calculatedBgColor__WEBPACK_IMPORTED_MODULE_1__["default"])(attributes);
  const bgSizeSm = (0,_calculatedBGIMGSize__WEBPACK_IMPORTED_MODULE_2__["default"])(attributes, 'sm');
  const bgSizeMd = (0,_calculatedBGIMGSize__WEBPACK_IMPORTED_MODULE_2__["default"])(attributes, 'md');
  const bgSize = (0,_calculatedBGIMGSize__WEBPACK_IMPORTED_MODULE_2__["default"])(attributes, 'lg');
  const bgPosition = (0,_calculatedBgPos__WEBPACK_IMPORTED_MODULE_3__["default"])(attributes);
  const bgAttachment = (0,_calculatedBGIMGAtt__WEBPACK_IMPORTED_MODULE_4__["default"])(attributes);
  const bgRepeat = (0,_calculatedBGIMGRepeat__WEBPACK_IMPORTED_MODULE_5__["default"])(attributes);
  const spacingMobileStack = (0,_calculatedPadding__WEBPACK_IMPORTED_MODULE_6__["default"])(attributes.spacingMobile);
  const spacingTabletStack = (0,_calculatedPadding__WEBPACK_IMPORTED_MODULE_6__["default"])(attributes.spacingTablet);
  const spacingDesktopStack = (0,_calculatedPadding__WEBPACK_IMPORTED_MODULE_6__["default"])(attributes.spacingDesktop);

  const replaceAll = function (string, search, replace) {
    return string.split(search).join(replace);
  }; // console.log("CURIOUS", bgSize);


  var combinedCss = '';
  var fgbgCss = ``; // console.log("bgImageStack is", bgImageStack);
  // Include backgroundImage

  if (bgImageStack) {
    fgbgCss += `
			--backgroundImage: ${bgImageStack};
			--backgroundSizeSm: ${bgSizeSm};
			--backgroundSizeMd: ${bgSizeMd};
			--backgroundSize: ${bgSize};
			--backgroundPosition: ${bgPosition};
			--backgroundAttachment: ${bgAttachment};
			--backgroundRepeat: ${bgRepeat};
			`;
  } // Include backgroundColor


  if (backgroundColor) {
    fgbgCss += `--backgroundColor: ${backgroundColor};`;
  } // Foreground Color


  if (foregroundColor) {
    fgbgCss += `--foregroundColor: ${foregroundColor};`;
  } // Headline Color


  if (headlineColor) {
    fgbgCss += `--headlineColor: ${headlineColor};`;
  } // Link Color


  if (linkColor) {
    fgbgCss += `--linkColor: ${linkColor};`;
  } // Dropcap Color


  if (dropcapColor) {
    fgbgCss += `--dropcapColor: ${dropcapColor};`;
  } // Block Quote Color


  if (blockquoteColor) {
    fgbgCss += `--blockquoteColor: ${blockquoteColor};`;
  } // Lineart Color


  if (lineartColor) {
    fgbgCss += `--lineartColor: ${lineartColor};`;
  } // selectionFGr Color


  if (selectionFGColor) {
    fgbgCss += `--selectionFGColor: ${selectionFGColor};`;
  } // selectionBG Color


  if (selectionBGColor) {
    fgbgCss += `--selectionBGColor: ${selectionBGColor};`;
  }
  /*
  fgbgCss +=
  `
  --linkColor: ${linkColor};
  --dropcapColor: ${dropcapColor};
  --blockquoteColor: ${blockquoteColor};
  --lineartColor: ${lineartColor};
  --selectionFGColor: ${selectionFGColor};
  --selectionBGColor: ${selectionBGColor};
  `;
  */
  //--backgroundColor: ${bgColorStack};

  /*
  var fontCss = `
  	--foregroundHeadlineFont: var(--${foregroundHeadlineFont});
  	--foregroundCopyFont: var(--${foregroundCopyFont});
  	--foregroundCaptionFont: var(--${foregroundCaptionFont});
  `;
  */


  var fontCss = ``;

  if (foregroundHeadlineFont !== null && foregroundHeadlineFont !== 'inherit') {
    fontCss += `--foregroundHeadlineFont: var(--${foregroundHeadlineFont});`;
  }

  if (foregroundCopyFont !== null && foregroundCopyFont !== 'inherit') {
    fontCss += `--foregroundCopyFont: var(--${foregroundCopyFont});`;
  }

  if (foregroundCaptionFont !== null && foregroundCaptionFont !== 'inherit') {
    fontCss += `--foregroundCaptionFont: var(--${foregroundCaptionFont});`;
  }
  /*
  	--spacingMobile: ${spacingMobileStack};
  */


  var sizingCss = ``;

  if (spacingMobileStack !== "undefined") {
    sizingCss += `--spacingMobile: ${spacingMobileStack};`;
  }

  if (spacingTabletStack !== "undefined") {
    sizingCss += `--spacingTablet: ${spacingTabletStack};`;
  }

  if (spacingDesktopStack !== "undefined") {
    sizingCss += `--spacingDesktop: ${spacingDesktopStack};`;
  } // Add CSS based on the mode


  if (styleMode == 'custom') {
    combinedCss += fgbgCss + fontCss + sizingCss;
  }

  if (styleMode == 'named') {
    combinedCss += fontCss + sizingCss;
  } // Remove Newlines, Tabs are spaces


  var compressedCSS = combinedCss.replaceAll("\n", "").replaceAll("\t", " "); // Remove extraneous spaces

  compressedCSS = compressedCSS.replace(/\s+/g, ' ').trim(); // Return style when enabled

  if (styleEnabled) {
    return compressedCSS;
  } // Otherwise Return False


  return false;
}; // This will be a string of CSS not a React-CSS-Object. This is different from other areas of the app which require
// the use of the React-CSS-object format, such as Edit.js
// console.log("calculatedInlineVars ", calculatedInlineVars);


/* harmony default export */ __webpack_exports__["default"] = (calculatedInlineVars);

/***/ }),

/***/ "./src/library/calculated/calculatedPadding.js":
/*!*****************************************************!*\
  !*** ./src/library/calculated/calculatedPadding.js ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// Returns a computed value for gradient
const calculatedPadding = spacingObject => {
  // Return Shorthand if all values match!
  if (spacingObject.top == spacingObject.right && spacingObject.top == spacingObject.left && spacingObject.top == spacingObject.bottom) {
    return `${spacingObject.top}`;
  } // Return 4 point set


  return `${spacingObject.top} ${spacingObject.right} ${spacingObject.bottom} ${spacingObject.left}`;
};

/* harmony default export */ __webpack_exports__["default"] = (calculatedPadding);

/***/ }),

/***/ "./src/library/calculated/calculatedRgbaString.js":
/*!********************************************************!*\
  !*** ./src/library/calculated/calculatedRgbaString.js ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// Returns a string which identifies the selected Block Style
const calculatedRgbaString = function (value) {
  return "rgba(" + value.rgb.r + "," + value.rgb.g + "," + value.rgb.b + "," + value.rgb.a + ")";
};

/* harmony default export */ __webpack_exports__["default"] = (calculatedRgbaString);

/***/ }),

/***/ "./src/library/calculated/calculatedStyleObj.js":
/*!******************************************************!*\
  !*** ./src/library/calculated/calculatedStyleObj.js ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _calculated__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./calculated */ "./src/library/calculated/calculated.js");
 // Returns an object containing CSS values, this is used inside the editor 

const calculatedStyleObj = attributes => {
  const {
    styleMode,
    foregroundColor,
    headlineColor,
    linkColor,
    dropcapColor,
    blockquoteColor,
    selectionFGColor,
    selectionBGColor,
    lineartColor,
    foregroundHeadlineFont,
    foregroundCopyFont,
    foregroundCaptionFont
  } = attributes;
  const bgImageStack = _calculated__WEBPACK_IMPORTED_MODULE_0__["default"].calculatedBgImage(attributes);
  const bgColorStack = _calculated__WEBPACK_IMPORTED_MODULE_0__["default"].calculatedBgColor(attributes);
  const bgSizeSm = _calculated__WEBPACK_IMPORTED_MODULE_0__["default"].calculatedBGIMGSize(attributes, 'sm');
  const bgSizeMd = _calculated__WEBPACK_IMPORTED_MODULE_0__["default"].calculatedBGIMGSize(attributes, 'md');
  const bgSize = _calculated__WEBPACK_IMPORTED_MODULE_0__["default"].calculatedBGIMGSize(attributes, 'lg');
  const bgPosition = _calculated__WEBPACK_IMPORTED_MODULE_0__["default"].calculatedBgPos(attributes);
  const bgAttachment = _calculated__WEBPACK_IMPORTED_MODULE_0__["default"].calculatedBGIMGAtt(attributes);
  const bgRepeat = _calculated__WEBPACK_IMPORTED_MODULE_0__["default"].calculatedBGIMGRepeat(attributes);
  const spacingMobileStack = _calculated__WEBPACK_IMPORTED_MODULE_0__["default"].calculatedPadding(attributes.spacingMobile);
  const spacingTabletStack = _calculated__WEBPACK_IMPORTED_MODULE_0__["default"].calculatedPadding(attributes.spacingTablet);
  const spacingDesktopStack = _calculated__WEBPACK_IMPORTED_MODULE_0__["default"].calculatedPadding(attributes.spacingDesktop); // Default Obj

  let styleObj = {
    '--backgroundColor': "red"
  };
  const fgbgObj = {
    // Background
    '--backgroundColor': bgColorStack,
    // Foreground
    '--foregroundColor': foregroundColor,
    '--headlineColor': headlineColor,
    '--linkColor': linkColor,
    '--dropcapColor': dropcapColor,
    '--blockquoteColor': blockquoteColor,
    '--selectionFGColor': selectionFGColor,
    '--selectionBGColor': selectionBGColor,
    '--lineartColor': lineartColor
  }; // Add Background Image properties as a group (depends on stack)

  if (bgImageStack) {
    fgbgObj['--backgroundImage'] = bgImageStack;
    fgbgObj['--backgroundSizeSm'] = bgSizeSm;
    fgbgObj['--backgroundSizeMd'] = bgSizeMd;
    fgbgObj['--backgroundSize'] = bgSize;
    fgbgObj['--backgroundPosition'] = bgPosition;
    fgbgObj['--backgroundAttachment'] = bgAttachment;
    fgbgObj['--backgroundRepeat'] = bgRepeat;
  } // Build Up Typography Support


  const typographyObj = {}; // Selectively add Font Objects to respect "inherit" option

  if (foregroundHeadlineFont !== null && foregroundHeadlineFont !== 'inherit') {
    typographyObj['--foregroundHeadlineFont'] = 'var(--' + foregroundHeadlineFont + ')';
  }

  if (foregroundCopyFont !== null && foregroundCopyFont !== 'inherit') {
    typographyObj['--foregroundCopyFont'] = 'var(--' + foregroundCopyFont + ')';
  }

  if (foregroundCaptionFont !== null && foregroundCaptionFont !== 'inherit') {
    typographyObj['--foregroundCaptionFont'] = 'var(--' + foregroundCaptionFont + ')';
  } // Build Up Sizing Support


  const sizingObj = {}; // Mobile, Tablet, Desktop. This prevents empty vals from being saved

  if (spacingMobileStack !== "undefined") {
    sizingObj['--spacingMobile'] = spacingMobileStack;
  }

  if (spacingTabletStack !== "undefined") {
    sizingObj['--spacingTablet'] = spacingTabletStack;
  }

  if (spacingDesktopStack !== "undefined") {
    sizingObj['--spacingDesktop'] = spacingDesktopStack;
  } // Selectively spread values into the styleObj based on the styleMode
  // This prevents unnecessary values from being saved and displayed


  if (styleMode === 'named') {
    styleObj = { ...typographyObj,
      ...sizingObj
    };
  }

  if (styleMode === 'custom') {
    styleObj = { ...fgbgObj,
      ...typographyObj,
      ...sizingObj
    };
  } // Return formatted Style Object


  return styleObj;
};

/* harmony default export */ __webpack_exports__["default"] = (calculatedStyleObj);

/***/ }),

/***/ "./src/library/helpers/PxColorBox/PxColorBox.js":
/*!******************************************************!*\
  !*** ./src/library/helpers/PxColorBox/PxColorBox.js ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ PxColorBox; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);


function PxColorBox(props) {
  const {
    name,
    title,
    attributes,
    setAttributes
  } = props; // { name, title, attributes, setAttributes }

  const onColorChange = function (colorValue) {
    let cleanColor = colorValue !== undefined ? colorValue : '';
    console.log("cleanColor is ", cleanColor);
    console.log("name is ", name); // console.log(setAttributes);

    console.log(props);
    setAttributes({
      [name]: cleanColor
    });
  };

  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "px-colorbox"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h2", null, "UI ", title, " Color"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    type: "checkbox",
    id: `${name}Swatch`,
    name: `${name}Swatch`
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
    htmlFor: `${name}Swatch`
  }, "Palette"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, `${name}`), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.ColorPalette, {
    value: attributes[name],
    onChange: onColorChange,
    enableAlpha: true
  }));
}

/***/ }),

/***/ "./src/save.js":
/*!*********************!*\
  !*** ./src/save.js ***!
  \*********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ save; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _src_library_calculated_calculated__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../src/library/calculated/calculated */ "./src/library/calculated/calculated.js");

// Node modules
 // WordPress Modules


 // Custom modules

 // Export Save Function

function save(props) {
  // Destructure props
  const {
    attributes: {
      namedstyle,
      styleMode,
      foregroundHeadlineFont,
      foregroundCopyFont,
      foregroundCaptionFont
    }
  } = props; // Retrieve Inline CSS using helper function

  const inlineVarCSS = _src_library_calculated_calculated__WEBPACK_IMPORTED_MODULE_4__["default"].calculatedInlineVars(props.attributes); // Set classnames (font-classes allow for fine-tuning)

  const classes = classnames__WEBPACK_IMPORTED_MODULE_1___default()("xx-styled", {
    [`xx-styled--headlinefont-${foregroundHeadlineFont}`]: foregroundHeadlineFont !== 'inherit'
  }, {
    [`xx-styled--copyfont-${foregroundCopyFont}`]: foregroundCopyFont !== 'inherit'
  }, {
    [`xx-styled--captionfont-${foregroundCaptionFont}`]: foregroundCaptionFont !== 'inherit'
  }); // Create a BlockProps Object

  const blockProps = {
    className: classes,
    style: styleMode == 'custom' || styleMode == 'named' ? inlineVarCSS : {},
    'data-theme': styleMode == 'named' ? namedstyle : ''
  }; // Save BlockProps and InnerBlocks content

  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.useBlockProps.save(blockProps), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.InnerBlocks.Content, null));
}

/***/ }),

/***/ "./node_modules/classnames/index.js":
/*!******************************************!*\
  !*** ./node_modules/classnames/index.js ***!
  \******************************************/
/***/ (function(module, exports) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
  Copyright (c) 2018 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;

	function classNames() {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg)) {
				if (arg.length) {
					var inner = classNames.apply(null, arg);
					if (inner) {
						classes.push(inner);
					}
				}
			} else if (argType === 'object') {
				if (arg.toString === Object.prototype.toString) {
					for (var key in arg) {
						if (hasOwn.call(arg, key) && arg[key]) {
							classes.push(key);
						}
					}
				} else {
					classes.push(arg.toString());
				}
			}
		}

		return classes.join(' ');
	}

	if ( true && module.exports) {
		classNames.default = classNames;
		module.exports = classNames;
	} else if (true) {
		// register as 'classnames', consistent with npm package name
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
			return classNames;
		}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {}
}());


/***/ }),

/***/ "./src/components/StyledPreview/StyledPreview.scss":
/*!*********************************************************!*\
  !*** ./src/components/StyledPreview/StyledPreview.scss ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/components/StyledTile/StyledTile.scss":
/*!***************************************************!*\
  !*** ./src/components/StyledTile/StyledTile.scss ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/editor.scss":
/*!*************************!*\
  !*** ./src/editor.scss ***!
  \*************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "@wordpress/block-editor":
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["blockEditor"];

/***/ }),

/***/ "@wordpress/blocks":
/*!********************************!*\
  !*** external ["wp","blocks"] ***!
  \********************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["blocks"];

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["components"];

/***/ }),

/***/ "@wordpress/dom-ready":
/*!**********************************!*\
  !*** external ["wp","domReady"] ***!
  \**********************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["domReady"];

/***/ }),

/***/ "@wordpress/edit-post":
/*!**********************************!*\
  !*** external ["wp","editPost"] ***!
  \**********************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["editPost"];

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["element"];

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["i18n"];

/***/ }),

/***/ "@wordpress/plugins":
/*!*********************************!*\
  !*** external ["wp","plugins"] ***!
  \*********************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["plugins"];

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/extends.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/extends.js ***!
  \************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _extends; }
/* harmony export */ });
function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function (target) {
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

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	!function() {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = function(result, chunkIds, fn, priority) {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var chunkIds = deferred[i][0];
/******/ 				var fn = deferred[i][1];
/******/ 				var priority = deferred[i][2];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every(function(key) { return __webpack_require__.O[key](chunkIds[j]); })) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	!function() {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"index": 0,
/******/ 			"./style-index": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = function(chunkId) { return installedChunks[chunkId] === 0; };
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = function(parentChunkLoadingFunction, data) {
/******/ 			var chunkIds = data[0];
/******/ 			var moreModules = data[1];
/******/ 			var runtime = data[2];
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some(function(id) { return installedChunks[id] !== 0; })) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkxx_styled"] = self["webpackChunkxx_styled"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["./style-index"], function() { return __webpack_require__("./src/index.js"); })
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=index.js.map