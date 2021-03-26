$(document).ready(function(){
	var c=0;

	$('#wrap').click(function(){
		if(c%2==0)
		$('p').wrap("<div></div>");
		else
		$('p').unwrap("<div></div>");

		c+=1;
		
	})
})