$(document).ready(function(){
	$('#click').click(function(){
		$('p').html($('#ta').val());
	})

	$('p').click(function(){
		$('p').html('<img width="50px" height="50px" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/SNice.svg/1200px-SNice.svg.png">');
	})
})