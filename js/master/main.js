var xx = document.querySelector('.owl-dots');
// ##### Navigation Effect #####

window.addEventListener("scroll", function (e) {
  var y = window.pageYOffset;
  if (y > 80) {
    document.getElementById('nav').classList.add("navbar-js");
  } else {
    document.getElementById('nav').classList.remove("navbar-js");
  }
});

//  ##### End Navigation Effect #####

// showing the button when scroll > 400 
var backToTop = $(".back-to-top");
$(window).on("scroll", function () {
  if ($(this).scrollTop() >= 400) {
    backToTop.addClass("show-button");
  } else {
    backToTop.removeClass("show-button");
  }
});

// back to top on clicking the button
backToTop.on("click", function () {
  $("html, body").animate({
    scrollTop: 0
  }, 3000);
});


// Pre Loader
$(window).on("load", function () {
  $("#loader-wrapper").delay(400).fadeOut(1000);
});
// End Pre Loader


// Scroll Percentage
var scrollTimer = null;
$(window).on("scroll", function () {
  var viewportHeight = $(this).height(),
    scrollbarHeight = viewportHeight / $(document).height() * viewportHeight,
    progress = $(this).scrollTop() / ($(document).height() - viewportHeight),
    distance = progress * (viewportHeight - scrollbarHeight) + scrollbarHeight / 2 - $("#scroll").height() / 2;
  $("#scroll")
    .css("top", distance)
    .text(" (" + Math.round(progress * 100) + "%)")
    .fadeIn(100);

  if (scrollTimer !== null) {
    clearTimeout(scrollTimer);
  }
  scrollTimer = setTimeout(function () {
    $("#scroll").fadeOut();
  }, 800);
});
// End Pre Loader


// ### typing Effect JS ###

const mHTML = document.getElementById('type'),
  messages = [
    'UI/UX Designer.',
    'Web Designer.',
    'Web Developer.',
    'Freelancer.'
  ];
let currentMessage = 0;

function typeMessage() {
  if (!messages[currentMessage]) {
    currentMessage = 0;
  }
  const currentStr = messages[currentMessage];
  currentStr.split();
  let part = '';
  let currentLetter = 0;
  let int1 = setInterval(() => {
    if (!currentStr[currentLetter]) {
      currentMessage++;
      setTimeout(() => {
        deleteMessage(part);
      }, 1800);
      clearInterval(int1);
    } else {
      part += currentStr[currentLetter++];
      mHTML.innerHTML = part;
    }
  }, 60);
}

function deleteMessage(str) {
  let int = setInterval(() => {
    if (str.length === 0) {
      setTimeout(() => {
        typeMessage();
      }, 40);
      clearInterval(int);
    } else {
      str = str.split('');
      str.pop();
      str = str.join('');
      mHTML.innerHTML = str;
    }
  }, 30);
}
typeMessage();
// End Typing effect


var scrollTimer = null;
$(window).on("scroll", function () {
  var viewportHeight = $(this).height(),
    scrollbarHeight = viewportHeight / $(document).height() * viewportHeight,
    progress = $(this).scrollTop() / ($(document).height() - viewportHeight),
    distance = progress * (viewportHeight - scrollbarHeight) + scrollbarHeight / 2 - $("#scroll").height() / 2;
  $("#scroll")
    .css("top", distance)
    .text(" (" + Math.round(progress * 100) + "%)")
    .fadeIn(100);

  if (scrollTimer !== null) {
    clearTimeout(scrollTimer);
  }
  scrollTimer = setTimeout(function () {
    $("#scroll").fadeOut();
  }, 800);
});


// ### jQuery Plugins ###

jQuery(document).ready(function () {

  // Smooth Scroll
  $('a').smoothScroll();
  // end

  // count up
  $("#facts").appear(function () {
    $("#num_1").animateNumber({
      number: 10 // Change to your number			
    }, 2800);
    $("#num_2").animateNumber({
      number: 50 // Change to your number	
    }, 2800);
    $("#num_3").animateNumber({
      number: 30 // Change to your number
    }, 2800);
    $("#num_4").animateNumber({
      number: 10 // Change to your number
    }, 2800);
  }, {
    accX: 0,
    accY: -150
  });

  // end

  $('.works-slider').owlCarousel({
    loop: true,
    animateOut: 'fadeOut',
    animateIn: 'fadeIn',
    items: 1,
    dots: true,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 2
      },
      1000: {
        items: 3
      }
    }
  })


});
//  Circle Progress bar

$("#skill-circle").appear(function () {
  $(".circle").easyPieChart({
    barColor: "#FFB300",
    trackColor: "#424242",
    scaleColor: 0,
    lineWidth: 6,
    lineCap: "butt",
    size: 170,
    animate: 4000
  });

  // start numbers animate at skills section //
  $("#chart_num_1").animateNumber({
    number: 99 // Change to your number
  }, 4000);
  $("#chart_num_2").animateNumber({
    number: 70 // Change to your number
  }, 4000);
  $("#chart_num_3").animateNumber({
    number: 40 // Change to your number
  }, 4000);
  $("#chart_num_4").animateNumber({
    number: 99 // Change to your number
  }, 4000);
}, {
  accX: 0,
  accY: -150
});
// end circle progress bar

// WOW 
$(document).appear(function () {
  new WOW().init();
});


// form validatation

(function ($) {
  "use strict";



  /*==================================================================
  [ Chose Radio ]*/
  $("#radio1").on('change', function () {
    if ($(this).is(":checked")) {
      $('.input3-select').slideUp(300);
    }
  });

  $("#radio2").on('change', function () {
    if ($(this).is(":checked")) {
      $('.input3-select').slideDown(300);
    }
  });

  /*==================================================================
  [ Validate ]*/
  var name = $('.validate-input input[name="name"]');
  var email = $('.validate-input input[name="email"]');
  var subject = $('.validate-input input[name="subject"]');
  var service = $('.validate-input input[name="service"]');
  var message = $('.validate-input textarea[name="message"]');


  $('.validate-form').on('submit', function () {
    var check = true;

    if ($(name).val().trim() == '') {
      showValidate(name);
      check = false;
    }


    if ($(email).val().trim().match(/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\]?)$/) == null) {
      showValidate(email);
      check = false;
    }
    if ($(subject).val().trim() == '') {
      showValidate(subject);
      check = false;
    }
    if ($(service).val().trim() == '') {
      showValidate(service);
      check = false;
    }

    if ($(message).val().trim() == '') {
      showValidate(message);
      check = false;
    }

    return check;
  });


  $('.validate-form .input').each(function () {
    $(this).focus(function () {
      hideValidate(this);
    });
  });

  function showValidate(input) {
    var thisAlert = $(input).parent();

    $(thisAlert).addClass('alert-validate');
  }

  function hideValidate(input) {
    var thisAlert = $(input).parent();

    $(thisAlert).removeClass('alert-validate');
  }

})(jQuery);


