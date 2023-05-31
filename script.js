// Array of API URLs to fetch data from
const apiUrls = [
  "https://jsonplaceholder.typicode.com/todos/1",
  "https://jsonplaceholder.typicode.com/todos/2",
  "https://jsonplaceholder.typicode.com/todos/3",
  "https://jsonplaceholder.typicode.com/todos/4",
  "https://jsonplaceholder.typicode.com/todos/5",
  "https://jsonplaceholder.typicode.com/todos/6",
  "https://jsonplaceholder.typicode.com/todos/7",
  "https://jsonplaceholder.typicode.com/todos/8",
  "https://jsonplaceholder.typicode.com/todos/9",
  "https://jsonplaceholder.typicode.com/todos/10",
];

// Function to fetch data from an API URL
async function fetchData(url) {
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

// Function to display the time taken for each method on the webpage
function displayTimeTaken(method, time) {
  const outputElement = document.getElementById(`output-${method}`);
  outputElement.textContent = `${time} ms`;
}

// Function to fetch data using Promise.all and measure the time taken
function fetchWithPromiseAll() {
  const startTime = performance.now();

  Promise.all(apiUrls.map(fetchData))
    .then((results) => {
      const endTime = performance.now();
      const timeTaken = endTime - startTime;
      displayTimeTaken("all", timeTaken.toFixed(2));
      console.log("Promise.all:", results);
    })
    .catch((error) => {
      console.error("Promise.all Error:", error);
    });
}

// Function to fetch data using Promise.any and measure the time taken
function fetchWithPromiseAny() {
  const startTime = performance.now();

  Promise.any(apiUrls.map(fetchData))
    .then((result) => {
      const endTime = performance.now();
      const timeTaken = endTime - startTime;
      displayTimeTaken("any", timeTaken.toFixed(2));
      console.log("Promise.any:", result);
    })
    .catch((error) => {
      console.error("Promise.any Error:", error);
    });
}

// Call the functions to fetch data and display results
fetchWithPromiseAll();
fetchWithPromiseAny();

