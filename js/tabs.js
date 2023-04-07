// tabs js
var tabLinks = document.querySelectorAll(".tablinks");
var tabContent = document.querySelectorAll(".tabcontent");

//toggle button js
$(document).ready(function () {
  $("#toggle").click(function (event) {
    if ($(this).hasClass("on")) {
      $(this).removeClass("on");
      $("body").removeClass("on");
      $("h1").removeClass("on");
      $(".tabs").removeClass("on");
      $(".tablinks p").removeClass("on");
    } else {
      $(this).addClass("on");
      $("body").addClass("on");
      $("h1").addClass("on");
      $(".tabs").addClass("on");
      $(".tablinks p").addClass("on");
    }
  });
});

//click event listener to open the tab
tabLinks.forEach(function (element) {
	element.addEventListener("click", openTabs);
});

function openTabs(element) {
  var btnTarget = element.currentTarget;
  var tabs = btnTarget.dataset.tabs;
  tabContent.forEach(function (element) {
    element.classList.remove("active");
  });
  tabLinks.forEach(function (element) {
    element.classList.remove("active");
  });
  document.querySelector("#" + tabs).classList.add("active");
  btnTarget.classList.add("active");
}
