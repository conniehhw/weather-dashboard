// logic getting current weather
var resultContainer = document.querySelector('#current'); //same as line 7 & 8
var searchFormEl = document.querySelector('#search-form-1');

function printResults1(data) {
  console.log(data);  //example resultObj / resultObj.title/date/url/ = data (may want to rename as dataObj)

  var date = new Date();
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();

    let currentDate = `${month}/${day}/${year}`;
    console.log(currentDate);

    date.setDate(date.getDate()+1);
    console.log(date);

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
  locQueryUrl = 'https://api.openweathermap.org/data/2.5/weather?lat=&lon=' + '&q=' + query + '&appid=' + ApiKey + '&units=imperial'; //ln 63 ifstatement js

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






