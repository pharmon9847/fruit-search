// Use querySelector to grab the input element named 'fruit'
const input = document.querySelector('#fruit');
// use querySelector to grab the suggestions list
const suggestions = document.querySelector('.suggestions ul');

// the fruit array containing various fruits for the user to choose from
const fruit = [
  'Apple',
  'Apricot',
  'Avocado 🥑',
  'Banana',
  'Bilberry',
  'Blackberry',
  'Blackcurrant',
  'Blueberry',
  'Boysenberry',
  'Currant',
  'Cherry',
  'Coconut',
  'Cranberry',
  'Cucumber',
  'Custard apple',
  'Damson',
  'Date',
  'Dragonfruit',
  'Durian',
  'Elderberry',
  'Feijoa',
  'Fig',
  'Gooseberry',
  'Grape',
  'Raisin',
  'Grapefruit',
  'Guava',
  'Honeyberry',
  'Huckleberry',
  'Jabuticaba',
  'Jackfruit',
  'Jambul',
  'Juniper berry',
  'Kiwifruit',
  'Kumquat',
  'Lemon',
  'Lime',
  'Loquat',
  'Longan',
  'Lychee',
  'Mango',
  'Mangosteen',
  'Marionberry',
  'Melon',
  'Cantaloupe',
  'Honeydew',
  'Watermelon',
  'Miracle fruit',
  'Mulberry',
  'Nectarine',
  'Nance',
  'Olive',
  'Orange',
  'Clementine',
  'Mandarine',
  'Tangerine',
  'Papaya',
  'Passionfruit',
  'Peach',
  'Pear',
  'Persimmon',
  'Plantain',
  'Plum',
  'Pineapple',
  'Pomegranate',
  'Pomelo',
  'Quince',
  'Raspberry',
  'Salmonberry',
  'Rambutan',
  'Redcurrant',
  'Salak',
  'Satsuma',
  'Soursop',
  'Star fruit',
  'Strawberry',
  'Tamarillo',
  'Tamarind',
  'Yuzu',
];

// create search function taking a string as its only parameter
function search(str) {
  // create a variable called 'results' and set it equal to an empty array
  let results = [];
  // use filter method to iterate through fruit array based on the user input
  fruit.filter((value) =>
    // ternary operator which takes the filtered value and sets it all to lowercase,
    // and uses the includes() method to determine if the user input is found in the array
    // if it is (true), push the value into the 'results' array,
    // if it is not (false), set it to an empty string
    value.toLowerCase().includes(str) ? results.push(value) : ''
  );
  // the execution of the ternary operator have now popluated the empty 'results' array
  // this search function will then return the value of the 'results' array
  return results;
}

// create an event handler function called 'searchHandler' to handle the user input
function searchHandler(event) {
  // create variable called 'inputValue' which captures user input from event listener
  // and set the value to lowercase
  let inputValue = event.target.value.toLowerCase();
  // once the value of the user input is captured in the 'inputValue' variable,
  // execute the search() method and capture it in 'results' variable
  let results = search(inputValue);
  // create conditional ternary operator that will show matching suggestions to
  // the user input if true, or will reset the suggestions element if false
  inputValue ? showSuggestions(results) : (suggestions.innerText = '');
}

// create function that displays matching results from the user input
function showSuggestions(results) {
  // clear the current suggestions in suggestion element
  suggestions.innerText = '';
  // use if statement to set up condition where if the results variable has
  // a length greater than zero, then execute a for loop
  if (results.length > 0) {
    // use for loop to to create and populate the suggestions element
    for (let i = 0; i < results.length; i++) {
      // create a new 'li' element
      const newLi = document.createElement('li');
      // set the new 'li' element equal to the text in the results variable
      newLi.innerText = results[i];
      // append the new 'li' to the suggestions element
      suggestions.appendChild(newLi);
    }
  }
}

// create an eventListener function that will capture the suggestion
// that the user clicks on
function useSuggestion(event) {
  // create a variable that will hold the value of the clicked suggestion
  const suggestionValue = event.target.innerText;
  // set the value of the input element to be the clicked-on suggestion
  input.value = suggestionValue;
  // clear the suggestions element after a suggestion is selected
  suggestions.innerText = '';
}

// add event listener to listen for user's keystrokes
// which will then call the 'searchHandler' function
input.addEventListener('keyup', searchHandler);
// add event listener to listen for user's mouse click
// which will then call the 'useSuggestion' function
suggestions.addEventListener('click', useSuggestion);
