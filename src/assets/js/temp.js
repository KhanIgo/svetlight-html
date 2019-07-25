jQuery(function ($) {
    $('.add-to-cart').click(function (e) {
        e.preventDefault();
        var loop = $(this).closest('.product-loop');
        loop.addClass('product-loop_adding');
        setTimeout(function(){
            loop.removeClass('product-loop_adding')
        }, 1500);
        setTimeout(function(){
            loop.addClass('product-loop_added');
        }, 1800);
        setTimeout(function(){
            loop.removeClass('product-loop_added')
        }, 3500);
    });
});