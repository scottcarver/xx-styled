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
      setAttributes
    } = this.props;
    var combinedCss = ` 
			/* For Admin */
			.wp-block-section--${blockID} .badoop{
				padding: ${spacingMobile.top} ${spacingMobile.right} ${spacingMobile.bottom} ${spacingMobile.left};
			}
			@media(min-width: 992px){
				.wp-block-section--${blockID} .badoop{ 
					padding: ${spacingTablet.top} ${spacingTablet.right} ${spacingTablet.bottom} ${spacingTablet.left};
				}
				.wp-block-section--${blockID} .subbadoop{
					border-color:pink;
				}
			}
			@media(min-width:1200px){
				.wp-block-section--${blockID} .badoop{ 
					padding: ${spacingDesktop.top} ${spacingDesktop.right} ${spacingDesktop.bottom} ${spacingDesktop.left};
				}
				.wp-block-section--${blockID} .subbadoop{
					border-color:yellow;
				}
			}	
		`; // Remove Newlines, Tabs are spaces

    var compressedCSS = combinedCss.replaceAll("\n", "").replaceAll("\t", " "); // Remove extraneous spaces

    compressedCSS = compressedCSS.replace(/\s+/g, ' ').trim();
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "badoop",
      style: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        top: 0,
        left: 0,
        maxWidth: "none"
      }
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "subbadoop",
      style: {
        border: "dashed 1px black",
        height: "100%"
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
    }, "Fixed"))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      class: "px-simplerow px-simplerow--shortheadline"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h2", null, "Background Position"), this.props.position), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      class: "px-sidepanel"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      class: "px-simplerow"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", null, "Vertical")), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      class: "px-buttongroup px-buttongroup--small"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ButtonGroup, {
      "aria-label": __("Column Layout")
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Button, {
      isPrimary: backgroundImageAlignVert === "top",
      onClick: () => {
        setAttributes({
          backgroundImageAlignVert: "top"
        });
      }
    }, "Top"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Button, {
      isPrimary: backgroundImageAlignVert === "center",
      onClick: () => {
        setAttributes({
          backgroundImageAlignVert: "center"
        });
      }
    }, "Center"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Button, {
      isPrimary: backgroundImageAlignVert === "bottom",
      onClick: () => {
        setAttributes({
          backgroundImageAlignVert: "bottom"
        });
      }
    }, "Bottom"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Button, {
      isPrimary: backgroundImageAlignVert === "custom",
      onClick: () => {
        setAttributes({
          backgroundImageAlignVert: "custom"
        });
      }
    }, "Custom"))), backgroundImageAlignVert == "custom" && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      class: "px-columnrow px-columnrow--smallspaceabove"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.RangeControl, {
      label: __("Custom"),
      value: backgroundImageAlignVertCustom,
      onChange: backgroundImageAlignVertCustom => {
        setAttributes({
          backgroundImageAlignVertCustom
        });
      },
      min: -50,
      max: 200
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      class: "px-simplerow px-simplerow--padtop"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", null, "Horizontal"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("br", null)), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      class: "px-buttongroup px-buttongroup--small"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ButtonGroup, {
      "aria-label": __("Column Layout")
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Button, {
      isPrimary: backgroundImageAlignHori === "left",
      onClick: () => {
        setAttributes({
          backgroundImageAlignHori: "left"
        });
      }
    }, "Left"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Button, {
      isPrimary: backgroundImageAlignHori === "center",
      onClick: () => {
        setAttributes({
          backgroundImageAlignHori: "center"
        });
      }
    }, "Center"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Button, {
      isPrimary: backgroundImageAlignHori === "right",
      onClick: () => {
        setAttributes({
          backgroundImageAlignHori: "right"
        });
      }
    }, "Right"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Button, {
      isPrimary: backgroundImageAlignHori === "custom",
      onClick: () => {
        setAttributes({
          backgroundImageAlignHori: "custom"
        });
      }
    }, "Custom"))), backgroundImageAlignHori == "custom" && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      class: "px-columnrow px-columnrow--smallspaceabove"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.RangeControl, {
      label: __("Custom"),
      value: backgroundImageAlignHoriCustom,
      onChange: backgroundImageAlignHoriCustom => {
        setAttributes({
          backgroundImageAlignHoriCustom
        });
      },
      min: -50,
      max: 200
    }))));
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
/* harmony import */ var _lib_js_ColorObgtoRgbaString__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./lib/js/ColorObgtoRgbaString */ "./assets/lib/js/ColorObgtoRgbaString.js");



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
        backgroundColor0,
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
      "px-tabwrap--centered": themTabs.length > 0
    });

    const onImageSelect = imageObject => setAttributes({
      backgroundImage: imageObject.sizes.full.url
    });
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
          value: backgroundColor0,
          onChange: backgroundColor0 => setAttributes({
            backgroundColor0
          })
        })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
          className: bgcolor1classes
        }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(ColorPicker, {
          color: backgroundColor0,
          onChangeComplete: value => setAttributes({
            backgroundColor0: value.hex
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
        return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
          className: "px-simplerow px-simplerow--shortheadline"
        }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("h2", null, "Background Image")), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.FocalPointPicker, {
          url: backgroundImage // dimensions={ dimensions }
          ,
          value: focalPoint,
          onChange: focalPoint => setAttributes({
            focalPoint: focalPoint
          }) // onChange={ ( focalPoint ) => setFocalPoint( { focalPoint } ) }

        }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.MediaUploadCheck, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.MediaUpload, {
          onSelect: onImageSelect,
          value: backgroundImage,
          render: _ref => {
            let {
              open
            } = _ref;
            return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(Button, {
              onClick: open
            }, "Open Media Library");
          }
        })), backgroundImage && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_BGImgControl__WEBPACK_IMPORTED_MODULE_5__["default"], (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
          setAttributes
        }, this.props))));
      }

      const mycurrentproblem = classnames__WEBPACK_IMPORTED_MODULE_2___default()("px-statusbox", {
        "px-statusbox--disabled": !bgGelEnabled
      }); // BG Gel Tab

      if (name == "bggeltab") {
        return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
          className: "px-colorbox px-colorbox--paddingbelow px-colorbox--linebelow"
        }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("h2", null, "Selected Text"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("input", {
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
            backgroundColor3: (0,_lib_js_ColorObgtoRgbaString__WEBPACK_IMPORTED_MODULE_8__["default"])(value)
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
            backgroundColor1: (0,_lib_js_ColorObgtoRgbaString__WEBPACK_IMPORTED_MODULE_8__["default"])(value)
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
            backgroundColor2: (0,_lib_js_ColorObgtoRgbaString__WEBPACK_IMPORTED_MODULE_8__["default"])(value)
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

/***/ "./assets/InlineStyleVars.js":
/*!***********************************!*\
  !*** ./assets/InlineStyleVars.js ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ InlineStyleVars; }
/* harmony export */ });
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _lib_js_calculatedBgImage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lib/js/calculatedBgImage */ "./assets/lib/js/calculatedBgImage.js");
/* harmony import */ var _lib_js_calculatedBgColor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lib/js/calculatedBgColor */ "./assets/lib/js/calculatedBgColor.js");
/* harmony import */ var _lib_js_calculatedBGIMGSize__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./lib/js/calculatedBGIMGSize */ "./assets/lib/js/calculatedBGIMGSize.js");
/* harmony import */ var _lib_js_calculatedBgPos__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./lib/js/calculatedBgPos */ "./assets/lib/js/calculatedBgPos.js");
/* harmony import */ var _lib_js_calculatedBGIMGAtt__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./lib/js/calculatedBGIMGAtt */ "./assets/lib/js/calculatedBGIMGAtt.js");
/* harmony import */ var _lib_js_calculatedBGIMGRepeat__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./lib/js/calculatedBGIMGRepeat */ "./assets/lib/js/calculatedBGIMGRepeat.js");
/* Internal block libraries */
const {
  __
} = wp.i18n;

 // Custom Fucntions







/* Create a Block Controls wrapper Component */

/**
 * Class
 */

function replaceAll(string, search, replace) {
  return string.split(search).join(replace);
}

class InlineStyleVars extends _wordpress_element__WEBPACK_IMPORTED_MODULE_1__.Component {
  constructor() {
    super(...arguments);
  }

  render() {
    const {
      attributes: {
        styleEnabled,
        babygradient,
        dropcapColor,
        bgColorEnabled,
        blockID,
        bgImage,
        headlineColor,
        foregroundColor,
        linkColor,
        selectionFGColor,
        selectionBGColor,
        spacingMobile,
        spacingTablet,
        spacingDesktop
      },
      setAttributes
    } = this.props;

    const toggleStyleEnabled = () => setAttributes({
      styleEnabled: !styleEnabled
    }); // boop


    const bgImageStack = (0,_lib_js_calculatedBgImage__WEBPACK_IMPORTED_MODULE_2__["default"])(this.props.attributes);
    const bgColorStack = (0,_lib_js_calculatedBgColor__WEBPACK_IMPORTED_MODULE_3__["default"])(this.props.attributes);
    const bgSize = (0,_lib_js_calculatedBGIMGSize__WEBPACK_IMPORTED_MODULE_4__["default"])(this.props.attributes, 'lg');
    const bgPosition = (0,_lib_js_calculatedBgPos__WEBPACK_IMPORTED_MODULE_5__["default"])(this.props.attributes);
    const bgAttachment = (0,_lib_js_calculatedBGIMGAtt__WEBPACK_IMPORTED_MODULE_6__["default"])(this.props.attributes);
    const bgRepeat = (0,_lib_js_calculatedBGIMGRepeat__WEBPACK_IMPORTED_MODULE_7__["default"])(this.props.attributes); // body[data-color='custom'] 
    // body[data-color='custom'] 

    const styleObj = {
      '--backgroundImage': bgImageStack,
      '--foregroundColor': foregroundColor,
      '--backgroundColor0': backgroundColor0,
      '--headlineColor': headlineColor,
      '--linkColor': linkColor
    }; // console.log('meep' );

    return styleObj;
  }

}

/***/ }),

/***/ "./assets/OnPageStyle.js":
/*!*******************************!*\
  !*** ./assets/OnPageStyle.js ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ OnPageStyle; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _lib_js_calculatedBgImage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lib/js/calculatedBgImage */ "./assets/lib/js/calculatedBgImage.js");
/* harmony import */ var _lib_js_calculatedBgColor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lib/js/calculatedBgColor */ "./assets/lib/js/calculatedBgColor.js");
/* harmony import */ var _lib_js_calculatedBGIMGSize__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./lib/js/calculatedBGIMGSize */ "./assets/lib/js/calculatedBGIMGSize.js");
/* harmony import */ var _lib_js_calculatedBgPos__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./lib/js/calculatedBgPos */ "./assets/lib/js/calculatedBgPos.js");
/* harmony import */ var _lib_js_calculatedBGIMGAtt__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./lib/js/calculatedBGIMGAtt */ "./assets/lib/js/calculatedBGIMGAtt.js");
/* harmony import */ var _lib_js_calculatedBGIMGRepeat__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./lib/js/calculatedBGIMGRepeat */ "./assets/lib/js/calculatedBGIMGRepeat.js");


/* Internal block libraries */
const {
  __
} = wp.i18n;

 // Custom Fucntions







/* Create a Block Controls wrapper Component */

/**
 * Class
 */

function replaceAll(string, search, replace) {
  return string.split(search).join(replace);
}

class OnPageStyle extends _wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor() {
    super(...arguments);
  }

  render() {
    const {
      attributes: {
        styleEnabled,
        babygradient,
        dropcapColor,
        blockquoteColor,
        backgroundColor0,
        bgColorEnabled,
        blockID,
        bgImage,
        headlineColor,
        foregroundColor,
        linkColor,
        selectionFGColor,
        selectionBGColor,
        spacingMobile,
        spacingTablet,
        spacingDesktop
      },
      setAttributes
    } = this.props;

    const toggleStyleEnabled = () => setAttributes({
      styleEnabled: !styleEnabled
    }); // boop


    const bgImageStack = (0,_lib_js_calculatedBgImage__WEBPACK_IMPORTED_MODULE_2__["default"])(this.props.attributes);
    const bgColorStack = (0,_lib_js_calculatedBgColor__WEBPACK_IMPORTED_MODULE_3__["default"])(this.props.attributes);
    const bgSize = (0,_lib_js_calculatedBGIMGSize__WEBPACK_IMPORTED_MODULE_4__["default"])(this.props.attributes, 'sm'); // sm, md, lg

    const bgPosition = (0,_lib_js_calculatedBgPos__WEBPACK_IMPORTED_MODULE_5__["default"])(this.props.attributes);
    const bgAttachment = (0,_lib_js_calculatedBGIMGAtt__WEBPACK_IMPORTED_MODULE_6__["default"])(this.props.attributes);
    const bgRepeat = (0,_lib_js_calculatedBGIMGRepeat__WEBPACK_IMPORTED_MODULE_7__["default"])(this.props.attributes); // body[data-color='custom'] 
    // body[data-color='custom'] 

    const styleObj = {
      '--backgroundImage': bgImageStack,
      '--backgroundColor': bgColorStack,
      '--backgroundSizeSm': bgSize['sm'],
      '--backgroundSizeMd': bgSize['md'],
      '--backgroundSize': bgSize['lg'],
      '--backgroundPosition': bgPosition,
      '--backgroundAttachment': bgAttachment,
      '--backgroundRepeat': bgRepeat,
      '--foregroundColor': foregroundColor,
      '--headlineColor': headlineColor,
      '--linkColor': linkColor,
      '--selectionColor': linkColor,
      '--selectionBGColor': linkColor
    };
    const styleInline = `
			--backgroundImage: ${bgImageStack};
		`; // body[data-color='custom'] 
    // body[data-color='custom'] 

    var combinedCss = ` 
			.wp-block-section--${blockID} { 
				background-image: ${bgImageStack};
				background-color: ${bgColorStack};
				color: ${foregroundColor};
				background-size: ${bgSize.lg};
				background-position: ${bgPosition};
				background-attachment: ${bgAttachment};
				background-repeat: ${bgRepeat};
				padding: ${spacingMobile.top} ${spacingMobile.right} ${spacingMobile.bottom} ${spacingMobile.left};
			}
			
			.wp-block-section--${blockID} *::selection {
				color: ${selectionFGColor};
				background-color: ${selectionBGColor};
			}

			.wp-block-section--${blockID} h1, .wp-block-section--${blockID} h2, .wp-block-section--${blockID} h3,
			.wp-block-section--${blockID} h4, .wp-block-section--${blockID} h5, .wp-block-section--${blockID} h6{
				color: ${headlineColor};
			}

			.wp-block-section--${blockID} a{
				color: ${linkColor};
			}

			blockquote{
				color:${blockquoteColor};
			}
			.wp-block-section--${blockID} p.has-drop-cap:first-child:first-letter{color: ${dropcapColor};}

			p.has-drop-cap:not(:focus)::first-letter{color: ${dropcapColor};}

			@media(min-width: 992px){
				.wp-block-section--${blockID}{ 
					padding: ${spacingTablet.top} ${spacingTablet.right} ${spacingTablet.bottom} ${spacingTablet.left};
				}
			}
			@media(min-width:1200px){
				.wp-block-section--${blockID}{ 
					padding: ${spacingDesktop.top} ${spacingDesktop.right} ${spacingDesktop.bottom} ${spacingDesktop.left};
				}
			}			
		`; // Remove Newlines, Tabs are spaces

    var compressedCSS = combinedCss.replaceAll("\n", "").replaceAll("\t", " "); // Remove extraneous spaces

    compressedCSS = compressedCSS.replace(/\s+/g, ' ').trim();
    /*
    const stringRendered = <div style={styleObj}></div>;
    const words = stringRendered.split('"');
    console.log(words);	*/
    // Vars

    if (this.props.mode == "vars") {
      return styleObj;
    }

    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("style", {
      type: "text/css",
      dangerouslySetInnerHTML: {
        __html: compressedCSS
      }
    });
  }

}

/***/ }),

/***/ "./assets/components/StyledPreview.js":
/*!********************************************!*\
  !*** ./assets/components/StyledPreview.js ***!
  \********************************************/
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
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styled_preview_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styled-preview.scss */ "./assets/components/styled-preview.scss");
/* harmony import */ var _BGImgControl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../BGImgControl */ "./assets/BGImgControl.js");
/* harmony import */ var _BGGradControl__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../BGGradControl */ "./assets/BGGradControl.js");
/* harmony import */ var _lib_js_calculatedTabset__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../lib/js/calculatedTabset */ "./assets/lib/js/calculatedTabset.js");
/* harmony import */ var _lib_js_ColorObgtoRgbaString__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../lib/js/ColorObgtoRgbaString */ "./assets/lib/js/ColorObgtoRgbaString.js");


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

class StyledPreview extends _wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Component {
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
        backgroundColor0,
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
        foregroundCaptionFont
      },
      setAttributes
    } = this.props;
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "px-sidepanel"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "px-simplerow px-simplerow--padleft px-simplerow--padbottom"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("strong", null, "Preview:"))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "px-sidepanel"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "px-simplerow px-simplerow--padbottom"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "styled-preview",
      "data-viewtype": "stack"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "cube"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "layer layer-1 fgtext textual"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h1", null, "Foreground Text"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, "Lorem Ipsum Preview ", (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
      href: "#"
    }, "Stuffs"), " halibut ", (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", null, "Yoink!"))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "layer layer-2 fgcolor",
      style: {
        "color": "red"
      }
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "layer layer-3 bgimage"
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "layer layer-4 bgcolor"
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "layer layer-5 bgcolor2"
    }))))));
  }

}

/***/ }),

/***/ "./assets/lib/js/ColorObgtoRgbaString.js":
/*!***********************************************!*\
  !*** ./assets/lib/js/ColorObgtoRgbaString.js ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// Returns a string which identifies the selected Block Style
const ColorObgtoRgbaString = function (value) {
  return "rgba(" + value.rgb.r + "," + value.rgb.g + "," + value.rgb.b + "," + value.rgb.a + ")";
};

/* harmony default export */ __webpack_exports__["default"] = (ColorObgtoRgbaString);

/***/ }),

/***/ "./assets/lib/js/calculatedBGIMGAtt.js":
/*!*********************************************!*\
  !*** ./assets/lib/js/calculatedBGIMGAtt.js ***!
  \*********************************************/
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

/***/ "./assets/lib/js/calculatedBGIMGRepeat.js":
/*!************************************************!*\
  !*** ./assets/lib/js/calculatedBGIMGRepeat.js ***!
  \************************************************/
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

/***/ "./assets/lib/js/calculatedBGIMGSize.js":
/*!**********************************************!*\
  !*** ./assets/lib/js/calculatedBGIMGSize.js ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// Returns a computed value for background-size
const calculatedBGIMGSize = (attributes, key) => {
  console.log("key is", key);
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
  let activeData = backgroundImageSize; // if(key == 'sm'){ activeData = backgroundImageSizeSm;}
  // if(key == 'sm'){ activeData = backgroundImageSizeSm;}
  // Store each layer in an array

  const bgLayers = []; // Capture output in a string

  let bgLayersString = ""; // if background enabled

  if (bgGelEnabled) {
    bgLayers.push("cover");
  }

  console.log('backgroundImageSizeCustom', backgroundImageSizeCustom); // Note: The user can swap layer order of Gradient and Image using the backgroundStackFirst variable
  // Gradient Stacks First

  if (backgroundStackFirst == "gradient") {
    if (bgGradientEnabled) {
      bgLayers.push("cover");
    }

    if (bgImageEnabled && backgroundImage) {
      backgroundImageSize == "custom" ? bgLayers.push(backgroundImageSizeCustom) : bgLayers.push(backgroundImageSize);
    } // Image stacks first

  } else {
    if (bgImageEnabled && backgroundImage) {
      backgroundImageSize == "custom" ? bgLayers.push(backgroundImageSizeCustom) : bgLayers.push(backgroundImageSize);
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
  };
  return bgLayerObject; // return bgLayersString;
};

/* harmony default export */ __webpack_exports__["default"] = (calculatedBGIMGSize);

/***/ }),

/***/ "./assets/lib/js/calculatedBgColor.js":
/*!********************************************!*\
  !*** ./assets/lib/js/calculatedBgColor.js ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// Returns the final "background-color"
const calculatedBgColor = attributes => {
  // Get all of these variables
  const {
    bgColorEnabled,
    backgroundColor0
  } = attributes;

  if (bgColorEnabled && backgroundColor0 != null) {
    return backgroundColor0;
  } else {
    return "transparent";
  }
};

/* harmony default export */ __webpack_exports__["default"] = (calculatedBgColor);

/***/ }),

/***/ "./assets/lib/js/calculatedBgImage.js":
/*!********************************************!*\
  !*** ./assets/lib/js/calculatedBgImage.js ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _calculatedGradient__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./calculatedGradient */ "./assets/lib/js/calculatedGradient.js");
/* harmony import */ var _calculatedGel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./calculatedGel */ "./assets/lib/js/calculatedGel.js");
/* harmony import */ var _calculatedImg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./calculatedImg */ "./assets/lib/js/calculatedImg.js");
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
    bgLayersString += "none";
  }

  return bgLayersString;
};

/* harmony default export */ __webpack_exports__["default"] = (calculatedBgImage);

/***/ }),

/***/ "./assets/lib/js/calculatedBgPos.js":
/*!******************************************!*\
  !*** ./assets/lib/js/calculatedBgPos.js ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// Returns the final "background-position"
const calculatedBgPos = attributes => {
  // Get all of these variables
  const {
    backgroundImageAlignHori,
    backgroundImageAlignVert,
    backgroundImageAlignVertCustom,
    backgroundImageAlignHoriCustom
  } = attributes;
  let hSelect, vSelect; // Horizontal

  if (backgroundImageAlignHori == "custom") {
    hSelect = backgroundImageAlignHoriCustom + "%";
  } else {
    hSelect = backgroundImageAlignHori;
  } // Vertical


  if (backgroundImageAlignVert == "custom") {
    vSelect = backgroundImageAlignVertCustom + "%";
  } else {
    vSelect = backgroundImageAlignVert;
  } //  ${backgroundImageAlignHori} ${backgroundImageAlignVert};


  const composed = hSelect + " " + vSelect;
  console.log(composed);
  return composed;
};

/* harmony default export */ __webpack_exports__["default"] = (calculatedBgPos);

/***/ }),

/***/ "./assets/lib/js/calculatedGel.js":
/*!****************************************!*\
  !*** ./assets/lib/js/calculatedGel.js ***!
  \****************************************/
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

/***/ "./assets/lib/js/calculatedGradient.js":
/*!*********************************************!*\
  !*** ./assets/lib/js/calculatedGradient.js ***!
  \*********************************************/
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

/***/ "./assets/lib/js/calculatedImg.js":
/*!****************************************!*\
  !*** ./assets/lib/js/calculatedImg.js ***!
  \****************************************/
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

/***/ "./assets/lib/js/calculatedInlineVars.js":
/*!***********************************************!*\
  !*** ./assets/lib/js/calculatedInlineVars.js ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _calculatedBgImage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./calculatedBgImage */ "./assets/lib/js/calculatedBgImage.js");
/* harmony import */ var _calculatedBgColor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./calculatedBgColor */ "./assets/lib/js/calculatedBgColor.js");
/* harmony import */ var _calculatedBGIMGSize__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./calculatedBGIMGSize */ "./assets/lib/js/calculatedBGIMGSize.js");
/* harmony import */ var _calculatedBgPos__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./calculatedBgPos */ "./assets/lib/js/calculatedBgPos.js");
/* harmony import */ var _calculatedBGIMGAtt__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./calculatedBGIMGAtt */ "./assets/lib/js/calculatedBGIMGAtt.js");
/* harmony import */ var _calculatedBGIMGRepeat__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./calculatedBGIMGRepeat */ "./assets/lib/js/calculatedBGIMGRepeat.js");
/* harmony import */ var _calculatedPadding__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./calculatedPadding */ "./assets/lib/js/calculatedPadding.js");
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
    selectionFGColor,
    selectionBGColor,
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
  };

  console.log("CURIOUS", bgSize);
  var combinedCss = `
		--backgroundImage: ${bgImageStack};
		--backgroundColor: ${bgColorStack};
		--backgroundSizeSm: ${bgSizeSm};
		--backgroundSizeMd: ${bgSizeMd};
		--backgroundSize: ${bgSize};
		--backgroundPosition: ${bgPosition};
		--backgroundAttachment: ${bgAttachment};
		--backgroundRepeat: ${bgRepeat};
		--foregroundColor: ${foregroundColor};
		--headlineColor: ${headlineColor};
		--linkColor: ${linkColor};
		--dropcapColor: ${dropcapColor};
		--blockquoteColor: ${blockquoteColor};
		--lineartColor: ${lineartColor};
		--selectionFGColor: ${selectionFGColor};
		--selectionBGColor: ${selectionBGColor};
		--foregroundHeadlineFont: ${foregroundHeadlineFont};
		--foregroundCopyFont: ${foregroundCopyFont};
		--foregroundCaptionFont: ${foregroundCaptionFont};
		--spacingMobile: ${spacingMobileStack};
		--spacingTablet: ${spacingTabletStack};
		--spacingDesktop: ${spacingDesktopStack};
	`; // Remove Newlines, Tabs are spaces

  var compressedCSS = combinedCss.replaceAll("\n", "").replaceAll("\t", " "); // Remove extraneous spaces

  compressedCSS = compressedCSS.replace(/\s+/g, ' ').trim(); // Return style when enabled

  if (styleEnabled) {
    return compressedCSS;
  } // Otherwise Return False


  return false;
};

/* harmony default export */ __webpack_exports__["default"] = (calculatedInlineVars);

/***/ }),

/***/ "./assets/lib/js/calculatedPadding.js":
/*!********************************************!*\
  !*** ./assets/lib/js/calculatedPadding.js ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// Returns a computed value for gradient
const calculatedPadding = spacingObject => {
  // Return a Linear Gradient
  return `${spacingObject.top} ${spacingObject.right} ${spacingObject.bottom} ${spacingObject.left}`;
};

/* harmony default export */ __webpack_exports__["default"] = (calculatedPadding);

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
/* harmony import */ var _components_StyledPreview__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/StyledPreview */ "./assets/components/StyledPreview.js");
/* harmony import */ var _lib_js_calculatedTabset__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./lib/js/calculatedTabset */ "./assets/lib/js/calculatedTabset.js");
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
  IconButton,
  Placeholder,
  ColorIndicator,
  BaseControl,
  RangeControl,
  ColorPicker,
  SelectControl,
  CustomGradientPicker,
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
        heightEnabled,
        bgColorEnabled,
        bgGradientEnabled,
        bgImageEnabled,
        bgGelEnabled,
        backgroundStackFirst,
        backgroundColorCount,
        backgroundColor0,
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
        'backgroundColor0': '#000000',
        'foregroundColor': '#FFFFFF'
      },
      'red-bg': {
        'backgroundColor0': '#FF0000',
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
          isPrimary: foregroundHeadlineFont === "sans-serif",
          onClick: () => {
            setAttributes({
              foregroundHeadlineFont: "sans-serif"
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
          isPrimary: foregroundCopyFont === "sans-serif",
          onClick: () => {
            setAttributes({
              foregroundCopyFont: "sans-serif"
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
          isPrimary: foregroundCaptionFont === "sans-serif",
          onClick: () => {
            setAttributes({
              foregroundCaptionFont: "sans-serif"
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
    /*
    const doshit = function() {
    	themTabs = calculatedTabset(this.props);
    };
    
    let choices = [];
    var posts = select( 'core' ).getEntityRecords( 'postType', 'post' );
    console.log("No Joke! ", posts);
    */


    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
      className: "px-simplerow px-simplerow--padtop px-simplerow--padleft px-simplerow--padright"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(SelectControl, {
      label: __('Named Styles', 'awhitepixel'),
      options: [{
        value: null,
        label: 'Select a User',
        disabled: true
      }, {
        value: 'black-bg',
        label: 'Black BG'
      }, {
        value: 'red-bg',
        label: 'Red BG'
      }, {
        value: 'white-bg',
        label: 'White BG'
      }],
      disabled: styleEnabled // value={'c'}
      ,
      onChange: doStyleChange // onChange= { ( selection ) => { doStyleChange } }
      // onChange={(newval) => setAttributes({ 'backgroundColor0': '#cccccc' })}

    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
      className: "px-simplerow px-simplerow--first"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("label", {
      htmlFor: "styleenabled-form-toggle"
    }, __("Custom Styles Enabled", "pxblocks")), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(FormToggle, {
      id: "styleenabled-form-toggle",
      label: __("Custom Styles Enabled?", "pxblocks"),
      checked: styleEnabled,
      onChange: toggleStyleEnabled
    })), styleEnabled && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_components_StyledPreview__WEBPACK_IMPORTED_MODULE_4__["default"], (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      setAttributes
    }, this.props)), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(PanelBody, {
      title: __("Foreground", "pxblocks"),
      initialOpen: false,
      icon: "welcome-widgets-menus"
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
      }, {
        name: "fgfont",
        title: "Typography",
        className: "tab-three"
      }]
    }, tab => getForegroundTab(tab.name))))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(PanelBody, {
      title: __("Background", "pxblocks"),
      initialOpen: false,
      icon: "format-image"
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
    }, this.props))))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(PanelBody, {
      title: __("Responsive", "pxblocks"),
      initialOpen: false,
      icon: "image-flip-horizontal"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
      className: "px-simplerow px-simplerow--padtop px-simplerow--padbottom"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("label", {
      htmlFor: "heightenabled-form-toggle"
    }, __("Height Enabled", "pxblocks")), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(FormToggle, {
      id: "heightenabled-form-toggle",
      label: __("Styles Enabled", "pxblocks"),
      checked: heightEnabled,
      onChange: toggleHeightEnabled
    }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
      className: "px-sidepanel px-sidepanel--grey"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
      className: "px-simplerow px-simplerow--padtop"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__.__experimentalBoxControl, {
      label: "Mobile Spacing",
      values: spacingMobile,
      sides: ['top', 'left', 'right', 'bottom'],
      defaultValues: {
        top: '50px',
        left: '10%',
        right: '10%',
        bottom: '50px'
      },
      onChange: newdata => {
        setAttributes({
          spacingMobile: newdata
        });
      }
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
      className: "px-simplerow"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__.__experimentalBoxControl, {
      label: "Desktop Tablet",
      values: spacingTablet,
      sides: ['top', 'left', 'right', 'bottom'],
      defaultValues: {
        top: '50px',
        left: '10%',
        right: '10%',
        bottom: '50px'
      },
      onChange: newdata => {
        setAttributes({
          spacingTablet: newdata
        });
      }
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
      className: "px-simplerow"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__.__experimentalBoxControl, {
      label: "Desktop Spacing",
      values: spacingDesktop,
      sides: ['top', 'left', 'right', 'bottom'],
      defaultValues: {
        top: '50px',
        left: '10%',
        right: '10%',
        bottom: '50px'
      },
      onChange: newdata => {
        setAttributes({
          spacingDesktop: newdata
        });
      }
    }))))));
  }

}
{
  /* 
  backgroundImageSize, backgroundImageSizeCustom, backgroundImageRepeat, backgroundImageAttachment, backgroundImageAlignVert, backgroundImageAlignHori, backgroundImageAlignVertCustom, backgroundImageAlignHoriCustom, 
  */
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
/* harmony export */   "default": function() { return /* binding */ Edit; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./editor.scss */ "./src/editor.scss");
/* harmony import */ var _assets_styleControls__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../assets/styleControls */ "./assets/styleControls.js");
/* harmony import */ var _assets_OnPageStyle__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../assets/OnPageStyle */ "./assets/OnPageStyle.js");
/* harmony import */ var _assets_AdminStyle__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../assets/AdminStyle */ "./assets/AdminStyle.js");
/* harmony import */ var _assets_InlineStyleVars__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../assets/InlineStyleVars */ "./assets/InlineStyleVars.js");
/* harmony import */ var _assets_lib_js_calculatedBgImage__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../assets/lib/js/calculatedBgImage */ "./assets/lib/js/calculatedBgImage.js");
/* harmony import */ var _assets_lib_js_calculatedBgColor__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../assets/lib/js/calculatedBgColor */ "./assets/lib/js/calculatedBgColor.js");
/* harmony import */ var _assets_lib_js_calculatedBGIMGSize__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../assets/lib/js/calculatedBGIMGSize */ "./assets/lib/js/calculatedBGIMGSize.js");
/* harmony import */ var _assets_lib_js_calculatedBgPos__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../assets/lib/js/calculatedBgPos */ "./assets/lib/js/calculatedBgPos.js");
/* harmony import */ var _assets_lib_js_calculatedBGIMGAtt__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../assets/lib/js/calculatedBGIMGAtt */ "./assets/lib/js/calculatedBGIMGAtt.js");
/* harmony import */ var _assets_lib_js_calculatedBGIMGRepeat__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../assets/lib/js/calculatedBGIMGRepeat */ "./assets/lib/js/calculatedBGIMGRepeat.js");
/* harmony import */ var _assets_lib_js_calculatedInlineVars__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../assets/lib/js/calculatedInlineVars */ "./assets/lib/js/calculatedInlineVars.js");
/* harmony import */ var _assets_lib_js_calculatedPadding__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../assets/lib/js/calculatedPadding */ "./assets/lib/js/calculatedPadding.js");


// Node modules


 // Custom CSS

 // Custom Components




 // Custom Funtions









function Edit(props) {
  const inlineVarCSS = (0,_assets_lib_js_calculatedInlineVars__WEBPACK_IMPORTED_MODULE_16__["default"])(props.attributes); //	const props = useBlockProps();

  console.log("edit INLINE props", inlineVarCSS);
  const {
    attributes: {
      styleEnabled,
      blockID,
      heightEnabled,
      foregroundColor,
      blockAlignment,
      highContrast,
      foregroundHeadlineFont,
      foregroundCopyFont,
      foregroundCaptionFont,
      headlineColor,
      selectionFGColor,
      selectionBGColor,
      linkColor,
      dropcapColor,
      blockquoteColor,
      lineartColor,
      spacingMobile,
      spacingTablet,
      spacingDesktop
    },
    className,
    clientId
  } = props;
  const {
    setAttributes
  } = props;

  if (blockID == "") {
    setAttributes({
      blockID: clientId
    });
  }

  const classes = classnames__WEBPACK_IMPORTED_MODULE_4___default()(className, "xx-styled", `wp-block-styled--${blockID}` // { "wp-block--heightenabled": heightEnabled },
  // `wp-block--headline-${foregroundHeadlineFont}`,
  // `wp-block--copy-${foregroundCopyFont}`,
  // `wp-block--caption-${foregroundCaptionFont}`
  ); // boop

  const bgImageStack = (0,_assets_lib_js_calculatedBgImage__WEBPACK_IMPORTED_MODULE_10__["default"])(props.attributes);
  const bgColorStack = (0,_assets_lib_js_calculatedBgColor__WEBPACK_IMPORTED_MODULE_11__["default"])(props.attributes);
  const bgSize = (0,_assets_lib_js_calculatedBGIMGSize__WEBPACK_IMPORTED_MODULE_12__["default"])(props.attributes);
  const bgPosition = (0,_assets_lib_js_calculatedBgPos__WEBPACK_IMPORTED_MODULE_13__["default"])(props.attributes);
  const bgAttachment = (0,_assets_lib_js_calculatedBGIMGAtt__WEBPACK_IMPORTED_MODULE_14__["default"])(props.attributes);
  const bgRepeat = (0,_assets_lib_js_calculatedBGIMGRepeat__WEBPACK_IMPORTED_MODULE_15__["default"])(props.attributes);
  const spacingMobileStack = (0,_assets_lib_js_calculatedPadding__WEBPACK_IMPORTED_MODULE_17__["default"])(props.attributes.spacingMobile);
  const spacingTabletStack = (0,_assets_lib_js_calculatedPadding__WEBPACK_IMPORTED_MODULE_17__["default"])(props.attributes.spacingTablet);
  const spacingDesktopStack = (0,_assets_lib_js_calculatedPadding__WEBPACK_IMPORTED_MODULE_17__["default"])(props.attributes.spacingDesktop); // body[data-color='custom'] 
  // body[data-color='custom'] 

  const styleObj = {
    // Background
    '--backgroundImage': bgImageStack,
    '--backgroundColor': bgColorStack,
    '--backgroundSizeSm': bgSize['sm'],
    '--backgroundSizeMd': bgSize['md'],
    '--backgroundSize': bgSize['lg'],
    '--backgroundPosition': bgPosition,
    '--backgroundAttachment': bgAttachment,
    '--backgroundRepeat': bgRepeat,
    // Foreground
    '--foregroundColor': foregroundColor,
    '--headlineColor': headlineColor,
    '--linkColor': linkColor,
    '--dropcapColor': dropcapColor,
    '--blockquoteColor': blockquoteColor,
    '--selectionFGColor': selectionFGColor,
    '--selectionBGColor': selectionBGColor,
    '--lineartColor': lineartColor,
    // Typography
    '--foregroundHeadlineFont': foregroundHeadlineFont,
    '--foregroundCopyFont': foregroundCopyFont,
    '--foregroundCaptionFont': foregroundCaptionFont,
    // Spacing
    '--spacingMobile': spacingMobileStack,
    '--spacingTablet': spacingTabletStack,
    '--spacingDesktop': spacingDesktopStack
  };
  const blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.useBlockProps)({
    className: classes,
    style: styleEnabled ? styleObj : {},
    id: blockID,
    'data-theme': styleEnabled ? "none" : "undefined"
  });
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", blockProps, styleEnabled && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_assets_AdminStyle__WEBPACK_IMPORTED_MODULE_8__["default"], (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    setAttributes
  }, props)), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.InspectorControls, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_assets_styleControls__WEBPACK_IMPORTED_MODULE_6__["default"], (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    setAttributes
  }, props))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.InnerBlocks, null));
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
/* harmony import */ var _wordpress_dom_ready__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/dom-ready */ "@wordpress/dom-ready");
/* harmony import */ var _wordpress_dom_ready__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_dom_ready__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./editor.scss */ "./src/editor.scss");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style.scss */ "./src/style.scss");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./edit */ "./src/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./save */ "./src/save.js");






(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockType)('xx/styled', {
  edit: _edit__WEBPACK_IMPORTED_MODULE_4__["default"],
  save: _save__WEBPACK_IMPORTED_MODULE_5__["default"],

  //category: 'wholesome-blocks',
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
_wordpress_dom_ready__WEBPACK_IMPORTED_MODULE_1___default()(function () {
  wp.blocks.registerBlockVariation('xx/styled', {
    name: 'blue-light',
    label: 'Itza Light Blu',
    title: 'BG Light Blue',
    category: 'wholesome-blocks',
    attributes: {
      backgroundColor0: '#FF0000'
    }
  });
});

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
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _assets_OnPageStyle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../assets/OnPageStyle */ "./assets/OnPageStyle.js");
/* harmony import */ var _assets_InlineStyleVars__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../assets/InlineStyleVars */ "./assets/InlineStyleVars.js");
/* harmony import */ var _assets_lib_js_calculatedInlineVars__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../assets/lib/js/calculatedInlineVars */ "./assets/lib/js/calculatedInlineVars.js");

// Node modules



 // Custom Components


 // Custom Functions


function save(props) {
  // const props = useBlockProps.save();
  const inlineVarCSS = (0,_assets_lib_js_calculatedInlineVars__WEBPACK_IMPORTED_MODULE_6__["default"])(props.attributes);
  console.log("INLINER", inlineVarCSS);
  console.log("save props!", props);
  const {
    attributes: {
      styleEnabled
    },
    setAttributes,
    clientId
  } = props; // Return the shtuff

  const blockPropsSavedOb = {
    className: 'xx-styled',
    style: inlineVarCSS,
    'data-theme': styleEnabled ? "none" : "undefined"
  };
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.useBlockProps.save(blockPropsSavedOb), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.InnerBlocks.Content, null));
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

/***/ "./assets/components/styled-preview.scss":
/*!***********************************************!*\
  !*** ./assets/components/styled-preview.scss ***!
  \***********************************************/
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