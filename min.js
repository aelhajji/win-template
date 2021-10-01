function showhidNav() {
    if (document.getElementById('nanigation').className != "show nanigation") {
        document.getElementById('nanigation').className = "show nanigation"
        document.getElementById('only-mobile').className = "fas fa-times"
    }
    else {
        document.getElementById('nanigation').className = "hide nanigation"
        document.getElementById('only-mobile').className = "fas fa-bars"

    }
}