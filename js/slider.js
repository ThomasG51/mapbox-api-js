const mySlider = {
	
	rightMove: function(){
		if (sliderPosition === 3600) {
			sliderPosition = 0;

			$('.sliderElt').css({
				'right': sliderPosition + 'px'
			});	
		}else{
			sliderPosition += 1200;

			$('.sliderElt').css({
				'right': sliderPosition + 'px'
			});	
		};	
	},

	leftMove: function(){
		if (sliderPosition === 0) {
			sliderPosition = 3600;

			$('.sliderElt').css({
				'right': sliderPosition + 'px'
			});	
		}else{
			sliderPosition -= 1200;

			$('.sliderElt').css({
				'right': sliderPosition + 'px'
			});	
		};
	}
};