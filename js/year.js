$(function () {
    //获取屏幕高度
    var clientHeight = document.documentElement.clientHeight || document.body.clientHeight;
    $('.year_content').css('height', clientHeight + 'px');

    var imgUrlData = new Array();
    imgUrlData[0] = "img/member/1.jpg";
    imgUrlData[1] = "img/member/2.jpg";
    imgUrlData[2] = "img/member/3.jpg";
    imgUrlData[3] = "img/member/4.jpg";
    imgUrlData[4] = "img/member/5.jpg";
    imgUrlData[5] = "img/member/6.jpg";
    imgUrlData[6] = "img/member/7.jpg";
    imgUrlData[7] = "img/member/8.jpg";
    imgUrlData[8] = "img/member/9.jpg";
    imgUrlData[9] = "img/member/10.jpg";


    var nameData = new Array();
    nameData[0] = "张三1";
    nameData[1] = "张三2";
    nameData[2] = "张三3";
    nameData[3] = "张三4";
    nameData[4] = "张三5";
    nameData[5] = "张三6";
    nameData[6] = "张三7";
    nameData[7] = "张三8";
    nameData[8] = "张三9";
    nameData[9] = "张三10";

    var signData = new Array();
    signData[0] = "张三1";
    signData[1] = "张三2";
    signData[2] = "张三3";
    signData[3] = "张三4";
    signData[4] = "张三5";
    signData[5] = "张三6";
    signData[6] = "张三7";
    signData[7] = "张三8";
    signData[8] = "张三9";
    signData[9] = "张三10";

    //参加人数
    var listNumber = imgUrlData.length - 1;
    // var inUser = (Math.floor(Math.random() * 10000)) % 3 + 1;

    // 猜猜我按钮，初始状态可以点击
    var running = true;
    var num = 1;

    //设置单次抽奖人数
    var everyNumber = 3;

    //姓名
    var yourName = $('.yourName');
    //图片
    var objImg = $('.headImg');
    //个性签名
    var yourSign = $('.yourSign');

    /*
     *  1.点击"我猜猜按钮"，图片开始随记变换，十秒后，计时器停止，
     *  2.点击"惊喜/惊吓"，此人信息显示出来
     *  注：出现过的人，不可以再出现在;
     *      领导不参与
     */

    // 循环参加名单
    function startNum() {
        num = Math.floor(Math.random() * listNumber);
        // objImg.css('background', );
        objImg.css('background-image','url('+imgUrlData[num]+')');

        yourName.html(nameData[num]);
        yourSign.html(signData[num]);

        t = setTimeout(startNum, 0);
    }


    $('.button_one').on('click', function () {
        if (running) {
            console.log(listNumber);
            if (listNumber <= everyNumber) {
                alert("人数不足3人");
            } else {
                running = false;
                // $(this).text('停止');
                $(".button_one img").attr("src",'img/pause.png');
                startNum();
                $('.content').hide();
            }

        } else {
            stop();
        }
    });

    // 停止跳动
    function stop() {
        listNumber = nameData.length - 1;
        // return listNumber;
        clearInterval(t);
        t = 0;
        running = true;
        // $('.button_one').text('猜猜我是谁');
        $(".button_one img").attr("src",'img/guest_me.png');

        imgUrlData.splice($.inArray(imgUrlData[num], imgUrlData), 1);
        nameData.splice($.inArray(nameData[num], nameData), 1);
        signData.splice($.inArray(signData[num], signData), 1);

    }

    //点击 惊喜/惊吓 揭晓答案
    $('.button_two').on('click', function () {
        $('.content').show();
    })

});


