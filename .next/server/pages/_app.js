(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 7240:
/***/ ((module) => {

// Exports
module.exports = {
	"footer": "Footer_footer__4lgHh",
	"icons": "Footer_icons__96gX_",
	"upperfooter": "Footer_upperfooter__77a4j",
	"lowerfooter": "Footer_lowerfooter__OECvk",
	"pccoelink": "Footer_pccoelink__9Bi1n"
};


/***/ }),

/***/ 9169:
/***/ ((module) => {

// Exports
module.exports = {
	"container": "Header_container__8jEr_",
	"scrolled": "Header_scrolled__lDSQv",
	"navigators": "Header_navigators__gLj6z",
	"button": "Header_button__c__y1",
	"header": "Header_header__wpbiz",
	"logo": "Header_logo__aYsYk",
	"title": "Header_title__5sz5y",
	"head": "Header_head__wh1rS",
	"subHead": "Header_subHead__6XvMy",
	"icons": "Header_icons__wL2gP"
};


/***/ }),

/***/ 8767:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ App)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./styles/globals.scss
var globals = __webpack_require__(3716);
// EXTERNAL MODULE: ./node_modules/react-toastify/dist/ReactToastify.min.css
var ReactToastify_min = __webpack_require__(3326);
// EXTERNAL MODULE: ./Components/Header/Header.module.css
var Header_module = __webpack_require__(9169);
var Header_module_default = /*#__PURE__*/__webpack_require__.n(Header_module);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
;// CONCATENATED MODULE: ./assets/logo.png
/* harmony default export */ const logo = ({"src":"/_next/static/media/logo.eaacb494.png","height":550,"width":550,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAdVBMVEX////////+/v7////+/v7////9/f309PT///9ranVXVmX////+/v79/f38/Pzy8vP////+/v79/f329vbx8fHw8PHq6uvo6Onh4eLf3+HX19jU1NbFxMe7ur63t7qxsLSoqKyfnqSenaOVlZuVlJt3doBVU2OLti40AAAAEHRSTlMAKSnBwe7u7vn5+fr6+vr65SjlWAAAAEVJREFUeNoFQIcRgCAM/JiIKIix9172H9EDSJwXAiKj46qGwJV9NlsKvPb3smtA0OOb3tqB22xu0oFBSafnFRNAnBdM+AF8hgODbnWN3wAAAABJRU5ErkJggg==","blurWidth":8,"blurHeight":8});
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: external "react-icons/ai"
const ai_namespaceObject = require("react-icons/ai");
;// CONCATENATED MODULE: external "react-icons/md"
const md_namespaceObject = require("react-icons/md");
;// CONCATENATED MODULE: external "react-icons/ri"
const ri_namespaceObject = require("react-icons/ri");
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
;// CONCATENATED MODULE: external "@mui/icons-material/Person"
const Person_namespaceObject = require("@mui/icons-material/Person");
var Person_default = /*#__PURE__*/__webpack_require__.n(Person_namespaceObject);
;// CONCATENATED MODULE: ./Components/Header/Header.tsx






// import { onAuthStateChanged, OAuthCredential } from "firebase/auth";





function Navbar() {
    const toastOptions = {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark"
    };
    const scrollThreshold = 40;
    const router = (0,router_.useRouter)();
    const [active, setActive] = (0,external_react_.useState)(false);
    const [isScrolled, setIsScrolled] = (0,external_react_.useState)(false);
    (0,external_react_.useEffect)(()=>{
        const scrollHandler = ()=>{
            const offset = window.pageYOffset || (document.documentElement || document.body.parentNode || document.body).scrollTop;
            setIsScrolled(offset > scrollThreshold);
        };
        window.addEventListener("scroll", scrollHandler);
        // cleanup
        return ()=>window.addEventListener("scroll", scrollHandler);
    }, [
        isScrolled
    ]);
    const handlelogout = ()=>{
        if (active) {
            localStorage.removeItem("login");
        }
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (Header_module_default()).container + (isScrolled ? " " + (Header_module_default()).scrolled : ""),
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (Header_module_default()).header,
                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                    href: "/",
                    className: (Header_module_default()).logo,
                    children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                        src: logo,
                        alt: "NSCC Logo",
                        width: 100
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (Header_module_default()).navigators,
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((link_default()), {
                                href: "/",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: (Header_module_default()).icons,
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(ai_namespaceObject.AiFillHome, {})
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                        style: {
                                            cursor: "pointer"
                                        },
                                        children: "Home"
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: (Header_module_default()).icons,
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(md_namespaceObject.MdEmojiEvents, {})
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                    style: {
                                        cursor: "pointer"
                                    },
                                    children: "Events"
                                })
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((link_default()), {
                                href: "/team",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: (Header_module_default()).icons,
                                        children: /*#__PURE__*/ jsx_runtime_.jsx((Person_default()), {
                                            style: {
                                                fontSize: "36px"
                                            }
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                        style: {
                                            cursor: "pointer"
                                        },
                                        children: "Team"
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: (Header_module_default()).icons,
                                    children: active ? /*#__PURE__*/ jsx_runtime_.jsx(ri_namespaceObject.RiLogoutCircleFill, {}) : /*#__PURE__*/ jsx_runtime_.jsx(ri_namespaceObject.RiLoginCircleFill, {})
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                    className: (Header_module_default()).button,
                                    style: {
                                        cursor: "pointer"
                                    },
                                    children: active ? "logout" : "login"
                                })
                            ]
                        })
                    ]
                })
            })
        ]
    });
} /* achraf */ 
/* harmony default export */ const Header = (Navbar);

// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: ./Components/Footer/Footer.module.css
var Footer_module = __webpack_require__(7240);
var Footer_module_default = /*#__PURE__*/__webpack_require__.n(Footer_module);
;// CONCATENATED MODULE: ./Components/Footer/Footer.tsx



const Footer = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (Footer_module_default()).footer,
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (Footer_module_default()).upperfooter,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        children: "Follow Us on Social Media"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: (Footer_module_default()).icons,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                href: "https://github.com/Aji-ncodew",
                                target: "_blank",
                                rel: "noreferrer",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
                                    width: "48",
                                    height: "48",
                                    viewBox: "0 0 48 48",
                                    fill: "none",
                                    xmlns: "http://www.w3.org/2000/svg",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                            d: "M21 31C16.7 32.4 16.7 28.5 15 28M27 33V29.5C27 28.5 27.1 28.1 26.5 27.5C29.3 27.2 32 26.1 32 21.5C31.9988 20.3049 31.5325 19.1573 30.7 18.3C31.0905 17.2619 31.0545 16.1116 30.6 15.1C30.6 15.1 29.5 14.8 27.1 16.4C25.0672 15.8705 22.9328 15.8705 20.9 16.4C18.5 14.8 17.4 15.1 17.4 15.1C16.9455 16.1116 16.9095 17.2619 17.3 18.3C16.4675 19.1573 16.0012 20.3049 16 21.5C16 26.1 18.7 27.2 21.5 27.5C20.9 28.1 20.9 28.7 21 29.5V33",
                                            stroke: "#E6E6E6",
                                            strokeWidth: "2",
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("rect", {
                                            x: "0.5",
                                            y: "0.5",
                                            width: "47",
                                            height: "47",
                                            rx: "23.5",
                                            stroke: "#E6E6E6"
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                href: "mailto:ajincodew@gmail.com",
                                target: "_blank",
                                rel: "noreferrer",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
                                    width: "48",
                                    height: "48",
                                    viewBox: "0 0 48 48",
                                    fill: "none",
                                    xmlns: "http://www.w3.org/2000/svg",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                            d: "M31 17H17C15.8954 17 15 17.8954 15 19V29C15 30.1046 15.8954 31 17 31H31C32.1046 31 33 30.1046 33 29V19C33 17.8954 32.1046 17 31 17Z",
                                            stroke: "#E6E6E6",
                                            strokeWidth: "2",
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                            d: "M15 19L24 25L33 19",
                                            stroke: "#E6E6E6",
                                            strokeWidth: "2",
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("rect", {
                                            x: "0.5",
                                            y: "0.5",
                                            width: "47",
                                            height: "47",
                                            rx: "23.5",
                                            stroke: "#E6E6E6"
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                href: "https://www.linkedin.com/company/ajincodew/",
                                target: "_blank",
                                rel: "noreferrer",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
                                    width: "48",
                                    height: "48",
                                    viewBox: "0 0 48 48",
                                    fill: "none",
                                    xmlns: "http://www.w3.org/2000/svg",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                            d: "M30 16H18C16.8954 16 16 16.8954 16 18V30C16 31.1046 16.8954 32 18 32H30C31.1046 32 32 31.1046 32 30V18C32 16.8954 31.1046 16 30 16Z",
                                            stroke: "#E6E6E6",
                                            strokeWidth: "2",
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                            d: "M20 23V28M20 20V20.01M24 28V23M28 28V25C28 24.4696 27.7893 23.9609 27.4142 23.5858C27.0391 23.2107 26.5304 23 26 23C25.4696 23 24.9609 23.2107 24.5858 23.5858C24.2107 23.9609 24 24.4696 24 25",
                                            stroke: "#E6E6E6",
                                            strokeWidth: "2",
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("rect", {
                                            x: "0.5",
                                            y: "0.5",
                                            width: "47",
                                            height: "47",
                                            rx: "23.5",
                                            stroke: "#E6E6E6"
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                href: "https://www.youtube.com/@aji_ncodew",
                                target: "_blank",
                                rel: "noreferrer",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
                                    width: "48",
                                    height: "48",
                                    viewBox: "0 0 48 48",
                                    fill: "none",
                                    xmlns: "http://www.w3.org/2000/svg",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                            d: "M29 17H19C16.7909 17 15 18.7909 15 21V27C15 29.2091 16.7909 31 19 31H29C31.2091 31 33 29.2091 33 27V21C33 18.7909 31.2091 17 29 17Z",
                                            stroke: "#E6E6E6",
                                            strokeWidth: "2",
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                            d: "M22 21L27 24L22 27V21Z",
                                            stroke: "#E6E6E6",
                                            strokeWidth: "2",
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("rect", {
                                            x: "0.5",
                                            y: "0.5",
                                            width: "47",
                                            height: "47",
                                            rx: "23.5",
                                            stroke: "#E6E6E6"
                                        })
                                    ]
                                })
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (Footer_module_default()).lowerfooter,
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                    children: [
                        "\xa9 2023 Aji ncodew, ",
                        /*#__PURE__*/ jsx_runtime_.jsx("a", {
                            className: (Footer_module_default()).pccoelink,
                            href: "",
                            target: "_blank",
                            rel: "noreferrer",
                            children: "Moroccan organization"
                        }),
                        " All Right Reserved."
                    ]
                })
            })
        ]
    });
};
/* harmony default export */ const Footer_Footer = (Footer);

;// CONCATENATED MODULE: ./pages/_app.tsx






function App({ Component , pageProps  }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((head_default()), {
                children: /*#__PURE__*/ jsx_runtime_.jsx("link", {
                    rel: "shortcut icon",
                    href: "/favicon.ico"
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Header, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(Component, {
                ...pageProps
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Footer_Footer, {})
        ]
    });
}


/***/ }),

/***/ 3326:
/***/ (() => {



/***/ }),

/***/ 3716:
/***/ (() => {



/***/ }),

/***/ 3918:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/amp-context.js");

/***/ }),

/***/ 5732:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/amp-mode.js");

/***/ }),

/***/ 3280:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 4486:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-blur-svg.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 9552:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-loader");

/***/ }),

/***/ 8524:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 6220:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/compare-states.js");

/***/ }),

/***/ 299:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 5789:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1897:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-bot.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 4567:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 2470:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/side-effect.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 618:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils/warn-once.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ 1853:
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 6405:
/***/ ((module) => {

"use strict";
module.exports = require("react-dom");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [210,121,676,664,675], () => (__webpack_exec__(8767)));
module.exports = __webpack_exports__;

})();