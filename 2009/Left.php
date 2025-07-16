<?php
$links = array(
array("About", "About", "cfp"),
array("CFP", "Call for papers", "cfp"),
array("Dates", "Important dates", "cfp"),
array("Organization", "Organization", "cfp"),
array("Venue", "Conference venue", "cfp"),
array("-"),
array("Sub", "Submission instructions", "prg"),
array("Invited", "Invited speakers ", "prg"),
array("Program", "Conference program ", "prg"),
array("Best", "Best papers <b>(new!)</b>", "prg"),
array("-"),
array("Registration", "Registration ", "prg"),
array("Accomodation", "Accommodation ", "prg"),
array("Social", "Social Events ", "prg"),
array("http://sisap.org/2009/photo/index.html", "<b> Photos (new!) </b>", "prg"),
array("-"),
array("http://sisap.org/Metric_Space_Library.html", "Metric spaces library", "lib"),
array("-"),
array("Links", "Links", "lnk"),
array("http://sisap.org", "SISAP home", "lnk"));

foreach ($links as $l)
{
  if ($l[2] == "inactive")
	echo "<div class=\"".$l[2]."\">".$l[1]."</div>";
  elseif (substr($l[0],0,7) == "http://") 
	echo "<div class=\"".$l[2]."\"><a href=\"".$l[0]."\">".$l[1]."</a></div>";
  elseif (substr($l[0],0,1) == "-") 
	echo "<br/>";
  else 
	echo "<div class=\"".$l[2]."\"><a href=\"index.php?src=".$l[0]."\">".$l[1]."</a></div>";
}
?>