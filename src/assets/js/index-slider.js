jQuery($=>{
    let 
        slide_class = 'b-index-slide',
        t1_time = 0.4,
        t1_delay = 0,
        t2_time = 0.4,
        t2_delay = 0.15,
        img_time = 0.4,
        img_delay = 0.3,
        bg_time = 0.6,
        bg_delay = 0.6,
        reset_timeout = 1300,
        $slides, $slide_active, $slide_next;
    
    
    
    $('.js-slide-test').click(function(e){
        e.preventDefault();
        slide_out();
    });
    
    init_slides();
    
    
    
    function init_slides(){
        $slides = $('.'+slide_class);
        if($slides.length){
            $slide_active = $slides.filter('.active');
            if($slide_active.length==0) $slide_active = $slides.eq(0);
            $slide_active.addClass('active');
        }
        if($slides.length>1){
            $slide_next = $slide_active.next('.'+slide_class);
            if($slide_next.length) $slide_next.addClass()
        }
    }
    
    function init_slide_next(){
        if($slides.length>1){
            $slide_next = $slide_active.next('.'+slide_class);
            if($slide_next.length) $slide_next.addClass('slide-next')
        }
    }
    
    function slide_out(){
        let $t1 = $slide_active.find('.b-index-slide__title'), 
            $t2 = $slide_active.find('.b-index-slide__decription'), 
            $img = $slide_active.find('.b-index-slide__photo'), 
            $slide = $slide_active;
        
        TweenMax.to($t1, t1_time, {opacity:0, top: -100, delay: t1_delay});
        TweenMax.to($t2, t2_time, {opacity:0, bottom: -100, delay: t2_delay});
        TweenMax.to($img, img_time, {opacity:0, right: -100, delay: img_delay});
        TweenMax.to($slide, bg_time, {opacity:0, delay: bg_delay});
        
//        TweenMax.to($slide, bg_time, {opacity:0, bottom: -300, transform: "scale(2)", delay: bg_delay});
        
        setTimeout(function(){
            slide_reset([$t1, $t2, $img, $slide]);
        }, reset_timeout);
        
        function slide_reset($objects_arr){
//            TweenMax.set($objects_arr, {clearProps:"all"});
        }
    }
    
    
});