<?php
$links = array(
array("About", "About", "cfp"),
array("CFP", "Call for papers", "cfp"),
array("Dates", "Important dates", "cfp"),
array("Organization", "Organization", "cfp"),
array("Venue", "Conference venue & travel info", "cfp"),
array("Support", "Financial support", "cfp"),
array("-"),
array("Sub", "Submission instructions", "cfp"),
array("Invited", "Invited speakers ", "cfp"),
array("Program", "Conference program", "cfp"),
array("Best", "Best papers", "cfp"),
array("-"),
array("Registration", "Registration", "cfp"),
array("Accommodation", "Accommodation ", "cfp"),
array("Social", "Social Events ", "cfp"),
array("Photo", "Photos", "cfp"),
array("-"),
array("http://sisap.org/Metric_Space_Library.html", "Metric spaces library", "lib"),
array("http://sisap.org", "SISAP home", "lib"));

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