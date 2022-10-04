// search function includes variables to connect to the Form, event listener, and returning data 
var searchForm = document.querySelector("#search-form");
var searchInput = document.querySelector("#search-input");
var submitbtn = document.querySelector("#submitbtn");
var city = "";

var resultsCards = document.querySelector("#results-cards");
var cardContainer = document.querySelector("#card-container");
var savedCities = document.querySelector("#saved-cities");

if (!permHistory) {
    var historyArray = [];
} else {
    historyArray = JSON.parse(localStorage.getItem('permhistory'));
};

var pastResultsArray;

function search(event) {
    event.preventDefault();

    // makes sure something is inputed into the search 
    if (searchInput.value === "") {
        console.error('You need a search input value!');
        return;
    }
    var comparison = historyArray.includes(searchInput.value);

    // if statement prevents repeats in the history section 
    if (comparison === false) {

        // saves the search result in local storage 
        localStorage.setItem('searchhistory', searchInput.value);
        var history = localStorage.getItem('searchhistory');
        historyArray.push(history);
        console.log(history);
        showHistory();

        // keeps the search history to 10 
        if (historyArray.length === 10) {
            historyArray.shift();
            if (searchHistory.firstElementChild.innerHTML = history) {
                searchHistory.firstElementChild.remove();
            }
        };

        localStorage.setItem('permhistory', JSON.stringify(historyArray));

        // saves the search input as the new city 
        city = searchInput.value;

        // runs this function to find the long and lat
        cityLoc();
    } else if (comparison === true) {
        // if in the array for current search results, simply searches without logging it into the array and creating duplicate search history 
        searchAgain();
    };
};
oldHistory();

// event listener for search button 
submitbtn.addEventListener("click", search);