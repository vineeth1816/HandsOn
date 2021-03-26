$(document).ready(function(){
	
	$('#add').click(function(){
		var a=$('#a').val();
		var b=$('#b').val();
		if(a.length<1 || b.length<1)
		{
			$('#div1').html('<p style="color:red">'+'Pls.Enter the Values'+'</p>');
		}
		else
		{
			$('#ans').val(parseInt(a)+parseInt(b));
		}
	})
})