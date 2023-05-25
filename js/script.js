$(document).ready(function(){
//창크기 변화 감지//스크립트방법찾기
    
//전체공통스크립트
    //메인슬라이더
    $('#mainSlider ul').bxSlider({
        auto: true,
        controls: false,
        autoControls: true,
        autoControlsCombine: true,
        stopAutoOnClick:true,
        pager: true
    });
    
     //mainRow4 유튜브영상 탭메뉴
    $(".video .tab li").click(function(){
        var i=$(this).index();
        $(".video .tab li").removeClass("on");
        $(this).addClass("on");
        $(".video .pannel li").removeClass("on");
        $(".video .pannel li").eq(i).addClass("on");
        return false;
    });
    //탭메뉴클릭시 영상재생정지 제어
    $(".video .pannel li .over").click(function(){
        $(this).css("display","none");
    });
    $(".video .tab li").on("click", function(){
        $("iframe")[0].contentWindow.postMessage('{"event":"command","func":"' + 'stopVideo' + '","args":""}', '*');
    });

    //mainRow7 패밀리사이트 슬라이드
    $(".mainRow7 ul").bxSlider({
        auto: true,
        autoControls: true,
        autoControlsCombine: true,
        stopAutoOnClick: true,
        pager: false,
        speed:600,
        pause:4000,
        slideWidth:150,
        slideMargin:22,
        maxSlides:6,
        moveSlides:1
    });
    
    //푸터 전국지점안내 선택메뉴
    $(".branch .btn.off").click(function(){
        $(this).css("display","none");
        $(".branch .btn.on").css("display","block");
        $(".branch .list").stop().slideDown(300);
        return false;
    });
    
    $(".branch .btn.on").click(function(){
        $(this).css("display","none");
        $(".branch .btn.off").css("display","block");
        $(".branch .list").stop().slideUp(300);
        return false;
    });
    
    //Top버튼
    $(".btnTop").hide();
    $(window).scroll(function(){
        if($(this).scrollTop()>120){
            $(".btnTop").fadeIn();   
        }else{
            $(".btnTop").fadeOut();
        }
    });

    $(".btnTop").click(function(){
        $("body, html").animate({
            scrollTop:0
        },500);
        return false;
    });
//전체공통스크립트 끝

    
    
    //mainRow3 체크리스트 아코디언
    $(".checklist li").hover(function(){
        $(this).find(".cont-area").stop().slideDown(500);
    },function(){
        $(this).find(".cont-area").stop().slideUp(300);
    });
    
    
//모바일320 
    //if (window.matchMedia('(max-width:768px)').matches)
//{
    //$(".checklist li").hover(function(){
    //    $(this).find(".cont-area").stop().slideDown();
    //},function(){
    //    $(this).find(".cont-area").stop().slideUp();
    //});
//}
//모바일320 끝
    
    
    
    
});//ready end







