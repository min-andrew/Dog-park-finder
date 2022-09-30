function initMap() {
  let location = new Object();
  // navigator.geolocation.getCurrentPosition(function (pos) {
  //   location.lat = pos.coords.latitude;
  //   location.long = pos.coords.longitude;
  // });
  location.lat = newLat;
  location.long = newLong;
  map = new google.maps.Map(document.getElementById('map'), {
    center: {
      lat: location.lat,
      lng: location.long
    },
    zoom: 10
  });
  getResults(location);

}

function getResults(location) {
  let userLocation = new google.maps.LatLng(location.lat, location.long);
  let request = {
    location: userLocation,
    radius: '10000',
    type: ['park'],
    keyword: 'dog'
  };
  service = new google.maps.places.PlacesService(map);
  service.nearbySearch(request, callback);
}

function callback(results, status) {
  if (status == google.maps.places.PlacesServiceStatus.OK) {
    for (let i = 0; i < results.length; i++) {
      let place = results[i];
      console.log(results);
      let content = `<div>
          <h3>${place.name}</h3>
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
      resultcard.setAttribute("id", "card");
      resultsCards.append(resultcard);
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

  function groupInfoWindow(marker, map, infowindow, html) {
    marker.addListener('click', function () {
      infowindow.setContent(html);
      infowindow.open(map, this);
    })
  }
};



