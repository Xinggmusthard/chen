window.onload = function () {
    var oSmall = document.getElementById("thumbImg");
    var oMark = document.getElementById("mark");
    var oBig = document.getElementById("bigImg");
    var oBigImg = oBig.getElementsByTagName("img")[0];
    var oImg1 = document.getElementById("img1")
    //给小图片添加移入移出
    oSmall.onmouseenter = function () {
      oMark.style.display = "block";
      oBig.style.display = "block";
    };
    oSmall.onmouseleave = function () {
      oMark.style.display = "none";
      oBig.style.display = "none";
    };
    //添加鼠标移动
    oSmall.onmousemove = function (ev) {
      var e = ev || window.event;
      var l = e.clientX - oSmall.offsetLeft - 200;
      //限制出界
      l = Math.max(0, l);
      l = Math.min(250, l);
      var t = e.clientY - oSmall.offsetTop - 200;
      t = Math.max(0, t);
      t = Math.min(250, t);
      oMark.style.left = l + "px";
      oMark.style.top = t  + "px";
      //所谓的放大，原理就是：反方向移动放大倍数距离
      oBigImg.style.left = -2 * l + "px";
      oBigImg.style.top = -2 * t + "px";
    };
};
$(function(){
  var oSmallimg = $(".main").find(".listing .smallimg")
  // var oThumbNail = $(".main").find(".thumbImg .thumbnail")
  oSmallimg.mouseenter(function(){
    var src = $(this).find("img").attr("src")
    console.log(src)
    $("#thumbnail").attr({
      "src" : src
    })
    $("#Large").attr({
      "src":src
    })
  })
})
