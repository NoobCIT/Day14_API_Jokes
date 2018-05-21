const URL = 'https://api.icndb.com/jokes/random';

var options = {
  method: 'GET'
};

/*========== Using Fetch Only ==========*/

fetch(URL, options)
  .then(response => response.json())
  .then(data => getFetchJoke(data, '.fetch'))
  .catch(error => {
    console.log('Something went wrong in using fetch...')
  });

function getFetchJoke(data, anchor) {
  let joke = data.value.joke;
  displayJoke(joke, anchor);
}

function displayJoke(joke, anchor) {
  let location = document.querySelector(anchor);
  let heading = document.createElement('H1');
  heading.innerHTML = joke;
  location.appendChild(heading);
}

/*========== Using Promise ==========*/

const jokePromise = new Promise((resolve, reject) => {
  let finished = false;
  setTimeout(function() {
    console.log('do somethings first...');
    finished = true;
    if (finished) resolve(fetch(URL, options));
  }, 3000);
});

jokePromise
  .then(resolve => resolve.json())
  .then(data => getFetchJoke(data, '.promise'))
  .catch(error => {
    console.log('Something went wrong in using promise...')
  })
