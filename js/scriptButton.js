// var historyContainer = document.querySelector('#history'); 
// var searchFormEl = document.querySelector('#search-form-1');

function addButton() {
    var myDiv = document.getElementById("GFG");

    var button = document.createElement('BUTTON');

    var text = document.createTextNode("Button");

    button.appendChild(text);

    myDiv.appendChild(button);
}

// function handleSearchFormSubmit(event) {
//     event.preventDefault();

//     var searchInputVal = document.querySelector('#search-input').value;
//         addButton(searchInputVal);
// }

// searchFormEl.addEventListener('submit', addButton); 


