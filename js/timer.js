const timer = {
	
	decompte: function() {

		let domMinutes = $('#minutes');
		let domSecondes = $('#secondes');

		let numMinutes = Number(sessionStorage.getItem('minutes'));
		let numSecondes = Number(sessionStorage.getItem('secondes'));

		if (numMinutes == 0 && numSecondes == 0){			
			clearInterval(timerOn);
			sessionStorage.clear()	
		}else{			
			numSecondes--;
			sessionStorage.setItem('secondes', numSecondes);
			domSecondes.html(numSecondes);
			
			if (numSecondes < 0){			
				numMinutes--;
				sessionStorage.setItem('minutes', numMinutes);
				domMinutes.html(numMinutes);

				numSecondes = 59;
				sessionStorage.setItem('secondes', numSecondes);
				domSecondes.html(numSecondes);
			}
		}
	}
};