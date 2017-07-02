"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var $ = require("jquery");
//import bootstrap = require("bootstrap")
alert('loaded');
var web = $('body');
web.append('<hr/>');
web.append("jquery => OK");
web.append("<hr/>");
var div = $('<div/>', {
    'class': 'alert alert-success'
})
    .text("test")
    .on('click', function (e) {
    alert('Hello');
})
    .appendTo(web);
// web.append("<div/>");
//.addClass('alert alert-success');
//.text("Bootstrap CSS => OK");
//div.attr("class", "alert alert-success");
//.attr("role", "alert");
//$('body').modal();
//# sourceMappingURL=main.js.map