const myMap = {
	
	displayMap: function() {
		
		mapboxgl.accessToken = 'API_KEY';
		let map = new mapboxgl.Map({
			container: 'map',
			center: [137.213889, 36.704944], 
			zoom: 13, 
			minZoom: 12, 
			maxZoom: 16, 
			style: 'mapbox://styles/mapbox/streets-v11'
		});
		return map;
	},

	displayMarker: function(map){

		ajaxGet("API_KEY", function(stations){
			
			let objStation = JSON.parse(stations);
			
			let globalStations = [];

			objStation.forEach(function(oneStation){

				let markerElt = document.createElement('div');

				if (oneStation.available_bikes < 3) {
					markerElt.className = 'marker marker_bw';
				} else {
					markerElt.className = 'marker marker_color';
				}

				markerElt.id = oneStation.number; 
				
				// On ajoute le marqueur sur la map selon la longitude et la latitude
				new mapboxgl.Marker(markerElt).setLngLat([oneStation.position.lng, oneStation.position.lat]).addTo(map);

				let stationDetail = [oneStation.number, oneStation.address, oneStation.status, oneStation.available_bikes, oneStation.available_bike_stands, oneStation.name]; 
				
				// on stock le tableau stationDetail dans le tableau multi-dimensionnel
				globalStations.push(stationDetail);
			});

			$('.marker').on('click', function(){

				$('#resaForm').delay(400).fadeIn(1200);

				$('#map').css({
					'width': '50%',
					'transition-property': 'width',
					'transition-duration': '1s'
				});

				let stationID = $(this).attr('id'); 

				// On parcour le tableau pour trouver le bon ID
				for (let i =  0; i < globalStations.length; i++){
					// Si l'id du marqueur cliqué est égal au numéro de la station
					if (stationID == globalStations[i][0]) {
						$('#adresse').html(globalStations[i][1]);
						$('#status').html(globalStations[i][2]);
						$('#bikes').html(globalStations[i][3]);
						$('#stands').html(globalStations[i][4]);
						$('#nom').val(globalStations[i][5]);
					}
				}

				let checkName = localStorage.getItem('prenomVisiteur');
				if (checkName != null) {
					$('#nomVisiteur').val(localStorage.getItem('nomVisiteur'));
					$('#prenomVisiteur').val(localStorage.getItem('prenomVisiteur'));
				}
			});
		}); 
	}
};
