exports.id = 92;
exports.ids = [92];
exports.modules = {

/***/ 4764:
/***/ ((module) => {

// Exports
module.exports = {
	"main": "ContactDetails_main__ShWbw",
	"content": "ContactDetails_content__x1eMw"
};


/***/ }),

/***/ 2758:
/***/ ((module) => {

// Exports
module.exports = {
	"main": "Contest_desc_main__jIY3e",
	"content": "Contest_desc_content__HAlLP"
};


/***/ }),

/***/ 5762:
/***/ ((module) => {

// Exports
module.exports = {
	"main": "Contest_prizes_main__SzhdK",
	"table": "Contest_prizes_table__u2V9w",
	"row": "Contest_prizes_row__OoxQF"
};


/***/ }),

/***/ 2566:
/***/ ((module) => {

// Exports
module.exports = {
	"main": "Contest_rules_main__YQd40",
	"content": "Contest_rules_content__Olr3E"
};


/***/ }),

/***/ 6331:
/***/ ((module) => {

// Exports
module.exports = {
	"container": "EventBox_container__xDS1m",
	"content": "EventBox_content__cc5au",
	"img": "EventBox_img__fWnQj"
};


/***/ }),

/***/ 8251:
/***/ ((module) => {

// Exports
module.exports = {
	"container": "Landing_container__NULNK"
};


/***/ }),

/***/ 2169:
/***/ ((module) => {

// Exports
module.exports = {
	"container": "LandingContent_container__6LUW3",
	"clubHeading": "LandingContent_clubHeading__HoJHK",
	"title": "LandingContent_title__yGkfY",
	"clubInfo": "LandingContent_clubInfo__VmGm7",
	"regButton": "LandingContent_regButton__A4fl_"
};


/***/ }),

/***/ 1610:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Eventdescription)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./Components/EventPage/Contest_desc/Contest_desc.module.css
var Contest_desc_module = __webpack_require__(2758);
var Contest_desc_module_default = /*#__PURE__*/__webpack_require__.n(Contest_desc_module);
;// CONCATENATED MODULE: ./Components/EventPage/Contest_desc/Contest_desc.tsx



const Contest_desc = (props)=>{
    const array = props.propWhichIsArray;
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (Contest_desc_module_default()).main,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                children: "Description"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (Contest_desc_module_default()).content,
                children: array.map((item)=>/*#__PURE__*/ jsx_runtime_.jsx("p", {
                        children: item.text
                    }, item.id))
            })
        ]
    });
};
/* harmony default export */ const Contest_desc_Contest_desc = (Contest_desc);

// EXTERNAL MODULE: ./Components/EventPage/Contest_prizes/Contest_prizes.module.css
var Contest_prizes_module = __webpack_require__(5762);
var Contest_prizes_module_default = /*#__PURE__*/__webpack_require__.n(Contest_prizes_module);
;// CONCATENATED MODULE: ./Components/EventPage/Contest_prizes/Contest_prizes.tsx



const Contest_prizes = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (Contest_prizes_module_default()).main,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                children: "Prizes and Goodies"
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (Contest_prizes_module_default()).table,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: (Contest_prizes_module_default()).row,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                children: "1st Rank - First Year Student"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                children: "Rs. 500 /-"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: (Contest_prizes_module_default()).row,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                children: "1st Rank - Second Year Student"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                children: "Rs. 500 /-"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: (Contest_prizes_module_default()).row,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                children: "1st Rank - Third or Fourth Year Student"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                children: "Rs. 500 /-"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: (Contest_prizes_module_default()).row,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                children: "1st Rank - Girl Student (from PCCOE)"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                children: "Rs. 500 /-"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: (Contest_prizes_module_default()).row,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                children: "2nd Rank - Girl Student (from PCCOE)"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                children: "Rs. 500 /-"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: (Contest_prizes_module_default()).row,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                children: "1st Rank - Girl Student (outside PCCOE)"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                children: "Rs. 500 /-"
                            })
                        ]
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const Contest_prizes_Contest_prizes = (Contest_prizes);

// EXTERNAL MODULE: ./Components/EventPage/ContactDetails.module.css
var ContactDetails_module = __webpack_require__(4764);
var ContactDetails_module_default = /*#__PURE__*/__webpack_require__.n(ContactDetails_module);
;// CONCATENATED MODULE: ./Components/EventPage/ContactDetails.tsx


function ContactDetails() {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (ContactDetails_module_default()).main,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                children: "Contact Details"
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                className: (ContactDetails_module_default()).content,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                        children: [
                            "WhatsApp Group: ",
                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                style: {
                                    color: "#7a9ce0",
                                    textDecoration: "none"
                                },
                                href: "https://chat.whatsapp.com/IzeR7xGsf5270zOvzuHQvD",
                                children: "https://chat.whatsapp.com/IzeR7xGsf5270zOvzuHQvD"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                        children: [
                            "Email: ",
                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                style: {
                                    color: "#7a9ce0",
                                    textDecoration: "none"
                                },
                                href: "mailto:nscc@pccoepune.org",
                                children: "nscc@pccoepune.org"
                            })
                        ]
                    })
                ]
            })
        ]
    });
}
/* harmony default export */ const EventPage_ContactDetails = (ContactDetails);

// EXTERNAL MODULE: ./Components/EventPage/Contest_rules/Contest_rules.module.css
var Contest_rules_module = __webpack_require__(2566);
var Contest_rules_module_default = /*#__PURE__*/__webpack_require__.n(Contest_rules_module);
;// CONCATENATED MODULE: ./Components/EventPage/Contest_rules/Contest_rules.tsx


function Contest_rules(props) {
    const array = props.propWhichIsArray;
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (Contest_rules_module_default()).main,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                children: props.title
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                className: (Contest_rules_module_default()).content,
                children: array.map((item)=>/*#__PURE__*/ jsx_runtime_.jsx("li", {
                        children: item.text
                    }, item.id))
            })
        ]
    });
}
/* harmony default export */ const Contest_rules_Contest_rules = (Contest_rules);

;// CONCATENATED MODULE: ./Components/EventPage/Eventdescription.tsx






// interface rulesProps {
//   propWhichIsArray: {
//     id: number,
//     text: string;
//   }[]
// }
const test = (props)=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(Contest_desc_Contest_desc, {
                propWhichIsArray: props.propWhichIsArray
            }),
            props.eventDetail && /*#__PURE__*/ jsx_runtime_.jsx(Contest_rules_Contest_rules, {
                title: "Detailed Description",
                propWhichIsArray: props.eventDetail
            }),
            props.evaluationArray && /*#__PURE__*/ jsx_runtime_.jsx(Contest_rules_Contest_rules, {
                title: "Evaluation",
                propWhichIsArray: props.evaluationArray
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Contest_rules_Contest_rules, {
                title: "Rules of participation",
                propWhichIsArray: props.propWhichIsArray2
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Contest_prizes_Contest_prizes, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(EventPage_ContactDetails, {})
        ]
    });
};
/* harmony default export */ const Eventdescription = (test);


/***/ }),

/***/ 9268:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ EventPage_Landing)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./Components/EventPage/EventBox.module.css
var EventBox_module = __webpack_require__(6331);
var EventBox_module_default = /*#__PURE__*/__webpack_require__.n(EventBox_module);
;// CONCATENATED MODULE: ./public/event.png
/* harmony default export */ const public_event = ({"src":"/_next/static/media/event.23db3ad8.png","height":268,"width":385,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAGCAYAAAD+Bd/7AAAA0UlEQVR4nAHGADn/AZuamgH/AP//+Pf2BvXz8AQbHCECHCktCA8WFgH9+/z5Aery+QPV0c0F8u/uCiswNF318/SZ6fbxDxYWGin7+vraAeXu9QAaEQoA197mEQ0LCE0BAQDvz8/S2iMvLxPt6+fYAd/m63r//f4RAwICvB4aFPLV192BzMzRCQwNCq8LDwyuAd3l6/f+/f4IAwIB8iEbFROeoKuc/v//Ah4dGYbz8/Q9AePo7HP/AAFRAQEB6hwWEXXx8/Un09LWDDw7NbO3ucBnivliHx4NRNQAAAAASUVORK5CYII=","blurWidth":8,"blurHeight":6});
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./Components/EventPage/LandingContent.module.css
var LandingContent_module = __webpack_require__(2169);
var LandingContent_module_default = /*#__PURE__*/__webpack_require__.n(LandingContent_module);
;// CONCATENATED MODULE: ./Components/EventPage/LandingContent.tsx



function LandingContent(props) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (LandingContent_module_default()).container,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (LandingContent_module_default()).clubHeading,
                children: /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                    children: "NSCC"
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (LandingContent_module_default()).title,
                children: /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                    children: props.name
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (LandingContent_module_default()).clubHeading,
                children: /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                    children: props.type
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (LandingContent_module_default()).clubInfo,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                        children: props.date
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        children: props.content
                    })
                ]
            }),
            props.name === "CodeHive" && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                children: [
                    "Contest Link : ",
                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                        className: (LandingContent_module_default()).regButton,
                        href: "https://www.hackerrank.com/codehive",
                        children: "Enter"
                    })
                ]
            }),
            props.name === "Codehive" && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                children: "Website Theme: Any College Club (Ex: Coding Club, Art Circle, etc)"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                className: (LandingContent_module_default()).regButton,
                href: props.regLink,
                children: "Register"
            }),
            props.name === "WebXplore" && /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                className: (LandingContent_module_default()).regButton,
                href: "/events/webxplore/submissions",
                style: {
                    marginLeft: "16px"
                },
                children: "Submissions"
            })
        ]
    });
}
/* harmony default export */ const EventPage_LandingContent = (LandingContent);

;// CONCATENATED MODULE: ./Components/EventPage/EventBox.tsx





function EventBox(props) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (EventBox_module_default()).container,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (EventBox_module_default()).content,
                children: /*#__PURE__*/ jsx_runtime_.jsx(EventPage_LandingContent, {
                    name: props.name,
                    type: props.type,
                    date: props.date,
                    content: props.content,
                    regLink: props.regLink
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (EventBox_module_default()).content,
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: (EventBox_module_default()).img,
                    children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                        src: public_event,
                        alt: "Event image"
                    })
                })
            })
        ]
    });
}
/* harmony default export */ const EventPage_EventBox = (EventBox);

// EXTERNAL MODULE: ./Components/EventPage/Landing.module.css
var Landing_module = __webpack_require__(8251);
var Landing_module_default = /*#__PURE__*/__webpack_require__.n(Landing_module);
;// CONCATENATED MODULE: ./Components/EventPage/Landing.tsx



function Landing(props) {
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: (Landing_module_default()).container,
        children: /*#__PURE__*/ jsx_runtime_.jsx(EventPage_EventBox, {
            name: props.name,
            type: props.type,
            date: props.date,
            content: props.content,
            regLink: props.regLink
        })
    });
}
/* harmony default export */ const EventPage_Landing = (Landing);


/***/ })

};
;