// fetch city name by coordinates --> for header card info

var resultContainer = document.getElementById('#daily'); //display query results
var searchButton = document.getElementById('search-button'); //search button for click

// function getParams() {
//     // Get the search params out of the URL (i.e. `?q=london&format=photo`) and convert it to an array (i.e. ['?q=london', 'format=photo'])
//     var searchParamsArr = document.location.search.split('&');
  
//     // Get the query and format values
//     var query = searchParamsArr[0].split('=').pop();
  
//     searchApi(query);
//   }

  

//     //  var tempContentEl = document.createElement('p');
//     // tempContentEl.innerHTML =
//     //   '<strong>Temp:</strong> ' + data.main.temp + ' F/C';

//     // var windContentEl = document.createElement('p');
//     // windContentEl.innerHTML =
//     //   '<strong>Wind:</strong> ' + data.wind.speed + ' MPH';

//     //   var humidityContentEl = document.createElement('p');
//     // humidityContentEl.innerHTML =
//     //   '<strong>Humidity:</strong> ' + data.main.humidity + ' %';

//     //   cityName.textContent = data.name;
//       // cityTemp.textContent = data.main.temp;
//       // weatherDescription.textContent = data.wind.speed;

//       resultContainer1.append(day1El);
//       resultContainer1.append(tempForecastEl);
//       resultContainer1.append(windForecastEl);
//       resultContainer1.append(humidityForecastEl);


var ApiKey = '7fc2024deafd92ac68f08be8696f17ae';

// // Call 5 day / 3 hour forecast data API
function searchApi(query) {

var requestUrl1 = 'https://api.openweathermap.org/data/2.5/forecast?' + '&q=' + query + '&appid=' + ApiKey;

  fetch(requestUrl1)
    .then(function (response) {
      return response.json();
    })
    .then(function (data)  {
      console.log(data);
    })
  //     printResults(data);

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


    function printResults(data) {
      console.log(data);  //example resultObj / resultObj.title/date/url/ = data (may want to rename as dataObj)
    
      const date = new Date();
        let day = date.getDate();
        let month = date.getMonth() + 1;
        let year = date.getFullYear();
  
        let currentDate = `${day}/${month}/${year}`;
        console.log(currentDate);  
    
  //     // var cityName = document.createElement('h1');
  //     // // resultCard.classList.add('card', 'bg-light', 'text-dark', 'mb-3', 'p-3');
  //     // cityName.textContent = data.main.name;
  //     //  resultContainer.append(cityName);
  
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
    }



    printResults();
  
    // getParams();
  




//let date = new Date().toLocaleDateString("de-DE"); get time in Germany
// console.log(date); // 17.6.2022
//https://saimana.com/list-of-country-locale-code/
