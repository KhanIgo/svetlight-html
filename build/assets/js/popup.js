jQuery(function($){


    $('body').on('click', '.js-show-callback-popup-form', function(e){
        e.preventDefault();
        $('.popup-form-window_call-form').addClass('popup-form-window_is-active');
    });

    $('body').on('click', '.js-close_popup-window', function(e){
        e.preventDefault();
        $(this).closest('.popup-form-window').removeClass('popup-form-window_is-active');
    });
});
