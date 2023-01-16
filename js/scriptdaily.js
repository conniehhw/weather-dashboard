// logic getting city weather & outputting request
// check output and array data

let currentDate = `${day}/${month}/${year}`;
console.log(currentDate);

cityName.textContent = data[0].name;
  resultContainer.append(cityName, currentDate);

//////////////// API call for 5 day forecast
// var resultContainer1 = document.getElementById('forecast');
// searchButton.addEventListener('click', getApi1);

// function getApi1() {

// var requestFiveDayUrl ='https://api.openweathermap.org/data/2.5/forecast?lat=44.34&lon=10.99&cnt=40&appid=9f768ebe1fd823ba79ca13f691dcc877&units=imperial';

//   fetch(requestFiveDayUrl)
//     .then(function (response) {
//       return response.json();
//     })
//     .then(function (data)  {
//     console.log(data);  
//     })


//   var cityName1 = document.createElement('h1'); //addClass / set Attribute to style to bold?

//   cityName1.textContent = data.name;
//   resultContainer1.append(cityName1);
// }

/////////////////////////////////
var resultContainer1 = document.getElementById('daily');
var searchButton = document.getElementById('search-forecast-button');

searchButton.addEventListener('click', getApi1);


function getApi1() {

var requestForecastUrl ='https://api.openweathermap.org/data/2.5/forecast?lat=51.5098&lon=-0.1180&cnt=40&appid=9f768ebe1fd823ba79ca13f691dcc877&units=imperial';

fetch(requestForecastUrl)
.then(function (response) {
  return response.json();
})
.then(function (data)  {
console.log(data);  

var cityName = document.createElement('h1'); //addClass / set Attribute to style to bold?
const date = new Date();
let day = date.getDate();
let month = date.getMonth() + 1;
let year = date.getFullYear();

//let date = new Date().toLocaleDateString("de-DE"); get time in Germany
// console.log(date); // 17.6.2022
//https://saimana.com/list-of-country-locale-code/

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

  resultContainer1.append(day1El);
  resultContainer1.append(tempForecastEl);
  resultContainer1.append(windForecastEl);
  resultContainer1.append(humidityForecastEl);
});
}

// Handle search by city & queries it
function handleSearchCitySubmit(event) {
event.preventDefault();

var searchInputVal = document.querySelector('#search-input').value;

if (!searchInputVal) {
console.error('You need a search input value!');
return;
}

searchApi(searchInputVal);
}

searchFormEl.addEventListener('submit', handleSearchCitySubmit);

// getParams();


searchButton.addEventListener('click', getApi);

//let date = new Date().toLocaleDateString("de-DE"); get time in Germany
// console.log(date); // 17.6.2022
//https://saimana.com/list-of-country-locale-code/