setTimeout(() => console.log("This message appears after 3 seconds"), 3000);

for(let i = 3; i > 0; i--) {
    setTimeout(() => console.log(i), (3 - i) * 1000);
}

function onLoad() {
    document.getElementById("myButton").addEventListener("click", () => alert("Button clicked"));
    
    // Select button and paragraph elements
    const button = document.getElementById("changeTextButton");
    const paragraph = document.getElementById("textParagraph");

    // Add click event listener to the button
    button.addEventListener("click", function() {
        // Hint: Use textContent to change the text of the paragraph
        setTimeout(() => paragraph.textContent = 'Changed Text', 500)
    });

    const nums = [1, 2, 3, 4, 5];

    nums.forEach((num, i) => setTimeout(() => document.getElementById(`div${i + 1}`).innerText = num, 1000 * (i + 1)));

    // 1. Snippet 1:
    document.getElementById('btn').addEventListener('click', function() {
        alert('Button clicked!');
    });

    // 2. Snippet 2:
    let myPromise = new Promise((resolve, reject) => {
        let success = true;
        success == true ? resolve('Success!') : reject("Failed!");
    });

    // 3. Snippet 3:
    setTimeout(() => {
        console.log('Timeout completed');
    }, 1000);

    // 4. Snippet 4:
    myPromise.then(response => {
        console.log(response);
    }).catch(error => {
        console.log('Error: ', error);
    });

    // 5. Snippet 5:
    document.querySelector('#myElement').innerText = 'New Content';
    
    // 6. Snippet 6:
    let count = 0;
    let array = [", 1", ", 2", ", 3"]

    array.forEach((item) => {
        console.log(count += item);
    });
    
    // 7. Snippet 7:
    document.getElementById('btn').addEventListener('click', myFunction);

    function myFunction() {
        alert('Button clicked! 2');
    }

    // 8. Snippet 8:
    let myPromise2 = new Promise((resolve, reject) => {
        if (true) {
            resolve('Done!');
        } else {
            reject('Failed!');
        }
    });

    // 9. Snippet 9:
    setTimeout(function() {
        console.log('Delayed message');
    }, 2000);

    // 10. Snippet 10:
    document.getElementById('anotherBtn').addEventListener('click', function() {
        console.log('Another button clicked');
    });

    // 11. Snippet 11:
    myPromise2.then(success => {
        console.log('Success:', success);
    }).catch(err => {
        console.log('Error:', err);
    });

    // 12. Snippet 12:
    document.querySelector('.myClass').addEventListener('mouseover', function() {
        console.log('Mouse over');
    });

    // 13. Snippet 13:
    new Promise((resolv, reject) => {
        reject('This was rejected');
    }).catch(error => {
        console.log(error);
    });

    // 14. Snippet 14:
    let sum = 0;

    [1, 2, 3].forEach((num) => {
        sum += num;
    });
    
    console.log(sum);

    // 15. Snippet 15:
    function callbackExample(callback) {
        callback();
    }
    
    callbackExample(() => {
        console.log('Callback called');
    });

    // 16. Snippet 16:
    [].forEach.call(document.getElementsByTagName('button'), button => button.addEventListener('mouseup', () => {
        console.log('Mouse up on button');
    }));

    // 17. Snippet 17:
    setTimeout(() => {
        console.log('Missing parenthesis');
    }, 1000);

    // 18. Snippet 18:
    [].forEach.call(document.getElementsByClassName('container'), element => {
        element.style.backgroundColor = 'red';
    });

    // 19. Snippet 19:
    new Promise((resolve, reject) => {
        throw 'Error occurred';
    }).then(result => {
        console.log(result);
    }).catch(error => {
        console.log(error);
    });

    // 20. Snippet 20:
    function loadData(callback) {
        callback();
    }

    loadData(() => console.log('Data loaded'));

    // Activity 3
    const myPromise3 = new Promise((resolve, reject) => {
        const success = Math.random() > 0.5; // Randomly decide success or failure
        setTimeout(() => {
            if (success) {
                resolve("Success!"); // Resolve if successful
            } else {
                reject("Error: Operation failed."); // Reject if failed
            }
        }, 2000);
    });
    
    myPromise3.then((message) => {
        console.log(message); // Logs "Success!" if resolved
    }).catch((error) => {
        console.log(error); // Logs "Error: Operation failed." if rejected
    });

    const numberPromise = new Promise((resolve) => {
        resolve(10); // Start with 10
    });
    
    numberPromise.then((number) => {
        return number + 5; // Adds 5, result is passed to the next .then
    }).then((newNumber) => {
        return newNumber * 2; // Multiplies by 2
    }).then((finalResult) => {
        console.log(finalResult); // Logs the final result (e.g., 30)
    });
}