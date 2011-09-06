<div class="dialog" align="center" style="width: 350px">
<div class="dialog-header">
<h5 class="dialog-title">Add New Agent</h5>
</div>
<div class="dialog-body">
<table cellpadding="10" cellspacing="10">
	<tr>
		<td class="form-label">Agent Name</td>
		<td>:</td>
		<td><input type="text" name="agentName" id="agentName" maxlength="20" /></td>
		<td>
		<div id="agt-name-result"></div>
		</td>
	</tr>
	<tr>
		<td class="form-label">Data Source</td>
		<td>:</td>
		<td><input type="text" name="agentSource" id="agentSource" /></td>
		<td>
		<div id="agt-src-result"></div>
	
	</tr>
	<tr>
		<td class="form-label">MTC Version</td>
		<td>:</td>
		<td><select id="mtcVersion">
			<option value="1.1">1.1</option>
			<option value="1.2">1.2</option>
		</select></td>
		<td>
		<div id="agt-src-result"></div>
	
	</tr>
	<tr>
		<td colspan="4">
		<div id="agent-added-result"></div>
		</td>
	</tr>
</table>

<input type="button" value="Add Agent" class="dialog-btn"
	id="addAgntBtn" /> 
	</div>
</div>
