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
  var requestUrl = 
  
  
  'https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=dbc89065a7085f3e04b8795339fe050e';

  fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data)  {
    console.log(data);  
//     {
//       for (var i = 0; i < data.length; i++) {
//         var listItem = document.createElement('li');
//         listItem.textContent = data[i].html_url;
//         repoList.appendChild(listItem);
//       }
//     }
// });
});
    

// searchButton.addEventListener('click', getApi);