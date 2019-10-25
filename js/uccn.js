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
    $('.vid').animate({ top: '1740px' }, 500)
})
$('.championR').on('mouseleave', function () {
    $('.championR video').get(0).pause();
    $('.vid').animate({ top: '1480px' }, 500)
})
$('.versonvideo').on('mouseenter', function () {
    $('.versonvideo video').get(0).play();
})
$('.versonvideo').on('mouseleave', function () {
    $('.versonvideo video').get(0).pause();
})
$('.versonper').on('mouseenter', function () {
    $('.vid').animate({ top: '1660px' }, 500)
})
$('.versonper').on('mouseleave', function () {
    $('.vid').animate({ top: '1480px' }, 500)
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
    $(this).addClass('wrapToplis').siblings().removeClass('wrapToplis')
    console.log(11);

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
    let l,_e;
    $BO1UL.eq(0).on('mousedown', function (e) {
        _e = e;
        startX = e.pageX - $(this).offset().left;
        $(window).on('mousemove', move)
    });
    function move(e) {
        l = e.pageX - $BO1UL.eq(0).offset().left - startX;
        let k = -oo * 500;
        $BO1UL.eq(0).css({ left: k + l + 'px' })
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
