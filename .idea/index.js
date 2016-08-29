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
                    break;
                case 4:
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
                    break;
                case 4:
                    break;
            }
        },
    })
})
