webpackJsonp([0],[
/* 0 */,
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var $ = __webpack_require__(0);
//import bootstrap = require("bootstrap")
//alert('loaded');
var web = $('body');
var div1 = $('<div/>', {
    'style': 'display: none'
}).appendTo(web);
div1.append("<hr/>");
$('<div>jquery => OK<div/>', {
    'id': 'testID'
}).appendTo(div1);
div1.append("<hr/>");
var div = $('<div/>', {
    'class': 'alert alert-success'
})
    .text("bootstrap css => OK")
    .on('click', function (e) {
    alert('Hello');
})
    .appendTo(div1);
div1.append("<hr/>");
div1.show();
// web.append("<div/>");
//.addClass('alert alert-success');
//.text("Bootstrap CSS => OK");
//div.attr("class", "alert alert-success");
//.attr("role", "alert");
//$('body').modal();


/***/ })
],[1]);
//# sourceMappingURL=app.bundle.js.map