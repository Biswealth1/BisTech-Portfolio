(function ($) {
    "use strict";

    // Navbar on scrolling
    $(window).scroll(function () {
        if ($(this).scrollTop() > 200) {
            $('.navbar').fadeIn('slow').css('display', 'flex');
        } else {
            $('.navbar').fadeOut('slow').css('display', 'none');
        }
    });


    // Smooth scrolling on the navbar links
    $(".navbar-nav a").on('click', function (event) {
        if (this.hash !== "") {
            event.preventDefault();
            
            $('html, body').animate({
                scrollTop: $(this.hash).offset().top - 45
            }, 1500, 'easeInOutExpo');
            
            if ($(this).parents('.navbar-nav').length) {
                $('.navbar-nav .active').removeClass('active');
                $(this).closest('a').addClass('active');
            }
        }
    });


    // Typed Initiate
    if ($('.typed-text-output').length == 1) {
        var typed_strings = $('.typed-text').text();
        var typed = new Typed('.typed-text-output', {
            strings: typed_strings.split(', '),
            typeSpeed: 100,
            backSpeed: 20,
            smartBackspace: false,
            loop: true
        });
    }


    // Modal Video
    $(document).ready(function () {
        var $videoSrc;
        $('.btn-play').click(function () {
            $videoSrc = $(this).data("src");
        });
        console.log($videoSrc);

        $('#videoModal').on('shown.bs.modal', function (e) {
            $("#video").attr('src', $videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0");
        })

        $('#videoModal').on('hide.bs.modal', function (e) {
            $("#video").attr('src', $videoSrc);
        })
    });


    // Scroll to Bottom
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.scroll-to-bottom').fadeOut('slow');
        } else {
            $('.scroll-to-bottom').fadeIn('slow');
        }
    });


    // Skills
    $('.skill').waypoint(function () {
        $('.progress .progress-bar').each(function () {
            $(this).css("width", $(this).attr("aria-valuenow") + '%');
        });
    }, {offset: '80%'});


    // Portfolio isotope and filter
    var portfolioIsotope = $('.portfolio-container').isotope({
        itemSelector: '.portfolio-item',
        layoutMode: 'fitRows'
    });
    $('#portfolio-flters li').on('click', function () {
        $("#portfolio-flters li").removeClass('active');
        $(this).addClass('active');

        portfolioIsotope.isotope({filter: $(this).data('filter')});
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 200) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        dots: true,
        loop: true,
        items: 1
    });
    
})(jQuery);

// document.getElementById("contact-form").onsubmit = function(event) {
//     event.preventDefault();
  
//     Get the form data
//     const formData = new FormData(event.target);
//     const name = formData.get("name");
//     const email = formData.get("email");
//     const message = formData.get("message");
//     const subject = formData.get("subject");
  
//     EmailJS parameters for sending the email
//     const params = {
//       from_name: name,
//       from_email: email,
//       from_subject: subject,
//       message: message,
//     };
  
//     Send the email
//     emailjs.send("service_igvuf42", "template_0txajtd", params)
//       .then(function(response) {
//         console.log("Email sent successfully!", response);
//         You can add a success message or redirect to a "Thank You" page here
//       }, function(error) {
//         console.log("Failed to send email:", error);
//         You can add an error message or handle the error as you like
//       });
//   };


document.getElementById("contact-form").onsubmit = function(event) {
    event.preventDefault();
  
    // Get the form data
    const formData = new FormData(event.target);
    const name = formData.get("name");
    const email = formData.get("email");
    const message = formData.get("message");
    const subject = formData.get("subject");
  
    // EmailJS parameters for sending the email
    const params = {
      from_name: name,
      email: email,
      subject: subject,
      message: message,
    };
  
    // Send the email
    emailjs.send("service_igvuf42", "template_o3yd79b", params)
      .then(function(response) {
        console.log("Email sent successfully!", response);
        // You can add a success message or redirect to a "Thank You" page here
      }, function(error) {
        console.log("Failed to send email:", error);
        // You can add an error message or handle the error as you like
      });
  };





        // Get the current hour of the day (0-23)
 var currentHour = new Date().getHours();

        // Get the greeting element by its ID
 var greetingElement = document.getElementById("greetings");

        // Get the GIF image element by its ID
 var gifImageElement = document.getElementById("gifImage");

        // Using logical statements to determine the appropriate greeting and GIF
if (currentHour >= 5 && currentHour < 12) {
        greetingElement.textContent = "Good morning!";
    } else if (currentHour >= 12 && currentHour < 17) {
        greetingElement.textContent = "Good afternoon!";
        } else {
         greetingElement.textContent = "Good evening!";
}




document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();

    // Basic form validation
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;
    const subject = document.getElementById("subject").value;

    if (name === "" || email === "" || message === "" || subject ==="") {
        document.getElementById("error-message").textContent = "All fields are required.";
       
        return;
    }

    alert("Form submitted successfully! I will get back to you shortly. Thanks😍");

})
