const form = document.getElementById("myForm");
const tableBody = document.getElementById("myTable").getElementsByTagName('tbody')[0];

form.onsubmit = function(event) {
  event.preventDefault(); // prevent form submission

  const fname = document.getElementById("fname").value;
  const lname = document.getElementById("lname").value;
  const add = document.getElementById("add").value;
  const pin = document.getElementById("pin").value;
  const gender = document.querySelector("input[name='gen']:checked").value;
  const state = document.getElementById("state").value;
  const country = document.getElementById("count").value;
  const foodChoice = form.querySelectorAll('input[name="choice"]:checked');
    
    if (foodChoice.length < 2) {
      alert('Please select at least 2 foods!');
      return;
    }

    const selectedFoods = [];
    for (let i = 0; i < foodChoice.length; i++) {
      selectedFoods.push(foodChoice[i].value);
    }
  
  // create new row in table
  const newRow = tableBody.insertRow(-1);

  // insert data to cell
  const fnameCell = newRow.insertCell(0);
  fnameCell.appendChild(document.createTextNode(fname));

  const lnameCell = newRow.insertCell(1);
  lnameCell.appendChild(document.createTextNode(lname));

  const addCell = newRow.insertCell(2);
  addCell.appendChild(document.createTextNode(add));

  const pinCell = newRow.insertCell(3);
  pinCell.appendChild(document.createTextNode(pin));

  const genCell = newRow.insertCell(4);
  genCell.appendChild(document.createTextNode(gender));

  const stateCell = newRow.insertCell(5);
  stateCell.appendChild(document.createTextNode(state));

  const countCell = newRow.insertCell(6);
  countCell.appendChild(document.createTextNode(country));

  const choiceCell = newRow.insertCell(7);
  choiceCell.appendChild(document.createTextNode(selectedFoods));

  // // clear input fields
  document.getElementById("myForm").reset();
};

