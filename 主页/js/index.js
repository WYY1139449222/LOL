let navL = document.getElementsByClassName('navL')[0];
let deve = document.getElementsByClassName('deve')[0];
let develop = document.getElementsByClassName('develop')[0];
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