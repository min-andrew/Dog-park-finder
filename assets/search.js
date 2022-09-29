// search function includes variables to connect to the Form, event listener, and returning data 
var searchForm = document.querySelector("#search-form");
var searchInput = document.querySelector("#search-input");
var submitbtn = document.querySelector("#submitbtn");

function search(event) {
    event.preventDefault();

    if (searchResult.value === "") {
        console.error('You need a search input value!');
        return;
    }

    var searchResult = searchInput.value;
    return searchResult;
};

submitbtn.addEventListener("click", search);