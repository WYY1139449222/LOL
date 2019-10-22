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
            tc_1 = document.querySelector('.tc_1'),
            tc_2 = document.querySelectorAll('.tc_2')
        btn1.onclick = function () {
            tc_1.style.display='inline-block'

            tc_2.style.display='none'
        }
        btn2.onclick = function () {
            tc_1.style.display='none'
            tc_2.style.display='inline-block'

        }
    }
    DJ()
})()

    // for(let i=0;i<tabs.length;i++){
    //     tabs[i].onclick = function(){
    //         //给当前元素添加类名，兄弟移除current类型
    //         //先清除所有的current，再给当前元素添加
    //         for(let j=0;j<tabs.length;j++){
    //             tabs[j].classList.remove('current')
    //             bodys[j].classList.remove('current')
    //         }
    //         this.classList.add('current')
    //         bodys[i].classList.add('current')
    //     }
    // } 