const menuIcon = document.querySelector("#menu-icon");
const menu = document.querySelector("#menu");

let isopen = false;
menuIcon.addEventListener("click", function (e) {
  if (isopen == false) {
    menu.classList.remove("hidden");
    isopen = true;
  } else {
    menu.classList.add("hidden");
    isopen = false;
  }
});

var arrimg = [];
arrimg[0] = "../src/images/full.png";
arrimg[1] = "../src/images/2.png";
arrimg[2] = "../src/images/7.png";

var i = 0;
var imgauto;

function auto() {
  i++;
  document.getElementById("img-slider").src = arrimg[i];

  if (i == arrimg.length - 1) {
    i = -1;
  }
  imgauto = setTimeout(auto, 1000);
}

window.onload = function () {
  imgauto = setTimeout(auto, 1000);
};
