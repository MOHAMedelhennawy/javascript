#!/usr/bin/node

// my solution:

function reloadJoke(joke) {
    document.getElementById('joke').innerText = joke;
}

function generateRandomJoke() {
    return new Promise((resolve, reject) => {
        fetch('https://api.chucknorris.io/jokes/random')
            .then(data => data.json())
            .then(joke => resolve(joke.value))
            .catch(error => console.log('Error fetching joke:', error))
    })
}

document.getElementById('loadJokeBtn').onclick = () => {
    generateRandomJoke()
        .then(data => {
            console.log(data)
            reloadJoke(data)
        })
        .catch(_ => {
            reloadJoke('Failed to fetch joke!');
        })
}

// tutorial solution:
// const loadJoke = async () => {
//     try {
//         const jokeFetch = await fetch('https://api.chucknorris.io/jokes/random');

//         const jokeData = await jokeFetch.json();
//         document.querySelector('.joke p').innerText = jokeData.value;
//         console.log(jokeData.value)
//     }

//     catch(error) {
//         console.log(error);
//     }
// }


// document.getElementById('loadJokeBtn').addEventListener('click', loadJoke)