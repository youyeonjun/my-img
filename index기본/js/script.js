$(document).ready(function(){
    $('.slider-box-1 > .slick').slick({
        dots:true,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover:false,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode:true,
    centerPadding:0,
    arrows:true,
    prevArrow:".slider-box-1 > .arrows > .btn-arrow-left",
    nextArrow:".slider-box-1 > .arrows > .btn-arrow-right"
    });
    

    $(".header-wrap > .header-box > ul > li").mouseover(function(){
        
        var con__height ;
        if( $(this).index() == 0 ){
            con__height = 68;
        }else if($(this).index() == 1 ){
            con__height = 680;
        }else if($(this).index() == 2){
            con__height = 136;
        }else if($(this).index() == 3){
        con__height = 136;
        }else if($(this).index() == 4){
            con__height = 68;
        }

        $(".header-wrap > .header-box > ul > li > ul").css({
            "max-height" : 0+"px",
            "opacity" : 0,
        })
        $(this).find("ul").css({
            "max-height" : con__height+"px",
            "opacity" : 1,
        })
                $(".nav2-bg").css({
            "height" : con__height+10+"px",
        })
        var test= $(this).find("ul").height();
        console.log(test)

        console.log(con__height)


    })

    $(".nav2-bg").mouseleave(function(){
        $(".header-wrap > .header-box > ul > li > ul").css({
            "max-height" : 0+"px",
            "opacity" : 0,
        })

        $(".nav2-bg").css({
            "height" : 0+"px",
        })
    })
    // $(".header-wrap > .header-box > ul > li").mouseleave(function(){
    //     $(".nav2-bg").css({
    //         "height" : 0+"px",
    //     })
    // })

 });
