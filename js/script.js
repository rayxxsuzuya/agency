"use strict";

var tabs = document.querySelectorAll(".tabs");
var contents = document.querySelectorAll(".contents");

var _loop = function _loop(x) {
  var _loop2 = function _loop2(i) {
    tabs[x].children[i].addEventListener("click", function (e) {
      e.preventDefault();

      for (var j = 0; j < tabs[x].children.length; j++) {
        tabs[x].children[j].classList.remove("active");
        contents[x].children[j].classList.remove("active");
      }

      tabs[x].children[i].classList.add("active");
      contents[x].children[i].classList.add("active");
    });
  };

  for (var i = 0; i < tabs[x].children.length; i++) {
    _loop2(i);
  }
};

for (var x = 0; x < tabs.length; x++) {
  _loop(x);
}