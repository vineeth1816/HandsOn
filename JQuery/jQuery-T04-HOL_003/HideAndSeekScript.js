$(document).ready(function(){
	var c=0;
	$('#attach').click(function(){
		if(c%2==0)
		{
			$holder=$('.d').detach();
		}
		else
			$('p').append($holder);
		c+=1;

	})

	$('#div1').click(function(){
		$(this).css('background-color','yellow');
	})
	$('#div2').click(function(){
		$(this).css('background-color','green');
	})
	$('#div3').click(function(){
		$(this).css('background-color','red');
	})
	$('#div4').click(function(){
		$(this).css('background-color','pink');
	})

})