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

let n = 0,timer = null;


navL.onmouseenter = function(){
    deve.style.opacity = 1;
    deve.style.display = 'block'
    develop.style.display = 'block'
}
navL.onmouseleave = function(){
    develop.style.display = 'none'
    deve.style.display = 'none'
}
deve.onmouseenter = function(){
    deve.style.display = 'block'
    develop.style.display = 'block'
}
deve.onmouseleave = function(){
        deve.style.display = 'none'
        develop.style.display = 'none'
}
window.onscroll = function(){
    imgs[1].style.transition='none';
    imgs[1].style.opacity = 1;
    let l = imgs[1].offsetHight;
    imgs[1].style.transition=' all 0.3s linear';
    imgs[1].style.height = '360px';
    imgs[0].style.display = 'none'
    p.style.transition=' all 0.3s linear';
    p.style.top = '300px';
    descLOL.style.transition=' all 0.3s linear';
    descLOL.style.top = '300px';
    // imgBox.style.transition=' all 0.3s linear';
    imgBox.style.transition=' all 0.3s linear';
    imgBox.style.height = '410px';
    wrap.style.transition=' all 0.3s linear';
    wrap.style.top = '400px';

}

function move(){
    n++;
    if(n>$swperLis.length-1){
        n=0
    }
    $swperLis.eq(n).css({opacity:0}).show().animate({opacity:1},300).siblings().animate({opacity:0},300,function(){
        $swperLis.eq(n).siblings().hide()
    })
    $swperFoots.eq(n).addClass('swperp').siblings().removeClass('swperp')
}
function autoMove(){
    timer = setInterval(()=>{
        move()
    },2000)
}
autoMove()
$swper.on('mouseenter',function(){
    clearInterval(timer);
})
$swper.on('mouseleave',function(){
    autoMove();
})
$swperFoots.on('mouseover',function(){
    n=$(this).index();
    n--;
    move()
})

$wrapToplis.on('mouseenter',function(){
    let n = $(this).index();
    $(this).addClass('wrapToplis').siblings().removeClass('wrapToplis');
    $wrapbodyul.eq(n).css({display:'block'}).siblings().css({display:'none'})
})
$actNavullis.on('mouseenter',function(){
    let n = $(this).index();
    $(this).addClass('wrapToplis').siblings().removeClass('wrapToplis');
    $actbody.eq(n).addClass('actbodycur').siblings().removeClass('actbodycur')
})

$dowlodlast.on('mouseenter',function(){
    $dowlodlastI.eq(0).animate({left:'-17px'},300);
  
   setTimeout(()=>{
    $dowlodlastI.eq(0).css({display:'none'});
    $lodBox.eq(0).css({display:'block'})
   },400)
    
});
$dowlodlast.on('mouseleave',function(){
    $dowlodlastI.eq(0).css({display:'block'}).animate({left:'15px'},300);
    $lodBox.eq(0).css({display:'none'})
    setTimeout(()=>{
        $dowlodlastI.eq(0).css({display:'block'}).animate({left:'15px'},300);
        $lodBox.eq(0).css({display:'none'})
    },400)
    
})
$('.championR').on('mouseenter',function(){
   $('.championR video').get(0).play();
   $('.vid').animate({top:'1740px'},200)
})
$('.championR').on('mouseleave',function(){
    $('.championR video').get(0).pause();
    $('.vid').animate({top:'1480px'},200)
})
$('.versonvideo').on('mouseenter',function(){
    $('.versonvideo video').get(0).play();
})
$('.versonvideo').on('mouseleave',function(){
    $('.versonvideo video').get(0).pause();
})
$('.versonper').on('mouseenter',function(){
    $('.vid').animate({top:'1660px'},200)
})
$('.versonper').on('mouseleave',function(){
    $('.vid').animate({top:'1480px'},200)
    $('.sanjiao').css({display:'block'})
})