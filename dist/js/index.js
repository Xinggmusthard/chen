// 导航栏的鼠标移入移出！！
$(function(){
    $("#aboutVans").mouseenter(function(){
        $(".hideMenuAbout").fadeIn(200,function(){
            $(".hideHot").fadeOut(200)
            $(".boys").fadeOut(200)
            $(".girls").fadeOut(200)
            $(".kidShoes").fadeOut(200)
            $(".customsShoes").fadeOut(200)
            $(".moreProduct").fadeOut(200)
        }).mouseleave(function(){
            $(".hideMenuAbout").css("display","none")
        })
    })
})
$(function(){
    $("#hotdoor").mouseenter(function(){
        $(".hideHot").fadeIn(200,function(){
            $(".hideMenuAbout").fadeOut(200)
            $(".boys").fadeOut(200)
            $(".girls").fadeOut(200)
            $(".kidShoes").fadeOut(200)
            $(".customsShoes").fadeOut(200)
            $(".moreProduct").fadeOut(200)
        }).mouseleave(function(){
            $(".hideHot").css("display","none")
        })
    })
})
$(function(){
    $("#Boys").mouseenter(function(){
        $(".boys").fadeIn(200,function(){
            $(".hideMenuAbout").fadeOut(200)
            $(".hideHot").fadeOut(200)
            $(".girls").fadeOut(200)
            $(".kidShoes").fadeOut(200)
            $(".customsShoes").fadeOut(200)
            $(".moreProduct").fadeOut(200)
        }).mouseleave(function(){
            $(".boys").css("display","none")
        })
    })
})
$(function(){
    $("#Girls").mouseenter(function(){
        $(".girls").fadeIn(200,function(){
            $(".hideMenuAbout").fadeOut(200)
            $(".boys").fadeOut(200)
            $(".hideHot").fadeOut(200)
            $(".kidShoes").fadeOut(200)
            $(".customsShoes").fadeOut(200)
            $(".moreProduct").fadeOut(200)
        }).mouseleave(function(){
            $(".girls").css("display","none")
        })
    })
})
$(function(){
    $("#KidShoes").mouseenter(function(){
        $(".kidShoes").fadeIn(200,function(){
            $(".hideMenuAbout").fadeOut(200)
            $(".boys").fadeOut(200)
            $(".hideHot").fadeOut(200)
            $(".girls").fadeOut(200)
            $(".customsShoes").fadeOut(200)
            $(".moreProduct").fadeOut(200)
        }).mouseleave(function(){
            $(".kidShoes").css("display","none")
        })
    })
})
$(function(){
    $("#Customs").mouseenter(function(){
        $(".customsShoes").fadeIn(200,function(){
            $(".hideMenuAbout").fadeOut(200)
            $(".boys").fadeOut(200)
            $(".hideHot").fadeOut(200)
            $(".girls").fadeOut(200)
            $(".kidShoes").fadeOut(200)
            $(".moreProduct").fadeOut(200)
        }).mouseleave(function(){
            $(".customsShoes").css("display","none")
        })
    })
})
$(function(){
    $("#More").mouseenter(function(){
        $(".moreProduct").fadeIn(200,function(){
            $(".hideMenuAbout").fadeOut(200)
            $(".boys").fadeOut(200)
            $(".hideHot").fadeOut(200)
            $(".girls").fadeOut(200)
            $(".kidShoes").fadeOut(200)
            $(".customsShoes").fadeOut(200)
        }).mouseleave(function(){
            $(".moreProduct").css("display","none")
        })
    })
})


// 轮播图！！！！！！
$(function(){
    var aBtns = $("#play").find("ol li");
    var oUl = $(".bannerPicture").find("ul");
    var iNow = 0;
    var timer = null;
    $("#play")
    .mouseenter(function () {
      clearInterval(timer);
    })
    .mouseleave(function () {
      timer = setInterval(function () {
        iNow++;
        tab();
      }, 2000);
    });

  timer = setInterval(function () {
    iNow++;
    tab();
  }, 2000);

  //给所有的按钮添加点击
  aBtns.click(function () {
    iNow = $(this).index();
    tab();
  });

  function tab() {
    aBtns.removeClass("active").eq(iNow).addClass("active");
    if (iNow == aBtns.size()) {
      aBtns.eq(0).addClass("active");
    }

    oUl.animate({ left: -1440 * iNow }, 500, function () {
      if (iNow == aBtns.size()) {
        iNow = 0;
        oUl.css("left", 0);
      }
    });
  }
})

// 下拉菜单显示隐藏
$(function(){
    var Title = $(".b-Country").find(".country .title")
    var List = $(".b-Country").find(".country .country-list")
    Title.mousedown(function(){
        List.css("display","block")

    })
    List.mouseleave(function(){
        List.css("display","none")
    })
})

// 置顶点击
$(function(){
    $(window).scroll(function(){
        var onTop  = $(".Follow").find(".Top")
        onTop.css("display","block")
    }) 
    // $(window).scrollTop(function(){
    //     var onTop  = $(".Follow").find(".Top")
    //     onTop.css("display","none")
    // })
})


// // 内容图里面的放大镜效果
// $(function(){

// })