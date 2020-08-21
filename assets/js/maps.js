"use strict";

var map;
var center;
var location;

//The following is from Google API Docs
function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: {
      lat: 51.8994,
      lng: -2.0783
    },
    zoom: 13
    
  }); 
}


//----------------------------------------------------------------------Test 1
//Taken from: https://chromatichq.com/blog/implementing-google-places-autocomplete-es6-part-one

document.addEventListener('DOMContentLoaded', function() {

const autocompleteFormField = document.getElementById(`street-
address-field`);

const autocomplete = new google.maps.places.Autocomplete((autocompleteFormField), {
  types: [`address`],
  /*componentRestrictions: [`GB`],*/

});
/*
google.maps.event.clearInstanceListeners(autocompleteFormField);
google.maps.event.addListener(autocomplete, ‘place_changed’, function() => {
  const place = autocomplete.getPlace();
}*/

//----------------------------------------------------------------------Test 2
//The following is from https://gist.github.com/code-nation/eaf1fc1687949727f5f5
//At first try it doesn't work but revisit when I know more

  /* Create address autocomplete */
  /*
  var autocompleteOptions = {
    types: ['address'],
    // restrict to only Aussie addresses - change 'au' to any other 2-letter country code as you please
    componentRestrictions: {country: 'uk'}
  };
  function initAutocomplete() {
    // Change the ID on the line below as required
    var input = document.getElementById('starting-point');
    autocomplete = new google.maps.places.Autocomplete(input, autocompleteOptions);
    // Uncomment the line below if you wish to call the fillInAddress example function on user selection
    autocomplete.addListener('place_changed', fillInAddress);
  }
//1. End of test */



  google.maps.event.addDomListener(window, 'load', initAutocomplete);

});



//The following code is taken from: https://www.youtube.com/watch?v=zVU_MQyKFGg
 /*function initialize() {
     var center = new google.maps.LatLng(51.8994, -2.0783);
     map = new google.maps.Map(document.getElementById('map'), {
         center: center,
         zoom: 13
     });

var request = {
    location: center,
    radius: 16000,
    types: ['hotel']
};

var service = new google.maps.places.PlacesService(map);

service.nearbySearch(request, callback);
}

function callback(results, status) {
    if(status == goggle.maps.places.PlacesServiceStatus.OK){
        for (var i = 0; i < results.length; i++){
            createMarker(results[i]);
        }
    }
}

function createMarker(place) {
    var startingPoint = place.geometry.location;
    var marker = new google.maps.Marker({
        map: map,
        position: place.geometry.location
    });
} 

google.maps.event.addDomListener(window, 'load', initialize);*/


//write function that pulls the input from the input box and sets it as the variable startingPoint, replacing the value for location in the function above with the starting point
//Also right a function that pulls the 'distance from' and sets it as the radius in the above.
//Pull the input from the buttons and set it as the types in the above
