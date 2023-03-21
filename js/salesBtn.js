//img
var boxbtn = document.querySelectorAll('.table > div');
    var img = document.getElementsByClassName('img');
    for(var i = 0; i < boxbtn.length; i++){
        var point = boxbtn[i];
        point.index = i;
        point.onmouseover = function () {
            for(var j = 0; j < boxbtn.length;j++){
                img[j].style.display = 'none ';
            }
            img[this.index].style.display = 'flex';
        }
    }
//img1
var boxbtn1 = document.querySelectorAll('.table1 > div');
    var img1 = document.getElementsByClassName('img1');
    for(var i = 0; i < boxbtn1.length; i++){
        var point = boxbtn1[i];
        point.index = i;
        point.onmouseover = function () {
            for(var j = 0; j < boxbtn1.length;j++){
                img1[j].style.display = 'none ';
            }
            img1[this.index].style.display = 'flex';
        }
    }
//img2
var boxbtn2 = document.querySelectorAll('.table2 > div');
var img2 = document.getElementsByClassName('img2');
for(var i = 0; i < boxbtn2.length; i++){
    var point = boxbtn2[i];
    point.index = i;
    point.onmouseover = function () {
        for(var j = 0; j < boxbtn2.length;j++){
            img2[j].style.display = 'none ';
        }
        img2[this.index].style.display = 'flex';
    }
}
//img3
var boxbtn3 = document.querySelectorAll('.table3 > div');
var img3 = document.getElementsByClassName('img3');
for(var i = 0; i < boxbtn3.length; i++){
    var point = boxbtn3[i];
    point.index = i;
    point.onmouseover = function () {
        for(var j = 0; j < boxbtn3.length;j++){
            img3[j].style.display = 'none ';
        }
        img3[this.index].style.display = 'flex';
    }
}
//img4
var boxbtn4 = document.querySelectorAll('.table4 > div');
var img4 = document.getElementsByClassName('img4');
for(var i = 0; i < boxbtn4.length; i++){
    var point = boxbtn4[i];
    point.index = i;
    point.onmouseover = function () {
        for(var j = 0; j < boxbtn4.length;j++){
            img4[j].style.display = 'none ';
        }
        img4[this.index].style.display = 'flex';
    }
}
//img5
var boxbtn5 = document.querySelectorAll('.table5 > div');
var img5 = document.getElementsByClassName('img5');
for(var i = 0; i < boxbtn5.length; i++){
    var point = boxbtn5[i];
    point.index = i;
    point.onmouseover = function () {
        for(var j = 0; j < boxbtn5.length;j++){
            img5[j].style.display = 'none ';
        }
        img5[this.index].style.display = 'flex';
    }
}                 