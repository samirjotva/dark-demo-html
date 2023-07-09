$(document).ready(function () {
	$('#list_toggle').click(function (e) {
	  $('.header-right').addClass('show');
	  $('.header-right').removeClass('hide');
	  $('.overlays').addClass('show');
	});
	$('#close').click(function (e) {
	  $('.header-right').removeClass('show');
	  $('.overlays').removeClass('show');
	});
  });