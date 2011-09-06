<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">
<title>MTConnect Data Tabulator - v2.0</title>
<script type="text/javascript" src="<?php echo base_url(); ?>js/jquery.js"></script>
<script type="text/javascript" src="<?php echo base_url(); ?>js/thickbox.js"></script>
<link rel="stylesheet" href="<?php echo base_url(); ?>css/thickbox.css"
	type="text/css" media="screen" />
<link rel="stylesheet" type="text/css"
	href="<?php echo base_url(); ?>css/style.css" />
<link rel="stylesheet" type="text/css"
	href="<?php echo base_url(); ?>css/basestyle.css" />
</head>
<body>
<div id="page-container">
<div id="header">
<div id="header-right" align="right"><img
	src="<?php echo base_url(); ?>images/settings.png" alt="settings"
	id="settingsLogo"> <img
	src="<?php echo base_url(); ?>images/logout.png" alt="logout"
	class="hidden"></div>
<div id="header-left">
<div id="vim-logo"><img
	src="<?php echo base_url(); ?>images/vimlogo.png" alt="Vimana"></div>
<div id="datadumper-logo">Data Dumper</div>
</div>
<div style="clear: both;"></div>
<div id="big-black-band">
<?= $header ?>
</div>
</div>
<div id="nodiv" class="hidden"></div>
<div id="mainbody">
<div id="actdiv" style="padding: 10px 10px 25px 10px" align="center"></div>
<div align="center"><?= $content ?></div>
</div>
<div id="footer">
<?= $footer ?>
</div>
</div>
</body>
</html>