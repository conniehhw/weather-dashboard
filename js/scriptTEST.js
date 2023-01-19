// api current weather
var resultContainer = document.querySelector('#current'); //same as line 7 & 8
var searchFormEl = document.querySelector('#search-form-1');

function printResults1(data) {
  // console.log(data);  //example resultObj.title/date/url/ = data (may want to rename as dataObj)

  var date = new Date();
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear(); 

    let currentDate = `${month}/${day}/${year}`;
    console.log(currentDate);

    date.setDate(date.getDate()+1); // getting the 

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

      resultContainer.append(cityName, currentDate);
      resultContainer.append(tempContentEl);
      resultContainer.append(windContentEl);
      resultContainer.append(humidityContentEl);

      var searchInputVal = document.querySelector('#search-input').value;
      var myObj = data;
      //Put object into storage
      localStorage.setItem(searchInputVal, JSON.stringify(myObj)); 

      //Retrieve object from storage
      var getObj = JSON.parse(localStorage.getItem(searchInputVal)); //--> link this to appendButton
      console.log(getObj);
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

    .then(function (data) { 
      console.log(data); // Check API output
      printResults1(data);
    })

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
    createHistoryBtn(searchInputVal);
    console.log(searchInputVal);
  };

// creates history button
function createHistoryBtn () {
    var searchInputVal = document.querySelector('#search-input').value;
    var myDiv = document.getElementById("GFG"); // rename GFG
    var button = document.createElement('BUTTON');
    var text = document.createTextNode(searchInputVal);
    button.appendChild(text); // appending the city/searchInputVal value to the button
    myDiv.appendChild(button); // appending the button to GFG

    function handleHistoryBtn() {
    var searchInputVal = document.querySelector('#search-input').value;
    var getObj = JSON.parse(localStorage.getItem(searchInputVal)); //--> move this to appendButton
      console.log(getObj);
    }

    button.addEventListener('click', handleHistoryBtn);
};

searchFormEl.addEventListener('submit', handleSearchFormSubmit);

// leverage jQuery as cannot write the syntax with replaceChildren()
$("button").click(function() {
  $("#current").empty();
  printResults1();
});
