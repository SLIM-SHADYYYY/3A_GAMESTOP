"use strict";

// var boxbtn = document.querySelectorAll('.table > div');
// var img = document.getElementsByClassName('img');
// for(var i = 0; i < boxbtn.length; i++){
//     var point = boxbtn[i];
//     point.index = i;
//     point.onmouseover = function () {
//         for(var j = 0; j < boxbtn.length;j++){
//             boxbtn[j].className = 'boxbtn';
//             img[j].style.display = 'none';
//         }
//         boxbtn[this.index].className = 'boxbtn boxbtnHover';
//         img[this.index].style.display = 'flex';
//     }
// }
//分类栏
$(function () {
  // $('.top-nav ul li.classify').hover(function() {
  //     $(this).parents('.head-contain').siblings('.classify-list').show(500);
  // },function() {
  //     $(this).parents('.head-contain').siblings('.classify-list').hide(500);
  // })
  $('.top-nav ul li.classify').click(function () {
    var show = $(this).parents('.head-contain').siblings('.classify-list');

    if (show.is(':hidden')) {
      show.show(500);
    } else {
      show.hide(500);
    }
  }); //游戏封面

  $('.hot-content .game .gamePic').mouseenter(function () {
    $(this).find('.gamePic-details').slideDown();
  });
  $('.hot-content .game .gamePic').mouseleave(function () {
    $(this).find('.gamePic-details').stop(true, false).slideUp();
  });
}); //自动播放轮播图

{
  var boxbtn;
  var img;
  var num;
  var timer;
  var n;

  (function () {
    var roll = function roll() {
      for (var i = 0; i < img.length; i++) {
        boxbtn[i].className = "boxbtn";
        img[i].style.display = "none";
      }

      if (num > img.length - 1) num = 0;
      img[num].style.display = "flex";
      boxbtn[num].className = "boxbtn boxbtnHover";
      num++;
    };

    boxbtn = document.querySelectorAll('.table > div');
    img = document.getElementsByClassName('img');
    num = 0;
    timer = setInterval(roll, 5000); //鼠标移入暂停

    for (n = 0; n < img.length; n++) {
      boxbtn[n].abc = n;

      boxbtn[n].onmouseenter = function () {
        for (var i = 0; i < img.length; i++) {
          img[i].style.display = "none";
          boxbtn[i].className = "boxbtn";
        }

        img[this.abc].style.display = "flex";
        boxbtn[this.abc].className = "boxbtn boxbtnHover";
        clearInterval(timer);
      };

      boxbtn[n].onmouseleave = function () {
        num = this.abc;
        timer = setInterval(roll, 5000);
      };
    }
  })();
} //搜索框

{
  var close = document.querySelector('.close');
  var search = document.querySelector('.search');
  var searchBox = document.querySelector('.searchBox');

  search.onclick = function () {
    searchBox.classList.add('active');
  };

  close.onclick = function () {
    searchBox.classList.remove('active');
  };
} // 预告点击弹出视频

{
  var btn = document.querySelectorAll('.trailer_btn');
  var clip = document.querySelectorAll('.clip');
  var back = document.querySelectorAll('#back');
  var video = document.querySelectorAll('.clip > video'); //弹出视频

  for (var i = 0; i < btn.length; i++) {
    var point = btn[i];
    point.index = i;

    point.onclick = function () {
      clip[this.index].classList.add('active');
      video[this.index].play();
      video[this.index].currentTime = 0;
    };
  } //关闭视频


  for (var k = 0; k < back.length; k++) {
    var goBack = back[k];
    goBack.index = k; // console.log(goBack);

    goBack.onclick = function () {
      clip[this.index].classList.remove('active');
      video[this.index].pause();
    };
  }
}
{
  //鼠标移入播放视频
  var btn = document.querySelectorAll('.trailer_btn');
  var videoPlay = document.querySelectorAll('.smallVideo');

  for (var i = 0; i < btn.length; i++) {
    var moveIn = btn[i];
    moveIn.index = i;

    moveIn.onmouseenter = function () {
      videoPlay[this.index].style.display = 'block';
      videoPlay[this.index].play();
      videoPlay[this.index].currentTime = 0;
    };

    moveIn.onmouseleave = function () {
      videoPlay[this.index].style.display = 'none';
      videoPlay[this.index].pause();
    };
  }
} //预告封面

$(function () {
  $('.trailer_cover').mouseenter(function () {
    $(this).find('.trailer_title').slideUp();
  });
  $('.trailer_cover').mouseleave(function () {
    $(this).find('.trailer_title').stop(true, false).slideDown();
  });
}); //懒加载

$(function () {
  $("div.lazy").lazyload({
    effect: "fadeIn"
  });
  $("img.lazy").lazyload({
    effect: "fadeIn"
  });
});
$(function () {
  $('.switch-btn').click(function () {
    if ($(this).siblings('.game').children('.page2').is(':hidden')) {
      $(this).siblings('.game').children('.page2').show();
      $(this).siblings('.game').children('.page1').hide();
    } else {
      $(this).siblings('.game').children('.page2').hide();
      $(this).siblings('.game').children('.page1').show();
    } // if($(this).siblings('.game').children('.page2').is(':hidden')){
    //     $(this).siblings('.game').children('.page2').show()
    //     // $(this).siblings('.game').children('.page1').css({
    //     //     opacity: '0'
    //     // })
    // }else{
    //     $(this).siblings('.game').children('.page2').hide()
    //     // $(this).siblings('.game').children('.page1').css({
    //     //     opacity: '1'
    //     // })
    // }

  });
}); //跳转详情页 red dead
// var goRedDead = document.getElementById('redDead')
// goRedDead.onclick = function (){
//     window.location = 'red dead.html'
// }

$(document).ready(function () {
  $(".redDead").click(function () {
    $(location).attr("href", "red dead.html");
  });
  $(".reddead_cover").click(function () {
    $(location).attr("href", "red dead.html");
  });
  $(".cyber_cover").click(function () {
    $(location).attr("href", "cyberpunk.html");
  });
});