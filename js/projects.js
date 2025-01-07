// page load
function onLoad() {
    // get url parameters
    const query = window.location.search;
    const params = new URLSearchParams(query);

    let week = params.get("week");
    let title = params.get("title");

    // set title
    let element = document.getElementsByTagName("h1");
    element = document.getElementsByTagName("h1")[0].innerText = `${String(week).charAt(0).toUpperCase() + String(week).slice(1)}: ${title}`;

    showProjects(week);
}

// show projects function
async function showProjects(week) {
    url = `http://127.0.0.1:5000/api?function=show-projects&week=${week}`;
    let fileName = "";

    // set file name base on weeks
    switch(week) {
        case "week 1":
            fileName = "index.html";
            break;
        case "week 3":
            fileName = "script.js";
            break;
        case "week 5":
            fileName = "index.html";
            break;
        case "week 7":
            fileName = "setup.sql";
            break;
        case "week 9":
            fileName = "script.py";
            break;
        default:
            alert("Week not exist");
    }

    try {
        // call database api
        const response = await fetch(url);
        const data = await response.json();
        const div = document.createElement("div");

        element = document.getElementById("projects");
        div.className = "project-link";
        element.appendChild(div);
        
        // prase data get from api to object
        for(object of data) {
            const a = document.createElement("a");
            const span = document.createElement("span");
            const node = document.createTextNode("");

            div.className = "project-links";

            object = JSON.parse(object.replace(/'/g, "\""));

            a.href = `${week}/${object.day}/${fileName}`;
            a.target = "_blank";
            node.nodeValue = `${String(object.day).charAt(0).toUpperCase() + String(object.day).slice(1)}`;

            span.appendChild(node);
            a.appendChild(span);
            div.appendChild(a);
        }
    }
    catch (error) {
        alert(error);
    }
}