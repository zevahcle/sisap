<?php

$dir="registro";

//----------------------------------------
function clean($cad){

$len=strlen($cad);

$i=0;

while ($i<$len){
	if ($cad[$i]!= chr(32)){
		if (
			($cad[$i] < chr(47)) || ($cad[$i] > chr(57))&&
			($cad[$i] < chr(64)) || ($cad[$i] > chr(90)) &&
			($cad[$i] < chr(97)) || ($cad[$i] > chr(122))
			)
		{
			$cad[$i]=" ";
		}
	}
	$i++;
}
return $cad;
}
//----------------------------------------

$email 		= trim($_REQUEST['email']);

if ((trim($email)=="")||(trim($email=="Email address")))
	{
	    print "<br><p class=\"titulo\"> [$email]:Please type your valid e-mail account</p>";
	    Die ("&nbsp;&nbsp;<br><p><a href=\"?f=registration\">back</p>");
	}

if (!(file_exists("$dir/$email/reg.pdf")))
{    
    @include("doc/reg.inc");

}else
{

print "<table width=80% align=center>";
print "<tr><td>You are already registered</p>";
echo "<tr><td>Here is the PDF form generated with your previous data";
echo "<tr><td><img src=\"ima/rightarrow.gif\">"; 
echo "<a href=\"registro/$email/reg.pdf\">";
echo "AdHocNow! Registration Form.pdf</a></p>";
echo "<tr><td>If needed change any field in the form below";
print "</table>";

    @include("registro/$email/data.inc");
    @include("doc/regExisting.inc");


}
?>

