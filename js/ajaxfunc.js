function hide(divd)
{
document.getElementById(divd).style.display = 'none';
}
function Show(divda)
{
document.getElementById(divda).style.display = 'block';
}
function getXMLHTTP() { //fuction to return the xml http object
		var xmlhttp=false;	
		try{
			xmlhttp=new XMLHttpRequest();
		}
		catch(e)	{		
			try{			
				xmlhttp= new ActiveXObject("Microsoft.XMLHTTP");
			}
			catch(e){
				try{
				xmlhttp = new ActiveXObject("Msxml2.XMLHTTP");
				}
				catch(e1){
					xmlhttp=false;
				}
			}
		}
		 	
		return xmlhttp;
    }
	function gathdata() {		
		var strURL="gatdat.php";
		var req = getXMLHTTP();
		
		if (req) {
			
			req.onreadystatechange = function() {
				if (req.readyState == 4) {
					// only if "OK"
					if (req.status == 200) {						
						document.getElementById('nodiv').innerHTML=req.responseText;	
						//tb_init('a.thickbox, area.thickbox, input.thickbox');//pass where to apply thickbox
											
					} else {
						alert("There was a problem while using XMLHTTP:\n" + req.statusText);
					}
				}				
			}			
			req.open("GET", strURL, true);
			req.send(null);
		}		
	}
	function showact() {	
		var proId = $("#curProfileId").val();
		var nxtSeq = $("#curSeqId").val();
		var strURL="xmldumper.php?proId="+proId+"&nxtSeq="+nxtSeq;
		var req = getXMLHTTP();
		
		if (req) {
			
			req.onreadystatechange = function() {
				if (req.readyState == 4) {
					// only if "OK"
					if (req.status == 200) {						
						//document.getElementById('actdiv').innerHTML=req.responseText;	
						document.getElementById('curSeqId').value=req.responseText;
						//tb_init('a.thickbox, area.thickbox, input.thickbox');//pass where to apply thickbox
											
					} else {
						alert("There was some problems while using XMLHTTP Objectr:\n" + req.statusText);
					}
				}				
			}			
			req.open("GET", strURL, true);
			req.send(null);
		}		
	}
	
	function showactdat() {	
		var proId = $("#curProfileId").val();
		var strURL="gettabdata.php?var="+proId;
		var req = getXMLHTTP();
		
		if (req) {
			
			req.onreadystatechange = function() {
				if (req.readyState == 4) {
					// only if "OK"
					if (req.status == 200) {						
						document.getElementById('actdiv').innerHTML=req.responseText;	
						
						//tb_init('a.thickbox, area.thickbox, input.thickbox');//pass where to apply thickbox
											
					} else {
						alert("There was a problem while using XMLHTTP:\n" + req.statusText);
					}
				}				
			}			
			req.open("GET", strURL, true);
			req.send(null);
		}		
	}
	
	function cleardata() {		
		var srcva = document.getElementById('curactsrc').value
		var strURL="trunc.php?var="+srcva;
		var req = getXMLHTTP();
		
		if (req) {
			
			req.onreadystatechange = function() {
				if (req.readyState == 4) {
					// only if "OK"
					if (req.status == 200) {						
						document.getElementById('actdiv').innerHTML=req.responseText;	
						//tb_init('a.thickbox, area.thickbox, input.thickbox');//pass where to apply thickbox
											
					} else {
						alert("There was a problem while using XMLHTTP:\n" + req.statusText);
					}
				}				
			}			
			req.open("GET", strURL, true);
			req.send(null);
		}		
	}