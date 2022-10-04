var permHistory = localStorage.getItem('permhistory');

function showHistory() {
    // creates history buttons

    var historyresults = document.createElement('button');
    historyresults.setAttribute("id", "historyResult " + searchInput.value);
    historyresults.textContent = localStorage.getItem('searchhistory');
    savedCities.append(historyresults);
    historyresults.addEventListener("click", searchAgain);
};

// History function that makes the local storage show up even after refreshing 
function oldHistory() {
    for (var i = 0; i < historyArray.length; i++) {
        var oldhistoryresults = document.createElement('button');
        oldhistoryresults.setAttribute("id", "oldhistoryResult " + searchInput.value);
        oldhistoryresults.textContent = historyArray[i];
        savedCities.append(oldhistoryresults);
        oldhistoryresults.addEventListener("click", searchAgain);
    };
};