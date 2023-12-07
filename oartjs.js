

////////////////////////////////part2 task1/////////////////////////////////////

function calculateSumAndAverage(numbers) {
    let sum = 0;

    for (let i = 0; i < numbers.length; i++) {
      sum += numbers[i];
    }

    let average = sum / numbers.length;

    return { sum, average };
  }

  
  let countOfNumbers = prompt('Enter the count of numbers:');

  countOfNumbers = parseInt(countOfNumbers);

  if (isNaN(countOfNumbers) || countOfNumbers <= 0) {
    alert('Please enter a valid count greater than 0.');
  } else {
    
    let userNumbers = [];

    for (let i = 0; i < countOfNumbers; i++) {
      let userNumber = prompt(`Enter number ${i + 1}:`);
      
      userNumber = parseFloat(userNumber);

      if (isNaN(userNumber)) {
        alert('Invalid input. Please enter a valid number.');
        
        i--;
      } else {
        
        userNumbers.push(userNumber);
      }
    }

    let result = calculateSumAndAverage(userNumbers);

    alert(`Sum: ${result.sum}\nAverage: ${result.average.toFixed(2)}`);

  }


  ////////////////////////////part2 task2/////////////////////////


let contacts = [];

function addContact() {
  let name = prompt("Enter the name of the contact:");
  let phoneNumber = prompt("Enter the phone number:");

  let contact = {
    name: name,
    phoneNumber: phoneNumber
  };

  contacts.push(contact);

  alert("Contact added successfully!");
}

function searchContact() {
  let searchQuery = prompt("Enter the name or phone number to search:");

  let foundContact = contacts.find(contact => {
    return (
      contact.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      contact.phoneNumber.includes(searchQuery)
    );
  });

  if (foundContact) {
    alert(`Contact found:\nName: ${foundContact.name}\nPhone Number: ${foundContact.phoneNumber}`);
  } else {
    alert("Contact not found.");
  }
}


while (true) {
  let operation = prompt("Enter operation (add/search/exit):");

  if (operation === "add") {
    addContact();
  } else if (operation === "search") {
    searchContact();
  } else if (operation === "exit") {
    break; // Exit the loop
  } else {
    alert("Invalid operation. Please enter add, search, or exit.");
  }
}

///////////////////par2 Bonus////////////////////////////////////////////////////

// Area calculator program

// Function to calculate the area of a rectangle
function calculateRectangleArea(length, width) {
  return length * width;
}

// Function to calculate the area of a circle
function calculateCircleArea(radius) {
  const pi = Math.PI;
  return pi * radius * radius;
}

// Function to calculate the area of a triangle
function calculateTriangleArea(base, height) {
  return (base * height) / 2;
}

// Get the name of the shape from the user
let shape = prompt("Enter the name of the shape (rectangle/circle/triangle):").toLowerCase();

// Perform calculations based on the shape
let area;
switch (shape) {
  case "rectangle":
    let length = parseFloat(prompt("Enter the length of the rectangle:"));
    let width = parseFloat(prompt("Enter the width of the rectangle:"));
    area = calculateRectangleArea(length, width);
    break;
  case "circle":
    let radius = parseFloat(prompt("Enter the radius of the circle:"));
    area = calculateCircleArea(radius);
    break;
  case "triangle":
    let base = parseFloat(prompt("Enter the base of the triangle:"));
    let triangleHeight = parseFloat(prompt("Enter the height of the triangle:"));
    area = calculateTriangleArea(base, triangleHeight);
    break;
  default:
    alert("Invalid shape entered. Please choose rectangle, circle, or triangle.");
}

// Display the calculated area to the user
if (!isNaN(area)) {
  alert(`The area of the ${shape} is: ${area.toFixed(2)}`);
} else {
  alert("Invalid dimensions. Please enter valid numerical values.");
}