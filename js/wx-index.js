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
                lias[i].style.background = '#fff'
                lias[i].style.height = '70px'
                lias[i].style.cursor = 'pointer'
                lias[i].onmouseleave = function () {
                    divs[i].style.display = 'none'
                    lis[i].style.display = 'block'
                    lias[i].style.background = '#fff'
                    lias[i].style.height = '40px'
                }
            }

        }


    }
    Edown()



    function mode1() {
        $top = $('.Top')
        $Lbtn = $('.btn_left')
        $Rbtn = $('.btn_right')

        function getData() {
            $.ajax({
                url: '../json/wx-data.json',
                success: function (data) {
                    render(data)
                },
                error: function (err) {
                    console.log(err)
                }
            })
        }
        getData()

        function render(data) {
            let str = '', str2 = '<div class="BOX">';
            data.forEach((item, index) => {
                if (index % 5 == 0) {
                    str2 += `<li class="Atop">
                    <p class="Btop">
                        <div class="Ctop"></div>
                        <span class="Dspan1">${item.start}</span>
                        <span class="Dspan2">${item.day}</span>
                        <span class="Dspan3">${item.time}</span>
                    </p>
                    <div class="Bleft">
                        <span>
                            <a href="">
                                <img src="${item.img}" alt="">
                            </a>
                        </span>
                        <a>C9</a>
                    </div>
                    <div class="Bcenter">
                        <a class="zero">0</a>
                        <span class="mh">:</span>
                        <a class="one">1</a>
                    </div>
                    <div class="Bright">
                        <span>
                            <a href="">
                                <img src="${item.img2}" alt="">
                            </a>
                        </span>
                        <a>C9</a>
                    </div>
                    <p class="Bdown">
                        <a class="Bdata">数据</a>
                        <a class="Bvideo">视频</a>
                    </p>
                    <p class="Bbottom">
                        <span>2019全球总决赛</span>
                        <a>小组赛 第六天 BO1</a>
                    </p>
                </li></div>`
                    str += str2
                    str2 = `<div class="BOX">`
                } else {
                    str2 += `<li class="Atop">
                    <p class="Btop">
                        <div class="Ctop"></div>
                        <span class="Dspan1">${item.start}</span>
                        <span class="Dspan2">${item.day}</span>
                        <span class="Dspan3">${item.time}</span>
                    </p>
                    <div class="Bleft">
                        <span>
                            <a href="">
                                <img src="${item.img}" alt="">
                            </a>
                        </span>
                        <a>C9</a>
                    </div>
                    <div class="Bcenter">
                        <a class="zero">0</a>
                        <span class="mh">:</span>
                        <a class="one">1</a>
                    </div>
                    <div class="Bright">
                        <span>
                            <a href="">
                                <img src="${item.img2}" alt="">
                            </a>
                        </span>
                        <a>C9</a>
                    </div>
                    <p class="Bdown">
                        <a class="Bdata">数据</a>
                        <a class="Bvideo">视频</a>
                    </p>
                    <p class="Bbottom">
                        <span>2019全球总决赛</span>
                        <a>小组赛 第六天 BO1</a>
                    </p>
                </li>`
                }
            })

            $top.html(str)

        }
        let n = 0;
        $Lbtn.on('click', function () {
            $('.Top>div').eq(n).show().siblings().hide()
            n++
            if (n > 5) {
                n = 0
            }

        })
        $Rbtn.on('click', function () {
            n--
            $('.Top>div').eq(n).show().siblings().hide()
            if (n < 0) {
                n = 5
            }

        })
    }
    mode1()


    function show(a, b, c) {
        $lis = $('.selected_1')
        $Boxs = $('.m-events-container>div')
        for (let i = 0; i < $lis.length; i++) {

            $lis[i].onclick = function () {
                $Boxs.eq(i).show().siblings().hide()
                $lis.eq(i).addClass('LISCURRENT').siblings().removeClass('LISCURRENT')
            }
        }
    }
    show()

    function show2(a, b, c, x = null) {
        $Ls = $(a)
        $Bs = $(b)
        $LIS = $(x)
        for (let i = 0; i < $Ls.length; i++) {

            $Ls[i].onclick = function () {
                $Bs.eq(i).show().siblings('.Game-video').hide()
                $Ls.eq(i).addClass(c).siblings().removeClass(c)
                if (i !== 0) {
                    $LIS.hide()
                } else {
                    $LIS.show()
                }
            }

            $LIS[i].onclick = function () {
                $LIS.eq(i).addClass('after before').siblings().removeClass('after before')

            }
        }
    }
    show2('.first-ul>li', '.Game-video', 'after', '.second-ul>li')

    let scrT = document.documentElement.scrollTop;//卷去的高度
    let wH = document.documentElement.clientHeight || document.body.clientHeight;//当前屏幕的高度

    let float = document.querySelector('.float')
    window.onscroll = function () {
        scrT = document.documentElement.scrollTop;
        wH = document.documentElement.clientHeight || document.body.clientHeight;
        if (wH + scrT > 1200) {
            float.style.position = 'fixed'
            float.style.top = wH / 10 + 'px'
        } else {
            float.style.position = 'absolute';
            float.style.top = '900px';
        }
    }
})()
