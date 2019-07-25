jQuery($ => {

    // Navigation active and hover animation begin
    {
        var $elem, leftPos, newWidth,
            $elemActive = $(".nav-list .current-menu-item"),
            $nav = $(".nav-list");
        if( $elemActive.closest('.sub-menu').length ){
            $elemActive = $(".current-menu-ancestor")
        }

        if(!$elemActive.length){
            $elemActive = $elemActive = $(".nav-list__item").eq(0);
        }

        $nav.append("<li class='nav-list__item_marker'></li>");
        var $underline = $(".nav-list__item_marker");

        $underline
            .width( $elemActive.width() + 45 )
            .css("left", $elemActive.position().left - 22)
            .data("orig-left", $underline.position().left)
            .data("orig-width", $underline.width());

//        $(".nav-list>.nav-list__item").hover(function() {
//            $elem = $(this);
//            leftPos = $elem.position().left - 22;
//            newWidth = $elem.width() + 45;
//            console.log(newWidth);
//            $underline.stop().animate({
//                left: leftPos,
//                width: newWidth
//            });
//        }, function() {
//            $underline.stop().animate({
//                left: $underline.data("orig-left"),
//                width: $underline.data("orig-width")
//            });
//        });
        $elemActive.hover(function() {
            $underline.addClass('hovered');

        }, function() {
            $underline.removeClass('hovered');
        });
    }
    // Navigation active and hover animation end
});
