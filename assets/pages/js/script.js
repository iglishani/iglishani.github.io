async function print() {
    let quoteDiv = document.getElementById("quote-output");
    let authorDiv = document.getElementById("author-output");
    //fetching data
    const fetchdata = fetch("https://api.themotivate365.com/stoic-quote");
    
    // while waiting for the promise to resolve, run spinner from bootstrap
    quoteDiv.innerHTML = `<div class="spinner-border text-secondary" role="status">
        <span class="sr-only"></span>`;

    // Set a timeout of 5 seconds. This will create a promise that will return an error in 5seconds
    const timeout = new Promise((resolve, reject) => {
        setTimeout(() => reject(new Error('Request timed out')), 5000);
    });
 
    try {
        // Await for the promise to resolve or for the timeout to occur
        // Promis.race() will respond to which of the two resolves faster.
        // If fetchdata resolves, it carrys with the code.
        //If timeout resolves(from above it will resove in 5s)
        //Note that fetchdata will resolve even if doesn't respond with our data requested.
        //A 404 is a valid response. This will measure only API that take more than 5s to respond.
        const response = await Promise.race([fetchdata, timeout]);

        if (response.status === 200) {
            response.json().then(data => {
                quoteDiv.innerText = data.quote;
                authorDiv.innerText = data.author;
            });
        } else {
            quoteDiv.innerHTML = ''; //clear the spinner
            authorDiv.innerText = 'Error: ' + response.status;
        }
    } catch (error) {
        quoteDiv.innerHTML = '';//clear the spinner
        authorDiv.innerText = 'Error: ' + error.message;
    }
}




function importnavbar() {
    fetch('/assets/pages/navbar-template.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('importnavbar').innerHTML = data;
        });
}

function importfooter() {
    fetch('/assets/pages/footer-template.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('importfooter').innerHTML = data;
        });
}



