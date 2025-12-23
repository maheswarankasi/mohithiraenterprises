$(document).ready(function () {

  //email validation
  const emailInput = document.getElementById("emailInput");
  const errorSpan = document.getElementById("emailError");

  emailInput.addEventListener("input", function () {
    const value = emailInput.value.trim();
    const strictEmailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (value === "") {
      errorSpan.textContent = "";
    } else if (!strictEmailRegex.test(value)) {
      errorSpan.textContent =
        "Please enter a valid email like user@example.com";
      emailInput.setCustomValidity("Invalid email");
    } else {
      errorSpan.textContent = "";
      emailInput.setCustomValidity("");
    }
  });

  // Show button when scrolled down 100px
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $("#backToTop").fadeIn();
    } else {
      $("#backToTop").fadeOut();
    }
  });

  // Scroll smoothly to top when clicked
  $("#backToTop").click(function () {
    $("html, body").animate({ scrollTop: 0 }, 600);
    return false;
  });

  $(window).on("scroll", function () {
    $(".reveal").each(function () {
      var top = $(this).offset().top;
      var winTop = $(window).scrollTop();
      var winHeight = $(window).height();
      if (top < winTop + winHeight - 100) {
        $(this).addClass("active");
      }
    });
  });
});
