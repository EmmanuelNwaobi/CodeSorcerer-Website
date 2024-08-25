// Zoom animation
$(window).scroll(function(){
    $(".zoomanim").each(function(){
        let pos = $(this).offset().top

        let wintop = $(window).scrollTop()

        if(pos < wintop +600){
            $(this).addClass('zoom')
        }
    })
})
// right animation
$(window).scroll(function(){
    $(".rightanim").each(function(){
        let pos = $(this).offset().top

        let wintop = $(window).scrollTop()

        if(pos < wintop +600){
            $(this).addClass('right')
        }
    })
})
// left animation
$(window).scroll(function(){
    $(".leftanim").each(function(){
        let pos = $(this).offset().top

        let wintop = $(window).scrollTop()

        if(pos < wintop +600){
            $(this).addClass('left')
        }
    })
})
// slide animation
$(window).scroll(function(){
    $(".swipeanim").each(function(){
        let pos = $(this).offset().top

        let wintop = $(window).scrollTop()

        if(pos < wintop +600){
            $(this).addClass('swipe')
        }
    })
})