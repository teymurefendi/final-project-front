$(document).ready(function () {
    $('.custom-long').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false
      });

      // $('.carousel-item').slick({
      //   slidesToShow: 1,
      //   slidesToScroll: 1,
      //   arrows: false
      // });
      $("#video-notice .video-icon ").on("click", function () {
        $(".getVideo").fadeToggle(300).css("display", "flex");
        // $(".getVideo").addClass("d-flex");
        // console.log("b")
      });
      $(".getVideo ").on("click", function () {
        // $(".getVideo").removeClass("d-flex");
        $(".getVideo").fadeToggle(300);
        // console.log("b")
      });
      
})