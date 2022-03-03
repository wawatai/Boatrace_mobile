//event .eventType切換
$(function(){
    $('.eventType li').click(function(){
        $(this).addClass('active');
        $(this).siblings().removeClass('active');
    })
})

//lang
$(function(){
    $('.langWindow li').click(function(){
        $(this).addClass('active');
        $(this).siblings().removeClass('active');
    })

    $('.langWindow li:nth-of-type(1)').click(function(){
        $('header label button,.opLang p').text("繁體中文");
        $('.filter').removeClass('display');
    })
    $('.langWindow li:nth-of-type(2)').click(function(){
        $('header label button,.opLang p').text("简体中文");
        $('.filter').removeClass('display');
    })
    $('.langWindow li:nth-of-type(3)').click(function(){
        $('header label button,.opLang p').text("日本語");
        $('.filter').removeClass('display');
    })
    $('.langWindow li:nth-of-type(4)').click(function(){
        $('header label button,.opLang p').text("English");
        $('.filter').removeClass('display');
    })
})

//ad
$(document).on('ready', function() {
	$(".single-item").slick({
		dots: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 3500,
		arrows: true,
	})
})

//filter
$(function(){
    $('.jumpWindow .close').click(function(){
        $('.filter').removeClass('display');
    })

    $('header .lang,.opLang').click(function(){
        $('.jumpWindow').removeClass('display');
        $('.filter,.langWindow').addClass('display');
    })

    $('.loginBtn,.forgetWindow .close').click(function(){
        $('.jumpWindow').removeClass('display');
        $('.filter,.loginWindow').addClass('display');
    })

    $('.loginWindow .forget').click(function(){
        $('.jumpWindow').removeClass('display');
        $('.filter,.forgetWindow').addClass('display');
    })

    $('.registerBtn,.ruleWindow .close').click(function(){
        $('.jumpWindow').removeClass('display');
        $('.filter,.registerWindow').addClass('display');
    })

    $('.registerWindow .isCheck .detail').click(function(){
        $('.jumpWindow').removeClass('display');
        $('.filter,.ruleWindow').addClass('display');
    })

    $('.eventBox .apply').click(function(){
        $('.jumpWindow').removeClass('display');
        $('.filter,.plsGo').addClass('display');
    })

    $('.changePhoneBtn').click(function(){
        $('.jumpWindow').removeClass('display');
        $('.filter,.cellphoneWindow').addClass('display');
    })

    $('.changePwdBtn').click(function(){
        $('.jumpWindow').removeClass('display');
        $('.filter,.passwordWindow').addClass('display');
    })

    $('.seeBtn').click(function(){
        $('.jumpWindow').removeClass('display');
        $('.filter,.activityWindow').addClass('display');
    })
})
//請先登入
function unlogin(){
    $('.jumpWindow').removeClass('display');
    $('.filter,.plsGo').addClass('display');
}

//realLogin
$(function(){
    $('.realLogin').click(function(){
        $('.jumpWindow,.loginBtn').removeClass('display');
        $('.filter,.news,.alLogin').addClass('display');
        $('.operate').addClass('login');

        $('.gameList li').attr("onclick","null");

        $(".operate div:eq(0)").attr("onclick","window.location.href='./html/deposit.html'");
        $(".operate div:eq(1)").attr("onclick","window.location.href='./html/withdrawal.html'");

        $('footer li:nth-of-type(2)').attr('onclick',"window.location.href='./html/event.html'");
        $('footer li:nth-of-type(3)').attr('onclick',"window.location.href='./html/wallet.html'");
        $('footer li:nth-of-type(4)').attr('onclick',"window.location.href='./html/customer.html'");
        $('footer li:nth-of-type(5)').attr('onclick',"window.location.href='./html/member.html'");
    })
})

//賽事等級Text
$(function(){
    if($('.gameList li').hasClass('league3')){
        $('li.league3 .league').text("G3");
    }
    if($('.gameList li').hasClass('league2')){
        $('li.league2 .league').text("G2");
    }
    if($('.gameList li').hasClass('league1')){
        $('li.league1 .league').text("G1");
    }
    if($('.gameList li').hasClass('league0')){
        $('li.league0 .league').text("SG");
    }
})

//切換賽事頁面
$(function(){
    var page = 0;
    var pageNum;
    var legueList;
    $('.pageList .next').click(function(){
        page ++;
        if(page >= 2){
            page = 2;
        }
        pageNum = $(".pageList button:eq("+ page +")");
        legueList = $(".gameList .page:eq("+ page +")");
        $(pageNum).addClass('active');
        $(pageNum).siblings().removeClass('active');
        $(legueList).addClass('display');
        $(legueList).siblings().removeClass('display');
    })
    $('.pageList .prev').click(function(){
        page --;
        if(page <= 0){
            page = 0;
        }
        pageNum = $(".pageList button:eq("+ page +")");
        legueList = $(".gameList .page:eq("+ page +")");
        $(pageNum).addClass('active');
        $(pageNum).siblings().removeClass('active');
        $(legueList).addClass('display');
        $(legueList).siblings().removeClass('display');
    })

    $(".pageList button").click(function(){
        $(this).addClass("active");
        $(this).siblings().removeClass("active");
    })
    $(".pageList button:eq(0)").click(function(){
        page = 0;
        $(".gameList .page:eq(0)").addClass("display");
        $(".gameList .page:eq(0)").siblings().removeClass("display");
    })
    $(".pageList button:eq(1)").click(function(){
        page = 1;
        $(".gameList .page:eq(1)").addClass("display");
        $(".gameList .page:eq(1)").siblings().removeClass("display");
    })
    $(".pageList button:eq(2)").click(function(){
        page = 2;
        $(".gameList .page:eq(2)").addClass("display");
        $(".gameList .page:eq(2)").siblings().removeClass("display");
    })
})

//eye
$(function(){
    $(".pwd .eye").click(function(){
        $(".pwd").toggleClass("active");
        
        if($(".pwd").hasClass("active")){
            $(".pwd input").attr("type","text");
        }else{
            $(".pwd input").attr("type","password")
        }
    })
})

//news切換
$(function(){
    $('.jumpWindow.news .typeList li').click(function(){
        $(this).addClass('active');
        $(this).siblings().removeClass('active');
    })

    $('.jumpWindow.news .typeList li:nth-of-type(1)').click(function(){
        $('.jumpWindow.news .normal').addClass('display');
        $('.jumpWindow.news .normal').siblings().removeClass('display');
    })

    $('.jumpWindow.news .typeList li:nth-of-type(2)').click(function(){
        $('.jumpWindow.news .hot').addClass('display');
        $('.jumpWindow.news .hot').siblings().removeClass('display');
    })

    $('.jumpWindow.news .typeList li:nth-of-type(3)').click(function(){
        $('.jumpWindow.news .deposit').addClass('display');
        $('.jumpWindow.news .deposit').siblings().removeClass('display');
    })
})

//個人資料內頁變更資料
$(function(){
    $('.memberInfo .inputList button').click(function(){
        $($(this).prev('input')).toggleClass('active');
        
        if($(this).prev("input").hasClass("active")){
            $(this).text("確認");
        }else{
            $(this).text("変更");
        }
    })
})

//優惠申請頁切換
$(function(){
    $(".applyHeader li").click(function(){
        $(this).addClass('active');
        $(this).siblings().removeClass('active');
    })

    $(".applyHeader li:eq(0)").click(function(){
        $(".applyBody.apply").addClass("display");
        $(".applyBody.apply").siblings().removeClass("display");
    })
    $(".applyHeader li:eq(1)").click(function(){
        $(".applyBody.already").addClass("display");
        $(".applyBody.already").siblings().removeClass("display");
    })
    $(".applyHeader li:eq(2)").click(function(){
        $(".applyBody.applyRecord").addClass("display");
        $(".applyBody.applyRecord").siblings().removeClass("display");
    })

    $(".applyRecord .btnBox button").click(function(){
        $(this).addClass("active");
        $(this).siblings().removeClass("active");
        $(".noData").addClass("display");
        $(".recordBox").removeClass("display");
    })

    $(".applyRecord .check").click(function(){
        $(".noData").removeClass("display");
        $(".recordBox").addClass("display");
    })
})

//交易紀錄切換
$(function(){
    $(".recordHeader li").click(function(){
        $(this).addClass('active');
        $(this).siblings().removeClass('active');
    })

    $(".recordHeader li:eq(0)").click(function(){
        $(".recordBody.dealRecord").addClass("display");
        $(".recordBody.dealRecord").siblings().removeClass("display");
    })
    $(".recordHeader li:eq(1)").click(function(){
        $(".recordBody.waterRecord").addClass("display");
        $(".recordBody.waterRecord").siblings().removeClass("display");
    })

    $(".dealRecord .btnBox button").click(function(){
        $(this).addClass("active");
        $(this).siblings().removeClass("active");
        $(".noData").addClass("display");
        $(".recordBox").removeClass("display");
    })

    $(".dealRecord .check").click(function(){
        $(".noData").removeClass("display");
        $(".recordBox").addClass("display");
    })
})

//mail .edit
$(function(){
    $("header .editBtn").click(function(){
        $(this).removeClass("display");
        $(this).siblings("button").addClass("display");
        $(".editBox").addClass("display");
        $(".list").addClass("editing");
    })
    $("header .doneBtn").click(function(){
        $(this).removeClass("display");
        $(this).siblings("button").addClass("display");
        $(".editBox").removeClass("display");
        $(".list").removeClass("editing");
    })
})
//mail .list切換
$(function(){
    $(".mailHeader li").click(function(){
        $(this).addClass("active");
        $(this).siblings().removeClass("active");
    })

    $(".mailHeader li:eq(0)").click(function(){
        $(".mailBody.normal").addClass("display");
        $(".mailBody.normal").siblings().removeClass("display");
    })
    $(".mailHeader li:eq(1)").click(function(){
        $(".mailBody.post").addClass("display");
        $(".mailBody.post").siblings().removeClass("display");
    })

    $(".mailBody.normal .subClass button").click(function(){
        $(this).addClass("active");
        $(this).siblings().removeClass("active");
    })
    $(".mailBody.post .subClass button").click(function(){
        $(this).addClass("active");
        $($(this).closest("li").siblings()).children().removeClass("active");
    })

    $(".mailBody.normal .subClass .left").click(function(){
        $(".list.system").addClass("display");
        $(".list.system").siblings().removeClass("display");
    })
    $(".mailBody.normal .subClass .right").click(function(){
        $(".list.personal").addClass("display");
        $(".list.personal").siblings().removeClass("display");
    })

    $(".mailBody.post .subClass button:eq(0)").click(function(){
        $(".list.pop").addClass("display");
        $(".list.pop").siblings().removeClass("display");
    })
    $(".mailBody.post .subClass button:eq(1)").click(function(){
        $(".list.nor").addClass("display");
        $(".list.nor").siblings().removeClass("display");
    })
    $(".mailBody.post .subClass button:eq(2)").click(function(){
        $(".list.dep").addClass("display");
        $(".list.dep").siblings().removeClass("display");
    })
})

//卡片切換
$(function(){
    var val;
    $(".cardContent select").change(function(){
        val = $(this).val();
        if(val == "bank"){
            $(".cardContent .forBank").addClass("display");
            $(".cardContent .forBank").siblings("div").removeClass("display");
        }else if(val == "usdt"){
            $(".cardContent .forUsdt").addClass("display");
            $(".cardContent .forUsdt").siblings("div").removeClass("display");
        }else if(val == "vp"){
            $(".cardContent .forVp").addClass("display");
            $(".cardContent .forVp").siblings("div").removeClass("display");
        }
    })
})

//入金頁切換
$(function(){
    $(".depositList li").click(function(){
        $(this).addClass("active");
        $(this).siblings().removeClass("active");
    })

    $(".depositList li:eq(0)").click(function(){
        $(".depositCnt.forBankCard").addClass("display");
        $(".depositCnt.forBankCard").siblings().removeClass("display");
    })
    $(".depositList li:eq(1)").click(function(){
        $(".depositCnt.forAtm").addClass("display");
        $(".depositCnt.forAtm").siblings().removeClass("display");
    })
    $(".depositList li:eq(2)").click(function(){
        $(".depositCnt.forUsdt").addClass("display");
        $(".depositCnt.forUsdt").siblings().removeClass("display");
    })
    $(".depositList li:eq(3)").click(function(){
        $(".depositCnt.forBank").addClass("display");
        $(".depositCnt.forBank").siblings().removeClass("display");
    })
    $(".depositList li:eq(4)").click(function(){
        $(".depositCnt.forShop").addClass("display");
        $(".depositCnt.forShop").siblings().removeClass("display");
    })

    $(".depositCnt .check").click(function(){
        $(".depositCnt").removeClass("display");
        $(".depositCnt.ing").addClass("display");
    })
})

//出金頁切換
$(function(){
    var val;
    $(".withdrawalCnt select").change(function(){
        val = $(this).val();
        if(val == "bank"){
            $(".wayBox.forBank").addClass("display");
            $(".wayBox.forBank").siblings("div").removeClass("display");
        }else if(val == "usdt"){
            $(".wayBox.forUsdt").addClass("display");
            $(".wayBox.forUsdt").siblings("div").removeClass("display");
        }else if(val == "vp"){
            $(".wayBox.forVp").addClass("display");
            $(".wayBox.forVp").siblings("div").removeClass("display");
        }
    })
})