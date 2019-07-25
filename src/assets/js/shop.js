"use strict"
jQuery(function ($) {
  var $body = $('body');
  var $minicart = $('.js-minicart');
  $minicart.on('click', function (e) {
    if ($minicart.is('.mini-cart_is-empty')) {
      $minicart.find('.mini-cart__to-catalog').toggleClass('mini-cart__to-catalog_active');
    }
  });

  function cart_is_empty() {}

  function cart_is_not_empty() {}

  $body.on('click', '.ajax_add_to_cart', function (e) {
    e.preventDefault();
    var $this = $(this);
    var $loop = $this.closest('.product-loop');
    if ($loop.length) {
      $loop.addClass('product-loop_adding');
    }

  });

  $body.on('added_to_cart', function (event, fragments, cart_hash, $button) {
    var $loop = $button.closest('.product-loop');

    var widget = $(fragments['div.widget_shopping_cart_content']);
    var new_mini_cart = widget.find('.mini-cart');
    $('.mini-cart').replaceWith(new_mini_cart);

    if ($loop.length) {
      $loop.find('.wc-forward').remove();
      $loop.removeClass('product-loop_adding');
      setTimeout(function () {
        $loop.addClass('product-loop_added');
      }, 300);
      setTimeout(function () {
        $loop.removeClass('product-loop_added')
      }, 2500);
    }

    return;
  });

  let bigSliderIsInited = false;
  let bigPhotoSliderConfig = {
    items: 1,
    margin: 0,
    loop: false,
    navigation: true,
    navElement: 'a',
    navText: ["<i class='owl-arrow_prev owl-arrow_inverse'></i>", "<i class='owl-arrow_next owl-arrow_inverse'></i>"],
    URLhashListener: false,
    autoplay: false,
    autoplayTimeout: 4000,
    autoplaySpeed: 1000,
    autoplayHoverPause: true,
    navSpeed: 750
  };
  if ($('.product-photo-slider__item').length > 1) {
    var bigPhotoSliderObject = $('.product-photo-slider');
    var bigPhotoSlider = bigPhotoSliderObject.owlCarousel(bigPhotoSliderConfig);
    bigSliderIsInited = true;
  }

  let thumbsSliderConfig = {
    items: 4,
    loop: false,
    navigation: true,
    navElement: 'a',
    navText: ["<i class='owl-arrow_prev'></i>", "<i class='owl-arrow_next'></i>"],
    URLhashListener: false,
    autoplay: false,
    autoplayTimeout: 4000,
    autoplaySpeed: 1000,
    autoplayHoverPause: true,
  };

  if ($('.product-thumbs__item').length > 4) {
    var thumbsSliderObject = $('.product-thumbs__slider');
    var thumbsSlider = thumbsSliderObject.owlCarousel(thumbsSliderConfig);
  }
  
  
  $body.on('click', '.js-thumb-slider-link', function (e) {
    e.preventDefault();
    if( bigSliderIsInited ){
      let $this = $(this);
      let index = $this.data('slide-index');
      bigPhotoSliderObject.trigger('to.owl.carousel', index)
    }
    else return false;
      
  });




});