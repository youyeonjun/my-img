$(document).ready(function(){
    const trigger = new ScrollTrigger.default({
        trigger: {
            once: false,
            markers: true,
            start: "top center",
            offset: {
                element: {
                    x: 1,
                    y: 0.5
                },
            }
        }
    });
    trigger.add('[data-trigger1]');

    var countOptions = {
        useEasing: true ,
        suffix: "%"
    };
    
    var counthtml = new CountUp("html-number", 0, 90, 0, 2, countOptions);
    var countcss = new CountUp("css-number", 0, 90, 0, 2, countOptions);
    var countjs = new CountUp("js-number", 0, 85, 0, 2, countOptions);
    var countps = new CountUp("ps-number", 0, 80, 0, 2, countOptions);
    
    

    $('.html-img').click(function(){
        $('.html-box2').css({"width": "90%","transition": "1.8s"});
        $('.html-text').css({"opacity": "1","transition": "2s"});
        counthtml.start();
    });
    $('.css-img').click(function(){
        $('.css-box2').css({"width": "90%","transition": "1.5s"});
        $('.css-text').css({"opacity": "1","transition": "2s"});
        countcss.start();
    });
    $('.js-img').click(function(){
        $('.js-box2').css({"width": "85%","transition": "1.5s"});
        $('.js-text').css({"opacity": "1","transition": "2s"});
        countjs.start();
    });
    $('.ps-img').click(function(){
        $('.ps-box2').css({"width": "80%","transition": "1.5s"});
        $('.ps-text').css({"opacity": "1","transition": "2s"});
        countps.start();
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

