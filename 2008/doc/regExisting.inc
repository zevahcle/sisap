<br>
<form name="ccard_register" action="?x=fin_registro" method="post">
<center>
<TABLE border=1 width=80% align=center>




<td>
<table width=100% class="normal" border=0 cellpadding=0 cellspacing=0>
<tr>
	<td colspan=2 class="titulo"><center>Registration Data</center></td>
<tr>
	<td>&nbsp;</td>
<tr>
	<td><b>PERSONAL INFO</b></td><td>&nbsp;</td>

<tr>
	<td>e-mail </td><td>&nbsp;<input type="text" name="email" 
	value="<?php print "$email"; ?>"></td>	
<tr>
	<td>First Name </td><td>&nbsp;<input type="text" name="firstname"
	value="<?php print "$firstname"; ?>"></td>
<tr>
	<td>Last Name </td><td>&nbsp;<input type="text" name="lastname"
	value="<?php print "$lastname";?>"></td>
<tr>
	<td>Address* </td><td>&nbsp;<input type="text" name="address"
	value="<?php print "$address";?>"></td>
<tr>
	<td>City/State/ZIP/Country* </td><td>&nbsp;<input type="text" name="city"
	value="<?php print "$city";?>"></td>
<tr>
	<td>Phone* </td><td>&nbsp;<input type="text" name="phone"
	value="<?php print "$phone";?>"></td>
<tr>
	<td>Phone (Office) </td><td>&nbsp;<input type="text" name="officephone"
	value="<?php print "$officephone";?>"></td>
<tr>
	<td>Fax </td><td>&nbsp;<input type="text" name="fax"
	value="<?php print "$fax";?>"></td>
<tr>
	<td>Arrival Date* (dd/mm/yyyy)</td><td>&nbsp;
October&nbsp;<input name="arrival" type="text" size="2" maxlength="2" value=<?php print "$arrival"?>>, 2005
</td></tr>
<tr>
	<td>Departure Date* (dd/mm/yyyy)</td><td>&nbsp;
October &nbsp;<input name="leaving" type="text" id="prueba" size="2" 
maxlength="2" value=<?php print "$leaving";?> 2005>
</td>
<tr>
	<td>&nbsp;</td>
<tr>
	<td><input type="reset" value="Clear"></td><td><input type="submit" value="Submit"></td>
<tr>
	<td>&nbsp;</td>
</table>
<tr class="normal">
	<td>
	<p>
	<b>* Means REQUIRED FIELD</b><br>
	Note: Only alphanumerical characters (a-z, A-Z, 0-9), slashes (/) and whitespaces are
	accepted, any other character will be automatically replaced with a whitespace.
	</p>
	<p><b>
	The Hotel will not actually charge your credit card. The credit card information
	will secure your reservation. If no-show you will be charged with one night.</b>
	</p>
	<p>This form will generate a PDF, there you can enter your Credit Card Number.
	You must print it and send it via fax.</p>
	</td>
</td>
</TABLE>
</center>
