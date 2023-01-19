// api for current weather + 5Day
var resultContainer = document.querySelector('#current'); 
var resultContainer1 = document.querySelector('#daily1'); //display query results
var resultContainer2 = document.querySelector('#daily2'); 
var resultContainer3 = document.querySelector('#daily3'); 
var resultContainer4 = document.querySelector('#daily4'); 
var resultContainer5 = document.querySelector('#daily5'); 
var searchFormEl = document.querySelector('#search-form-1');

///// Prints results from current weather API
function printResults(data) {

  var date = new Date();
  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear(); 

  let currentDate = `${month}/${day}/${year}`;
  console.log(currentDate);

  date.setDate(date.getDate()+1); // what is this for anymore?

  // Create Current Weather Result Container
  var cityName = document.createElement('h1');
      cityName.textContent = data.name;
  var tempContentEl = document.createElement('p');
      tempContentEl.innerHTML = '<strong>Temp:</strong> ' + data.main.temp + ' F/C';
  var windContentEl = document.createElement('p');
      windContentEl.innerHTML = '<strong>Wind:</strong> ' + data.wind.speed + ' MPH';
  var humidityContentEl = document.createElement('p');
      humidityContentEl.innerHTML = '<strong>Humidity:</strong> ' + data.main.humidity + ' %';

    resultContainer.append(cityName, currentDate, tempContentEl, windContentEl, humidityContentEl);
}


////// Prints results from 5 day weather API
function printResults1(data) {
    // Create 5 day weather result daily containers
  var day1El = document.createElement('h5');
      day1El.textContent = data.list[8].dt_txt;
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
      //Put object into localstorage
      var myObj = data;
      localStorage.setItem(searchInputVal, JSON.stringify(myObj)); 
}

////////////////////////////////////

var ApiKey = '7fc2024deafd92ac68f08be8696f17ae';

// Call current weather data API
function searchApi(query) {
  locQueryUrl = 'https://api.openweathermap.org/data/2.5/weather?lat=&lon=' + '&q=' + query + '&appid=' + ApiKey + '&units=imperial'; //ln 63 ifstatement js


  fetch(locQueryUrl)
    .then(function (response) {
      if(!response.ok) {
      throw response.json(); 
      }

      return response.json();
    })

    .then(function (data) { 
      console.log(data); 
      printResults(data);
    })

      .catch(function (error) {
        console.error(error);
      });
    }

    var ApiKey = '7fc2024deafd92ac68f08be8696f17ae';

    // Call 5-daily weather data API
    function searchApi1(query) {
        loc5DayQueryURL = 'https://api.openweathermap.org/data/2.5/forecast?lat=&lon=' + '&q=' + query + '&appid=' + ApiKey + '&units=imperial';
    
        fetch(loc5DayQueryURL)
        .then(function (response) {
            if(!response.ok) {
            throw response.json(); 
            }
       
            return response.json();
          })
          
          .then(function (data) { 
            console.log(data);
            printResults1(data);
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
      
        searchApi(searchInputVal);
        searchApi1(searchInputVal);
        createHistoryBtn(searchInputVal); 
        console.log(searchInputVal);
      };

    function createHistoryBtn () {  // creates & add a new button based on searchform query
        var searchInputVal = document.querySelector('#search-input').value; 
        const newButton = document.createElement("button"); 
        const newContent = document.createTextNode(searchInputVal); 
        newButton.appendChild(newContent);    
        document.body.appendChild(newButton);
    }

        function handleHistoryBtn() { // retrieves API data from localStorage based on city name of new button
            let searchInputVal = document.querySelector("button").value; //incorrect - trying to assign the new value to be read
            var getMyObj = JSON.parse(localStorage.getItem(searchInputVal)); 
            console.log(getMyObj); 
      
        }
    
searchFormEl.addEventListener('submit', handleSearchFormSubmit); // listens for click; reads searchform query, outputs data
$("button").click(function() {
    $("#current").empty();
    $("#daily1").empty();
    $("#daily2").empty();
    $("#daily3").empty();
    $("#daily4").empty();
    $("#daily5").empty();
    printResults();
    printResults1();
  });


// error - newButton is undefined - unable to add event listener to newly created button
newButton.addEventListener('click', handleHistoryBtn);
  $("button").click(function() { 
    $("#daily1").empty();
    $("#daily2").empty();
    $("#daily3").empty();
    $("#daily4").empty();
    $("#daily5").empty();
    printResults();
    printResults1();
  });

  