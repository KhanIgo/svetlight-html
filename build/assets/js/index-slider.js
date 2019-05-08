jQuery($=>{
    let t1_time = 0.4,
        t1_delay = 0,
        t2_time = 0.4,
        t2_delay = 0.15,
        img_time = 0.4,
        img_delay = 0.3,
        bg_time = 0.4,
        bg_delay = 0.6,
        reset_timeout = 1100,
        slide_active, slide_next;
    
    
    
    $('.js-slide-test').click(function(e){
        e.preventDefault();
        slide_out();
    });
    
    
    
    
    
    
    
    function slide_out(){
        let $t1 = $('.b-index-slide__title');  
        let $t2 = $('.b-index-slide__decription');  
        let $img = $('.b-index-slide__photo');
        let $slide = $('.b-index-slide');
        
        TweenMax.to($t1, t1_time, {opacity:0, top: -100, delay: t1_delay});
        TweenMax.to($t2, t2_time, {opacity:0, bottom: -100, delay: t2_delay});
        TweenMax.to($img, img_time, {opacity:0, right: -100, delay: img_delay});
        TweenMax.to($slide, bg_time, {opacity:0, bottom: -300, transform: "scale(2)", delay: bg_delay});
        
        setTimeout(function(){
            slide_reset([$t1, $t2, $img, $slide]);
        }, reset_timeout);
        
        function slide_reset($objects_arr){
            TweenMax.set($objects_arr, {clearProps:"all"});
        }
    }
    
    
});