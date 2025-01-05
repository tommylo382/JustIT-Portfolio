let controller;

function fetchUserData() {
    controller = new AbortController();
    const signal = controller.signal;

    // Time out after 10s
    setTimeout(() => { controller.abort("Time out"); }, 10000);

    return fetch('https://jsonplaceholder.typicode.com/posts', { signal }).then(handleResponse).catch(handleError);
}

function handleResponse(response) {

    if (!response.ok) {
        // Check for HTTP error statuses
        throw new Error(`Network response was not ok, error code ${response.status} ${response.statusText}`);
    }

    return response.json().then(processUserData);
}

function processUserData(data) {
    data.forEach(logPostTitle);
}

function logPostTitle(post) {
    console.log(`Title: ${post.title}`);
}

function handleError(error) {
    console.log('Failed to fetch data:', error);
}

// Initiate the fetch operation
fetchUserData();

function onLoad() {    
    function fetchAllPost() {
        fetch('https://jsonplaceholder.typicode.com/posts/1/comments').then(response => response.json()).then(displayAllPost).catch(handleError);
    }

    function displayAllPost(posts) {
        const output = document.getElementById('output');
        output.innerHTML = ''; // Clear any existing content

        posts.forEach(post => {
            const userPost = document.createElement('div');

            userPost.innerHTML =
            `<h2>${post.id}: ${post.name}</h2>
            <p>Post id: ${post.postId}</p>
            <p>Email: ${post.email}</p>
            <p>${post.body}</p>
            <hr \\>`;

            output.appendChild(userPost);
        }); 
    }

    function handleError(error) {
        console.log('Error:', error);
    }

    function fetchUser(userId) {
        fetch(`https://jsonplaceholder.typicode.com/users/${userId}`).then(response => response.json()).then(displaySingleUser).catch(handleError);
    }

    function displaySingleUser(user) {
        const output = document.getElementById('output');

        output.innerHTML =
        `<h2>${user.name}</h2>
        <p>Email: ${user.email}</p>
        <p>Address: ${user.address.street}, ${user.address.city}</p>`;
    }

    let switchBtn = document.getElementById("switch")
    switchBtn.addEventListener("click", () => {
        if(switchBtn.innerText == "Show Random User") {
            fetchUser(Math.floor(Math.random() * 10 + 1));
            switchBtn.innerText = "Show All Posts";
        } else {
            fetchAllPost();
            switchBtn.innerText = "Show Random User";
        }
    });
    // Call the function to fetch all posts
    fetchAllPost();
}