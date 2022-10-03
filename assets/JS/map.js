
// This function runs when the 2nd HTML page loads. Loads Seattle as the home city and sets the markers and cards in place.
function initMap() {
  let location = new Object();
  location.lat = newLat;
  location.long = newLong;

  map = new google.maps.Map(document.getElementById('map'), {
    center: {
      lat: location.lat,
      lng: location.long
    },
    zoom: 13
  });
  getResults(location);
}

// Once it has the coordinates for the user's location, the search is initiated with Google using our parameters.
function getResults(location) {
  let userLocation = new google.maps.LatLng(location.lat, location.long);
  let request = {
    location: userLocation,
    radius: '16000',
    type: ['park'],
    keyword: 'dog'
  };
  service = new google.maps.places.PlacesService(map);
  service.nearbySearch(request, callback);
}

// Loops through the API results and adds markers and custom created infowindows to each park location. Then it creates custom cards for each location for the results bar.
function callback(results, status) {
  if (status == google.maps.places.PlacesServiceStatus.OK) {
    cardContainer.innerHTML = "";
    for (let i = 0; i < results.length; i++) {
      let place = results[i];
      console.log(results);
      let content = `<div>
          <h4>${place.name}</h4>
          <p>${place.vicinity}</p>
          <p>Rating: ${place.rating}
          </div>`;

      let placeName = place.name;
      let placeVicinity = place.vicinity;
      let placeRating = "Rating: " + place.rating;

      var resultcard = document.createElement("div");
      var name = document.createElement("h3");
      var vicinity = document.createElement("p");
      var rating = document.createElement("p");

      name.append(placeName);
      vicinity.append(placeVicinity);
      rating.append(placeRating);

      resultcard.setAttribute("class", "card");
      cardContainer.append(resultcard);
      resultcard.append(name);
      resultcard.append(vicinity);
      resultcard.append(rating);

      let marker = new google.maps.Marker({
        position: place.geometry.location,
        map: map,
        title: place.name,
      });

      let infowindow = new google.maps.InfoWindow({ content: content });

      groupInfoWindow(marker, map, infowindow, content);
      marker.setMap(map);
    }
  }

  // This function launches the infowindows to pop up when each marker is clicked.
  function groupInfoWindow(marker, map, infowindow, html) {
    marker.addListener('click', function () {
      infowindow.setContent(html);
      infowindow.open(map, this);
    })
  }
};



