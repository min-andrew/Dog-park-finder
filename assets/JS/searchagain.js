//function to run search on the search results page
function searchAgain() {
    var x = this.innerHTML;
    city = x;
    // if there is no city specified the search will not run
    if (city === undefined) {
        city = searchInput.value;
    };
    //sends out new search result for locations on screen
    cityLoc();
};