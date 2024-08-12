document.addEventListener("DOMContentLoaded", function () {
    var tablinks = document.getElementsByClassName("tab-link");
    var tabcontents = document.getElementsByClassName("tab-contents");

    function opentab(tabname) {
      for (var i = 0; i < tablinks.length; i++) {
        tablinks[i].classList.remove("active-link");
      }

      for (var i = 0; i < tabcontents.length; i++) {
        tabcontents[i].classList.remove("active-tab");
      }

      document
        .querySelector(`.tab-link[data-tab="${tabname}"]`)
        .classList.add("active-link");
      document.getElementById(tabname).classList.add("active-tab");
    }

    var tablinksArray = Array.from(tablinks);
    tablinksArray.forEach(function (tablink) {
      tablink.addEventListener("click", function () {
        var tabname = this.getAttribute("data-tab");
        opentab(tabname);
      });
    });

    opentab("skills");
  });