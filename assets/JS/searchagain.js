function searchAgain() {
    var x = this.innerHTML;
    city = x;
    if (city === undefined) {
        city = searchInput.value;
    };
    cityLoc();
};