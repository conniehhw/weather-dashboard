var historyContainer = document.querySelector('search-history'); 
var searchFormEl = document.querySelector('#search-form-1');

function handleSearchFormSubmit(event) {
    event.preventDefault();

    var searchInputVal = document.querySelector('#search-input').value;
  
    if (!searchInputVal) {
      console.error('You need a search input value!');
      return;
    }
    console.log(searchInputVal);
    
    var myDiv = document.getElementById("GFG");
    var button = document.createElement('BUTTON');
    var text = document.createTextNode(searchInputVal);
    button.appendChild(text);
    myDiv.appendChild(button);   
  }

//   function addButton (event) {
//     event.preventDefault();

//     var myDiv = document.getElementById("GFG");
//     var button = document.createElement('BUTTON');
//     var text = document.createTextNode(searchInputVal);
//     button.appendChild(text);
//     myDiv.appendChild(button);
//   }
  searchFormEl.addEventListener('submit', handleSearchFormSubmit); 
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