// // var APIKey = "dbc89065a7085f3e04b8795339fe050e";

// // var city;

// // var queryURL = "https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}";

// // var queryURL1 = "https://api.openweathermap.org/data/2.5/weather?q={city name},{country code}&appid={API key}";

// var queryURL2 = "https://api.openweathermap.org/data/2.5/weather?q=London&appid={API key}";


// var repoList = document.querySelector('ul');
// var searchButton = document.getElementById('search-button');

// function getApi() {
  // replace `octocat` with anyone else's GitHub username
//   var requestUrl = 'https://api.openweathermap.org/data/2.5/forecast?';
  
var resultContainer = document.getElementById('city-result');
var searchButton = document.getElementById('search-button');

searchButton.addEventListener('click', getApi);

function getApi() {

var requestUrl = 'https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=dbc89065a7085f3e04b8795339fe050e&units=imperial';

  fetch(requestUrl)
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

    var tempContentEl = document.createElement('p');
    tempContentEl.innerHTML =
      '<strong>Temp:</strong> ' + data.main.temp + ' F/C';

    var windContentEl = document.createElement('p');
    windContentEl.innerHTML =
      '<strong>Wind Speed:</strong> ' + data.wind.speed + ' MPH';

      var humidityContentEl = document.createElement('p');
    humidityContentEl.innerHTML =
      '<strong>Humidity:</strong> ' + data.main.humidity + ' %';

    cityName.textContent = data.name;
    // cityTemp.textContent = data.main.temp;
    // weatherDescription.textContent = data.wind.speed;

      // resultContainer.append(cityName);
      // resultContainer.append(cityTemp);
      // resultContainer.append(weatherDescription);

      resultContainer.append(cityName, currentDate);
      resultContainer.append(tempContentEl);
      resultContainer.append(windContentEl);
      resultContainer.append(humidityContentEl);
    
});
}
//     {
//       for (var i = 0; i < data.length; i++) {
//         var listItem = document.createElement('li');
//         listItem.textContent = data[i].html_url;
//         repoList.appendChild(listItem);
//       }
//     }
// });

//////////////// API call for 5 day forecast
var resultContainer = document.getElementById('forecast');
searchButton.addEventListener('click', getApi);

function getApi() {

var requestFiveDayUrl =
'https://api.openweathermap.org/data/2.5/forecast?lat=44.34&lon=10.99&cnt=40&appid=9f768ebe1fd823ba79ca13f691dcc877&units=imperial';


  fetch(requestFiveDayUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data)  {
    console.log(data);  
    });
  }
