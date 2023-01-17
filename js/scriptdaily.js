// api 5 day weather forecast in daily box
var resultContainer1 = document.querySelector('#forecast'); //display query results
var searchButton = document.querySelector('#search-form-1'); //search button for click
//searchFormEl / #search-form

function printResults(data) {
    console.log(data); 

  var dailyCard = document.createElement('div');
  dailyCard.classList.add('card', 'bg-light', 'text-dark', 'mb-3', 'p-3');
  
  var dailyBody = document.createElement('div');
  dailyBody.classList.add('card-body');
  dailyCard.append(dailyBody);

    const date = new Date();
    let day = date.getDate();
    let month = date.getMonth();
    let year = date.getFullYear();

    let currentDate = `${day}/${month}/${year}`;
        console.log(currentDate);

    var day1El = document.createElement('h5');
    
    var tempForecastEl = document.createElement('p');
      tempForecastEl.innerHTML =
        '<strong>Temp:</strong> ' + data.list[0].main.temp + ' F/C';
      
    var windForecastEl = document.createElement('p');
      windForecastEl.innerHTML =
        '<strong>Wind:</strong> ' + data.list[0].wind.speed + ' MPH';
      
    var humidityForecastEl = document.createElement('p');
      humidityForecastEl.innerHTML =
        '<strong>Humidity:</strong> ' + data.list[0].main.humidity + ' %';
      
        day1El.textContent = data.list[0].dt_txt;
        console.log();
  
        // resultContainer1.append(day1El);
        // resultContainer1.append(tempForecastEl);
        // resultContainer1.append(windForecastEl);
        // resultContainer1.append(humidityForecastEl)
        
        dailyBody.append(day1El, tempForecastEl, windForecastEl, humidityForecastEl);
        resultContainer1.append(dailyCard);

}

var ApiKey = '7fc2024deafd92ac68f08be8696f17ae';

// Call daily weather data API
function searchApi1(query) {
    loc5DayQueryURL = 'https://api.openweathermap.org/data/2.5/forecast?' + '&q=' + query + '&appid=' + ApiKey;
// &units=imperial';

    fetch(loc5DayQueryURL)
    .then(function (response) {
        if(!response.ok) {
        throw response.json(); //check what this does
        }
   
        return response.json();
      })
      .then(function (data) { //what is locRes
        // resultTextEl.textContent = data.search.query; //what is .search
        console.log(data);
        printResults(data);

        if(!data.list.length) {
            console.log('No results found!');
            resultContainer1.innerHTML = 'No results found, search a different city!';
            } else {
            resultContainer1.textContent = '';
            for (var i = 0; i < data.list.length; i++) {
              printResults(data.list[i]);
          }
        }
      })
      .catch(function (error) {
        console.error(error);
      });
    }

function handleSearchFormSubmit(event) {
    event.preventDefault();
    
    var searchInputVal = document.querySelector('#search-input').value;
      
    if (!searchInputVal) {
        console.error('You need a search input value!');
        return;
    }
      
    searchApi1(searchInputVal);
}
    
searchButton.addEventListener('submit', handleSearchFormSubmit); 

// const date = new Date();
// let day = date.getDate();
// let month = date.getMonth() + 1;
// let year = date.getFullYear();

// //let date = new Date().toLocaleDateString("de-DE"); get time in Germany
// // console.log(date); // 17.6.2022
// //https://saimana.com/list-of-country-locale-code/