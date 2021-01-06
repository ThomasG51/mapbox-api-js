//////////////////
//				//
//    Slider    //
//				//
//////////////////

let sliderPosition = 0;

let play = setInterval(mySlider.rightMove, 5000);

$('#sliderPause').on('click', function(){
	clearInterval(play);
	$('#sliderPause').css({'display': 'none'}); 
	$('#sliderPlay').css({'display': 'inline-block'}); 
});

$('#sliderPlay').on('click', function(){
	play = setInterval(mySlider.rightMove, 5000);
	$('#sliderPlay').css({'display': 'none'}); 
	$('#sliderPause').css({'display': 'inline-block'}); 
});

$('#rightArrow').on('click', function(){
	mySlider.rightMove();
});

$('#leftArrow').on('click', function(){
	mySlider.leftMove();
});

$(document).on('keydown', function (userKey) {
    if (userKey.keyCode === 37) { // Si la fleche gauche est enfoncée
    	mySlider.leftMove();
   	}else if (userKey.keyCode === 39) { // Si la fleche droite est enfoncée
   		mySlider.rightMove();
   	};
});


///////////////
//			 //
//    Map    //
//			 //
///////////////

let map = myMap.displayMap();

myMap.displayMarker(map);


//////////////////
//			    //
//    Canvas    //
//		    	//
//////////////////

$('#formButton').on('click', function(event){

	event.preventDefault();
	
	let nomVisiteur = $('#nomVisiteur').val();
	let prenomVisiteur = $('#prenomVisiteur').val();

	if (nomVisiteur != "" && prenomVisiteur != "") {
		$('#resaForm').delay(0).fadeOut(600);
		$('#resaCanvas').delay(600).fadeIn(1200);
	} else {	
		if (nomVisiteur == "") {
			$('#nomVisiteur').focus();
			$('#nomVisiteur').attr( "placeholder", "Veuillez renseigner ce champ !" );
		}else {
			$('#prenomVisiteur').focus();
			$('#prenomVisiteur').attr( "placeholder", "Veuillez renseigner ce champ !" );
		}		
	}
	
});

$('#canvasButton').on('click', function(){
	localStorage.setItem('prenomVisiteur', $('#prenomVisiteur').val());
	localStorage.setItem('nomVisiteur', $('#nomVisiteur').val());
	sessionStorage.setItem('nomStation', $('#nom').val());

	sessionStorage.setItem('minutes', 20);
	sessionStorage.setItem('secondes', 0);
});


/////////////////
//			   //
//    Timer    //
//			   //
/////////////////

if (sessionStorage.getItem('minutes') != null) {

	$('#timer').css({'display': 'block'});
	
	let secondes = sessionStorage.getItem('secondes');
	$('#secondes').html(secondes);

	let minutes = sessionStorage.getItem('minutes');
	$('#minutes').html(minutes);

	var timerOn = setInterval(timer.decompte, 1000);
}

// Affichage des informations sur la reservation du vélo
$('#stationName').html(sessionStorage.getItem('nomStation'));
$('#firstName').html(localStorage.getItem('prenomVisiteur'));
$('#lastName').html(localStorage.getItem('nomVisiteur'));


