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


    // function mode1() {
    //     let n = 0;
    //     let $matchBox = null,
    //         $leftBtn = null,
    //         $mode1 = null,
    //         $rightBtn = null,
    //         $Top = null,
    //         $Atops = null,
    //         $Btop = null;

    //     function initEle() {
    //         $mode1 = $('.mode1')
    //         $matchBox = $mode1.find('.matchBox')
    //         $leftBtn = $mode1.find('.btn_left')
    //         $rightBtn = $mode1.find('.btn_right')
    //         $Top = $mode1.find('Top')
    //         $Atops = $mode1.find('Atop')
    //         $Btop = $mode1.find('Btop')

    //     }
        
    //     function getData() {
    //         $.ajax({
    //             url: '../js/wx-data.json',
    //             success: function (data) {
    //                 initEle()
    //                 render(data)


    //                 console.log(data)
    //             },
    //             error: function () {
    //                 console.log('失败')
    //             }
    //         })
    //     }
    //     getData()
    //     function render(data) {
    //         let str = ''
    //         data.forEach(item => {
    //             str += ` <li class="Atop">
    //             <p class="Btop">
    //                 <div class="Ctop"></div>
    //                 <span class="Dspan1">${item.start}</span>
    //                 <span class="Dspan2">${item.time}</span>
    //                 <span class="Dspan3">${item.day}</span>
    //             </p>
    //             <div class="Bleft">
    //                 <span>
    //                     <a href="">
    //                         <img src="${item.img}" alt="">
    //                     </a>
    //                 </span>
    //                 <a>C9</a>
    //             </div>
    //             <div class="Bcenter">
    //                 <a class="zero">0</a>
    //                 <span class="mh">:</span>
    //                 <a class="one">1</a>
    //             </div>
    //             <div class="Bright">
    //                 <span>
    //                     <a href="">
    //                         <img src="${item.img2}" alt="">
    //                     </a>
    //                 </span>
    //                 <a>C9</a>
    //             </div>
    //             <p class="Bdown">
    //                 <a class="Bdata">数据</a>
    //                 <a class="Bvideo">视频</a>
    //             </p>
    //             <p class="Bbottom">
    //                 <span>2019全球总决赛</span>
    //                 <a>小组赛 第六天 BO1</a>
    //             </p>
    //         </li>`
    //         })
    //         $Atops.html(str)
    //     }

    // }
    // mode1()
})()


