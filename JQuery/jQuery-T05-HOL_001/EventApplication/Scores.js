$(document).ready(function(){
	var res=0;
	$('#result').html(res);	
	$('.m').blur(function(){
		res+=parseInt($(this).val());
		$('#result').html(res);	
	})
	
})