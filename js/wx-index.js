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


    function DJ() {
        var btn1 = document.querySelector('.btn_one_li'),
            btn2 = document.querySelector('.btn_two_li'),
            li1 = document.querySelector('.tc_box_1'),
            li2 = document.querySelector('.tc_box_2');
        btn1.onclick = function () {
            btn2.classList.remove('colorS')
            li2.classList.remove('current')
            li1.classList.add('current')
            btn1.classList.add('colorS')
        }
        btn2.onclick = function () {
            btn2.classList.add('colorS')
            li2.classList.add('current')
            li1.classList.remove('current')
            btn1.classList.remove('colorS')
        }
    }
    DJ()

    function Edown() {
        var lias = document.querySelectorAll('.Edc_two_h');
        var divs = document.querySelectorAll('.Edc_t_2')
        var lis = document.querySelectorAll('.Edc_t_1')
        for (let i = 0; i < lias.length; i++) {
            lias[i].onmouseenter = function () {
                divs[i].style.display = 'block'
                lis[i].style.display = 'none'
                lias[i].style.background = 'rgba(0,0,0,0.5)'
                lias[i].style.height= '70px'
                lias[i].onmouseleave = function () {
                    divs[i].style.display = 'none'
                    lis[i].style.display = 'block'
                    lias[i].style.background = 'rgba(255,255,255)'
                    lias[i].style.height= '40px'
                }
            }

        }


    }
    Edown()
})()
