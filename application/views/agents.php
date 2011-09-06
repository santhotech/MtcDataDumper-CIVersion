<?php if($agents->num_rows > 0) { ?>
<table class="stats" align="center" width="100%">
<tr>
<td class="hed">Agent Name</td>
<td class="hed">Number of Devices</td>
<td class="hed">Number of Profiles</td>
<td class="hed">Added On</td>
<td class="hed">Updated On</td>
<td class="hed">Actions</td>
</tr>
<?
foreach($agents->result_array() as $row)
{
$agntId = $row['id'];
$agntDevices = mysql_query("SELECT * FROM devices WHERE agent_id='$agntId'");
$agntProfiles = mysql_query("SELECT * FROM profiles WHERE agent_id='$agntId'");
$noOfDevs = mysql_num_rows($agntDevices);
$noOfPros = mysql_num_rows($agntProfiles);
?>
<tr>
<td><a href="javascript:;" onClick="javascript: LoadDevices('<?=$agntId?>');" ><? echo strtoupper($row['agent_name']); ?></a></td>
<td><?=$noOfDevs?></td>
<td><?=$noOfPros?></td>
<td><?=$row['added_on']?></td>
<td><?=$row['updated_on']?></td>
<td>
<img style="padding-right: 10px;" src="images/eye.png" onClick="javascript: LoadDevices('<?=$agntId?>');">
<img style="padding-right: 10px;" src="images/edit.png" onClick="EditAgent('<?=$agntId?>');">
<img style="padding-right: 10px;" src="images/cancel.png" onClick="DeleteAgent('<?=$agntId?>');">
</td>
</tr>
<? } ?>
</table>
<?php } else { ?>
<div class="info">You have not added any agents yet.</div>
<?php } ?>