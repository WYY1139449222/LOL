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
        btn1.onclick = function(){
            btn2.classList.remove('colorS')
            li2.classList.remove('current')
            li1.classList.add('current')
        }
        btn2.onclick = function(){
            btn2.classList.add('colorS')
            li2.classList.add('current')
            li1.classList.remove('current')
            btn1.classList.remove('colorS')
        }
    }
    DJ()

    function Edown(){
        var $lia = $('.Edc_t_1 a')
        $lia.onclick=function(){
            console.log(222)
        }
        
    }
    Edown()
})()
