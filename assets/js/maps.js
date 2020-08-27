"use strict";

/*var map;
var center;
var location;*/

function initAutocomplete() {
  const map = new google.maps.Map(document.getElementById("map"), {
    center: {
      lat: -33.8688,
      lng: 151.2195,
    },
    zoom: 13,
    mapTypeId: "roadmap",
  }); // Create the search box and link it to the UI element. This searches by keyword, I think I need to search by place type - but not sure yet.

  //create a function that sets the input to 'hotels' when the hotels button is pressed?

  //This worked, comment it out to try button option:
  
const input = document.getElementById("place-search");
  const searchBox = new google.maps.places.SearchBox(input);
  map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);
  

    //--------------------------------------------Show place function

  //See Replit for example

 /* function showPlace(place) {  

  const place = place;
  //const searchBox = new google.maps.places.SearchBox("hotels");
  map.controls[google.maps.ControlPosition.TOP_LEFT].push(place); 
    // Bias the SearchBox results towards current map's viewport.
 }
*/

  map.addListener("bounds_changed", () => {
    searchBox.setBounds(map.getBounds());
  });
  let markers = []; // Listen for the event fired when the user selects a prediction and retrieve
  // more details for that place.

  searchBox.addListener("places_changed", () => {
    const places = searchBox.getPlaces();

    if (places.length == 0) {
      return;
    } // Clear out the old markers.

    markers.forEach((marker) => {
      marker.setMap(null);
    });
    markers = []; // For each place, get the icon, name and location.

    const bounds = new google.maps.LatLngBounds();
    places.forEach((place) => {
      if (!place.geometry) {
        console.log("Returned place contains no geometry");
        return;
      }

      const icon = {
        url: place.icon,
        size: new google.maps.Size(71, 71),
        origin: new google.maps.Point(0, 0),
        anchor: new google.maps.Point(17, 34),
        scaledSize: new google.maps.Size(25, 25),
      }; // Create a marker for each place.

      markers.push(
        new google.maps.Marker({
          map,
          icon,
          title: place.name,
          position: place.geometry.location,
        })
      );

      if (place.geometry.viewport) {
        // Only geocodes have viewport.
        bounds.union(place.geometry.viewport);
      } else {
        bounds.extend(place.geometry.location);
      }
    });
    map.fitBounds(bounds);
  });
}

//--------------------------------------------The following is from Google API Docs
/*
function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: {
      lat: 51.8994,
      lng: -2.0783
    },
    zoom: 13
    
  }); 
}*/

//----------------------------------------------------------------------Test 1
//Taken from: https://chromatichq.com/blog/implementing-google-places-autocomplete-es6-part-one It does not seem to work
/*

document.addEventListener('DOMContentLoaded', function() {

const autocompleteFormField = document.getElementById(`start-here`);

const autocomplete = new google.maps.places.Autocomplete((autocompleteFormField), {
  types: [`address`],
  componentRestrictions: [`GB`],

});


google.maps.event.clearInstanceListeners(autocompleteFormField);
google.maps.event.addListener(autocomplete, ‘place_changed’, function() => {
  const place = autocomplete.getPlace();
}

});
*/

//------------------------------------------------Taken from Resume Project - attempt to get teh value from the starting point input box
/*
function fetchPlaceInformation(event){
   $("#starting-point").html("");
   var startingPoint = $("#starting-point").val();
}
*/

//--------------------------------------------Map with autocomplete box at the top from https://developers.google.com/maps/documentation/javascript/examples/places-searchbox

//----------------------------------------------------------------------Test 2
//The following is from https://gist.github.com/code-nation/eaf1fc1687949727f5f5
//At first try it doesn't work but revisit when I know more

/* Create address autocomplete */
/*
  var autocompleteOptions = {
    types: ['address'],
    // restrict to only Aussie addresses - change 'au' to any other 2-letter country code as you please
    componentRestrictions: {country: 'au'}
  };
  function initAutocomplete2() {
    // Change the ID on the line below as required
    var input2 = document.getElementById('start-here');
    autocomplete = new google.maps.places.Autocomplete(input2, autocompleteOptions);
    // Uncomment the line below if you wish to call the fillInAddress example function on user selection
    autocomplete.addListener('place_changed', fillInAddress);
  }

  google.maps.event.addDomListener(window, 'load', initAutocomplete2);*/

//2. End of test

//-----------------------------------------------------------------------Test 3
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

//----------------------------------------------------------------SWAPI test
//XHR taken from Code Institute video: https://www.youtube.com/watch?v=mq9buYAnJ74&feature=youtu.be error - request denied

/*
var xhr = new XMLHttpRequest();

xhr.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        document.getElementById("data").innerHTML = this.responseText; 
        }
};

xhr.open("GET", "https://ci-swapi.herokuapp.com/api/");

xhr.send();
*/
//----------------------------------------------------------------End SWAPI test

//write function that pulls the input from the input box and sets it as the variable startingPoint, replacing the value for location in the function above with the starting point
//Also right a function that pulls the 'distance from' and sets it as the radius in the above.
//Pull the input from the buttons and set it as the types in the above
