/**
 * @author santhosh
 */


var ajax_load = "<img src='images/ajload.gif' alt='loading...' />";
var ajax_load_bar = "<div align='center'><img src='images/loadingAnimation.gif' alt='loading...' /></div>";

function DoOnEachLoad()
{   		
	$("#dumper-time-controls").hide();
	$("#curSeqId").val("");
	$("#current-time-control").hide();
}

function LoadDashBoard(sortordr){    
	DoOnEachLoad(); 	  	
    var loadUrl = "ajax/load_agents_table.php";
    $("#actdiv").html(ajax_load_bar).load(loadUrl);
    $("#band-button-left").html("<p>&nbsp;</p>");
    $("#band-button-center").html("Agents");
	var rightBtnCde = '<input type="button" id="profile-load-btn" value="+" onClick="LoadAddDSDialog()" class="right-side-btn">';
	$("#band-button-right").html(rightBtnCde);
} 

function LoadDevices(agntId){        
	DoOnEachLoad();
    var loadUrl = "ajax/load_devices_table.php";
    var loadUrl1 = "ajax/get_agent_title.php";
    $("#actdiv").html(ajax_load_bar).load(loadUrl, "agntId=" + agntId);
    var dBtn = "<input type='button' value='Agents' onClick='LoadDashBoard();' class='left-button'>"
    $("#band-button-left").html(dBtn);
    $("#band-button-center").html(ajax_load).load(loadUrl1, "agntId=" + agntId + "&typ=1");
	$("#band-button-right").html("<p>&nbsp;</p>");
	$("#curAgentId").val(agntId);
	var rightBtnCde = '<input type="button" value="Agent Profiles" class="left-button" onClick="LoadAgentProfiles('+agntId+');">';		
	$("#band-button-right").html(rightBtnCde);	
}

function LoadAgentProfiles(agntId){
	DoOnEachLoad();
	
	var loadUrl = "ajax/load_agent_profiles_table.php";
	$("#actdiv").html(ajax_load_bar).load(loadUrl, "agntId=" + agntId);
	
    var loadUrl1 = "ajax/get_agent_title.php";
	$("#band-button-center").html(ajax_load).load(loadUrl1, "agntId=" + agntId + "&typ=2");
	
	var dBtn = "<input type='button' value='Agents' onClick='LoadDashBoard();' class='left-button'> <input type='button' value='Agent Devices' onClick='LoadDevices("+agntId+");' class='left-button'>";
	$("#band-button-left").html(dBtn);
	
	var rightBtnCde = '<input type="button" value="+" class="right-side-btn" onClick="ShowAgentProfileDialog('+agntId+');">';		
	$("#band-button-right").html(rightBtnCde);	
	
	$("#curAgentId").val(agntId);	
}

function LoadProfiles(devId){	    
	DoOnEachLoad();
    var loadUrl = "ajax/load_profiles_table.php";
    var loadUrl1 = "ajax/get_back_button_todevices.php";
    var loadUrl2 = "ajax/get_device_title.php";
    $("#actdiv").html(ajax_load_bar).load(loadUrl, "devId=" + devId);
    $("#band-button-left").html(ajax_load).load(loadUrl1, "devId=" + devId);
    $("#band-button-center").html(ajax_load).load(loadUrl2, "devId=" + devId);
	$("#curDeviceId").val(devId);
	var curAgentId = $("#curAgentId").val();		
	var rightBtnCde = '<input type="button" value="+" class="right-side-btn" onClick="OpenProfileDialog('+curAgentId+','+devId+')">';		
	$("#band-button-right").html(rightBtnCde);	
}

function LoadAgentProfileTable(aProId)
{
	DoOnEachLoad();
	var agntId = $("#curAgentId").val();
	var loadUrl = "ajax/load_agent_profile_table.php";
	$("#actdiv").html(ajax_load_bar).load(loadUrl, "aProId=" + aProId);
	
    var loadUrl1 = "ajax/get_agentProfile_title.php";
	$("#band-button-center").html(ajax_load).load(loadUrl1, "aProId=" + aProId);
	
	var dBtn = "<input type='button' value='Agents' onClick='LoadDashBoard();' class='left-button'> <input type='button' value='Agent Devices' onClick='LoadDevices("+agntId+");' class='left-button'>  <input type='button' value='Agent Profiles' onClick='LoadAgentProfiles("+agntId+");' class='left-button'>";
	$("#band-button-left").html(dBtn);
	
	$("#curAgentProfileId").val(aProId);
	$("#band-button-right").html("<p>&nbsp;</p>");	
	$("#current-time-control").show();	
	
}

$("#currRefresh").click(function(){
	var aProId = $("#curAgentProfileId").val();
	var loadUrl = "ajax/load_agent_profile_table.php";
	$("#actdiv").html(ajax_load_bar).load(loadUrl, "aProId=" + aProId);		
})


function DeleteAgent(agntId)
{
	var loadUrl = "ajax/delete_agent.php";
	if(confirm("Are you sure you want to delete this agent?"))
	{    	                            		 		$("#nodiv").load(loadUrl,"agntId="+agntId,function() {
			LoadDashBoard();
		});	        
	}	
}

function DeleteAgentProfile(aProId,agntId)
{
	var loadUrl = "ajax/delete_agent_profile.php";
	if(confirm("Are you sure you want to delete this profile?"))
	{    	                            		 		$("#nodiv").load(loadUrl,"aProId="+aProId,function() {
			LoadAgentProfiles(agntId);
		});	        
	}	
}

function DeleteProfile(proId,devId)
{
	var loadUrl = "ajax/delete_profile.php";
	if(confirm("Are you sure you want to delete this profile?"))
	{    	                            		 		$("#nodiv").load(loadUrl,"proId="+proId,function() {
			LoadProfiles(devId);
		});	        
	}	
}

function LoadAddDSDialog()
{
	tb_show("", "add_new_agent.htm?TB_iframe=true&height=300&width=400&modal=true", "");
}

function OpenProfileDialog(a,b){	
    tb_show("", "create_profile.htm?agn="+a+"&dev="+b+"&TB_iframe=true&height=600&width=660&modal=true", "");
}

function ShowAgentProfileDialog(a){	
    tb_show("", "create_agent_profile.htm?agn="+a+"&TB_iframe=true&height=600&width=660&modal=true", "");
}

function EditAgent(agntId) {
	tb_show("", "edit_agent.php?agn="+agntId+"&TB_iframe=true&height=600&width=660&modal=true", "");
}

$("#settingsLogo").click(function(){
	tb_show("", "settings.htm?TB_iframe=true&height=600&width=660&modal=true", "");
});	

$("#dumpExportId").click(function(){
	var proId = $("#curProfileId").val();
	window.open('export.php?proId='+proId,'popup','width=300,height=300,scrollbars=no,resizable=no,toolbar=no,directories=no,location=no,menubar=no,status=no,left=0,top=0');
});

function LoadDumper(proId){
	
    var loadUrl = "ajax/load_dumper_table.php";
    var loadUrl1 = "ajax/get_back_button_toprofiles.php";
    var loadUrl2 = "ajax/get_profile_title.php";
    $("#band-button-left").html(ajax_load).load(loadUrl1, "proId=" + proId);
    $("#band-button-center").html(ajax_load).load(loadUrl2, "proId=" + proId);
    $("#actdiv").html(ajax_load_bar).load(loadUrl, "proId=" + proId);
    $("#dumper-time-controls").show();
    $("#curProfileId").val(proId);
	$("#dump-status-div").html("Status: <span style='color: Red'>Stopped</span>");
	$("#curSeqId").val("");		
	$("#band-button-right").html("<p>&nbsp;</p>");
	$("#dumpStopId").attr("disabled","disabled").removeClass("ctrl-button").addClass("dialog-btn-disabled");	
}



$(function(){
    timerId = 0;
    $("#dumpStartId").click(function(){
		
		var proType;
		var proId = $("#curProfileId").val();
		
		$("#agntBackBtn").attr("disabled","disabled").removeClass("left-button").addClass("dialog-btn-disabled");
		$("#devcBackBtn").attr("disabled","disabled").removeClass("left-button").addClass("dialog-btn-disabled");
		$("#profBackBtn").attr("disabled","disabled").removeClass("left-button").addClass("dialog-btn-disabled");		
		$("#dumpStartId").attr("disabled","disabled").removeClass("ctrl-button").addClass("dialog-btn-disabled");		
		$("#dumpStopId").removeAttr("disabled").removeClass("dialog-btn-disabled").addClass("ctrl-button");	
		
		
		$("#profile-type-div").html("<img src='images/ajload.gif' alt='loading...' />").load("ajax/get_profile_type.php","proId="+proId, 
		function(){ 
			proType = $("#curProfileType").val(); 
			if(proType == 1) { DumpAllData(); }
			if(proType == 2) { DumpTriggerData(); }
			if(proType == 4) { DumpTriggerDataOnInterval(); }			
			//alert('there');
		});		        	
    });
	
	var curSequenceId;
	var getSequenceFlag = -1;
	
    $("#dumpStopId").click(function(){
		
		getSequenceFlag = -1;
        clearInterval(timerId);
        document.getElementById('curSeqId').value = "";
        while (timerId != -1) {
            $("#dump-status-div").html("Status: <span style='color: Red'>Stopped</span>");
            clearInterval(timerId);
            timerId = -1;
        }
		
		$("#agntBackBtn").removeAttr("disabled").removeClass("dialog-btn-disabled").addClass("left-button");
		$("#devcBackBtn").removeAttr("disabled").removeClass("dialog-btn-disabled").addClass("left-button");
		$("#profBackBtn").removeAttr("disabled").removeClass("dialog-btn-disabled").addClass("left-button");		
		
		$("#dumpStopId").attr("disabled","disabled").removeClass("ctrl-button").addClass("dialog-btn-disabled");		
		$("#dumpStartId").removeAttr("disabled").removeClass("dialog-btn-disabled").addClass("ctrl-button");	
		
		
    });
	
	/*
    $("#dumpClearId").click(function(){
        var proId = $("#curProfileId").val();
        document.getElementById('curSeqId').value = "";
        window.clearInterval(timerId);
        LoadDumper(proId)
    });
	*/
	
	function DumpTriggerData()
	{
		$("#sequenceDiv").hide();
		var proId = $("#curProfileId").val();
		timerId = window.setInterval(function(){
			$("#dump-status-div").html("Status: <span style='color: DarkGreen'>Active</span>");
			$("#nodiv").load("trigger_dumper.php","var="+proId);
			$("#actdiv").load("get_trigger_tab_data.php","var="+proId);			
		}, 1000);
	}
	
	function DumpTriggerDataOnInterval()
	{
		$("#sequenceDiv").hide();
		var curFixInt = $("#curProfileIntr").val();
		var proId = $("#curProfileId").val();
		timerId = window.setInterval(function(){
			$("#dump-status-div").html("Status: <span style='color: DarkGreen'>Active</span>");
			$("#nodiv").load("trigger_dumper.php","var="+proId);
			$("#actdiv").load("gettabdata.php","var="+proId);			
		}, curFixInt);
	}
	
	function DumpAllData()
	{		
		var count = 0;
		$("#sequenceDiv").show();
		getSequenceFlag = 1;
		GetSequences('');
		var proId = $("#curProfileId").val();
		$("#nodiv").load("trigger_dumper.php","var="+proId);
        timerId = window.setInterval(function(){
			
            count++;
			
            $("#dump-status-div").html("Status: <span style='color: DarkGreen'>Active</span>");
					
			
			$("#actdiv").load("gettabdata.php","var="+proId);          
			  			
        }, 2000);
	}
	function GetSequences(csid)
	{	
		var proId = $("#curProfileId").val();	
		if (getSequenceFlag == 1) {
			$("#sequenceDiv").load("xmldumper.php", "proId=" + proId + "&nxtSeq=" + csid , function(){
				curSeId = $("#curSeqId").val();				
				GetSequences(curSeId);										
			});
		}
	}
});
