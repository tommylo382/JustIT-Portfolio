
// page load
function onLoad() {
    showSkills();
    showProjectWeeks();
}

// show skills function
async function showSkills() {
    url = "http://127.0.0.1:5000/api?function=show-skills";

    try {
        // call database api
        const response = await fetch(url);
        const data = await response.json();
        const div = document.createElement("div");

        element = document.getElementById("skills");
        element.appendChild(div);
        
        // prase data get from api to object
        for(object of data) {
            const img = document.createElement("img");

            object = JSON.parse(object.replace(/'/g, "\""));

            img.src = `../media/image/${object.img_name}`;
            img.title = `${object.skill_name}`;
            img.alt = `${object.skill_name}`;

            div.appendChild(img);
        }
    }
    catch (error) {
        alert(error);
    }
}

// show project weeks function
async function showProjectWeeks() {
    url = "http://127.0.0.1:5000/api?function=show-project-weeks";

    try {
        // call database api
        const response = await fetch(url);
        const data = await response.json();
        const div = document.createElement("div");

        element = document.getElementById("projects");
        div.className = "project-links";
        element.appendChild(div);
        
        // prase data get from api to object
        for(object of data) {
            const a = document.createElement("a");
            const span = document.createElement("span");
            const node = document.createTextNode("");

            object = JSON.parse(object.replace(/'/g, "\""));

            a.href = `projects.html?week=${object.week}&title=${object.title}`;
            node.nodeValue = `${String(object.week).charAt(0).toUpperCase() + String(object.week).slice(1)}: ${object.title}`;

            span.appendChild(node);
            a.appendChild(span);
            div.appendChild(a);
        }
    }
    catch (error) {
        alert(error);
    }
}

// submit contact form
async function contactForm(event) {
    event.preventDefault();

    url = "http://127.0.0.1:5000/api?function=add-message";
    
    // get values from form
    for(let element of event.srcElement) {
        console.log(element);
        if(element.type != "submit" && element.type != "reset") {
            console.log(element.type);
            url += `&${element.name}=${element.value}`
        }
    }

    try {
        // call database api
        const response = await fetch(url);
        const data = await response.json();

        alert(data.message);
    }
    catch (error) {
        alert(error);
    }

    location.replace(`${window.location.pathname}#contact`);
}