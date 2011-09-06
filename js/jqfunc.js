$(function () {	
	var timerId = 0;
	$('#start').click(function () {
		//$('#tohd').hide(1000);
		timerId = setInterval(function () {
			showact();
			showactdat();
		}, 1000);
	});

	$('#stop').click(function () {
		clearInterval(timerId);	
		$('#tohd').show(1000);
	});
  
	$('#cleard').click(function () {
		clearInterval(timerId);
		document.getElementById('sequid').value = "";
		if(timerId)
		{
			clearInterval(timerId);
		}
		$('#tohd').show(1000);
	});
	
	$('#export').click(function () {
		var loadUrle = "export.php";
		var ajax_load = "<img src='images/ajload.gif' alt='loading...' />";  
		var l = $("#curactsrc").val();
		if(l === "")
		{
		alert('Select a source');
		}
		else
		{
		clearInterval(timerId);
		document.getElementById('sequid').value = "";
		if(timerId)
		{
			clearInterval(timerId);
		}
		$('#tohd').show(1000);
		window.open('export.php?det='+l,'popup','width=300,height=300,scrollbars=no,resizable=no,toolbar=no,directories=no,location=no,menubar=no,status=no,left=0,top=0');
		}
	});
});
$(document).ready(function(){
	//$('#togopt').hide();
	$(".trigger").click(function(){
		$(".panel").toggle("slow");
		$(this).toggleClass("active");
		return false;
	});
	$.ajaxSetup ({  
        cache: false  
    });  
    var ajax_load = "<img src='images/ajload.gif' alt='loading...' />";  
	
	//getting the device data items
	var loadUrla = "getdatasources.php";  
	$("#profile-load-btn").click(function(){
    $("#mainactsrc")  
        .html(ajax_load)  
        .load(loadUrla,"i=1");  
	});
	var loadUrlc = "getdatasources.php";
	$("#trigdrpdwnsrc1").click(function(){
    $("#mainactsrc1")  
        .html(ajax_load)  
        .load(loadUrlc,"i=2");  
	});
});
	