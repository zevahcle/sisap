var backgrounds = [
		"bilderpool/hofgarten-02.jpg", 
		"bilderpool/hofgarten-arkaden-01.jpg", 
		"bilderpool/hofgarten-springbrunnen-01.jpg", 
		"bilderpool/karlsplatz-stachus-01.jpg", 
		"bilderpool/ludwigskirche-01.jpg", 
		"bilderpool/marienplatz-01.jpg", 
		"bilderpool/hofgarten-pavillon-01.jpg", 
		"bilderpool/marienplatz-02.jpg", 
		"bilderpool/muenchen-berge-01.jpg", 
		"bilderpool/olympiapanorama-01.jpg", 
		"bilderpool/statue-ludwig-01.jpg", 
		"bilderpool/theatinerkirche-01.jpg", 
		"bilderpool/eisbach-02.jpg", 
		"bilderpool/hofgarten-01.jpg",
		"bilderpool/frauenkirche-01.jpg" 
	];
	
var active = 0;

var lastbg = -1;

function nextbg(n) {
	var header = $('#bgimg');
	var random = lastbg;
	while(lastbg == random){
		random = Math.floor((Math.random() * (backgrounds.length)));
	}
	lastbg = random;
	
	var bg = backgrounds[random];		
	var image = new Image();
	image.src = bg;
	image.onload = function () {
		
		var cssBackground = 'url(' + image.src + ')';
		
		
		if(active == 0) {
			active = 1;
			$('#bgimg2').css('background-image', cssBackground);
			$('#bgimg2').css('z-index', 1);
			$('#bgimg1').css('z-index', 0);
			$('#bgimg2').fadeTo( n, 1 );
			$('#bgimg1').fadeTo( n, 0 );
		}
		else if(active == 1) {
			active = 2;
			$('#bgimg1').css('background-image', cssBackground);
			$('#bgimg1').css('z-index', 2);
			$('#bgimg1').fadeTo( n, 1 );
			$('#bgimg2').fadeTo( n, 0 );
			$('#bgimg2').css('z-index', 0);
			$('#bgimg1').css('z-index', 1);
		}
		else {
			active = 1;
			$('#bgimg2').css('background-image', cssBackground);
			$('#bgimg2').css('z-index', 2);
			$('#bgimg2').fadeTo( n, 1 );
			$('#bgimg1').fadeTo( n, 0 );
			$('#bgimg1').css('z-index', 0);
			$('#bgimg2').css('z-index', 1);
		}
		
		//header.css('background-image', cssBackground);
		
		//document.getElementById("header").style.backgroundImage = cssBackground;
		/*header.fadeTo(n,  0.0, "swing",function() {
			$(this).css('background-image', cssBackground);
		}).fadeTo(n, 1.0, "swing");
		*/
		
		//header.animate({background-image: cssBackground}, 2000, function() {});
	};
	
	
}

function bgchanger() {
		nextbg(0);
		
		function nextBackground() {
			nextbg(1000);
			setTimeout(nextBackground, 10000);
		}
		
		setTimeout(nextBackground, 10000);
		}