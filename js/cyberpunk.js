//搜索框
$(function (){
    var close = document.querySelector('.close');
    var search = document.querySelector('.search');
    var searchBox = document.querySelector('.searchBox');
    search.onclick = function() {
        searchBox.classList.add('active');
    }
    close.onclick = function() {
        searchBox.classList.remove('active');
    }


    $('.top-nav ul li.classify').click(function() {
    var show = $(this).parents('.head-contain').siblings('.classify-list');
    if(show.is(':hidden')){
        show.show(500)
    }else{
        show.hide(500)
    }
})
})

//截图轮播
    var boxbtn = document.querySelectorAll('.table > div');
    var img = document.getElementsByClassName('img');
    for(var i = 0; i < boxbtn.length; i++){
        var point = boxbtn[i];
        point.index = i;
        point.onmouseover = function () {
            for(var j = 0; j < boxbtn.length;j++){
                boxbtn[j].className = 'boxbtn';
                img[j].style.display = 'none';
            }
            boxbtn[this.index].className = 'boxbtn boxbtnHover';
            img[this.index].style.display = 'flex';
        }
    }

//游戏特色切换效果

var page = document.querySelectorAll('.page')
var btn = document.querySelector('.button')
var divs=[];
var divCnt = page.length; //div 数量 
for (var i=0;i<divCnt;i++) {
   divs[i] = document.getElementById("page"+(i+1));
}
var selectedDiv = 0;
btn.onclick = function (){
    selectedDiv++;
    selectedDiv = selectedDiv % divCnt; 
    for (var i=0;i< divCnt;i++) {
       divs[i].style.display="none"; 
    }
    divs[selectedDiv].style.display="block"; 
 }