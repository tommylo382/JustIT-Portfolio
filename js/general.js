// open and close mobile menu
function menu() {
    var element = document.getElementsByTagName("nav")[0];

    if (element.style.display != "flex") {
        element.style.display = "flex";
        element = document.getElementById("nav-side");
        element.style.display = "block";
    } else {
        element.style.display = "none";
        element = document.getElementById("nav-side");
        element.style.display = "none";
    }
}

// nav bar
function nav(url, event) {
    if (!window.location.href.includes("index")) {
        event.preventDefault();
        window.location.assign(`index.html#${url}`);
    }
}