// CS 601 - Assignment 3 --Javascript

// Function to handle button click
function handleButtonClick() {
    // Welcome the visitor with an alert
    alert("Welcome!");
  
    // Prompt the visitor for their name
    var name;
  
    while (true) {
      name = prompt("Please enter your name:");
  
      if (name === null) {
        // Terminate the program if user clicks "Cancel"
        alert("Thank you for using the program!");
        return;
      }
  
      name = name.trim();
  
      if (name !== "") {
        break;
      }
  
      alert("Please enter a valid name.");
    }
  
    // Display the user's name with an alert
    alert("Welcome " + name + "! Click 'OK' to continue.");
  
    // Function to validate number input
    function validateNumberInput(input) {
      return Number.isInteger(input) && input !== "";
    }
  
    // Function to get valid numbers from the user
    function getValidNumbers() {
      var inputNumbers = prompt("Let's add some numbers! Please enter two numbers, separated by a space or comma:");
      // Terminate the program if user clicks "Cancel"
      if (inputNumbers === null) {
              
        return null;
      }
  
      var numsArray = inputNumbers.split(/[ ,]+/);
  
      if (
        numsArray.length !== 2 ||
        !validateNumberInput(parseInt(numsArray[0])) ||
        !validateNumberInput(parseInt(numsArray[1]))
      ) {
        alert("Invalid input. Please enter two valid integers.");
        return getValidNumbers();
      }
  
      var num1 = parseInt(numsArray[0]);
      var num2 = parseInt(numsArray[1]);
  
      return [num1, num2];
    }
  
    // Add a loop to repeat the process
    var continueAdding = true;
  
    while (continueAdding) {
      var numbers = getValidNumbers();
  
      if (numbers === null) {
        // Terminate the program if user clicks "Cancel"
        break;
      }
  
      var num1 = numbers[0];
      var num2 = numbers[1];
  
      // Create a function to add the two visitor entered numbers
      function addNumbers(num1, num2) {
        return num1 + num2;
      }
  
      // Call the addNumbers function and display the result with an alert
      var result = addNumbers(num1, num2);
      alert("The sum of your two numbers is: " + result +"!");
  
      // Add conditional logic to check the result
      if (result > 10) {
        // Alert if the result is greater than 10
        alert("That is a big number.");
      } else {
        // Alert if the result is less than or equal to 10
        alert("That is a small number.");
      }
  
      continueAdding = confirm("Do you want to try again?");
    }
  
    // Thank the visitor for using the program and stop
    alert("Thank you for using the program!");
  }
  
  // Get the button element
  var exerciseButton = document.getElementById("exerciseButton");
  
  // Add event listener to the button
  exerciseButton.addEventListener("click", handleButtonClick);
  