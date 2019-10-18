let navL = document.getElementsByClassName('navL')[0];
let deve = document.getElementsByClassName('deve')[0];
let develop = document.getElementsByClassName('develop')[0];
let imgs = document.querySelectorAll('.imgBox>img');
let p = document.querySelectorAll('.imgBox>p')[0];
let descLOL = document.getElementsByClassName('descLOL')[0];
let imgBox = document.getElementsByClassName('imgBox')[0];
console.log(p);

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
    imgBox.style.height = '450px';
}