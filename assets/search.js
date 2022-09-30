// search function includes variables to connect to the Form, event listener, and returning data 
var searchForm = document.querySelector("#search-form");
var searchInput = document.querySelector("#search-input");
var submitbtn = document.querySelector("#submitbtn");

function search(event) {
    event.preventDefault();

    if (searchInput.value === "") {
        console.error('You need a search input value!');
        return;
    }

    var searchResult = searchInput.value;
    return searchResult;
};

submitbtn.addEventListener("click", search);


// Code sample for using an inputed city to pull the lon/lat from this api//
// fetch("https://api.geoapify.com/v1/geocode/autocomplete?text=Trenton&format=json&apiKey=f05b36b362604ffcbb3871392e2bf6b9")
//   .then(response => response.json())
//   .then(result => console.log(result))
//   .catch(error => console.log('error', error));
