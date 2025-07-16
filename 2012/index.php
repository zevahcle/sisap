<?php 

 function IncludeFile($file) {	  
	if ($file != "") require $file.".php";
	else
	{
	  if (isset($_GET["src"]))
	  {
	     $FileName = $_GET["src"].".php";
	     if (file_exists($FileName)) require $FileName;
	     else echo "To be announced...";
	  }
          else require "About.php"; 
	}
  }

?>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en">
<head>
<link rel="stylesheet" type="text/css" href="stylesIE.css" />
<title>SISAP 2012</title>
</head>
<body>

    <table align="center" border="0" cellpadding="0" cellspacing="0" style="height: 620px; margin-top:-8px; background-color : #f1f1f1" width="1024">
        <tr>
            <td style="background-image: url(banner2012.jpg); height: 200px">
            </td>
        </tr>
        <tr>
            <td>
                <table border="0" cellpadding="20px" cellspacing="0px" style="width: 100%; height: 500px;">
                    <tr>
                        <td valign="top" style="width: 200px; background-color : #e1e1f1; background-repeat: no-repeat;">		   			  <?php IncludeFile("Left")  ?>
                        </td>
                        <td valign="top">
   			  <?php IncludeFile("")  ?>                            
                        </td>
                    </tr>
                </table>
            </td>
        </tr>
        <tr>
            <td>
            </td>
        </tr>
    </table>
</body>
</html>