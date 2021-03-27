$(document).ready(function(){
	$('span').mouseover(function(){
		var s=$(this).text();
		$(this).css('background-color','bisque');
		if(s.includes("th")){
			$(this).css('font-style','italic');
			$(this).css('text-shadow','2px 2px pink')
			$(this).css('font-weight','bold');
		}
	})
	$('span').mouseout(function(){
		$(this).css('background-color','white');
	})
})