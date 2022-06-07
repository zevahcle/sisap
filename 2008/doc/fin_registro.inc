<html>
<?php


       if (isset($HTTP_GET_VARS) && is_array($HTTP_GET_VARS)) {
                while (list($k, $v) = each($HTTP_GET_VARS)) {
                        $http[$k] = $v;
                }
        }
        if (isset($HTTP_POST_VARS) && is_array($HTTP_POST_VARS)) {
                while (list($k, $v) = each($HTTP_POST_VARS)) {
                        $http[$k] = $v;
                }
        }


$email=$http['email'];
$firstname=$http['firstname'];
$lastname=$http['lastname'];
$city=$http['city'];
$phone=$http['phone'];
$address=$http['address'];
$officephone=$http['officephone'];
$fax=$http['fax'];
$arrival=$http['arrival'];
$leaving=$http['leaving'];




//----------------------------------------
function clean($cad){

$len=strlen($cad);

$i=0;

while ($i<$len){
	if ($cad[$i]!= chr(32)){
		if (
			($cad[$i] < chr(47)) || ($cad[$i] > chr(57))&&
			($cad[$i] < chr(65)) || ($cad[$i] > chr(90)) &&
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

$firstname 		= trim(clean($firstname));
$lastname 		= trim(clean($lastname));
$address 		= trim(clean($address));
$city 			= trim(clean($city));
$arrival 		= trim(clean($arrival));
$Tarrival 		= "Oct/".$arrival."/2005";
$leaving 		= trim(clean($leaving));
$Tleaving 		= "Oct/".$leaving."/2005";
$phone 			= trim(clean($phone));
$officephone	= trim(clean($officephone));
$fax 			= trim(clean($fax));



if (trim($firstname)=="")
	Die ("<p class=\"titulo\">Your NAME is important, please go back and type it.</p>");
if (trim($lastname)=="")
	Die ("<p class=\"titulo\">Your NAME is important, please go back and type it.</p>");
if (trim($address)=="")
	Die ("<p class=\"titulo\">Your address is important, please go back and type it.</p>");
if (trim($arrival)=="")
	Die ("<p class=\"titulo\">Arrival Date is important, please go back and type it.</p>");
if (trim($leaving)=="")
	Die ("<p class=\"titulo\">Leaving Date is important, please go back and type it.</p>");

?>

<?php
$TAGS[ID] = "\$\$ID\$\$";
$TAGS[NAME] = "\$\$NAME\$\$";
$TAGS[CITY] = "\$\$CITY\$\$";
$TAGS[ADDRESS] = "\$\$ADDRESS\$\$";
$TAGS[PHONE] = "\$\$PHONE\$\$";
$TAGS[OFFICEPHONE] = "\$\$OFFICEPHONE\$\$";
$TAGS[FAX] = "\$\$FAX\$\$";
$TAGS[ARRIVAL] = "\$\$ARRIVAL\$\$";
$TAGS[LEAVING] = "\$\$LEAVING\$\$";
$TAGS[TITLE] = "\$\$TITLE\$\$";

$dir="registro/";
$idfile="nextid.txt";
$index="indice.txt";
$texsourcedir="registro/latex/";
$texfile =$texsourcedir."template.tex";
mkdir("registro/$email");

//--------------------------
$record=fopen($dir."/$email/data.inc", "w");
fputs($record,"<?php\n");
fputs($record,"\$email=\"$email\";");
fputs($record,"\n\$firstname=\"$firstname\";");
fputs($record,"\n\$lastname=\"$lastname\";");
fputs($record, "\n\$address=\"$address\";");
fputs($record, "\n\$city=\"$city\";");
fputs($record, "\n\$phone=\"$phone\";");
fputs($record, "\n\$officePhone=\"$officephone\";");
fputs($record, "\n\$fax=\"$fax\";");
fputs($record, "\n\$arrival=\"$arrival\";");
fputs($record, "\n\$leaving=\"$leaving\"; ?>");
fclose($record);
//--------------------------

// Uno para el registro del CPM

$texfp=fopen($texfile, "r");
while(!feof($texfp)){
	$buff=fgets($texfp, 4096);
	$texfiledump=$texfiledump.$buff;
	}
fclose($texfp);
//-------------------------

$texfiledump=str_replace($TAGS[ID], $email,$texfiledump);
$texfiledump=str_replace($TAGS[NAME], $firstname." ".$lastname,$texfiledump);
$texfiledump=str_replace($TAGS[ADDRESS], $address,$texfiledump);
$texfiledump=str_replace($TAGS[CITY], $city,$texfiledump);
$texfiledump=str_replace($TAGS[PHONE], $phone,$texfiledump);
$texfiledump=str_replace($TAGS[OFFICEPHONE], $officephone,$texfiledump);
$texfiledump=str_replace($TAGS[FAX], $fax,$texfiledump);
$texfiledump=str_replace($TAGS[ARRIVAL], $Tarrival,$texfiledump);
$texfiledump=str_replace($TAGS[LEAVING], $Tleaving,$texfiledump);

//-------------------------
$cpmtexfile=fopen("registro/$email/reg.tex", "w");
fputs($cpmtexfile,$texfiledump);
fclose($cpmtexfile);
//-------------------------
$currentdir=getcwd();

chdir("registro/$email");

exec("rm -f reg.pdf");

$command1="pdflatex reg.tex";
exec ($command1);
exec ("rm -f *.aux");
exec ("rm -f *.log");
chdir($currentdir);
//**************************************************
if (!(file_exists("registro/$email/reg.pdf"))){
	echo ("<p>Internal Error:<br> Can't Process Data</p>");
	echo ("<p>Please contact the <a href=\"mailto:webmaster@fismat.umich.mx\">webmaster</a><p>");
	die  ("Impossible to create PDF!!");
	}
print "<table align=center width=80%>";
echo "<tr><td><p class=\"titulo\">Thank you!</p>";
echo "<tr><td><P> We generated a PDF form with your data";
echo "<tr><td><p><B>Now you must print and send via fax: This document </B> <BR>";
echo "<tr><td><img src=\"ima/rightarrow.gif\">"; 
echo "<a href=\"";
echo "registro/$email/reg.pdf\">";
echo "AdHocNow! Registration Form.pdf</a></p>";
echo "<tr><td><b>Fill in the printed form with your credit card number <br>";
echo "The fax number is also in the printed form<br></b>";
echo "<p>Your record was</p>";
echo "<tr><td><blockquote>";

echo "<p>ID: $email</p>";
echo "Name (First/Last): $firstname $lastname <br>";
echo "Address: $address, $city<br>";
echo "Phone: $phone<br>";
echo "Phone(Office): $officephone<br>";
echo "Fax: $fax<br>";
echo "Arrival Date: May $arrival 2004<br>";
echo "Leaving Date: May $leaving 2004<br>";
echo "</blockquote>";
echo "<br>";
print "</table>";
//-------------------------
?>


</html>
