const task3Element = document.getElementById('task-3');

// Task One
// Create two new functions: One that takes no parameters and simply shows
// an alert() with some text of your choice and one that
// receives a name as a parameter and then uses alert() to
// output that name.

function showAlert() {
  alert('Showing an Alert')
}

function nameAlert(name) {
  alert(`${name}`)
}

// Task Two
// Call both functions directly from your code.

nameAlert('Bryant')

// Task Three
// Add an event listener to task3Element and attach it to the
// first function (the one without arguments). Click this task thereafter
// to verify whether it works.

task3Element.addEventListener('click', showAlert)

// Task Four
// Add a brand-new function that takes three parameters (three strings,
// give them any names you want) that returns one combined string (where the
// three strings are concatenated).

function joinedStrings (str1, str2, str3) {
  return `${str1} ${str2} ${str3}`
}

// Task Five
// Call that new function directly from your code and
// alert() the result of that function.

let result = joinedStrings('Hello', 'My name is', 'not important')
alert(result)
