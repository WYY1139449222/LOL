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

function getData(url, fn) {


    let xhr = new XMLHttpRequest();
    xhr.open('get', url, true);
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && /200|304/.test(xhr.status)) {
            let data = JSON.parse(xhr.response);
            console.log(data);

            fn(data)

        }
    }
    xhr.send();

}
//头像文字渲染
function render(data) {
    let $tips = $('#tips');
    let ary = [' 法师从攻击中获得的法力值高于正常水平。部署多个法师可以使你的队伍获得法术强度，随着法师数量的增加，获得的法术强度也会提升。', '刺客在作战开始时会潜伏穿越战场，前往其初始位置的对面。部署多个刺客英雄可以增加他们的暴击伤害，随着刺客数量的增加，暴击伤害也会提升。', '部署多个剑士英雄可以使他们的攻击有一定几率进行多次额外攻击，随着剑士英雄数量的增加，这个几率也会提升。', '部署多个斗士英雄可以使他们获得额外的生命值，随着斗士数量的增加，额外生命值也会提升。', '元素使从攻击中获得的法力值高于正常水平。<br>	部署足够多的元素使会在作战开始时召唤出一个元素为你作战。', '部署全部两个护卫可以使其自身以及周围相邻的友军在开始作战时获得护甲', '部署多个枪手可以使他们的攻击有一定几率命中额外的目标，随着枪手数量的增加，这个几率也会提升', '部署多个骑士可以使他们格挡即将遭受的攻击伤害，随着骑士数量的增加，格挡的伤害也会提升。', '部署多个游侠可以使他们有一定几率获得攻击速度激增的效果，随着游侠数量的增加，这个几率也会提升。'];
    let professionClass = document.querySelector('.professionClass');

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
    let $lis = $('.professionClass li'); //更新lis 实现点击变化的效果
    // console.log($lis);
    $lis.on('click', function () {
        let n = $(this).index();
        $tips.html(ary[n]);
    });


}
//获取游戏资料中的头像文字描述
getData('../json/profession.json', render);
//获取相关英雄渲染

TheHero();

function TheHero() {
    getData('../json/theHero.json', renderTheHero);
    let $heroList = $('#hero-list');
    let $lis = $heroList.find('li');
    let $cont5Bg = $('.relevant .cont5-bg');
    let $cont6Bg = $('.relevant .cont6-bg');

    function renderTheHero(data) {
        // console.log($cont5Bg);
        let str = '',
            descStr = '';
        data.forEach(item => {
            let {
                img,
                peopleName,
                race,
                job,
                price,
                skilImg,
                skillName,
                skillInfo
            } = item;
            str += `
               <li>
               <img src="${img}" alt="">
               <div class="after"></div>
           </li>
           `;
            descStr += `    <div class="cont6-bg">
                             <div class="video-wrap">
                                <img src="//game.gtimg.cn/images/lol/act/a20190702loltftwf/video-bg.jpg" alt="">
                                <i class="icon-play"></i>
                                <div class="aftervideo"></div>
                            </div>
                            <div class="text-wrap">
                                <p>
                                    <span id='peopleName'>${peopleName}</span>
                                    <span id='race'>种族：${race}</span>
                                    <span id='job'>职业：${job}</span>
                                    <span id="price">价格：${price}</span>
                                </p>
                                <div class="textDesc">
                                    <img id='skillImg' src="${skilImg}" alt="">
                                    <span id='skillName'> ${skillName}</span>
                                    <p id='skillInfo'>${skillInfo}</p>
                                </div>
                                </div>
                                </div>  `;
        })
        $heroList.html(str);
        $cont5Bg.html(descStr);
        $cont6Bg = $('.relevant .cont6-bg');
        $lis = $heroList.find('li');
        $cont6Bg.eq(0).show().siblings().hide();
        
        $lis.on('click',function(){
            let n=$(this).index();
            $(this).addClass('on').siblings().removeClass('on');
            $cont6Bg.eq(n).show().siblings().hide();
            
        })
      


    }
    //获取相关英雄


    //点击相关英雄头衔进行切换英雄描述
    //    $heroList
    // let tabTheHeroN = 0;
      
   

}

//点击种族的时候切换
search();
function search(){
    let $spans=$(".searchMain span");
  $spans.on('click',function(){
      
      $(this).addClass('onselect').siblings().removeClass('onselect');

  })
}