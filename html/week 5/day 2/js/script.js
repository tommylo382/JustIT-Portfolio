function onLoad() {
    // Select buttons by ID
    const changeBgButton = document.getElementById("change-bg");
    const changeTextButton = document.getElementById("change-text");
    const changeColorButton = document.getElementById("change-color");

    // Function to change the background color
    function changeBackgroundColor() {
        document.body.style.backgroundColor = "lightblue";
    }

    // Function to add new text to the page
    function addText() {
        const newText = document.createElement("p");
        newText.innerText = "This is new text added to the page!";
        document.body.appendChild(newText);
    }

    // Function to change the text color
    function changeTextColor() {
        document.body.style.color = "green";
    }

    // Add event listeners to buttons
    changeBgButton.addEventListener("click", changeBackgroundColor);
    changeTextButton.addEventListener("click", addText);
    changeColorButton.addEventListener("click", changeTextColor); 

    // Select the random background button
    const randomBgButton = document.getElementById("randomBgButton");
    
    // Function to set a random background color
    function setRandomBackgroundColor() {
        document.body.style.backgroundColor = `rgb(${Math.floor(Math.random()*256)}, ${Math.floor(Math.random()*256)}, ${Math.floor(Math.random()*256)})`;
    }
    
    // Attach event listener to the button
    randomBgButton.addEventListener("click", setRandomBackgroundColor);

    // Select the color picker input
    const textColorPicker = document.getElementById("textColorPicker");
    
    // Function to change text color based on picker value
    function changeTextColorPicker() {
        document.body.style.color = textColorPicker.value;
    }
    
    // Attach event listener to the input
    textColorPicker.addEventListener("input", changeTextColorPicker);

    // Select the toggle button and paragraph
    const toggleTextButton = document.getElementById("toggleTextButton");
    const textParagraph = document.getElementById("text");     
    
    // Function to toggle visibility of the paragraph
    function toggleTextVisibility() {
        textParagraph.style.display = textParagraph.style.display == "none" ? "block" : "none";
    }
    
    // Attach event listener to the button
    toggleTextButton.addEventListener("click", toggleTextVisibility);

    // Select font size buttons
    const increaseFontButton = document.getElementById("increaseFontButton");
    const decreaseFontButton = document.getElementById("decreaseFontButton");
    
    // Function to increase font size
    function increaseFontSize() {
        document.body.style.fontSize = `${parseInt(window.getComputedStyle(document.body).getPropertyValue("font-size")) + 1}px`;
    }
    
    // Function to decrease font size
    function decreaseFontSize() {
        document.body.style.fontSize = `${parseInt(window.getComputedStyle(document.body).getPropertyValue("font-size")) - 1}px`;
    }
    
    // Attach event listeners to the buttons
    increaseFontButton.addEventListener("click", increaseFontSize);
    decreaseFontButton.addEventListener("click", decreaseFontSize);

    // Select the reset button
    const resetButton = document.getElementById("resetButton");
    
    // Function to reset all styles to their original values
    function resetStyles() {
        document.body.style = "";
        textParagraph.style = "";
    }
    
    // Attach event listener to the button
    resetButton.addEventListener("click", resetStyles);

    // Select the element by its ID
    const interactiveDiv = document.getElementById("interactiveDiv");

    // Add a mouseover event listener
    function handleMouseOver() {
        // Change the background color to light green when the mouse is over the element
        interactiveDiv.style.backgroundColor = "lightgreen";
    }

    // Attach the event listener to the element
    interactiveDiv.addEventListener("mouseover", handleMouseOver);

    // Add a mouseout event listener
    function handleMouseOut() {
        interactiveDiv.style.backgroundColor = "lightgray";
    }
    
    interactiveDiv.addEventListener("mouseout", handleMouseOut);

    // Select the parent container
    const buttonContainer = document.getElementById("button-container");

    // Add a click event listener to the container

    buttonContainer.addEventListener("click", function(event) {
        // Check if the clicked element is a button with the class 'delegated-button'
        if (event.target.matches(".delegated-button")) {
            alert("Button clicked: " + event.target.textContent);
        }
    });
}