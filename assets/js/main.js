(function($) {
"use strict";

/*------------------------------------------------------------------
[Table of contents]

1. CUSTOM PRE DEFINE FUNCTION
2. RESPONSIVE MENU INIT
3. ST MENU SOOMTH SCROLL JS
4. ST TILT JS
5. ST MAGNIFIC POPUP JS
6. ST COUNTER JS
7. ST TESTIMONIAL SLIDER JS
8. ST V2 TESTIMONIAL SLIDER JS
9. ST V5 TESTIMONIAL SLIDER JS
10.ST V9 TESTIMONIAL SLIDER JS
11.ST CLIENT SLIDER JS
12.ST SCREENSHOT SLIDER JS
13.ST SCREENSHOT V2 SLIDER JS
14.ST SCREENSHOT V3 SLIDER JS
15.ST SCREENSHOT V13 SLIDER JS
16.ST ACCORDION  JS
17.ST SWICHER PRICING INIT
18.ST HEADER STICKY INIT
19.ST GOOGLE MAP  JS
-------------------------------------------------------------------*/




/*--------------------------------------------------------------
1. CUSTOM PRE DEFINE FUNCTION
------------------------------------------------------------*/
/* is_exist() - to check element existing */
jQuery.fn.is_exist = function(){
  return this.length;
}


/* stSetBanner() - to set banner height */
function stSetBanner(){
 if ( $('.st-banner-single-img-02').is_exist() && !$('.st-banner-single-img-02').is('.st-banner-base') )
   return false;

 var $get_height = $('.st-banner-single-img-02').outerHeight();
 $('.st_banner_single_img_01').css('bottom', -($get_height / 2));
}

/* stSetHeaderMargin() - to set header dynamic height */
function stSetHeaderMargin(){
 if ( $('.st_banner_area').is_exist() && !$('.st_banner_area').hasClass('margin-header') )
   return false;

 var $get_height = $('#st-header-section').outerHeight();
 $('.st_banner_area.margin-header').css('margin-top', $get_height);
}


/* st_equal_height() - equal height */
function st_equal_height($item, $target){
  if ( jQuery($item).is_exist() && jQuery($target).is_exist() ) {
    var $storeHeight = jQuery($item).outerHeight();
    jQuery($target).css('height', $storeHeight);
  }
}

if ( $('.wow').is_exist() && typeof WOW !== "undefined" ) {
  var wow = new WOW(
    {
      boxClass:     'wow',      // default
      animateClass: 'animated', // default
      offset:       0,          // default
      mobile:       false,      // default
      live:         true        // default
    }
  )
  wow.init();
}

$(function(){

// ST BANNER AUTO HEIGHT
stSetHeaderMargin();
// ST HEADER V6 AUTO HEIGHT
stSetBanner();
// CONTACT FORM MAKE EQUAL TO ACCORDION
st_equal_height('.st_accordion_item', '.st_contact_waraper');


/*--------------------------------------------------------------
2. RESPONSIVE MENU INIT
--------------------------------------------------------------*/
var st_menu = $('.st_menu');
if ( st_menu.is_exist() ) {
  $('.st_menu').meanmenu({
    meanMenuContainer: '.st_nav_wrapper',
    meanScreenWidth: "991"
  });
}


/*--------------------------------------------------------------
3. ST MENU SOOMTH SCROLL JS
--------------------------------------------------------------*/
var $header_menu_link = $('.st_menu ul li a, .mean-nav li a');
if ($header_menu_link.is_exist()) {

 $header_menu_link.on('click', function(e){
   var url = $(this).attr("href");
   var href = url.substring(url.indexOf('#')+1),
       href = '#'+href;
   if (/#/.test(this.href)) {
     if ( $(href).length ) {
       var offsetTop = href === "#" ? 0 : $(href).offset().top;
       $('body , html').stop().animate({
         scrollTop: offsetTop - 64,
       }, 500);
       e.preventDefault();
       return false;
     }
   }
 });
}


/*--------------------------------------------------------------
4. ST TILT JS
------------------------------------------------------------*/
var js_tilt = $('.js-tilt');
if (js_tilt.is_exist()){

  $('.js-tilt').tilt({
    maxTilt: 20,
    perspective:700, 
    glare: true,
    maxGlare: .3
  });

  js_tilt.each(function(){
    var $self = $(this),
        $wrapper = $self.closest('.container').parent();
    if( $wrapper.is_exist() && !$wrapper.hasClass('tilt-wrapper') ) {
      $wrapper.addClass('tilt-wrapper');
    }
  });
}
    
/*--------------------------------------------------------------
5. ST MAGNIFIC POPUP JS
------------------------------------------------------------*/
var st_popup_youtube = $('.st_popup_youtube');
  if (st_popup_youtube.is_exist()){
      st_popup_youtube.magnificPopup({
      type: 'iframe',
      mainClass: 'mfp-fade'
  });
}

/*--------------------------------------------------------------
6. ST COUNTER JS
--------------------------------------------------------------*/
var st_counter = $('#st_counter');
  if(st_counter.is_exist()){
      var a = 0;
      $(window).scroll(function() {

        var oTop = $(st_counter).offset().top - window.innerHeight;
        if (a == 0 && $(window).scrollTop() > oTop) {
          $('.counter-result').each(function() {
            var $this = $(this),
              countTo = $this.attr('data-percentage');
            $({
              countNum: $this.text()
            }).animate({
                countNum: countTo
              },
              {
                duration: 4000,
                easing: 'swing',
                step: function() {
                  $this.text(Math.floor(this.countNum));
                },
                complete: function() {
                  $this.text(this.countNum);
                }
              });
          });
          a = 1;
        }

      });
}


/*--------------------------------------------------------------
7. ST COUNTER JS
--------------------------------------------------------------*/
var st_testimonial_slider = $('.st_testimonial_slider');
  if (st_testimonial_slider.is_exist()) {
      st_testimonial_slider.owlCarousel({
      loop:true,
      margin:10,
      nav:true,
      dots:false,
      animateOut: 'fadeOut',
      animateIn: 'fadeIn',
      items:1,
      navText: ["<i class=\"fas fa-arrow-left\"></i>",
        "<i class=\"fas fa-arrow-right\"</i>"],
      responsive:{
          0:{
              items:1
          },
          600:{
              items:1
          },
          768:{
              items:1 
          },
          1000:{
              items:1
          }
      }
  });
}


// var st_hero_slider = $('.st--hero-slider');
// if ( st_hero_slider.is_exist() ) {
//   st_hero_slider.owlCarousel({
//     items: 1,
//     loop: true,
//     nav:true,
//     navText: ['<i class="fas fa-angle-left"></i>', '<i class="fas fa-angle-right"></i>']
//   })
// }


/*--------------------------------------------------------------
8. ST V2 TESTIMONIAL SLIDER JS
--------------------------------------------------------------*/
var st_v2_testimonial_slider = $('.st_v2_testimonial_slider');
  if (st_v2_testimonial_slider.is_exist()){
    st_v2_testimonial_slider.owlCarousel({
      loop:true,
      margin:5,
      dots:true,
      items:2,
      navigation: false,
      pagination: true,
      responsive:{
          0:{
              items:1
          },
          600:{
              items:1
          },
          768:{
              items:1 
          },
          1000:{
              items:2
          }
      }
  });

}

/*--------------------------------------------------------------
9. ST V5 TESTIMONIAL SLIDER JS
--------------------------------------------------------------*/
var st_testimonial_slider_v3 = $('.st_testimonial_slider_v3');
  if (st_testimonial_slider_v3.is_exist()) {
      st_testimonial_slider_v3.owlCarousel({
      loop:true,
      margin:30,
      dots:true,
      items:1,
      autoHeight: true,
      autoplay:true,
      autoplayTimeout:5000,
      navigation: false,
      pagination: true,
      responsive:{
          0:{
              items:1
          },
          600:{
              items:1
          },
          768:{
              items:1 
          },
          1000:{
              items:1
          }
      }
  });

}

/*--------------------------------------------------------------
10. ST V9 TESTIMONIAL SLIDER JS
--------------------------------------------------------------*/
var st_v4_testimonial_slider = $('.st_v4_testimonial_slider');
  if (st_v4_testimonial_slider.is_exist()) {
      st_v4_testimonial_slider.owlCarousel({
      // center: true,
      loop:true,
      margin:10,
      nav:true,
      autoHeight: true,
      autoplay:true,
      autoplayTimeout:5000,
      autoplayHoverPause:true,
      dots:false,
      animateOut: 'fadeOut',
      animateIn: 'fadeIn',
      items:1,
      navText: ["<img src=\"assets/images/v9/prev.png\"/>",
        "<img src=\"assets/images/v9/next.png\" />"],
      responsive:{
          0:{
              items:1
          },
          600:{
              items:1
          },
          768:{
              items:1 
          },
          1000:{
              items:1
          }
      }
  });

}

/*--------------------------------------------------------------
11. ST CLIENT SLIDER JS
--------------------------------------------------------------*/
var st_client_slider = $('.st_client_slider');
  if (st_client_slider.is_exist()) {
      st_client_slider.owlCarousel({
      // center: true,
      loop:true,
      margin:30,
      nav:false,
      dots:false,
      autoplay:true,
  	  autoplayTimeout:5000,
      items:4,
      responsive:{
          0:{
              items:2
          },
          600:{
              items:2
          },
          768:{
              items:3 
          },
          1000:{
              items:4
          }
      }
  });

}

/*--------------------------------------------------------------
12. ST SCREENSHOT SLIDER JS
------------------------------------------------------------*/
var st_screenshot = $('#st_screenshot');
  if(st_screenshot.is_exist()) {
    var st_screenshot = new Swiper('#st_screenshot', {
      effect: 'coverflow',
      loop: true,
      slidesPerView: 1.2,
      spaceBetween: 0,
      centeredSlides: true,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      autoplay: {
        delay: 3000,
      },
      coverflowEffect: {
        rotate: 0, // Slide rotate in degrees
        stretch: 0, // Stretch space between slides (in px)
        depth: 0, // Depth offset in px (slides translate in Z axis)
        modifier: 1, // Effect multipler
        slideShadows : true, // Enables slides shadows
      },
      breakpoints: {
        991: {
          slidesPerView: 1,
        },
         767: {
          slidesPerView: 1,
        }
      }
    });

}

/*--------------------------------------------------------------
13. ST SCREENSHOT V2 SLIDER JS
------------------------------------------------------------*/
var st_screenshot_v2 = $('#st_screenshot_v2');
  if(st_screenshot_v2.is_exist()) {
    var st_screenshot_v2 = new Swiper('#st_screenshot_v2', {
      effect: 'coverflow',
      loop: true,
      slidesPerView: 1.03,
      spaceBetween: 0,
      centeredSlides: true,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      autoplay: {
        delay: 3000,
      },
      coverflowEffect: {
        rotate: 0, // Slide rotate in degrees
        stretch: 0, // Stretch space between slides (in px)
        depth: 0, // Depth offset in px (slides translate in Z axis)
        modifier: 1, // Effect multipler
        slideShadows : true, // Enables slides shadows
      },
      breakpoints: {
        991: {
          slidesPerView: 1,
        },
         767: {
          slidesPerView: 1,
        }
      }
    });

}

/*--------------------------------------------------------------
14. ST SCREENSHOT V3 SLIDER JS
------------------------------------------------------------*/
var st_banner_screenshot = $('#st_banner_screenshot');
  if(st_banner_screenshot.is_exist()) {
    var st_banner_screenshot = new Swiper('#st_banner_screenshot', {
      effect: 'coverflow',
      loop: true,
      slidesPerView: 1.03,
      spaceBetween: 0,
      centeredSlides: true,
         pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
      autoplay: {
        delay: 3000,
      },
      coverflowEffect: {
        rotate: 0, // Slide rotate in degrees
        stretch: 0, // Stretch space between slides (in px)
        depth: 0, // Depth offset in px (slides translate in Z axis)
        modifier: 1, // Effect multipler
        slideShadows : true, // Enables slides shadows
      },
      breakpoints: {
        991: {
          slidesPerView: 1,
        },
         767: {
          slidesPerView: 1,
        }
      }
    });

}


/*--------------------------------------------------------------
15. ST SCREENSHOT V13 SLIDER JS
------------------------------------------------------------*/
var st_screenshot_center_frame = $('#st_screenshot_center_frame');
    if(st_screenshot_center_frame.is_exist()) {
    var st_screenshot_frame_slider = new Swiper('#st_screenshot_center_frame', {
    effect: 'coverflow',
    loop: true,
    centeredSlides: true,
    slidesPerView: 4,
    slideVisibleClass: 'swiper-slide-visible',
    // initialSlide: 4,
    keyboardControl: true,
    mousewheelControl: true,
    lazyLoading: true,
    preventClicks: false,
    preventClicksPropagation: false,
    lazyLoadingInPrevNext: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    autoplay: {
      delay: 3000,
    },
    coverflowEffect: {
      rotate: 0,
      stretch: 80,
      depth: 0,
      modifier: 1,
      slideShadows : true,
    },
    on: {
        slideChange: function () {
          var activeIndex = this.activeIndex;
          var realIndex = this.slides.eq(activeIndex).attr('data-swiper-slide-index');
         $('.swiper-slide').removeClass('swiper-slide-nth-prev-2 swiper-slide-nth-next-2 swiper-slide-nth-next-3 swiper-slide-nth-prev-3');
         $('.swiper-slide[data-swiper-slide-index="'+realIndex+'"]').prev().prev().addClass('swiper-slide-nth-prev-2');
         $('.swiper-slide[data-swiper-slide-index="'+realIndex+'"]').prev().prev().prev().addClass('swiper-slide-nth-prev-3');
         $('.swiper-slide[data-swiper-slide-index="'+realIndex+'"]').next().next().addClass('swiper-slide-nth-next-2');
         $('.swiper-slide[data-swiper-slide-index="'+realIndex+'"]').next().next().next().addClass('swiper-slide-nth-next-3');
        },
    },
    breakpoints: {
      1024: {
        slidesPerView: 3,
      },
      768: {
        slidesPerView: 2,
      },
      640: {
        slidesPerView: 1,
      },
      320: {
        slidesPerView: 1,
      }
    }
  });
}

/*--------------------------------------------------------------
16. ST ACCORDION  JS
--------------------------------------------------------------*/
$('#st_accordion_waraper').on('show.bs.collapse', function(e) {
  var closest = e.target.closest('.card');
  $(closest).addClass('card__active').siblings().removeClass('card__active');
})

/*--------------------------------------------------------------
17. ST SWICHER PRICING INIT
--------------------------------------------------------------*/
$(document).on('change', '.st-pricing-switcher input[type="radio"]', function(e){
    e.preventDefault();
 
    var $self = $(this),
        $val  = $self.val(),
        $container = $('.st-pricing-wrapper');
 
    if ( !$val.length ) { return false; }
   
    $container.find('li[data-type="'+$val+'"]').addClass('is-selected');
    $container.addClass('is-switched').eq(0).one('webkitAnimationEnd oanimationend msAnimationEnd animationend', function() {
        $container.find('li[data-type]').each(function(){
            var $current = $(this),
                $type = $current.attr('data-type');
            if ( $type == $val ) {
                $current.addClass('is-visible').removeClass('is-hidden is-selected');
            } else {
                $current.removeClass('is-visible is-selected').addClass('is-hidden');
            }
        });
        $container.removeClass('is-switched');
        if($self.find('.st-pricing-list').hasClass('st-bounce-invert')) $container.toggleClass('reverse-animation');
    });
});


/*--------------------------------------------------------------
ST SHOP SYNC SLIDER JS
------------------------------------------------------------*/
var st_shop_sync = $('#st_shop_slider_1, #st_shop_slider_2');
  if(st_shop_sync.is_exist()){
  var sync1 = $("#st_shop_slider_1");
  var sync2 = $("#st_shop_slider_2");
  var slidesPerPage = 3;
  var syncedSecondary = true;

  sync1.owlCarousel({
    items : 1,
    slideSpeed : 2000,
    nav: false,
    dots: false,
    loop: true,
    responsiveRefreshRate : 200,
    animateOut: 'fadeOut',
    animateIn: 'fadeIn',
  }).on('changed.owl.carousel', syncPosition);

  sync2
    .on('initialized.owl.carousel', function () {
      sync2.find(".owl-item").eq(0).addClass("current");
    })
    .owlCarousel({
    items : slidesPerPage,
    dots: false,
    nav: false,
    autoWidth:true,
    margin: 25,
    // center:true,
    loop:false,
    smartSpeed: 200,
    slideSpeed : 500,
    slideBy: slidesPerPage,
    responsiveRefreshRate : 100
  }).on('changed.owl.carousel', syncPosition2);

  function syncPosition(el) {
    var count = el.item.count-1;
    var current = Math.round(el.item.index - (el.item.count/2) - .5);
    
    if(current < 0) {
      current = count;
    }
    if(current > count) {
      current = 0;
    }
    
    //end block

    sync2
      .find(".owl-item")
      .removeClass("current")
      .eq(current)
      .addClass("current");
    var onscreen = sync2.find('.owl-item.active').length - 1;
    var start = sync2.find('.owl-item.active').first().index();
    var end = sync2.find('.owl-item.active').last().index();
    
    if (current > end) {
      sync2.data('owl.carousel').to(current, 100, true);
    }
    if (current < start) {
      sync2.data('owl.carousel').to(current - onscreen, 100, true);
    }
  }
  
  function syncPosition2(el) {
    if(syncedSecondary) {
      var number = el.item.index;
      sync1.data('owl.carousel').to(number, 100, true);
    }
  }
  
  sync2.on("click", ".owl-item", function(e){
    e.preventDefault();
    var number = $(this).index();
    sync1.data('owl.carousel').to(number, 300, true);
  });

}

/*--------------------------------------------------------------
ST SHOP INCR BTN JS
------------------------------------------------------------*/
var shop_single = $('.incr-btn');
if(shop_single.is_exist()){
     $(".incr-btn").on("click", function (e) {
        var $button = $(this);
        var oldValue = $button.parent().find('.quantity').val();
        $button.parent().find('.incr-btn[data-action="decrease"]').removeClass('inactive');
        if ($button.data('action') == "increase") {
            var newVal = parseFloat(oldValue) + 1;
        } else {
            // Don't allow decrementing below 1
            if (oldValue > 1) {
                var newVal = parseFloat(oldValue) - 1;
            } else {
                newVal = 1;
                $button.addClass('inactive');
            }
        }
        $button.parent().find('.quantity').val(newVal);
        e.preventDefault();
    });

}

});/*End document ready*/


/*--------------------------------------------------------------
18. ST HEADER STICKY INIT
--------------------------------------------------------------*/
var stickyHeader = $('#stick-menu');
$(window).scroll(function(){
  var $nav = $('.st_header_area');
  if ( $nav.is_exist() && stickyHeader.is_exist() ) {
    var stickyHeaderTop = stickyHeader.offset().top;
    if( $(window).scrollTop() > stickyHeaderTop ) {
      $('.st_header_area').addClass('sticky-menu');
    } else {
      $('.st_header_area').removeClass('sticky-menu');
    }
  }
});


$(window).on("load" ,function(){

  // ST BANNER AUTO HEIGHT
  stSetHeaderMargin();
  // ST HEADER V6 AUTO HEIGHT
  stSetBanner();
  // CONTACT FORM MAKE EQUAL TO ACCORDION
  st_equal_height('.st_accordion_item', '.st_contact_waraper');
  // ST ADD ST LOADED CLASS
  $('body').addClass('st_loaded');

}); // End window LODE



$(window).on("resize", function(){

  // ST BANNER AUTO HEIGHT
  stSetBanner();
  // ST HEADER V6 AUTO HEIGHT
  setTimeout(function(){
    stSetHeaderMargin();
  },1);
  // CONTACT FORM MAKE EQUAL TO ACCORDION
  st_equal_height('.st_accordion_item', '.st_contact_waraper');

}); // end window resize


/*--------------------------------------------------------------
19. ST GOOGLE MAP  JS
--------------------------------------------------------------*/
var map = $('#st_google_map');

if(map.is_exist()) {
  google.maps.event.addDomListener(window, 'load', init);
} 
function init() {
  var mapElement = document.getElementById('st_google_map');

  var mapOptions = {
      zoom: 13,
      scrollwheel: false,
      navigationControl: false,
      mapTypeControl: true,
      scaleControl: false,
      draggable: true,
      disableDefaultUI: true,

      center: new google.maps.LatLng(mapElement.getAttribute('data-latitude'), mapElement.getAttribute('data-longitude')),
      styles: [{"featureType":"water","elementType":"geometry","stylers":[{"color":"#e9e9e9"},{"lightness":17}]},{"featureType":"landscape","elementType":"geometry","stylers":[{"color":"#f5f5f5"},{"lightness":20}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#ffffff"},{"lightness":17}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#ffffff"},{"lightness":29},{"weight":0.2}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#ffffff"},{"lightness":18}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#ffffff"},{"lightness":16}]},{"featureType":"poi","elementType":"geometry","stylers":[{"color":"#f5f5f5"},{"lightness":21}]},{"featureType":"poi.park","elementType":"geometry","stylers":[{"color":"#dedede"},{"lightness":21}]},{"elementType":"labels.text.stroke","stylers":[{"visibility":"on"},{"color":"#ffffff"},{"lightness":16}]},{"elementType":"labels.text.fill","stylers":[{"saturation":36},{"color":"#333333"},{"lightness":40}]},{"elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"transit","elementType":"geometry","stylers":[{"color":"#f2f2f2"},{"lightness":19}]},{"featureType":"administrative","elementType":"geometry.fill","stylers":[{"color":"#fefefe"},{"lightness":20}]},{"featureType":"administrative","elementType":"geometry.stroke","stylers":[{"color":"#fefefe"},{"lightness":17},{"weight":1.2}]}]
    };

  var map = new google.maps.Map(mapElement, mapOptions);
  var overlay = new CustomMarker(
    mapOptions.center, 
    map,
    {
      marker_id: 'st_map'
    }
  );
}



})(jQuery);






