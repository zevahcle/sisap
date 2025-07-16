<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<link REL="SHORTCUT ICON" HREF="../favicon.ico">
<title> Similarity Search and Applications</title>
<link rel="stylesheet" type="text/css" href="style.css" />
</head>

<body><table width="736" border="0" align="center" cellpadding="0" cellspacing="0">

<tr><td><centering>
<img name="SISAP" src="ima/sisaplogoweb.gif">
</td></tr>

</table>

<table width="736" border="0" align="center" cellpadding="5" cellspacing="5">
  <tr>
    <td width="200" align="center" valign="top">

	<?php
                $menu="doc/menu.inc";
                @readfile($menu);
    ?>


  <td valign="top" class="bordePrincipal">
	<table width="100%"  border="0" align="center">
           <?php
        @$x=$_REQUEST['x'];
	if(!isset($x)){
        @$f=$_REQUEST['f'];
        if(!isset($f))
        {
         $f="main";
        }
        $f="doc/".$f.".inc";
         if (!file_exists($f))
            {
                        $f="doc/main.inc";
            }
        @readfile($f);

        }
        else{
          $f="doc/".$x.".inc";
          if (!file_exists($f))
            {
                print "[$f]: Illegal function call: Contact Web Master<br>";
            }
            @include($f);
        }
        ?>


	</table>
  </tr>
</table>

<table width="100%"  border="0">
  <tr>
    <td class="barraCreditos"><div align="center">Home - Call for Papers - Paper Submission - Registration - Invited Speakers - Tourist Information - Accomodation - Links - Contact </div></td>
  </tr>
</table>
<p>&nbsp;</p>
</body>
</html>
