// api 5 day weather forecast in daily's box
var resultContainer1 = document.querySelector('#daily1'); //display query results
var resultContainer2 = document.querySelector('#daily2'); //display query results
var resultContainer3 = document.querySelector('#daily3'); //display query results
var resultContainer4 = document.querySelector('#daily4'); //display query results
var resultContainer5 = document.querySelector('#daily5'); //display query results
var searchFormEl = document.querySelector('#search-form-1'); //search button for click
//searchFormEl / #search-form

function printResults(data) {
    // console.log(data); 
    // var date = new Date();
    // date.setDate(date.getDate()+1);
    // console.log(date);

    var day1El = document.createElement('h5');
      day1El.textContent = data.list[8].dt_txt;
    // day1El.textContent = data.weather[8].icon;
    var tempForecastEl = document.createElement('p');
      tempForecastEl.innerHTML = '<strong>Temp:</strong> ' + data.list[8].main.temp + ' F/C';  
    var windForecastEl = document.createElement('p');
      windForecastEl.innerHTML = '<strong>Wind:</strong> ' + data.list[8].wind.speed + ' MPH';  
    var humidityForecastEl = document.createElement('p');
      humidityForecastEl.innerHTML = '<strong>Humidity:</strong> ' + data.list[8].main.humidity + ' %';

    var day2El = document.createElement('h5');
        day2El.textContent = data.list[16].dt_txt;
    var tempForecastEl2 = document.createElement('p');
          tempForecastEl2.innerHTML = '<strong>Temp:</strong> ' + data.list[16].main.temp + ' F/C';  
    var windForecastEl2 = document.createElement('p');
          windForecastEl2.innerHTML = '<strong>Wind:</strong> ' + data.list[16].wind.speed + ' MPH';  
    var humidityForecastEl2 = document.createElement('p');
          humidityForecastEl2.innerHTML = '<strong>Humidity:</strong> ' + data.list[16].main.humidity + ' %';
      
    var day3El = document.createElement('h5');
        day3El.textContent = data.list[24].dt_txt;
    var tempForecastEl3 = document.createElement('p');
        tempForecastEl3.innerHTML = '<strong>Temp:</strong> ' + data.list[24].main.temp + ' F/C';  
    var windForecastEl3 = document.createElement('p');
        windForecastEl3.innerHTML = '<strong>Wind:</strong> ' + data.list[24].wind.speed + ' MPH';  
    var humidityForecastEl3 = document.createElement('p');
        humidityForecastEl3.innerHTML = '<strong>Humidity:</strong> ' + data.list[24].main.humidity + ' %';

    var day4El = document.createElement('h5');
        day4El.textContent = data.list[32].dt_txt;
    var tempForecastEl4 = document.createElement('p');
        tempForecastEl4.innerHTML = '<strong>Temp:</strong> ' + data.list[32].main.temp + ' F/C';  
    var windForecastEl4 = document.createElement('p');
        windForecastEl4.innerHTML = '<strong>Wind:</strong> ' + data.list[32].wind.speed + ' MPH';  
    var humidityForecastEl4 = document.createElement('p');
        humidityForecastEl4.innerHTML = '<strong>Humidity:</strong> ' + data.list[32].main.humidity + ' %';

    var day5El = document.createElement('h5');
        day5El.textContent = data.list[39].dt_txt;
    var tempForecastEl5 = document.createElement('p');
        tempForecastEl5.innerHTML = '<strong>Temp:</strong> ' + data.list[39].main.temp + ' F/C';  
    var windForecastEl5 = document.createElement('p');
        windForecastEl5.innerHTML = '<strong>Wind:</strong> ' + data.list[39].wind.speed + ' MPH';  
    var humidityForecastEl5 = document.createElement('p');
        humidityForecastEl5.innerHTML = '<strong>Humidity:</strong> ' + data.list[39].main.humidity + ' %';

        resultContainer1.append(day1El, tempForecastEl, windForecastEl, humidityForecastEl);
        resultContainer2.append(day2El, tempForecastEl2, windForecastEl2, humidityForecastEl2);
        resultContainer3.append(day3El, tempForecastEl3, windForecastEl3, humidityForecastEl3);
        resultContainer4.append(day4El, tempForecastEl4, windForecastEl4, humidityForecastEl4);
        resultContainer5.append(day5El, tempForecastEl5, windForecastEl5, humidityForecastEl5);

    var searchInputVal = document.querySelector('#search-input').value;
    var myObj = data;
    //Put object into storage
    localStorage.setItem(searchInputVal, JSON.stringify(myObj)); 

    //Retrieve object from storage
    var getObj = JSON.parse(localStorage.getItem(searchInputVal)); //--> link this to appendButton
    console.log(getObj);
}

var ApiKey = '7fc2024deafd92ac68f08be8696f17ae';

// Call 5-daily weather data API
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

    //     if(!data.list.length) {
    //         console.log('No results found!');
    //         resultContainer1.innerHTML = 'No results found, search a different city!';
    //         } else {
    //         resultContainer1.textContent = '';
    //         for (var i = 0; i < data.list.length; i++) {
    //           printResults(data.list[i]);
    //       }
    
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
    console.log(searchInputVal);
};

function handleHistoryBtn() {
  var searchInputVal = document.querySelector('#search-input').value;
  var getObj = JSON.parse(localStorage.getItem(searchInputVal)); //--> move this to appendButton
    console.log(getObj);
    button.addEventListener('click', handleHistoryBtn);
};

// button.addEventListener('click', handleHistoryBtn);

searchFormEl.addEventListener('submit', handleSearchFormSubmit); 

// leverage jQuery as cannot write the syntax with replaceChildren()
$("button").click(function() {
  $("#daily1").empty();
  printResults();
});
//   $("#daily2").empty();
//   printResults();
//   $("#daily3").empty();
//   printResults();
//   $("#daily4").empty();
//   printResults();
//   $("#daily5").empty();
//   printResults();
// });

// const date = new Date();
// let day = date.getDate();
// let month = date.getMonth() + 1;
// let year = date.getFullYear();

// //let date = new Date().toLocaleDateString("de-DE"); get time in Germany
// // console.log(date); // 17.6.2022
// //https://saimana.com/list-of-country-locale-code/
