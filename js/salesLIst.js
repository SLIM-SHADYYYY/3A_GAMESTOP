$(document).ready(function() {
	var timeStart = 0;
	function wheely(e) {
	  var y = e.originalEvent.deltaY;
	  var timeStop = new Date().getTime();
	  var timeDiff = timeStop - timeStart;
	  if (timeDiff > 200) {
		if (y > 0) {
		  nextSlide();
		}
		if (y < 0) {
		  prevSlide();
		}
	  }
	  timeStart = timeStop;
	}
	function prevSlide() {
		
	  if ($('.active').is(':first-child')) {
		if (!$('.slider').hasClass('dragging')) {
		  $('.slide:first-child').addClass('bounce');
		  setTimeout(function() {
			$('.slide:first-child').removeClass('bounce');
		  }, 300);
		}
	  }
	  else {
		$('.active').removeClass('active').addClass('queue').prev().removeClass('prev').addClass('active');
	  }

	}
	function nextSlide() {
	  if ($('.active').is(':last-child')) {
		if (!$('.slider').hasClass('dragging')) {
		  $('.slide:last-child').addClass('bounce');
		  setTimeout(function() {
			$('.slide:last-child').removeClass('bounce');
		  }, 300);
		}
	  } else {
		$('.active').removeClass('active').addClass('prev').next().removeClass('queue').addClass('active');
	  }
	}
	function hotkeys(e) {
	  if (e.keyCode == 38) {
		prevSlide();
	  }
	  if (e.keyCode == 40) {
		e.preventDefault();
		nextSlide();
	  }
	}
	function dragStart(e) {
	  e.preventDefault();
	  if (e.type == 'touchstart') {
		$(document).off('mousedown', dragStart);
		startPoint = e.originalEvent.touches[0].pageY;
	  } else {
		startPoint = e.pageY;
	  }
	  dragDist = 0;
	  $(document).on('touchmove mousemove', dragMove);
	}
	function dragMove(e) {
	  if (e.type == 'touchmove') {
		var movePoint = e.originalEvent.touches[0].pageY;
	  } else {
		var movePoint = e.pageY;
	  }
	  dragDist = (movePoint - startPoint) / $('.slider').height() * 100;
	  $('.slider').addClass('dragging');
	  $('.slide, .bg').css({
		transition: '0ms'
	  });
	  if (dragDist < 0) {
		$('.active .bg').css({
		  opacity: 1 + (dragDist / 200)
		});
		$('.active').css({
		  transform: 'translate3d(0,' + (dragDist / 2) + '%,0)'
		}).next().css({
		  transform: 'translate3d(0,' + (100 + dragDist) + '%,0)'
		});
	  }
	  if (dragDist > 0) {
		$('.active').css({
		  transform: 'translate3d(0,' + dragDist + '%,0)'
		}).prev().css({
		  animation: 'none',
		  transform: 'translate3d(0,' + (-50 + dragDist / 2) + '%,0)'
		}).find('.bg').css({
		  opacity: 0.5 + (dragDist / 200)
		});
	  }
	}
	function dragEnd() {
	  $(document).off('touchmove mousemove', dragMove);
	  $('.slide, .bg').removeAttr('style');
	  if (dragDist > 20) {
		prevSlide();
	  }
	  if (dragDist < -20) {
		nextSlide();
	  }
	  setTimeout(function() {
		$('.slider').removeClass('dragging');
	  }, 800);
	}
	$(document).on('wheel', wheely);
	$(document).on('keydown', hotkeys);
	$(document).on('touchstart mousedown', dragStart);
	$(document).on('touchend mouseup', dragEnd);


	// 封面动画
	$('.boxbtn .filterDiv').mouseenter(function () {
		$(this).addClass('fuzzy')
		$(this).children().show()
	})
	$('.boxbtn .filterDiv').mouseleave(function () {
		$(this).removeClass('fuzzy')
		$(this).children().hide()
	})
	

	//锚点
	$('.xbox').click(function (){
		$('.slide1').addClass(' active').removeClass(' prev')
		$('.slide1').nextAll().removeClass('active').removeClass('prev').addClass(' queue')
	})

	$('.ps').click(function (){
		$('.slide2').addClass(' active').removeClass(' queue').removeClass(' prev')
		$('.slide2').prevAll().removeClass('active').addClass(' prev')
		$('.slide2').nextAll().removeClass('active').removeClass('prev').addClass(' queue')
	})

	$('.steam').click(function (){
		$('.slide3').addClass(' active').removeClass(' queue').removeClass(' prev')
		$('.slide3').prevAll().removeClass('active').addClass(' prev')
		$('.slide3').nextAll().removeClass('active').removeClass('prev').addClass(' queue')
	})

	$('.uplay').click(function (){
		$('.slide4').addClass(' active').removeClass(' queue').removeClass(' prev')
		$('.slide4').prevAll().removeClass('active').addClass(' prev')
		$('.slide4').nextAll().removeClass('active').removeClass('prev').addClass(' queue')
	})

	$('.origin').click(function (){
		$('.slide5').addClass(' active').removeClass(' queue').removeClass(' prev')
		$('.slide5').prevAll().removeClass('active').addClass(' prev')
		$('.slide5').nextAll().removeClass('active').removeClass('prev').addClass(' queue')
	})

	$('.amazon').click(function (){
		$('.slide6').addClass(' active').removeClass(' queue')
		$('.slide6').prevAll().removeClass('active').removeClass('queue').addClass(' prev')
	})
   });
   
