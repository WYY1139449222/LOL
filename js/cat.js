class Banner {
    constructor(id) {
        this.n = 0;
        this.timer = null;
        this.$pageId = $('#' + id);
        this.$vido = this.$pageId.find('.vido');
        this.$vidoP = this.$pageId.find('.vido-p');
        this.$vidoSpan = this.$pageId.find('.switch');
        this.$vidoDesc = this.$pageId.find('.desc');
        this.$actionLeft = this.$pageId.find('.action-left')
        this.$actionRight = this.$pageId.find('.action-right');
        this.$iconPlay = this.$vido.find('.icon-play');
        this.init();
        this.onBind();
    }

    move() {
        this.n++;
        if (this.n > this.$vidoP.length - 1) {
            this.n = 0;
        }
        $(this.$vidoP).eq(this.n).show().css({
            opacity: 0
        }).animate({
            opacity: 1
        }, 1000).siblings().animate({
            opacity: 0
        }, 1000, function () {
            $(this.$vidoP).eq(this.n).siblings().hide();
        });
        this.autoFouce(this.n);
    }
    //小圆点跟随
    autoFouce(n) {
        $(this.$vidoSpan).eq(this.n).addClass('current').siblings().removeClass('current');
        $(this.$vidoDesc).eq(this.n).show().siblings().hide();
    }

    init() {
        $(this.$vidoP).eq(0).siblings().hide();
        $(this.$vidoDesc).eq(this.n).show().siblings().hide();

    }
    //左右点击事件
    onBind() {
        //点击小圆点图片跟随
        this.$vidoSpan.on('click', (e) => {
            this.n = $(e.target).index();
            this.n--;
            this.move();
        })
        //左边点击事件
        this.$actionLeft.on('click', () => {
            this.n--;
            if (this.n < 0) {
                this.n = this.$vidoP.length - 1;
            }
            console.log(this.n);
            this.n--
            this.move();
        })
        //右边点击事件
        this.$actionRight.on('click', () => {
            this.move();
        })
        this.$iconPlay.on('click', () => {
            this.$iconPlay.hide();

        })
    }
}
new Banner('page1');
new Banner('page2');
new Banner('page4');

//玩家机制
function playerMechanism() {
    //玩家机制

    let $coreItems = $('.core-warp .core-item'),
        $picIs = $coreItems.find('.picI'),
        $picIn = $coreItems.find('.picIn'),
        $picInN = $coreItems.find('.picInN');
    // console.log($picIs);
    // console.log($picIn);
    // console.log($picInN);
    // console.log($coreItems);
    $coreItems.on('mouseenter', function () {
        let n = $(this).index();
        if (n === 0) {
            $picIs.eq(0).css({
                height: '522px'
            });
        } else if (n === 1) {
            $picIs.eq(1).css({
                height: '574px'
            });
        } else {
            $picIs.eq(2).css({
                height: '444px'
            });
        }


        $picIn.eq(n).addClass('hide');

        $picInN.eq(n).removeClass('hide');

    })
    $coreItems.on('mouseleave', function () {
        let n = $(this).index();
        $picIs.eq(0).css({
            height: '270px'
        });
        $picIs.eq(1).css({
            height: '270px'
        });
        $picIs.eq(2).css({
            height: '270px'
        });
        $picIs.eq(n).css({
            height: '270px'
        });
        $picIn.eq(n).removeClass('hide');
        $picInN.eq(n).addClass('hide');
    })
}
playerMechanism();
//玩家机制中轮播效果
let b = 0;
let c = 0;
let n = 0;
function playBanner() {
    //点击滑动轮播图
    let $playIns = $('.page3 .playIn');
    let $players = $('.page3 .players');
    let $imgBtnLeft = $('.page3 .img-btn .left');
    let $imgBtnRight = $('.page3 .img-btn .right');
    let width = $playIns.eq(0).width();
    $imgBtnLeft.on('click', function () {
        n--;
        if (n < 0) {
            n = 2
        }

        $players.css({
            left: -width * n + 'px'
        });
    })
    $imgBtnRight.on('click', function () {
        n++;
        if (n > 2) {
            n = 0
        }
        $players.css({
            left: -width * n + 'px'
        });
    })

    $players.on('mousedown', function (e) {
        this.sx = e.pageX; //初始位置
        console.log(this.sx);
        $players.on('mousemove', move)
    })
    $players.on('mouseup', function (e) {
        let h = e.pageX - this.sx;
     
        b = parseFloat($players.eq(0).css("left"));
        if (h > 0) {
            n++;
            if (n > 2) {
                n = 0
            }
            $players.css({
                left: -width * n + 'px'
            });
        } else {
            n--;
            if (n < 0) {
                n = 2
            }
            $players.css({
                left: -width * n + 'px'
            });
        }

        $players.off('mousemove', move);
        h = 0;

    })

    function move(e) {
        console.log(111);

        c = e.pageX - this.sx;
        console.log(c);

        $players.css({
            left: c + b + 'px'
        });
    }



}
playBanner();


//获取游戏资料中的头像文字描述
function getData() {
    let xhr = new XMLHttpRequest();
    xhr.open('get', '../json/profession.json', true);
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && /200|304/.test(xhr.status)) {
            let data = JSON.parse(xhr.response);
            render(data);
        }
    }
    xhr.send();

}
getData();

function render(data) {
    let professionClass = document.querySelector('.professionClass')
    let str = '';
    data.forEach(item => {
        str += `
            <li>
            <a href="javascript:;">
                <i></i>
                <b></b>

                ${item.desc}
                
            </a>
        </li>
            `
    });
    professionClass.innerHTML = str;

}
