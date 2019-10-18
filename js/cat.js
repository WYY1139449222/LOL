(
    function () {
        let n = 0,
            timer = null,
            $main = $('.main-action'),
            $vido = $main.find('.vido'),
            $vidoP = $main.find('.vido-p'),
            $vidoSpan = $main.find('.switch'),
            $vidoDesc = $main.find('.desc'),
            $actionLeft = $main.find('.action-left'),
            $actionRight = $main.find('.action-right');

        function move() {
            n++;
            if (n > $vidoP.length - 1) {
                n = 0;
            }
            $vidoP.eq(n).show().css({
                opacity: 0
            }).animate({
                opacity: 1
            }, 1000).siblings().animate({
                opacity: 0
            }, 1000, function () {
                $vidoP.eq(n).siblings().hide();
            });
            autoFouce(n);
        }

        window.onload = function (n) {

            autoMove();
            onBind();


        }


        function autoMove() {
            timer = setInterval(() => {
                move();
            }, 2000);

        }

        function autoFouce(n) {
            $vidoSpan.eq(n).addClass('current').siblings().removeClass('current');
            $vidoDesc.eq(n).show().siblings().hide();
        }

        function onBind() {
            $vido.on('mouseenter', function () {
                clearInterval(timer);
            });
            $vido.on('mouseleave', function () {
                autoMove();
            });
            $vidoSpan.on('click', function () {
                n = $(this).index();
                console.log(n);
                n--;
                move();
            })
            $actionLeft.on('click', function () {
                n--;
                if (n <= 0) {
                    n = $vidoP.length - 1;
                }
                n--;
                move();
            })
            $actionRight.on('click', function () {
                move();
            })
        }

    }
)()