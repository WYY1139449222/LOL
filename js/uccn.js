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