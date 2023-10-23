(function ($) {
  "use strict";
  jQuery(".mean-menu").meanmenu({ meanScreenWidth: "991" });
  $(window).on("scroll", function () {
    if ($(this).scrollTop() > 150) {
      $(".navbar-area").addClass("sticky-top");
    } else {
      $(".navbar-area").removeClass("sticky-top");
    }
  });
  $(".search-icon").on("click", function () {
    $(".search-form").toggle();
  });
  $(".testimonial-slider").owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    items: 1,
    smartSpeed: 2000,
    dots: false,
  });
  try {
    var mixer = mixitup("#Container", { controls: { toggleDefault: "none" } });
  } catch (err) {}
  $(".faq-area .open").click(function () {
    var container = $(this).parents(".topic");
    var answer = container.find(".answer");
    var trigger = container.find(".faq-t");
    answer.slideToggle(200);
    if (trigger.hasClass("faq-o")) {
      trigger.removeClass("faq-o");
    } else {
      trigger.addClass("faq-o");
    }
    if (container.hasClass("expanded")) {
      container.removeClass("expanded");
    } else {
      container.addClass("expanded");
    }
  });
  $(".popup-vimeo").magnificPopup({
    disableOn: 320,
    type: "iframe",
    mainClass: "mfp-fade",
    removalDelay: 160,
    preloader: false,
    fixedContentPos: false,
  });
  $(".popup-gallery").magnificPopup({ type: "image" });
  $(".newsletter-form")
    .validator()
    .on("submit", function (event) {
      if (event.isDefaultPrevented()) {
        formErrorSub();
        submitMSGSub(false, "Please enter your email correctly.");
      } else {
        event.preventDefault();
      }
    });
  function callbackFunction(resp) {
    if (resp.result === "success") {
      formSuccessSub();
    } else {
      formErrorSub();
    }
  }
  function formSuccessSub() {
    $(".newsletter-form")[0].reset();
    submitMSGSub(true, "Thank you for subscribing!");
    setTimeout(function () {
      $("#validator-newsletter").addClass("hide");
    }, 4000);
  }
  function formErrorSub() {
    $(".newsletter-form").addClass("animate__animated animate__shake");
    setTimeout(function () {
      $(".newsletter-form").removeClass("animate__animated animate__shake");
    }, 1000);
  }
  function submitMSGSub(valid, msg) {
    if (valid) {
      var msgClasses = "validation-success";
    } else {
      var msgClasses = "validation-danger";
    }
    $("#validator-newsletter").removeClass().addClass(msgClasses).text(msg);
  }
  $(".newsletter-form").ajaxChimp({
    url: "#",
    callback: callbackFunction,
  });
  $(window).on("load", function () {
    $(".loader-content").fadeOut(1000);
  });

})(jQuery);
function setTheme(themeName) {
  localStorage.setItem("everb_theme", themeName);
  document.documentElement.className = themeName;
}
function toggleTheme() {
  if (localStorage.getItem("everb_theme") === "theme-dark") {
    setTheme("theme-light");
  } else {
    setTheme("theme-dark");
  }
}
(function () {
  if (localStorage.getItem("everb_theme") === "theme-dark") {
    setTheme("theme-dark");
    document.getElementById("slider").checked = false;
  } else {
    setTheme("theme-light");
    document.getElementById("slider").checked = true;
  }
})();
