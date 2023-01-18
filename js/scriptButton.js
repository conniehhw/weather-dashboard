// Create city button after each search
var historyContainer = document.querySelector('search-history'); 
var searchFormEl = document.querySelector('#search-form-1');
// var newButton = document.querySelector('BUTTON');


// handles history button on click to getItem LocalStor
function handleHistoryBtn(event) {
  event.preventDefault();

  var searchInputVal = document.querySelector('#search-input').value;
  var getObj = JSON.parse(localStorage.getItem(searchInputVal)); //--> move this to appendButton
    console.log(getObj);
};

// creates history button
var searchInputVal = document.querySelector('#search-input').value;
  var myDiv = document.getElementById("GFG");
    var button = document.createElement('BUTTON');
    var text = document.createTextNode(searchInputVal);
    button.appendChild(text); // appending the city/searchInputVal value to the button
    myDiv.appendChild(button); // appending the button to GFG

// function createHistoryBtn () {
//   var searchInputVal = document.querySelector('#search-input').value;
//   var myDiv = document.getElementById("GFG");
//     var button = document.createElement('BUTTON');
//     var text = document.createTextNode(searchInputVal);
//     button.appendChild(text); // appending the city/searchInputVal value to the button
//     // button.appendChild(myDiv);
//     myDiv.appendChild(button); // appending the button to GFG
// };


// Takes value input in search button & creates History button with that value
function handleSearchFormSubmit(event) {
    event.preventDefault();

    var searchInputVal = document.querySelector('#search-input').value;
  
    if (!searchInputVal) {
      console.error('You need a search input value!');
      return;
    }

    var searchInputVal = document.querySelector('#search-input').value;
    var myDiv = document.getElementById("GFG");
      var button = document.createElement('BUTTON');
      var text = document.createTextNode(searchInputVal);
      button.appendChild(text); // appending the city/searchInputVal value to the button
      // button.appendChild(myDiv);
      myDiv.appendChild(button); // appending the button to GFG


    // createHistoryBtn(searchInputVal);
    console.log(searchInputVal);

    // var myDiv = document.getElementById("GFG");
    // var button = document.createElement('BUTTON');
    // var text = document.createTextNode(searchInputVal);
    // button.appendChild(text);
    // myDiv.appendChild(button);
  }

  searchFormEl.addEventListener('submit', handleSearchFormSubmit); //3 executions (click, collect value, append Button)

// handles history button on click
// function handleHistoryBtn(event) {
//     event.preventDefault();

//     var searchInputVal = document.querySelector('#search-input').value;
//     var getObj = JSON.parse(localStorage.getItem(searchInputVal)); //--> move this to appendButton
//       console.log(getObj);
//   };

button.addEventListener('click', handleHistoryBtn); // this is the blank button





//   searchFormEl.addEventListener('submit', addButton); 


// // function addButton() {
// //     var myDiv = document.getElementById("GFG");

// //     var button = document.createElement('BUTTON');

// //     // var text = document.createTextNode("searchInputVal");

// //     // button.appendChild(text);

// //     myDiv.appendChild(button);
// // }

// // searchFormEl.addEventListener('submit', addButton); 

// function addButton() {
//     var myDiv = document.getElementById("GFG");
//     var button = document.createElement('BUTTON');
//     var text = document.createTextNode(searchInputVal);
//     button.appendChild(text);
//     myDiv.appendChild(button);
// }

// function handleSearchFormSubmit(event) {
//     event.preventDefault();

//     var searchInputVal = document.querySelector('#search-input').value;
  
//     if (!searchInputVal) {
//       console.error('You need a search input value!');
//       return;
//     } else { 
//         addButton();
//     }};

//   searchFormEl.addEventListener('submit', handleSearchFormSubmit, addButton); 