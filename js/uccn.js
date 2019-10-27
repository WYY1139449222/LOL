let navL = document.getElementsByClassName('navL')[0];
let deve = document.getElementsByClassName('deve')[0];
let develop = document.getElementsByClassName('develop')[0];
let imgs = document.querySelectorAll('.imgBox>img');
let p = document.querySelectorAll('.imgBox>p')[0];
let descLOL = document.getElementsByClassName('descLOL')[0];
let imgBox = document.getElementsByClassName('imgBox')[0];
let wrap = document.getElementsByClassName('wrap')[0];
let $swperLis = $('.swper>ul>li');
let $swperFoots = $('.sp');
let $swperFoot = $('.swperFoot').eq(0);
let $swper = $('.swper');
let $wrapToplis = $('.wrapTop>li');
let $wrapbodyul = $('.wrapbody>ul');
let $actNavullis = $('.actNavul>li');
let $actbody = $('.actbody');
let $dowlodlast = $('.dowlodlast');
let $dowlodlastI = $('.dowlodlast i');
let $lodBox = $('.lodBox');
let $vidlis = $('.vidbody>li>ul>li');
let $vidliTOuts = $('.vidbody>li>ul>li>.vidliTOut');
let $vidliTIns = $('.vidbody>li>ul>li>.vidliTIn');
let $vidliImgs = $('.vidbody>li>ul>li>img');
let $vidLNavlis = $('.vidLNav>ul>li');
let $vidbodylis = $('.vidbody>li');
let $vidRNavlis = $('.vidRNav>ul>li');
let $vidRBodyuls = $('.vidRBodyIn>ul');
$vidRBodyuls.each(function () { this.m = 0 })
let $vidRBodyL = $('.vidRBodyL');
let $vidRBodyR = $('.vidRBodyR');

let n = 0, timer = null;
let s, timer2 = null;

navL.onmouseenter = function () {
    deve.style.opacity = 1;
    deve.style.display = 'block'
    develop.style.display = 'block'
}
navL.onmouseleave = function () {
    develop.style.display = 'none'
    deve.style.display = 'none'
}
deve.onmouseenter = function () {
    deve.style.display = 'block'
    develop.style.display = 'block'
}
deve.onmouseleave = function () {
    deve.style.display = 'none'
    develop.style.display = 'none'
}
window.onscroll = function () {
    imgs[1].style.transition = 'none';
    imgs[1].style.opacity = 1;
    let l = imgs[1].offsetHight;
    imgs[1].style.transition = ' all 0.3s linear';
    imgs[1].style.height = '360px';
    imgs[0].style.display = 'none'
    p.style.transition = ' all 0.3s linear';
    p.style.top = '300px';
    descLOL.style.transition = ' all 0.3s linear';
    descLOL.style.top = '300px';
    // imgBox.style.transition=' all 0.3s linear';
    imgBox.style.transition = ' all 0.3s linear';
    imgBox.style.height = '410px';
    wrap.style.transition = ' all 0.3s linear';
    wrap.style.top = '400px';

}
function move() {
    n++;
    if (n > $swperLis.length - 1) {
        n = 0
    }
    $swperLis.eq(n).css({ opacity: 0 }).show().animate({ opacity: 1 }, 300).siblings().animate({ opacity: 0 }, 300, function () {
        $swperLis.eq(n).siblings().hide()
    })
    $swperFoots.eq(n).addClass('swperp').siblings().removeClass('swperp')
}
function autoMove() {
    timer = setInterval(() => {
        move()
    }, 2000)
}
autoMove()
$swper.on('mouseenter', function () {
    clearInterval(timer);
})
$swper.on('mouseleave', function () {
    autoMove();
})
$swperFoots.on('mouseover', function () {
    n = $(this).index();
    n--;
    move()
})
$wrapToplis.on('mouseenter', function () {
    let n = $(this).index();
    $(this).addClass('wrapToplis').siblings().removeClass('wrapToplis');
    $wrapbodyul.eq(n).css({ display: 'block' }).siblings().css({ display: 'none' })
})
$actNavullis.on('mouseenter', function () {
    let n = $(this).index();
    $(this).addClass('wrapToplis').siblings().removeClass('wrapToplis');
    $actbody.eq(n).addClass('actbodycur').siblings().removeClass('actbodycur')
})
$dowlodlast.on('mouseenter', function () {
    $dowlodlastI.eq(0).animate({ left: '-17px' }, 300);

    setTimeout(() => {
        $dowlodlastI.eq(0).css({ display: 'none' });
        $lodBox.eq(0).css({ display: 'block' })
    }, 400)

});
$dowlodlast.on('mouseleave', function () {
    $dowlodlastI.eq(0).css({ display: 'block' }).animate({ left: '15px' }, 300);
    $lodBox.eq(0).css({ display: 'none' })
    setTimeout(() => {
        $dowlodlastI.eq(0).css({ display: 'block' }).animate({ left: '15px' }, 300);
        $lodBox.eq(0).css({ display: 'none' })
    }, 400)

})
$('.championR').on('mouseenter', function () {
    $('.championR video').get(0).play();
    $('.vid').animate({ top: '1740px' }, 500);
    $(".match").animate({ top: '2260px' }, 500);
})
$('.championR').on('mouseleave', function () {
    $('.championR video').get(0).pause();
    $('.vid').animate({ top: '1480px' }, 500);
    $(".match").animate({ top: '2000px' }, 500);
})
$('.versonvideo').on('mouseenter', function () {
    $('.versonvideo video').get(0).play();
})
$('.versonvideo').on('mouseleave', function () {
    $('.versonvideo video').get(0).pause();
})
$('.versonper').on('mouseenter', function () {
    $('.vid').animate({ top: '1660px' }, 500)
    $(".match").animate({ top: '2180px' }, 500);
})
$('.versonper').on('mouseleave', function () {
    $('.vid').animate({ top: '1480px' }, 500);
    $(".match").animate({ top: '2000px' }, 500);
    $('.sanjiao').css({ display: 'block' })
})
$vidLNavlis.on('mouseenter', function () {
    let n = $(this).index();
    $(this).addClass('wrapToplis').siblings().removeClass('wrapToplis');
    $vidbodylis.eq(n).show().siblings().hide()
})
$vidlis.on('mouseenter', function () {
    let ary = $vidlis.get();
    let k = ary.indexOf(this);
    $vidliTIns.eq(k).css({ display: 'block' })
    $vidliTOuts.eq(k).css({ display: 'block' })
})
$vidlis.on('mouseleave', function () {
    let ary = $vidlis.get();
    let k = ary.indexOf(this);
    $vidliTIns.eq(k).css({ display: 'none' })
    $vidliTOuts.eq(k).css({ display: 'none' })
})
$vidlis.on('mousemove', function (e) {
    let ary = $vidlis.get();
    let k = ary.indexOf(this);
    let m = ($(this).innerWidth()) / 8;
    let l = e.pageX - $(this).offset().left;
    $vidliTOuts.eq(k).css({ width: l + 'px' });
    if (l < 0) l = 0.1;
    m = Math.ceil(l / m)
    $vidliImgs.eq(k).attr({ src: `../img/vid${m}.jpg` })
})
$vidRNavlis.on('mouseenter', function () {
    let n = $(this).index();
    $(this).addClass('wrapToplis').siblings().removeClass('wrapToplis');
    $vidRBodyuls.eq(n).css({ display: 'block' }).attr({ flag: 1 }).siblings().css({ display: 'none' }).attr({ flag: 0 })
    $vidRBodyuls.get().forEach(item => {
        if ($(item).attr('flag') == 1) {
            s = $(item).index();
        }
    })
})
function vidRmove() {
    $vidRBodyuls.get().forEach((item, index) => {
        if ($(item).attr('flag') == 1) {
            s = $(item).index();
        }
    })
    $vidRBodyuls.eq(s)[0].m++;
    if ($vidRBodyuls.eq(s)[0].m > 3) {
        $vidRBodyuls.eq(s)[0].m = 0;
        $vidRBodyuls.eq(s).css({ left: -$vidRBodyuls.eq(s)[0].m * 501 + 'px' })
        $vidRBodyuls.eq(s)[0].m++;
    };
    $vidRBodyuls.eq(s).animate({ left: -$vidRBodyuls.eq(s)[0].m * 501 + 'px' }, 300)
}
function vidRAutoMove() {
    timer2 = setInterval(() => {
        vidRmove()
    }, 2000)
}
vidRAutoMove()
$vidRBodyR.on('click', throttle(function () {
    vidRmove()
}));
$vidRBodyL.on('click', throttle(function () {
    $vidRBodyuls.eq(s)[0].m--;
    if ($vidRBodyuls.eq(s)[0].m < 0) {
        $vidRBodyuls.eq(s)[0].m = 3;
        $vidRBodyuls.eq(s).css({ left: -$vidRBodyuls.eq(s)[0].m * 501 + 'px' })
        $vidRBodyuls.eq(s)[0].m--;
    }
    $vidRBodyuls.eq(s)[0].m--;
    vidRmove()
}))
$('.vidRBody').on('mouseenter', function () {
    clearInterval(timer2);
})
$('.vidRBody').on('mouseleave', function () {
    vidRAutoMove()
})
function throttle(cb) {
    let flag = true;
    return function () {
        if (!flag) return;
        cb.call(this);
        flag = false;
        setTimeout(() => {
            flag = true;
        }, 1000)
    }
}

let $matchNavlis = $('.matchNav>ul>li');
$matchNavlis.on('mouseenter', function () {
    let n = $(this).index();
    $(this).addClass('wrapToplis').siblings().removeClass('wrapToplis')
    $('.matchBO').eq(n).css({display:'block'}).siblings().css({display:'none'})
    if(n==1){
        $('.match').css({height:270+'px'});
        $(".part").css({top:2450+'px'})
    }else{
        $('.match').css({height:516+'px'});
        $(".part").css({top:2680+'px'})
    }
})

let $BO1BtnL = $('.BO1Btn>.BO1BtnL');
let $BO1BtnR = $('.BO1Btn>.BO1BtnR');
let $BO1UL = $('.BO1UL>ul');

function BO1ULMove() {
    let $BO1ULImgs = $('.BO1UL img');
    let $BO1ULas = $('.BO1UL a');
    $BO1ULImgs.on('mousedown',function(e){
        e.preventDefault();
    })
    $BO1ULas.on('mousedown',function(e){
        e.preventDefault();
    })
    let oo = 0;
    let startX = 0;
    $BO1BtnR.on('click', function () {
        $BO1BtnL.eq(0).show();
        if (oo >= 10) {
            $BO1BtnR.eq(0).hide()
        }
        oo++;
        $BO1UL.eq(0).animate({ left: `${-oo * 500}px` }, 300)
    })
    $BO1BtnL.on('click', function () {
        $BO1BtnR.eq(0).show();
        if (oo <= 1) {
            $BO1BtnL.eq(0).hide()
        }
        oo--;
        $BO1UL.eq(0).animate({ left: `${-oo * 500}px` }, 300)
    })
    let l,k;
    $BO1UL.eq(0).on('mousedown', function (e) {
        startX = e.pageX;
        k = parseFloat($BO1UL.eq(0).css('left'))
        $(window).on('mousemove', move)
    });
    function move(e) {
        l = e.pageX- startX;
        $BO1UL.eq(0).css({ left: (k + l) })
    }
    $(window).on('mouseup', function () {
        $(window).off('mousemove', move)
        if (l > 0) {
            if (oo <= 0) {
                $BO1UL.eq(0).animate({ left: 0 + 'px' }, 300)
            } else {
                oo--;
                $BO1UL.eq(0).animate({ left: `${-oo * 500}px` }, 300)
            }
        }
        if(l==0){
            $BO1UL.eq(0).animate({ left: `${-oo * 500}px` }, 300)
        }
        if (l < 0) {
            if (oo >= 11) {
                $BO1UL.eq(0).animate({ left: -oo * 500 + 'px' }, 300)
            } else {
                oo += 1;
                $BO1UL.eq(0).animate({ left: `${-oo * 500}px` }, 300)
            }
        }
        l=0;
        if(oo<=0){
            $BO1BtnL.eq(0).hide()
        }else{
            $BO1BtnL.eq(0).show()
        }
        if(oo>=11){
            $BO1BtnR.eq(0).hide()
        }else{
            $BO1BtnR.eq(0).show();
        }
    })
}
BO1ULMove()
// let $matchB1jifenToplis = $('.matchB1jifenTop>ul>li');
let $matchB2jifenToplis = $('.matchB2>.matchB1jifen>.matchB1jifenTop>ul>li');
let $matchB1jifenToplis = $('.matchB1>.matchB1jifen>.matchB1jifenTop>ul>li');
let $B2jifenBodyuls = $('.matchB2>.matchB1jifen>.jifenBody>ul');
let $B1jifenBodyuls = $('.matchB1>.matchB1jifen>.jifenBody>ul');
let $matchB2RTlis = $('.matchB2RT>ul>li');
let $matchB2RBodyuls = $('.matchB2RBody>ul');
//滚动条获取
let bigBox = document.querySelector('.matchB2RBody');
let bigMove = document.querySelectorAll('.matchB2RBody>ul');
let litBox = document.getElementById('scroll');
let litMove = document.getElementById('bar');
scrollBar(bigBox,bigMove[0],litBox,litMove)

function change(ary,arr,str){
    let n=0;
    ary.on('mouseenter',function(){
        n = $(this).index();
        $(this).addClass(str).siblings().removeClass(str);
        arr.eq(n).css({display:'block'}).siblings('ul').css({display:'none'})
        scrollBar(bigBox,bigMove[n],litBox,litMove)
    })
}
change($matchB2jifenToplis,$B2jifenBodyuls,'wrapToplis');
change($matchB1jifenToplis,$B1jifenBodyuls,'wrapToplis');
change($matchB2RTlis,$matchB2RBodyuls,'currentB2');
//滚动条
function scrollBar(bigBox,bigMove,litBox,litMove){
    let sy=t=endy=0;
    let n = 0;
    let minN = bigMove.clientHeight - bigBox.clientHeight;
    let height = (bigBox.clientHeight*litBox.clientHeight)/(bigMove.clientHeight)
    litMove.style.height = height + 'px';
    let maxT = litBox.clientHeight - height;
    let m = bigBox.clientHeight/height;
    function init(){
        bigMove.style.top = 0 +'px';
        litMove.style.top = 0 + 'px';
    }
    init()
    litMove.onmousedown = function(e){
        sy = e.pageY
        document.addEventListener('mousemove',move,false)
    } 
    function move(e){
        window.getSelection?window.getSelection().removeAllRanges():document.selection.empty();
        t = e.pageY - sy+endy;
        t = t<=0?0:(t>=maxT?maxT:t)
        litMove.style.top = t + 'px';
        bigMove.style.top = -t*m + 'px';
    }
    document.addEventListener('mouseup',function(){
        document.removeEventListener('mousemove',move,false);
        endy = parseFloat(litMove.style.top)
    },false) 
    bigBox.addEventListener('mousewheel',function(e){
        if(e.wheelDelta<0){
            n-=5;
            n = n<= -minN? - minN:n;
        }
        if(e.wheelDelta>0){
            n+=5;
            n = n>=0?0:n;
        }
        if(n<0&&n>-minN){
            e.preventDefault();
        }
        bigMove.style.top = n +'px';
        litMove.style.top = -n/m +'px';
    },false)
}

