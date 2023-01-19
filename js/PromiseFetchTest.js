// Promise.all([
// 	fetch('https://jsonplaceholder.typicode.com/posts'),
// 	fetch('https://jsonplaceholder.typicode.com/users')
// ]).then(function (responses) {
// 	// Get a JSON object from each of the responses
// 	return Promise.all(responses.map(function (response) {
// 		return response.json();
// 	}));
// }).then(function (data) {
// 	// Log the data to the console
// 	// You would do something with both sets of data here
// 	console.log(data);
// }).catch(function (error) {
// 	// if there's an error, log it
// 	console.log(error);
// });

// Call current weather data API

var ApiKey = '7fc2024deafd92ac68f08be8696f17ae';
function searchApi(query) {
    locQueryUrl = 'https://api.openweathermap.org/data/2.5/weather?lat=&lon=' + '&q=' + query + '&appid=' + ApiKey + '&units=imperial'; //ln 63 ifstatement js
  
    fetch(locQueryUrl)
      .then(function (response) {
        if(!response.ok) {
        throw response.json(); //check what this does
        }
  
        return response.json();
      })
  
      .then(function (data) { 
        console.log(data); // Check API output
        printResults1(data);
      })
  
        .catch(function (error) {
          console.error(error);
        });
      }

  // Call 5-daily weather data API
  var ApiKey = '7fc2024deafd92ac68f08be8696f17ae';
function searchApi1(query) {
    loc5DayQueryURL = 'https://api.openweathermap.org/data/2.5/forecast?lat=&lon=' + '&q=' + query + '&appid=' + ApiKey + '&units=imperial';

    fetch(loc5DayQueryURL)
    .then(function (response) {
        if(!response.ok) {
        throw response.json(); //check what this does
        }
   
        return response.json();
      })
      
      .then(function (data) { //locRes = data
        // resultTextEl.textContent = data.search.query; //what is .search
        console.log(data);
        printResults(data);
      })
    
      .catch(function (error) {
        console.error(error);
      });
    }

  
