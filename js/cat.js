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