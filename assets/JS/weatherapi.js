var APIKey = "039a6b45ccd3001c8a73a24f6fa09a96";
var newLat = 47.6062;
var newLong = -122.3321;


function cityLoc() {
    
    var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=imperial&appid=" + APIKey;
    fetch(queryURL)
        .then(function (response) {
            if (response.status === 404) {
                alert("This is not a city!");
                return;
            } else {
                return response.json();
            };
        })
        .then(function (data) {
            if (data === undefined) {
                return;
            } else {
                console.log(data.coord);
                newLat = data.coord.lat;
                newLong = data.coord.lon;
            };
            initMap();
        });
};