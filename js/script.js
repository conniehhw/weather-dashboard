
// logic getting city 5 day weather & outputting request
var resultContainer = document.querySelector('#city-result'); //same as line 7 & 8
var searchFormEl = document.querySelector('#search-form-1');


// var query = searchParamsArr[0].split('=').pop(); // user input

// function getParams() {
//   // Get the search params out of the URL (i.e. `?q=london&format=photo`) and convert it to an array (i.e. ['?q=london', 'format=photo'])
//   // var searchParamsArr = document.location.search.split('&'); //pull the items out of the search link

//   //www.facebook.com/profile?test

//   // .pop gets rids of the index

//   // Get the query and format values
//   // var query = searchParamsArr[0].split('=').pop();

//   searchApi(query);
// }

function printResults1(data) {
  console.log(data);  //example resultObj / resultObj.title/date/url/ = data (may want to rename as dataObj)

  const date = new Date();
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();

    let currentDate = `${day}/${month}/${year}`;
    console.log(currentDate);

    // cityName.textContent = data[0].name;
    //   resultContainer.append(cityName, currentDate);

  var cityName = document.createElement('h1');
  // resultCard.classList.add('card', 'bg-light', 'text-dark', 'mb-3', 'p-3');
    cityName.textContent = data.name;

    var tempContentEl = document.createElement('p');
    tempContentEl.innerHTML =
      '<strong>Temp:</strong> ' + data.main.temp + ' F/C';

    var windContentEl = document.createElement('p');
    windContentEl.innerHTML =
      '<strong>Wind:</strong> ' + data.wind.speed + ' MPH';

      var humidityContentEl = document.createElement('p');
    humidityContentEl.innerHTML =
      '<strong>Humidity:</strong> ' + data.main.humidity + ' %';

      cityName.textContent = data.name;
      // cityTemp.textContent = data.main.temp;
      // weatherDescription.textContent = data.wind.speed;

      resultContainer.append(cityName, currentDate);
      resultContainer.append(tempContentEl);
      resultContainer.append(windContentEl);
      resultContainer.append(humidityContentEl);
}

var ApiKey = '7fc2024deafd92ac68f08be8696f17ae';

// Call current weather data API
function searchApi(query) {
  locQueryUrl = 'https://api.openweathermap.org/data/2.5/weather?' + '&q=' + query + '&appid=' + ApiKey; //ln 63 ifstatement js

  // http://api.openweathermap.org/geo/1.0/direct

// 'https://api.openweathermap.org/data/2.5/forecast?lat=44.34&lon=10.99&cnt=3&appid=dbc89065a7085f3e04b8795339fe050e&units=imperial';

// 'https://api.openweathermap.org/data/2.5/forecast?lat=&lon&appid=dbc89065a7085f3e04b8795339fe050e&units=imperial';


  fetch(locQueryUrl)
    .then(function (response) {
      if(!response.ok) {
      throw response.json(); //check what this does
      }
 
      return response.json();
    })
    .then(function (data) { //what is locRes
      // resultTextEl.textContent = data.search.query; //what is .search
      console.log(data);
      printResults1(data);
    })

  //     if(!data.results.length) {
  //       console.log('No results found!');
  //       resultContainer.innerHTML = '<h3>No results found, search again!</h3>';
  //     } else {
  //       resultContainer.textContent = '';
  //       for (var i = 0; i < data.results.length; i++) {
  //         printResults(data.results[i]);
  //     }
  //   }
  // })
      .catch(function (error) {
        console.error(error);
      });
    }

//matches city name from form & displays
  function handleSearchFormSubmit(event) {
    event.preventDefault();

    var searchInputVal = document.querySelector('#search-input').value;
  
    if (!searchInputVal) {
      console.error('You need a search input value!');
      return;
    }
  
    searchApi(searchInputVal);
  }

  searchFormEl.addEventListener('submit', handleSearchFormSubmit); 

  // getParams();

//////////////////////////////////////////// test above

// var APIKey = "dbc89065a7085f3e04b8795339fe050e";
// var searchButton = document.getElementById('search-button');

// var requestUrl = 'https://api.openweathermap.org/data/2.5/forecast?'; API broad
 

// var resultContainer = document.getElementById('city-result'); //display query results
// var searchButton = document.getElementById('search-button'); //search button for click


