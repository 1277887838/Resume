/**
 * Created by Administrator on 2016/8/29 0029.
 */$(function () {
    $('#fullpage').fullpage({
        css3: true,
        resize: false,
        anchors: ['page1', 'page2', 'page3', 'page4'],
        navigation: true,
        navigationPosition: 'right',
        navigationTooltips: ['首页', '个人简介', '技能', '联系方式'],
        afterLoad: function (link, index) {
            switch (index) {
                case 1:
                    move('.page1 .bor').add('width', 100).duration('.7s').end();
                    move('.page1 h1').scale(0.8).end();
                    move('.section').set('background-size', '100%').ease('in-out').duration('3s').end();
                    break;
                case 2:
                    move('.page2 .bor').add('width', 100).end();
                    move('.page2 h1').scale(0.8).end();
                    var i = -1;
                    $(".ypkey").each(function () {
                        var $this = $(this);
                        if (!$this.hasClass("b_to_t")) {
                            i++;
                            setTimeout(function () {
                                $this.addClass("b_to_t");
                            }, 200 * i);
                        }
                    })
                    break;
                case 3:
                   // move('.page3 .bor').add('width', 100).duration('.7s').end();
                    //move('.page3 h1').scale(0.8).end();
                    move('.computer').set('margin-top','30px').duration('2s').end();
                    move('.computer').set('opacity','1').duration('2s').end();
                    break;
                case 4:
                    move('.page4 .bor').add('width', 100).duration('.7s').end();
                    move('.page4 h1').scale(0.8).end();
                    break;
            }
        },
        onLeave: function (link, index) {
            switch (index) {
                case 1:
                    move('.page1 .bor').sub('width', 100).end();
                    move('.page1 h1').scale(1).end();
                    move('.section').set('background-size', '110%').end();
                    break;
                case 2:
                    move('.page2 .bor').sub('width', 100).end();
                    move('.page2 h1').scale(1).end();
                    var i = 0;
                    $(".ypkey").each(function () {
                        var $this = $(this);
                        if ($this.hasClass("b_to_t")) {
                            $this.removeClass("b_to_t");
                            i++;
                        }
                    });
                    break;
                case 3:
                   // move('.page3 .bor').sub('width', 100).end();
                   // move('.page3 h1').scale(1).end();
                    move('.computer').set('margin-top','50px').end();
                    move('.computer').set('opacity','0').end();
                    break;
                case 4:
                    move('.page4 .bor').sub('width', 100).end();
                    move('.page4 h1').scale(1).end();
                    break;
            }
        },
    })
})

//轮播
var $index=0;
var $exdex=0;
$(".dh li").click(function(){
    $index=$(this).index();
    $(".dh li").eq($index).addClass("hover").siblings().
    removeClass("hover");
    if($index>$exdex){
        next();
    }else if($index<$exdex){
        pre();
    }
    return $exdex=$index;
});
//下一页导航的点击事件
$(".next").click(function(){
    $index++;
    if($index>3){
        $index=0
    }
    $(".dh li").eq($index).addClass("hover").siblings().
    removeClass("hover");
    next();
    return $exdex=$index;
});
//上一页导航的点击事件
$(".pre").click(function(){
    $index--;
    if($index<0){
        $index=3
    };
    $(".dh li").eq($index).addClass("hover").siblings().
    removeClass("hover");
    pre();
    return $exdex=$index;
});

//定时器
/*
var atime=setInterval(function(){
    $(".next").click();
},3000);
*/

//下一页
function next(){
    $(".imgs li").eq($index).stop(true,true).
    css("left","400px").animate({"left":"0"});
    $(".imgs li").eq($exdex).stop(true,true).
    css("left","0").animate({"left":"-400px"});
}
//上一页
function pre(){
    $(".imgs li").eq($index).stop(true,true).
    css("left","400px").animate({"left":"0"});
    $(".imgs li").eq($exdex).stop(true,true).
    css("left","0").animate({"left":"400px"});
}
