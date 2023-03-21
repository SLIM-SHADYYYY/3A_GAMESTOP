"use strict";

//搜索框
$(function () {
  var close = document.querySelector('.close');
  var search = document.querySelector('.search');
  var searchBox = document.querySelector('.searchBox');

  search.onclick = function () {
    searchBox.classList.add('active');
  };

  close.onclick = function () {
    searchBox.classList.remove('active');
  };

  $('.top-nav ul li.classify').click(function () {
    var show = $(this).parents('.head-contain').siblings('.classify-list');

    if (show.is(':hidden')) {
      show.show(500);
    } else {
      show.hide(500);
    }
  });
}); //截图轮播

var boxbtn = document.querySelectorAll('.table > div');
var img = document.getElementsByClassName('img');

for (var i = 0; i < boxbtn.length; i++) {
  var point = boxbtn[i];
  point.index = i;

  point.onmouseover = function () {
    for (var j = 0; j < boxbtn.length; j++) {
      boxbtn[j].className = 'boxbtn';
      img[j].style.display = 'none';
    }

    boxbtn[this.index].className = 'boxbtn boxbtnHover';
    img[this.index].style.display = 'flex';
  };
} //游戏特色切换效果


$(function () {
  $('.button').click(function () {
    var show = $;
  });
});