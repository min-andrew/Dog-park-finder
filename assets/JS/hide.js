var hider = document.querySelector("#hider")

function hide() {
    // 1. hides card-container div 
    // 2. displays saved-cities div 
    // 3. changes button value to history 
    // 4. changes button description to show search results 
    if (hider.value === "results") {
        cardContainer.style.display = "none";
        savedCities.style.display = "flex";
        hider.setAttribute("value", "history");
        hider.innerHTML = "Show Search Results";
    } else {
        cardContainer.style.display = "block";
        savedCities.style.display = "none";
        hider.setAttribute("value", "results");
        hider.innerHTML = "Show Search History";
    }
}

hider.addEventListener("click", hide)