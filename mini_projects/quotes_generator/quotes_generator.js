// This file for pracitce on promises only

const getRandomQoute = (qoutes) => {
    const randomNumber =  Math.floor(Math.random() * qoutes.length); 
    return qoutes[randomNumber]
}

function displayQuote(quote) {
    const container = document.querySelector('.container');
    container.innerHTML = '';

    const quoteText = document.createElement('q');
    const authorName = document.createElement('span');
    const quoteDiv = document.createElement('div');
    const btn = document.querySelector('.reloadBtn') || document.createElement('button');

    quoteText.innerText = quote.q;
    quoteText.className = 'quoteText';
    authorName.innerText = `-${quote.a}-`; 
    authorName.className = 'authorName';
    
    btn.innerText = 'New Quote';
    btn.className = 'reloadBtn';

    // If the button is already in the DOM, skip appending it again
    if (!document.body.contains(btn)) {
        document.body.appendChild(btn);
    }

    // Update the click handler
    btn.onclick = function() {
        generateQuote(displayQuote);
    };

    // Append elements in one operation
    quoteDiv.appendChild(quoteText);
    quoteDiv.appendChild(document.createElement('br'));
    quoteDiv.appendChild(authorName);
    
    // Create a fragment to minimize reflows
    const fragment = document.createDocumentFragment();
    fragment.appendChild(quoteDiv);
    container.appendChild(fragment);
}

function generateQuote(displayQuote) {
    function getQuotes() {
        return new Promise((resolve, reject) => {
            fetch('https://api.allorigins.win/get?url=' + encodeURIComponent('https://zenquotes.io/api/quotes/'))
                .then(response => response.json())
                .then(data => {
                    resolve(JSON.parse(data.contents)); 
                })
                .catch(error => reject(error))
        })
    }

    getQuotes()  // get 50 quotes
        .then(getRandomQoute)   // then send it to getRandomQoute to return only one quote
        .then(displayQuote)     // display it in html
}

generateQuote(displayQuote);