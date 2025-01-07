let element = null;
let url = ""

// page load
function onLoad() {
    // check if user logged in
    if(document.cookie != "") {
        element = document.getElementsByClassName("nav-item")[0];
        element.style.display = "flex";

        element = document.getElementById("messages");
        element.style.display = "block";

        element = document.getElementById("login");
        element.style.display = "none";

        showMessages();
    }
}

// log in function
async function logIn(event) {
    event.preventDefault();

    url = "http://127.0.0.1:5000/api?function=login";
    
    // get values from form
    for(let element of event.srcElement) {
        if(element.type != "submit") {
            url += `&${element.name}=${element.value}`
        }
    }

    try {
        // call database api
        const response = await fetch(url);
        const data = await response.json();
        
        if(data.message == "correct") {
            document.cookie = `username=${event.srcElement["username"].value};`
        } else {
            alert(data.message);
        }
    }
    catch (error) {
        alert(error);
    }
    
    location.reload();
}

// log out function
function logOut() {
    document.cookie = `username=;Max-Age=0`

    location.reload();
}

// show messages function
async function showMessages() {
    url = "http://127.0.0.1:5000/api?function=show-messages";

    try {
        // call database api
        const response = await fetch(url);
        const data = await response.json();

        element = document.getElementById("messages");
        
        // prase data get from api to object
        for(object of data) {
            const div = document.createElement("div");
            div.className = "user-message";

            object = JSON.parse(object.replace(/'/g, "\""));

            // turn values of the object into DOM element and append to the HTML
            for (const [key, value] of Object.entries(object)) {
                const p = document.createElement("p");
                const node = document.createTextNode("");

                node.nodeValue = `${key}: ${value}`;
                p.appendChild(node);
                div.appendChild(p);
            }

            element.appendChild(div);
        }
    }
    catch (error) {
        alert(error);
    }
}