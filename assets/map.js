// function initMap() {
//     let options= {
//         zoom: 8,
//         center: {lat: 47.6062,lng: -122.3321}
//     }
//     let map = new
//     google.maps.Map(document.getElementById("map",options));
// }

var map;
var service;
var infowindow;

var seattle = {
  lat: 47.6062,
  lng: -122.3321
};

var options = {
  zoom: 8,
  center: seattle
}

function initMap() {

  var map = new google.maps.Map(document.querySelector("#map"), options);

  var request = {
    location: seattle,
    radius: '500',
    type: ['dog park']
  };

  service = new google.maps.places.PlacesService(map);
  service.nearbySearch(request, callback);
}

function callback(results, status) {
  if (status == google.maps.places.PlacesServiceStatus.OK) {
    for (var i = 0; i < results.length; i++) {
      createMarker(results[i]);
    }
  }
}



