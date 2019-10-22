(function () {
    function inp() {
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
    }
    inp()

    function sj() {
        var sjimg = document.querySelector('.sjImg_box')
        var djs = document.querySelector('.djs')
        let sjimg_n = 15;
        var timer1 = setInterval(() => {
            if (sjimg_n === 0) {
                clearInterval(timer1)
                sjimg.style.display = 'none'
                djs.style.display = 'none'
                return
            }
            djs.innerText = --sjimg_n
        }, 1000)
    }
    sj()



})()
