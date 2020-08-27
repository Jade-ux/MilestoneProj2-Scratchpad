var autocompleteOptions = {
    types: ['address'],
    // restrict to only Aussie addresses - change 'au' to any other 2-letter country code as you please
    //componentRestrictions: {country: 'au'}
  };
  function initAutocomplete() {
    const startingPoint = document.getElementById("start-here");
    const searchBox = new google.maps.places.SearchBox(startingPoint);
   /* autocomplete = new google.maps.places.Autocomplete(input, autocompleteOptions);
    // Uncomment the line below if you wish to call the fillInAddress example function on user selection
    autocomplete.addListener('place_changed', fillInAddress);*/
      searchBox.addListener("places_changed", () => {
    const places = searchBox.getPlaces();

    if (places.length == 0) {
      return;}
  });
  }
