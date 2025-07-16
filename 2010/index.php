<?php
function IncludeFile($file) {
	if ($file != "") require $file.".html";
	else {
		if (isset($_GET["src"])) {
			$FileName = $_GET["src"].".html";
			if (file_exists($FileName)) require $FileName;
			else echo "<p> To be announced... </p>";
		}
		else require "about.html";
	}
}
?>


<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="content-type" content="text/html; charset=iso-8859-1" />
<title>SISAP 2010</title>
<meta name="keywords" content="2010 SImilarity Search and APplication conference website" />
<meta name="description" content="SISAP 2010 website" />
<link href="styles.css" rel="stylesheet" type="text/css" media="screen" />
</head>
<body>
<div id="content">
<!-- header begins -->
<div id="header">
 <!--
 <div id="menu1">
  <div id="menu">
        <ul>
            <li><a href="#" title="">Home</a></li>
            <li><a href="#" title="">Blog</a></li>
            <li><a href="#" title="">Gallery</a></li>
            <li><a href="#" title="">Friends</a></li>
            <li><a href="#" title="">About</a></li>
            <li><a href="#" title="">Contact</a></li>
        </ul>
    </div>
 </div>
 -->
    <div id="logo">
<!--        <div align="right" hspace="20"><img src="images/droppedImage.png" alt="SISAP"/></div>-->
        <div id="image"><img src="images/droppedImage.png" alt="SISAP"/></div>
        <h1>3rd international conference</h1>
        <h1>on similarity search and applications</h1>
        <p><br />Istanbul, Turkey - September 18-19, 2010</p>
<!--     <h2><a href="http://www.metamorphozis.com/" id="metamorph">Design by Metamorphosis Design</a></h2>-->
    </div>
</div>
<!-- header ends -->
<!-- content begins -->
 <div id="main">
    <div id="right">
	<h2>3rd International Conference on SImilarity Search and APplications (SISAP 2010)</h2><br />
	<?php IncludeFile("")  ?>
    </div>
    <div id="left">
        <h3>General</h3>
        <ul>
            <li><a href="?src=about">About</a></li>
            <li><a href="?src=cfp">Call for papers</a></li>
            <li><a href="?src=dates">Important dates</a></li>
            <li><a href="?">News</a></li>
        </ul>
        <br />
        <h3>Submission</h3>
        <ul>
            <li><a href="?src=submit">Submission instructions</a></li>
            <li><a href="?src=invited">Invited speakers</a></li>
            <li><a href="?src=program">Conference program</a></li>
            <li><a href="?src=best">Best papers (<b>new!</b>)</a></li>
        </ul>
        <br />
        <h3>Participants</h3>
        <ul>
            <li><a href="?src=venue">Conference Venue</a></li>
            <li><a href="?src=hotels">Accommodation</a></li>
            <li><a href="?src=register">Registration</a></li>
            <li><a href="?src=social">Social Events</a></li>
            <li><a href="photos.php">Photos</a></li>
        </ul>
        <br />
        <h3>Organization</h3>
        <ul>
<!--            <li><a href="?src=contacts">Contacts</a></li>-->
            <li><a href="?src=org#PC">Program Committee</a></li>
            <li><a href="?src=org#local">Organizing Committee</a></li>
        </ul>
        <br />
        <h3>Links</h3>
        <ul>
            <li><a href="http://www.sisap.org">SISAP Home</a></li>
            <li><a href="http://www.sisap.org/Metric_Space_Library.html">Metric Space Library</a></li>
        </ul>
        <br />
<!--    <h3>Calendar</h3>
        <ul>
            <li id="calendar">          
            <div id="calendar1">
                <table id="calendar2" summary="Calendar">
                    <caption>
                    January 2008
                    </caption>
                    <thead>
                        <tr>
                            <th abbr="Monday" scope="col" title="Monday">M</th>
                            <th abbr="Tuesday" scope="col" title="Tuesday">T</th>
                            <th abbr="Wednesday" scope="col" title="Wednesday">W</th>
                            <th abbr="Thursday" scope="col" title="Thursday">T</th>
                            <th abbr="Friday" scope="col" title="Friday">F</th>
                            <th abbr="Saturday" scope="col" title="Saturday">S</th>
                            <th abbr="Sunday" scope="col" title="Sunday">S</th>
                        </tr>
                    </thead>
                    <tfoot>
                        <tr>
                            <td abbr="Des" colspan="3" id="prev"><a href="#">&laquo; Des</a></td>
                            <td class="pad">&nbsp;</td>
                            <td abbr="Feb" colspan="3" id="next" class="pad"><a href="#">Feb &raquo;</a></td>
                        </tr>
                    </tfoot>
                    <tbody>
                        <tr>
                            <td colspan="2" class="pad">&nbsp;</td>
                            <td>1</td>
                            <td>2</td>
                            <td>3</td>
                            <td>4</td>
                            <td>5</td>
                        </tr>
                        <tr>
                            <td>6</td>
                            <td>7</td>
                            <td>8</td>
                            <td>9</td>
                            <td>10</td>
                            <td>11</td>
                            <td>12</td>
                        </tr>
                        <tr>
                            <td>13</td>
                            <td>14</td>
                            <td>15</td>
                            <td>16</td>
                            <td>17</td>
                            <td>18</td>
                            <td>19</td>
                        </tr>
                        <tr>
                            <td>20</td>
                            <td id="now">21</td>
                            <td>22</td>
                            <td>23</td>
                            <td>24</td>
                            <td>25</td>
                            <td>26</td>
                        </tr>
                        <tr>
                            <td>27</td>
                            <td>28</td>
                            <td>29</td>
                            <td>30</td>
                            <td>31</td>
                            <td class="pad" colspan="2">&nbsp;</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </li>
        </ul>
-->
    </div>
    

<!--content ends -->
<!--
            //
            //  From Metamorphosis Design team:
            //
        
            We request you retain the full copyright notice below including the link to www.metamorphozis.com.
            This not only gives respect to the large amount of time given freely by the developers
            but also helps build interest, traffic and use of our free and paid designs. If you cannot (for good
            reason) retain the full copyright we request you at least leave in place the
            Website Templates line, with Website Templates  linked to www.metamorphozis.com. If you refuse
            to include even this then support may be affected.
        
            You are allowed to use this design only if you agree to the following conditions:
            - You cannot remove copyright notice from this design without our permission.
            - You cannot use images from this design anywhere else without permission.
            - If you modify this design it still should contain copyright because it is based on our work.
        
            For support visit http://www.metamorphozis.com/contact/index_contact2.php
        
            The Metamorphosis Design : 2007
        
        // -->
<!--footer begins -->
    </div>

<div id="footer">
<p>Copyright &copy; 2008. Designed by <a href="http://www.metamorphozis.com/" title="Free Website Templates">Free Website Templates</a></p>
<!--<p><a href="#">Privacy Policy</a> | <a href="#">Terms of Use</a> | <a href="http://validator.w3.org/check/referer" title="This page validates as XHTML 1.0 Transitional"><abbr title="eXtensible HyperText Markup Language">XHTML</abbr></a> | <a href="http://jigsaw.w3.org/css-validator/check/referer" title="This page validates as CSS"><abbr title="Cascading Style Sheets">CSS</abbr></a></p>-->
    </div>
</div>
<!-- footer ends-->
</body>
</html>
