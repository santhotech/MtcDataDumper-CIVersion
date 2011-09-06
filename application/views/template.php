<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">
<html>
	<head>
		<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">
		<title>MTConnect Data Tabulator - v1.1</title> 
	<script type="text/javascript" language="javascript" src="js/jquery.js"></script>
	<script type="text/javascript" language="javascript" src="js/ajaxfunc.js"></script>
	<script type="text/javascript" language="javascript" src="js/jqfunc.js"></script>
	<script type="text/javascript" src="js/thickbox.js"></script>
	
	
	
	<link rel="stylesheet" href="css/thickbox.css" type="text/css" media="screen" />	
	<link rel="stylesheet" type="text/css" href="css/style.css" />
	<link rel="stylesheet" type="text/css" href="css/basestyle.css" />		
			
	</head>
	<body>
		<div id="page-container">
			<div id="header">
				<div id="header-right" align="right">					
					<img src="images/settings.png" alt="settings" id="settingsLogo">					
					<img src="images/logout.png" alt="logout" class="hidden">					
				</div>	
				<div id="header-left">
					<div id="vim-logo">
						<img src="images/vimlogo.png" alt="Vimana">		
					</div>
					<div id="datadumper-logo">
						Data Dumper
					</div>
				</div>		
				<div style="clear: both;"></div>
				<div id="big-black-band">
				
				<div id="band-button-left">
					
				</div>	
				
				<div id="band-button-right">
					
				</div>
				<div id="band-button-center" class="head-font" align="center">
					Agents
				</div>	
						
				</div>								
			</div>			
			<div id="nodiv" class="hidden"></div>	
			<div id="mainbody">	
			
			<div id="actdiv" style="padding: 10px 10px 25px 10px" align="left"></div>
				
			</div>	
				
			<div id="footer">
				<div id="current-time-control" style="float: right; padding-right: 10px;" class="hidden">
					<input type="button" value="Refresh" id="currRefresh" class="ctrl-button" />
				</div>
				<div id="dumper-time-controls" class="hidden">
					<div style="float: right; padding-right: 10px;">
					<input type="button" value="Start" id="dumpStartId" class="ctrl-button" />
					<input type="button" value="Stop" id="dumpStopId" class="ctrl-button" />			
					<input type="button" value="Export" id="dumpExportId" class="ctrl-button" />			
					</div>
					<div style="float: left; padding-left: 10px; width:600px">					
					
					<input type="hidden" id="curProfileId">
					<input type="hidden" id="curDeviceId">
					<input type="hidden" id="curAgentId">
					<input type="hidden" id="curAgentProfileId">
					<div class="hidden" id="profile-type-div"></div>
					<p> 					
				<span id="sequenceDiv">Current Sequence: <input style="border-radius: 5px" type="text" id="curSeqId" size="7" /></span>
				<span id="dump-status-div" style="width:200px; font-weight: bold"></span>
					</p>
					</div>	
				</div>		
			</div>		
		</div>			
	</body>
</html>