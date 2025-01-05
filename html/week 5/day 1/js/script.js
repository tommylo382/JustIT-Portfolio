function onLoad() {
    document.getElementById("header").innerText = "DOM Manipulation in Action!";

    document.getElementById("changeButton").addEventListener("click", function() {
        document.getElementById("description").innerText = document.querySelector("input").value;
    });

    // Select elements
    const header2 = document.getElementById("header2");
    const description2 = document.getElementById("description2");
    const changeTextBtn = document.getElementById("changeTextBtn");
    const changeColorBtn = document.getElementById("changeColorBtn");
    const hideTextBtn = document.getElementById("hideTextBtn");
    const changeFontSizeBtn = document.getElementById("changeFontSizeBtn");
    
    // Change text content
    changeTextBtn.addEventListener("click", () => {
        description2.innerText = document.getElementById("changeText").value;
    });
    
    // Change color of header
    changeColorBtn.addEventListener("click", () => {
        header2.style.color = header2.style.color === "blue" ? "black" : "blue";
    });
    
    // Hide the description
    hideTextBtn.addEventListener("click", () => {
        description2.style.display = description2.style.display === "none" ? "block" : "none";
    });
    
    // Change font size
    changeFontSizeBtn.addEventListener("click", () => {
        header2.style.fontSize = header2.style.fontSize === "1em" ? "2em" : "1em";
    });

    // Adding a new element
    let p = document.createElement("p");
    p.appendChild(document.createTextNode("Append"));
    document.body.appendChild(p);

    // Select elements
    const header3 = document.getElementById("header3");
    const clickButton = document.getElementById("clickButton");
    const removeListenerButton = document.getElementById("removeListenerButton");
    
    // Function to handle click event
    function handleClick(event) {
        header3.innerText = "Button Clicked!";
        console.log("Event type:", event.type);
        console.log("Event target:", event.target);
    }
    
    // Function to handle double click event
    function handleDoubleClick(event) {
        header3.innerText = "Button Double Clicked!";
        console.log("Event type:", event.type);
        console.log("Event target:", event.target);
    }
    
    // Add event listener to button
    clickButton.addEventListener("click", handleClick);
    clickButton.addEventListener("dblclick", handleDoubleClick);
    
    // Remove event listener
    removeListenerButton.addEventListener("click", () => {
        clickButton.removeEventListener("click", handleClick);
        header3.innerText = "Event listener removed!";
    });
    
    // Function to handle mouse over event
    function handleMouseOver(event) {
        header3.innerText = "Mouse Over!";
        console.log("Event type:", event.type);
        console.log("Event target:", event.target);
        console.log("Event x position:", event.clientX);
        console.log("Event y position:", event.clientY);
    }
    
    // Function to handle mouse out event
    function handleMouseOut(event) {
        header3.innerText = "Mouse Out!";
        console.log("Event type:", event.type);
        console.log("Event target:", event.target);
        console.log("Event x position:", event.clientX);
        console.log("Event y position:", event.clientY);
    }
    
    // Add event listener to header3
    header3.addEventListener("mouseover", handleMouseOver);
    header3.addEventListener("mouseout", handleMouseOut);
}