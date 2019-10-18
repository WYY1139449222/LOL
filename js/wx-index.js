var LPL = document.querySelector('.inp_box .LPL'),
    TJ = document.querySelector('.inp_box .TJ')


LPL.onfocus = function () {
    TJ.style.display = 'none'
}
LPL.onblur = function () {
    if (LPL.value) {
        TJ.style.display = 'none'
    } else {
        TJ.style.display = 'block'
    }
}

