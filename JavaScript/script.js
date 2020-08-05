$(document).ready(function () {
	$('#nav').removeClass('shrink');
	$(window).scroll(function () {
		if ($(document).scrollTop() > 10) {
			$('#nav').addClass('shrink');
		}
		else {
			$('#nav').removeClass('shrink');
		}
	});
});

// Smooth Scroll to ID
$(document).ready(function () {
	$('a[href^="#"]').click(function () {
		var target = $(this.hash);
		if (target.length == 0) target = $('a[name="' + this.hash.substr(1) + '"]');
		if (target.length == 0) target = $('html');
		$('html, body').animate({ scrollTop: target.offset().top - 75 }, 1000, 'swing');
		return false;
	});
});